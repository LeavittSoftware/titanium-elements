import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import '@material/web/icon/icon';
import '@material/web/textfield/outlined-text-field';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { DOMEvent } from './dom-event';
import Fuse from 'fuse.js';
import { CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { LeavittCompanySelectSelectedEvent } from './leavitt-company-select-selected-event';
import { Menu } from '@material/web/menu/internal/menu';

/**
 *  Single select input that searches Leavitt Group companies
 *
 *  @element leavitt-company-select
 *
 *  @fires selected - Fired when selection is made or cleared
 *
 */
@customElement('leavitt-company-select')
export class LeavittCompanySelect extends LitElement {
  @state() protected searchTerm: string;
  @state() protected suggestions: Array<Partial<Company>> = [];
  @query('md-menu') protected menu: Menu | null;
  @query('md-outlined-text-field') protected textfield: MdOutlinedTextField | null;

  @property({ type: Array }) companies: Array<Partial<Company>> = [];

  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService;

  /**
   *  Disables automatic loading of companies on firstUpdated
   */
  @property({ type: Boolean }) disableAutoLoad: boolean = false;

  /**
   *  Odata parts for the Company API call
   */
  @property({ type: Array }) odataParts: Array<string> = ['orderby=Name', 'select=Name,ShortName,MarkUrl,Id'];

  /**
   *  Path used to get companies from API
   */
  @property({ type: String }) getPath: string = 'Companies';

  /**
   *  The company object selected by the user.
   */
  @property({ type: Object }) selected: Partial<Company> | null = null;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Company';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Search for a company';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if input is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

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

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('companies') && this.companies) {
      this.suggestions = this.companies;
    }
  }

  async firstUpdated() {
    if (!this.disableAutoLoad && !this.companies.length && this.apiService) {
      this.#reloadCompanies();
    }

    if (this.textfield) {
      const originalCheckValidity = this.textfield?.checkValidity;
      this.textfield.checkValidity = () => !!this.selected && originalCheckValidity.bind(this.textfield);
    }
  }

  async #getCompanies() {
    try {
      const get = this.apiService?.getAsync<Partial<Company>>(`${this.getPath}?${this.odataParts.join('&')}`);
      const result = await get;
      return result?.toList() ?? [];
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
    return [];
  }

  setCustomValidity(error: string) {
    this.textfield?.setCustomValidity(error);
  }

  /**
   *  Resets the inputs state.
   */
  async reset() {
    this.softReset();
    this.selected = null;

    if (this.textfield) {
      this.textfield.error = false;
      this.textfield.errorText = '';
    }
  }

  /**
   *  Resets search term and results.
   */
  softReset() {
    this.textfield?.reset();
    this.searchTerm = '';
    this.suggestions = this.companies;
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    this.textfield?.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.textfield?.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.textfield?.reportValidity();
  }

  async #setSelected(company: Partial<Company> | null) {
    const previouslySelected = this.selected;
    this.selected = company;
    if (this.selected) {
      this.softReset();
    }

    await this.updateComplete;
    if (previouslySelected?.Id !== this.selected?.Id) {
      /**
       * @ignore
       */
      this.dispatchEvent(new LeavittCompanySelectSelectedEvent(company));
    }
  }

  async #onInput(searchTerm: string) {
    this.menu?.close();
    await this.updateComplete;

    this.#setSelected(null);
    this.searchTerm = searchTerm;

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

    if (this.menu) {
      this.menu.open = !!this.searchTerm || !!this.suggestions.length;
    }
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    md-outlined-text-field {
      width: 100%;
    }

    md-menu-item {
      min-width: 300px;
    }

    :host([shaped]) {
      --md-outlined-text-field-container-shape: 28px;
    }

    :host([shallow]) {
      --md-outlined-text-field-container-shape: 12px;
    }

    img[leading] {
      width: 24px;
      height: 24px;
    }

    img[company-mark] {
      width: 40px;
      height: 40px;
    }

    [summary] {
      padding: 0px 16px 4px 16px;
      font-family: Roboto, Arial, sans-serif;
      color: var(--app-light-text-color);
      line-height: 18px;
      font-size: 13px;
    }
  `;

  render() {
    return html`
      <md-outlined-text-field
        id="menu-anchor"
        aria-haspopup="true"
        aria-controls="menu"
        .label=${this.label}
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .value=${this.selected?.Name || this.searchTerm || ''}
        .required=${this.required}
        default-focus="0"
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
            this.menu?.activateNextItem();
          }
          if (e.key == 'Escape') {
            e.stopPropagation();
            this.reset();
          }
          if (e.key == 'Tab') {
            if (this.menu?.open) {
              this.menu.close();
            }
          }
        }}
        @input=${async (e: DOMEvent<MdOutlinedTextField>) => this.#onInput(e.target.value)}
        @focus=${() => {
          if (this.selected) {
            this.textfield?.select();
          } else {
            if (!!this.searchTerm || !!this.suggestions.length) {
              this.menu?.show();
            }
          }
        }}
      >
        ${this.selected
          ? html`<img leading slot="leading-icon" src=${this.selected.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />`
          : html`<slot name="leading-icon"><md-icon slot="leading-icon">search</md-icon></slot>`}
      </md-outlined-text-field>

      <md-menu
        quick
        id="menu"
        anchor="menu-anchor"
        corner="BOTTOM_LEFT"
        default-focus="none"
        skip-restore-focus
        @close-menu=${(e: CloseMenuEvent) => {
          const selectedMenuItem = (e.detail.itemPath?.[0] ?? null) as MenuItem & { companyId: number };
          this.#setSelected(this.suggestions.find(o => o.Id === selectedMenuItem?.companyId) ?? null);
        }}
      >
        ${this.searchTerm
          ? html`<div summary>
              ${this.suggestions.length} result${this.suggestions.length === 1 ? '' : 's'} ${this.searchTerm ? `for '${this.searchTerm}'` : ''}
            </div>`
          : ''}
        ${!this.searchTerm ? html`<div summary>Showing ${this.suggestions.length} compan${this.companies.length === 1 ? 'y' : 'ies'}</div>` : ''}
        ${repeat(
          this.suggestions,
          s => s.Id,
          company => html`
            <md-menu-item ?selected=${this.selected?.Id === company.Id} .companyId=${company.Id}>
              <span slot="headline">${company.Name}</span>
              <span slot="supporting-text">${company.ShortName || '-'}</span>
              <img company-mark slot="start" src=${company.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />
            </md-menu-item>
          `
        )}
      </md-menu>
    `;
  }
}
