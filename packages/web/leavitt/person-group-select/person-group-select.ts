import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { PeopleGroup as CorePeopleGroup, Person as CorePerson } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';

import '../profile-picture/profile-picture';

import { Debouncer, getSearchTokens } from '../../titanium/helpers/helpers';
import ApiService from '../api-service/api-service';
import Fuse from 'fuse.js';
import { peopleGroupIcons } from './people-group-icons';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';

export type Person = CorePerson & { type: 'Person'; Name: string };
export type PeopleGroup = CorePeopleGroup & { type: 'PeopleGroup' };

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

  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  @property({ reflect: true, type: String }) accessor autocorrect: string = 'off';

  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService: ApiService;

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
    this.loadWhile(all);
    const results = await all;
    const entities = [...(results[0]?.entities ?? []), ...(results[1]?.entities ?? [])];
    const odataCount = (results[0]?.odataCount ?? 0) + (results[1]?.odataCount ?? 0);

    const options = {
      includeScore: true,
      keys: ['Name'],
    };

    const fuse = new Fuse(entities, options as any);
    const fuseResults = fuse
      .search(searchTerm)
      .sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0))
      .slice(0, 15);

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
      if (!error?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error));
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
    const filterParts = ['not IsExpired'];

    try {
      const odataParts = ['top=100', 'count=true', 'select=Name,Id,Description', 'expand=EffectiveMembers(top=0;count=true)'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        filterParts.push(searchTokens.map((token: string) => `contains(tolower(Name), '${token.toLowerCase()}')`).join(' and '));
      }

      odataParts.push(`filter=${filterParts.join(' and ')}`);

      const results = await this.apiService?.getAsync<PeopleGroup>(`${this.groupApiControllerName}?${odataParts.join('&')}`, {
        abortController: this.#abortController,
      });
      results?.entities.forEach((p) => (p.type = 'PeopleGroup'));
      return results;
    } catch (error) {
      if (!error?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error));
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

  // Overloaded base
  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Partial<Person | PeopleGroup>>) {
    return entity.type === 'Person'
      ? html`<profile-picture slot="leading-icon" .fileName=${entity?.ProfilePictureCdnFileName || null} shape="circle" size="24"></profile-picture>`
      : html`<md-icon group slot="leading-icon">${peopleGroupIcons.get(entity['@odata.type'])?.icon ?? 'task_alt'}</md-icon>`;
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
            <md-icon group slot="start">${peopleGroupIcons.get(entity['@odata.type'])?.icon ?? 'task_alt'}</md-icon>
            <span slot="headline">${entity.Name}</span>

            ${Object.keys(entity).some((o) => o === 'EffectiveMembers@odata.count')
              ? html` <span slot="overline"> ${entity['EffectiveMembers@odata.count']} user${entity['EffectiveMembers@odata.count'] === 1 ? '' : 's'} </span>`
              : nothing}
            <span slot="supporting-text">${entity.Description || (peopleGroupIcons.get(entity['@odata.type'])?.displayName ?? 'People group')}</span>
          </md-menu-item>`
        : html``;
  }
}
