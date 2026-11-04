import { PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Person } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import Fuse from 'fuse.js';

import '../profile-picture/profile-picture';

import { Debouncer, getSearchTokens } from '../../titanium/helpers/helpers';
import ApiService from '../api-service/api-service';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';

/**
 *  Passed to `renderMenuItemContentTemplate` alongside each person.
 */
export type PersonSuggestionContext = {
  /**
   *  Another person in the visible list has the same full name.
   */
  hasDuplicateName: boolean;
};

/**
 *  Second line of a person suggestion: the company, plus the job title when another visible
 *  person has the same name so the two can be told apart.
 */
export function getPersonSupportingText(person: Partial<Person>, context: PersonSuggestionContext) {
  if (!context.hasDuplicateName) {
    return person.CompanyName ?? '';
  }

  return [person.CompanyName, person.JobTitle].filter(Boolean).join(' · ');
}

const normalizeName = (name: string | null | undefined) => (name ?? '').trim().toLowerCase();

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
  @property({ attribute: false }) accessor apiService!: ApiService;

  /**
   *  Odata parts for the Person API call
   */
  @property({ type: Array }) accessor odataParts: Array<string> = [
    'top=15',
    'orderby=FullName',
    'select=FullName,CompanyName,JobTitle,Id,ProfilePictureCdnFileName',
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

  /**
   *  Renders a suggestion. The second argument says whether another visible person has the same
   *  name; use `getPersonSupportingText()` or your own fields to tell them apart.
   */
  @property({ type: Object }) accessor renderMenuItemContentTemplate = (
    person: Partial<Person>,
    context: PersonSuggestionContext = { hasDuplicateName: false }
  ) =>
    html`<md-menu-item .item=${person}>
      <profile-picture slot="start" .fileName=${person?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
      <span slot="headline">${person.FullName}</span>
      <span slot="supporting-text">${getPersonSupportingText(person, context)}</span>
    </md-menu-item>`;

  /**
   *  Normalized names that appear more than once in the visible suggestions.
   */
  #duplicateNames = new Set<string>();

  willUpdate(changed: PropertyValues<this>) {
    super.willUpdate(changed);
    const changedProperties = changed as Map<string, unknown>;
    if (changedProperties.has('suggestions')) {
      const seen = new Set<string>();
      this.#duplicateNames = new Set<string>();
      for (const person of this.suggestions) {
        const name = normalizeName(person.FullName);
        if (!name) {
          continue;
        }
        if (seen.has(name)) {
          this.#duplicateNames.add(name);
        }
        seen.add(name);
      }
    }
  }

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
      this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
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
        this.trackLoadingPromise(get);

        const result = await get;
        this.showSuggestions(result?.entities ?? [], result?.odataCount ?? 0);
      } catch (error) {
        const err = error as Partial<HttpError> & { name?: string; message?: string };
        if (err?.name !== 'AbortError' && !err?.message?.includes('Abort error')) {
          this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
        }
      }
    }
  }

  // Overloaded base
  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Person>) {
    return html` <profile-picture
      slot="leading-icon"
      .fileName=${entity?.ProfilePictureCdnFileName || null}
      shape="circle"
      size=${this.large ? '48' : '24'}
    ></profile-picture>`;
  }

  protected override renderSuggestion(person: Partial<Person>) {
    return this.renderMenuItemContentTemplate(person, { hasDuplicateName: this.#duplicateNames.has(normalizeName(person.FullName)) });
  }
}
