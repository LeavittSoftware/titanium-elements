import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { PeopleGroup as CorePeopleGroup, Person as CorePerson } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';

import '../profile-picture/profile-picture';

import { Debouncer, getSearchTokens } from '../../titanium/helpers/helpers';
import ApiService from '../api-service/api-service';
import Fuse, { IFuseOptions } from 'fuse.js';
import { peopleGroupIcons } from './people-group-icons';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';

export type Person = CorePerson & { type: 'Person'; Name: string };

/**
 *  The group fields `leavitt-person-group-select` renders. Every group result is normalized into this shape when it arrives,
 *  whether the endpoint returns `PeopleGroup` entities or a DTO.
 */
export interface PersonGroupSelectGroup {
  Id: number;
  Name: string;
  Description?: string | null;
  /** Derived type name, e.g. `JobRolePeopleGroup`. `PeopleGroup` or empty shows the default icon. */
  Discriminator?: string | null;
  EffectiveMembersCount?: number;
}

export type PeopleGroup = CorePeopleGroup & PersonGroupSelectGroup & { type: 'PeopleGroup' };

/**
 *  Default group query. `filter=` is appended to these parts on each search.
 */
export const defaultPersonGroupSelectGroupODataParts: readonly string[] = Object.freeze([
  'top=100',
  'count=true',
  'select=Name,Id,Description',
  'expand=EffectiveMembers(top=0;count=true)',
]);

/**
 *  Copies a group result and fills `Discriminator` and `EffectiveMembersCount` from the OData annotations
 *  (`@odata.type`, `EffectiveMembers@odata.count`) when the result doesn't carry them. Other fields are kept as they are.
 */
export function toPersonGroupSelectGroup<T extends Partial<PersonGroupSelectGroup>>(group: T): T & Partial<PersonGroupSelectGroup> & { type: 'PeopleGroup' } {
  const annotated = group as T & { '@odata.type'?: unknown; 'EffectiveMembers@odata.count'?: unknown };
  const normalized: T & Partial<PersonGroupSelectGroup> & { type: 'PeopleGroup' } = { ...group, type: 'PeopleGroup' };

  const odataType = annotated['@odata.type'];
  const discriminator = group.Discriminator || (typeof odataType === 'string' ? odataType.split('.').pop() : null);
  if (discriminator) {
    normalized.Discriminator = discriminator;
  }

  const membersCount = typeof group.EffectiveMembersCount === 'number' ? group.EffectiveMembersCount : annotated['EffectiveMembers@odata.count'];
  if (typeof membersCount === 'number') {
    normalized.EffectiveMembersCount = membersCount;
  }
  return normalized;
}

/**
 *  Single select input that searches Leavitt Group users and user groups
 *
 *  @element leavitt-person-select
 *
 */
@customElement('leavitt-person-group-select')
export class LeavittPersonGroupSelect extends TitaniumSingleSelectBase<Partial<Partial<Person | PeopleGroup>>> {
  @property({ type: String }) accessor label: string = 'Person or group';

  @property({ type: String }) accessor placeholder: string = 'Search for a person or group';

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor peopleApiControllerName: string = 'People';

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor groupApiControllerName: string = 'PeopleGroups';

  /**
   *  OData query parts for the group search, without `filter=`. The search filter (`groupFilterParts` plus the name tokens)
   *  is appended as `filter=`. Defaults to `defaultPersonGroupSelectGroupODataParts`, which suits `PeopleGroup` entity endpoints.
   *  An endpoint that returns a DTO with the count projected in passes e.g.
   *  `['top=100', 'count=true', 'select=Id,Name,Description,Discriminator,EffectiveMembersCount']`.
   */
  @property({ attribute: false }) accessor groupODataParts: string[] = [...defaultPersonGroupSelectGroupODataParts];

  /**
   *  Filter clauses always applied to the group search, joined with `and` ahead of the name search.
   *  Defaults to `['not IsExpired']`. Pass `[]` for an endpoint whose result type has no `IsExpired` (filter expired groups server-side).
   */
  @property({ attribute: false }) accessor groupFilterParts: string[] = ['not IsExpired'];

  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService!: ApiService;

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();

  searchTermToOData(searchTerm: string): string | null {
    const searchTokens = getSearchTokens(searchTerm);
    if (searchTokens.length < 1) {
      return null;
    }
    return searchTokens.map((token: string) => `contains(tolower(Name), '${token.toLowerCase()}')`).join(' and ');
  }

  async #doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }

    this.#abortController.abort();
    this.#abortController = new AbortController();

    const all = Promise.all([this.#doPersonSearch(searchTerm), this.#doGroupSearch(searchTerm)]);
    this.trackLoadingPromise(all);
    const results = await all;
    const entities = [...(results[0]?.entities ?? []), ...(results[1]?.entities ?? [])];
    const odataCount = (results[0]?.odataCount ?? 0) + (results[1]?.odataCount ?? 0);

    const options = {
      includeScore: true,
      ignoreLocation: true,
      shouldSort: true,
      keys: ['Name'],
    } satisfies IFuseOptions<Person | PeopleGroup>;

    const fuse = new Fuse(entities, options as any);
    const fuseResults = fuse.search(searchTerm).slice(0, 20);

    this.showSuggestions(fuseResults.map((o) => o.item) ?? [], odataCount ?? 0);
  }

  /**
   * @ignore
   */
  async #doPersonSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

    try {
      const odataParts = ['top=100', 'count=true', 'compute=FullName as Name', 'select=Name,Id,CompanyName,ProfilePictureCdnFileName'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `contains(tolower(Name), '${token.toLowerCase()}')`).join(' and ');
        odataParts.push(`filter=${searchFilter}`);
      }
      const results = await this.apiService?.getAsync<Person>(`${this.peopleApiControllerName}?${odataParts.join('&')}`, {
        abortController: this.#abortController,
      });
      results?.entities.forEach((p) => (p.type = 'Person'));
      return results;
    } catch (error) {
      const err = error as Partial<HttpError> & { name?: string; message?: string };
      if (err?.name !== 'AbortError' && !err?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
      }
    }
    return null;
  }

  /**
   * @ignore
   */
  async #doGroupSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }
    const filterParts = [...this.groupFilterParts];

    try {
      const odataParts = [...this.groupODataParts];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        filterParts.push(searchTokens.map((token: string) => `contains(tolower(Name), '${token.toLowerCase()}')`).join(' and '));
      }

      if (filterParts.length > 0) {
        odataParts.push(`filter=${filterParts.join(' and ')}`);
      }

      const results = await this.apiService?.getAsync<PeopleGroup>(`${this.groupApiControllerName}?${odataParts.join('&')}`, {
        abortController: this.#abortController,
      });
      results?.entities.forEach((group, index) => (results.entities[index] = toPersonGroupSelectGroup(group)));
      return results;
    } catch (error) {
      const err = error as Partial<HttpError> & { name?: string; message?: string };
      if (err?.name !== 'AbortError' && !err?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
      }
    }
    return null;
  }

  static styles = [
    ...TitaniumSingleSelectBase.styles,
    css`
      md-menu-item md-icon[group] {
        width: 40px;
        height: 40px;
        font-size: 40px;
      }

      md-icon[group] {
        color: var(--md-sys-color-primary);
      }
    `,
  ];

  #groupIcon(discriminator: string | null | undefined) {
    return discriminator && discriminator !== 'PeopleGroup' ? peopleGroupIcons.get(`#lg.net.core.DataModel.Core.${discriminator}`) : undefined;
  }

  // Overloaded base
  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Partial<Person | PeopleGroup>>) {
    if (entity.type === 'Person') {
      return html`<profile-picture slot="leading-icon" .fileName=${entity?.ProfilePictureCdnFileName || null} shape="circle" size="24"></profile-picture>`;
    }
    // A pre-selected group set by the site hasn't been through the search, so normalize it here too.
    const group = toPersonGroupSelectGroup(entity as Partial<PeopleGroup>);
    return html`<md-icon group slot="leading-icon">${this.#groupIcon(group.Discriminator)?.icon ?? 'task_alt'}</md-icon>`;
  }

  protected override renderSuggestion(entity: Partial<Partial<Person | PeopleGroup>>) {
    return entity.type === 'Person'
      ? html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
          <profile-picture slot="start" .fileName=${entity?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${entity.Name}</span>
          <span slot="supporting-text">${entity.CompanyName}</span>
        </md-menu-item>`
      : entity.type === 'PeopleGroup'
        ? html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
            <md-icon group slot="start">${this.#groupIcon(entity.Discriminator)?.icon ?? 'task_alt'}</md-icon>
            <span slot="headline">${entity.Name}</span>

            ${
              typeof entity.EffectiveMembersCount === 'number'
                ? html` <span slot="overline"> ${entity.EffectiveMembersCount} user${entity.EffectiveMembersCount === 1 ? '' : 's'} </span>`
                : nothing
            }
            <span slot="supporting-text">${entity.Description || (this.#groupIcon(entity.Discriminator)?.displayName ?? 'People group')}</span>
          </md-menu-item>`
        : html``;
  }
}
