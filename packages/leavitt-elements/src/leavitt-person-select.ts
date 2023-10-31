/* eslint-disable @typescript-eslint/no-unused-vars */
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Person } from '@leavittsoftware/lg-core-typescript';
import { LeavittSingleSelectBase } from './leavitt-single-select-base';

import '@leavittsoftware/profile-picture';

import { Debouncer, getSearchTokens } from '@leavittsoftware/titanium-helpers';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

/**
 *  Single select input that searches Leavitt Group users
 *
 *  @element leavitt-person-select
 *
 */
@customElement('leavitt-person-select')
export class LeavittPersonSelect extends LeavittSingleSelectBase<Partial<Person>> {
  @property({ type: String }) accessor label: string = 'Person';

  @property({ type: String }) accessor placeholder: string = 'Search for a person';

  @property({ type: String }) accessor pathToSelectedText: string = 'FullName';
  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService;

  /**
   *  Odata parts for the Person API call
   */
  @property({ type: Array }) odataParts: Array<string> = [
    'top=15',
    'orderby=FullName',
    'select=FullName,CompanyName,Id,ProfilePictureCdnFileName',
    'count=true',
  ];

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) apiControllerName: string = 'People';

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();

  searchTermToOData(searchTerm: string): string | null {
    const searchTokens = getSearchTokens(searchTerm);
    if (searchTokens.length < 1) {
      return null;
    }
    return searchTokens.map((token: string) => `contains(tolower(FullName), '${token.toLowerCase()}')`).join(' and ');
  }

  async #doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.#abortController.abort();
    this.#abortController = new AbortController();
    try {
      const searchOData = this.searchTermToOData(searchTerm);
      const oDataParts = structuredClone(this.odataParts);
      if (searchOData) {
        const existingFilterIndex = oDataParts.findIndex(o => o.startsWith('filter=') || o.startsWith('$filter='));
        if (existingFilterIndex > -1) {
          oDataParts[existingFilterIndex] = [oDataParts[existingFilterIndex], searchOData].join(' and ');
        } else {
          oDataParts.push(`filter=${searchOData}`);
        }
      }

      const get = this.apiService.getAsync<Person>(`${this.apiControllerName}?${oDataParts.join('&')}`, { abortController: this.#abortController });
      this.loadWhile(get);
      const result = await get;
      this.suggestions = result?.entities ?? [];
      this.count = result?.odataCount ?? 0;
      return;
    } catch (error) {
      if (!error?.message?.includes('Abort error')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    this.suggestions = [];
    this.count = 0;
  }

  // Overloaded base

  protected onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected renderSelectedLeadingSlot(entity: Partial<Person>) {
    return html` <profile-picture slot="leading-icon" .fileName=${entity?.ProfilePictureCdnFileName || null} shape="circle" size="24"></profile-picture>`;
  }

  protected renderSuggestion(person: Partial<Person>) {
    return html`<md-menu-item ?selected=${this.selected?.Id === person.Id} .companyId=${person.Id}>
      <profile-picture slot="start" .fileName=${person?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${person.FullName}</span>
      <span slot="supporting-text">${person.CompanyName}</span>
    </md-menu-item>`;
  }
}
