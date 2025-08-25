import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Company as CoreCompany, Person as CorePerson } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';

import '../profile-picture/profile-picture';

import { Debouncer, getSearchTokens } from '../../titanium/helpers/helpers';
import ApiService from '../api-service/api-service';
import Fuse from 'fuse.js';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';

export type Person = CorePerson & { type: 'Person'; Name: string };
export type Company = CoreCompany & { type: 'Company' };

/**
 *  Single select input that searches Leavitt users and companies
 *
 *  @element leavitt-person-select
 *
 */
@customElement('leavitt-person-company-select')
export class LeavittPersonCompanySelect extends TitaniumSingleSelectBase<Partial<Partial<Person | Company>>> {
  @property({ type: String }) accessor label: string = 'Person or company';

  @property({ type: String }) accessor placeholder: string = 'Search for a person or company';

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor peopleApiControllerName: string = 'People';

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor companyApiControllerName: string = 'Companies';

  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService: ApiService;

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

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

    const all = Promise.all([this.#doPersonSearch(searchTerm), this.#doCompanySearch(searchTerm)]);
    this.loadWhile(all);
    const results = await all;
    const entities = [...(results[0]?.entities ?? []), ...(results[1]?.entities ?? [])];
    const odataCount = (results[0]?.odataCount ?? 0) + (results[1]?.odataCount ?? 0);

    const options = {
      includeScore: true,
      keys: ['Name'],
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.3,
    };

    const fuse = new Fuse(entities, options as any);
    const fuseResults = fuse.search(searchTerm);

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
  async #doCompanySearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

    try {
      const odataParts = ['top=100', 'count=true', 'select=Name,Shortname,MarkUrl,Id'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(contains(Name, '${token}') OR (contains(Shortname, '${token}')))`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      const results = await this.apiService?.getAsync<Company>(`Companies?${odataParts.join('&')}`, { abortController: this.#abortController });
      results?.entities.forEach((p) => (p.type = 'Company'));
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
      img[company-mark] {
        width: 40px;
        height: 40px;
      }
    `,
  ];

  // Overloaded base
  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Partial<Person | Company>>) {
    return entity.type === 'Person'
      ? html`<profile-picture slot="leading-icon" .fileName=${entity?.ProfilePictureCdnFileName || null} shape="circle" size="24"></profile-picture>`
      : entity.type === 'Company'
        ? html`<img leading slot="leading-icon" src=${entity.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />`
        : html``;
  }

  protected override renderSuggestion(entity: Partial<Partial<Person | Company>>) {
    return entity.type === 'Person'
      ? html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
          <profile-picture slot="start" .fileName=${entity?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
          <span slot="headline">${entity.Name}</span>
          <span slot="supporting-text">${entity.CompanyName}</span>
        </md-menu-item>`
      : entity.type === 'Company'
        ? html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
            <slot name="trailing-icon" slot="trailing-icon"></slot>
            <span slot="headline">${entity.Name}</span>
            <span slot="supporting-text">${entity.ShortName || '-'}</span>
            <img loading="lazy" company-mark slot="start" src=${entity.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />
          </md-menu-item>`
        : html``;
  }
}
