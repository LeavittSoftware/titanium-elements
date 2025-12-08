import { css, html, PropertyValues } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@material/web/icon/icon';
import '@material/web/textfield/outlined-text-field';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import ApiService from '../api-service/api-service';
import Fuse from 'fuse.js';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';

import { Debouncer } from '../../titanium/helpers/debouncer';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { getCompanyMarkUrl } from '@leavittsoftware/web/titanium/helpers/get-company-mark-url';

/**
 *  Single select input that searches Leavitt Group companies
 *
 *  @element leavitt-company-select
 *
 *  @fires selected - Fired when selection is made or cleared
 *
 */
@customElement('leavitt-company-select')
export class LeavittCompanySelect extends TitaniumSingleSelectBase<Partial<Company>> {
  @property({ type: String }) accessor label: string = 'Company';

  @property({ type: String }) accessor placeholder: string = 'Search for a company';

  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  @property({ type: Array }) accessor companies: Array<Partial<Company>> = [];

  /**
   *  Required
   */
  @property({ attribute: false }) accessor apiService: ApiService;

  /**
   *  Disables automatic loading of companies on firstUpdated
   */
  @property({ type: Boolean }) accessor disableAutoLoad: boolean = false;

  /**
   *  Odata parts for the Company API call
   */
  @property({ type: Array }) accessor odataParts: Array<string> = ['orderby=Name', 'select=Name,ShortName,MarkUrl,DarkMarkUrl,Id'];

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor apiControllerName: string = 'Companies';

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  @property({ type: Object }) accessor renderMenuItemContentTemplate = (company: Partial<Company>) =>
    html`<md-menu-item .item=${company}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${company.Name}</span>
      <span slot="supporting-text">${company.ShortName || '-'}</span>
      <img loading="lazy" company-mark slot="start" src=${getCompanyMarkUrl(company, this.themePreference)} />
    </md-menu-item>`;

  async firstUpdated() {
    if (!this.disableAutoLoad && !this.companies.length && this.apiService) {
      this.#reloadCompanies();
    }
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('companies') && this.companies) {
      this.defaultSuggestions = this.companies;
    }
  }

  /**
   *  Force the list of companies to reload from remote
   */
  async reloadCompanies() {
    if (!this.disableAutoLoad) {
      console.warn('leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad');
    }
    await this.#reloadCompanies();
  }

  async #reloadCompanies() {
    this.companies = await this.#getCompanies();
    this.selected = this.companies.find((o) => o.Id === this.selected?.Id) ?? null;
  }

  async #getCompanies() {
    try {
      const get = this.apiService?.getAsync<Partial<Company>>(`${this.apiControllerName}?${this.odataParts.join('&')}`);
      this.loadWhile(get);
      const result = await get;
      return result?.toList() ?? [];
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return [];
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

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();

  async #doSearch(searchTerm: string) {
    this.#abortController.abort();
    this.#abortController = new AbortController();

    const options = {
      includeScore: true,
      keys: ['Name', 'ShortName'],
      shouldSort: true,
      ignoreLocation: true,
      threshold: 0.3,
    };

    if (this.searchTerm) {
      const fuse = new Fuse(this.companies, options as any);
      const fuseResults = fuse.search(searchTerm);
      this.showSuggestions(fuseResults.map((o) => o.item).slice(0, 15), fuseResults.length);
    }
  }

  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: Partial<Company>) {
    return html` <img leading slot="leading-icon" src=${getCompanyMarkUrl(entity, this.themePreference)} />`;
  }

  protected override renderSuggestion(company: Partial<Company>) {
    return this.renderMenuItemContentTemplate(company);
  }
}
