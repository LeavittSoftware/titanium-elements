import { PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Person } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import Fuse from 'fuse.js';

import '../profile-picture/profile-picture';

import { Debouncer, getSearchTokens } from '../../titanium/helpers/helpers';
import ApiService from '../api-service/api-service';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';

/**
 *  Single select input that searches Leavitt Group users
 *
 *  @element leavitt-person-select
 *
 */
@customElement('leavitt-person-select')
export class LeavittPersonSelect extends TitaniumSingleSelectBase<Partial<Person>> {
  @property({ type: String }) accessor label: string = 'Person';

  @property({ type: String }) accessor placeholder: string = 'Search for a person';

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor apiControllerName: string = 'People';

  @property({ type: String }) accessor pathToSelectedText: string = 'FullName';

  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService: ApiService;

  /**
   *  Odata parts for the Person API call
   */
  @property({ type: Array }) accessor odataParts: Array<string> = [
    'top=15',
    'orderby=FullName',
    'select=FullName,CompanyName,Id,ProfilePictureCdnFileName',
    'count=true',
  ];

  /**
   *  Enables preloading of people for the default suggestion list. Only enable if you are searching a smaller subset of people.
   */
  @property({ type: Boolean, attribute: 'enable-people-preloading' }) accessor enablePeoplePreloading: boolean = false;

  @property({ type: String, attribute: 'search-type' }) accessor searchType: 'local' | 'remote' = 'remote';

  @property({ type: Array }) accessor people: Array<Partial<Person>> = [];

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  @property({ type: Object }) accessor renderMenuItemContentTemplate = (person: Partial<Person>) =>
    html`<md-menu-item .item=${person}>
      <profile-picture slot="start" .fileName=${person?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${person.FullName}</span>
      <span slot="supporting-text">${person.CompanyName}</span>
    </md-menu-item>`;

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();

  async firstUpdated() {
    if (this.enablePeoplePreloading && !this.people.length && this.apiService) {
      this.reloadPeople();
    }
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('people') && this.people) {
      this.defaultSuggestions = this.people;
    }
  }

  searchTermToOData(searchTerm: string): string | null {
    const searchTokens = getSearchTokens(searchTerm);
    if (searchTokens.length < 1) {
      return null;
    }
    return searchTokens.map((token: string) => `contains(tolower(FullName), '${token.toLowerCase()}')`).join(' and ');
  }

  async reloadPeople() {
    this.people = await this.#getPeople();
  }

  async #getPeople() {
    const odataParts = this.odataParts.filter((o) => !o.startsWith('top='));

    try {
      const get = this.apiService?.getAsync<Partial<Person>>(`${this.apiControllerName}?${odataParts.join('&')}`);
      const result = await get;
      return result?.toList() ?? [];
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return [];
  }

  async #doSearch(searchTerm: string) {
    this.#abortController.abort();
    this.#abortController = new AbortController();

    if (!searchTerm) {
      return;
    }

    if (this.searchType === 'local') {
      const options = {
        includeScore: true,
        keys: ['FullName'],
        ignoreLocation: true,
        shouldSort: true,
        threshold: 0.3,
      };

      if (this.searchTerm) {
        const fuse = new Fuse(this.people, options as any);
        const fuseResults = fuse.search(searchTerm);
        this.showSuggestions(fuseResults.map((o) => o.item).slice(0, 15), fuseResults.length);
      }
    } else {
      try {
        const searchOData = this.searchTermToOData(searchTerm);
        const oDataParts = structuredClone(this.odataParts);
        if (searchOData) {
          const existingFilterIndex = oDataParts.findIndex((o) => o.startsWith('filter=') || o.startsWith('$filter='));
          if (existingFilterIndex > -1) {
            oDataParts[existingFilterIndex] = [oDataParts[existingFilterIndex], searchOData].join(' and ');
          } else {
            oDataParts.push(`filter=${searchOData}`);
          }
        }

        const get = this.apiService.getAsync<Person>(`${this.apiControllerName}?${oDataParts.join('&')}`, { abortController: this.#abortController });
        this.loadWhile(get);

        const result = await get;
        this.showSuggestions(result?.entities ?? [], result?.odataCount ?? 0);
      } catch (error) {
        if (!error?.message?.includes('Abort error')) {
          this.dispatchEvent(new ShowSnackbarEvent(error));
        }
      }
    }
  }

  // Overloaded base
  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Person>) {
    return html` <profile-picture slot="leading-icon" .fileName=${entity?.ProfilePictureCdnFileName || null} shape="circle" size="24"></profile-picture>`;
  }

  protected override renderSuggestion(person: Partial<Person>) {
    return this.renderMenuItemContentTemplate(person);
  }
}
