import { css, html, PropertyValues } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@material/web/icon/icon';
import '@material/web/textfield/outlined-text-field';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/snackbar';

import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import Fuse from 'fuse.js';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';

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
  @property({ type: Array }) accessor odataParts: Array<string> = ['orderby=Name', 'select=Name,ShortName,MarkUrl,Id'];

  /**
   *  Set the name of the API controller to use
   */
  @property({ type: String }) accessor apiControllerName: string = 'Companies';

  async firstUpdated() {
    if (!this.disableAutoLoad && !this.companies.length && this.apiService) {
      this.#reloadCompanies();
    }
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('companies') && this.companies) {
      this.suggestions = this.companies;
    }
  }

  /**
   *  Force the list of companies to reload from remote
   */
  async reloadCompanies() {
    if (!this.disableAutoLoad) {
      console.warn('leavitt-company-select reloadCompanies method has been called manually without setting disableAutoLoad');
    }
    this.#reloadCompanies();
  }

  async #reloadCompanies() {
    this.companies = await this.#getCompanies();
    this.selected = this.companies.find(o => o.Id === this.selected?.Id) ?? null;
  }

  async #getCompanies() {
    try {
      const get = this.apiService?.getAsync<Partial<Company>>(`${this.apiControllerName}?${this.odataParts.join('&')}`);
      const result = await get;
      return result?.toList() ?? [];
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
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

  protected override onInputChanged(searchTerm: string) {
    const options = {
      includeScore: true,
      keys: ['Name', 'ShortName'],
      shouldSort: true,
      threshold: 0.3,
    };

    if (this.searchTerm) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fuse = new Fuse(this.companies, options as any);
      const fuseResults = fuse.search(searchTerm);
      this.suggestions = fuseResults.map(o => o.item);
    } else {
      this.suggestions = this.companies;
    }
    this.count = this.suggestions.length;
  }

  protected override renderSelectedLeadingSlot(entity: Partial<Company>) {
    return html` <img leading slot="leading-icon" src=${entity.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />`;
  }

  protected override renderSuggestion(company: Partial<Company>) {
    return html`<md-menu-item .item=${company} ?selected=${this.selected?.Id === company.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${company.Name}</span>
      <span slot="supporting-text">${company.ShortName || '-'}</span>
      <img loading="lazy" company-mark slot="start" src=${company.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />
    </md-menu-item>`;
  }
}
