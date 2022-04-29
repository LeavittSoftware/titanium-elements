import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';

import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { LoadWhile } from '@leavittsoftware/titanium-helpers';
import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { DOMEvent } from './dom-event';
import { SelectedDetail } from '@material/mwc-menu/mwc-menu-base';
import Fuse from 'fuse.js';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';

export class LeavittCompanySelectSelectedEvent extends Event {
  static eventType = 'selected';
  company: Partial<Company | null>;

  constructor(company: Partial<Company | null>, eventInitDict?: EventInit) {
    super(LeavittCompanySelectSelectedEvent.eventType, eventInitDict);
    this.company = company;
  }
}

/**
 *  Single select input that searches Leavitt Group companies
 *
 *  @element leavitt-company-select
 *
 *  @fires selected - Fired when selection is made or cleared
 *
 */
@customElement('leavitt-company-select')
export class LeavittCompanyElement extends LoadWhile(LitElement) {
  @state() protected searchTerm: string;
  @state() protected suggestions: Array<Partial<Company>> = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

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
   *  The person object selected by the user.
   */
  @property({ type: Object }) selected: Partial<Company> | null = null;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Leading icon to display in select. See mwc-icon. Note: for proper list spacing, each list item must have graphic="icon" or graphic="avatar" to be set.
   */
  @property({ type: String }) icon: string = 'search';

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
   *  Displays error state if no image is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Helper text to display below the select. Always displays by default.
   */
  @property({ type: String }) helper: string = '';

  /**
   *  Callback called before each validation check. See the mwc-textfield's validation section for more details.
   */
  @property({ type: Object }) validityTransform = () => {
    if (this.required) {
      return {
        valid: !!this.selected,
        valueMissing: !!this.selected,
      };
    }
    return {};
  };

  /**
   *  Force the list of companies to reload from remote
   */
  async reloadCompanies() {
    this.companies = await this.getCompanies();
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('companies') && this.companies) {
      this.suggestions = this.companies;
    }

    if (changedProps.has('selected') && this.selected) {
      {
        const company = this.companies.find(o => o.Id === this.selected?.Id);
        if (company) {
          this.selected = company;
        }
      }
    }
  }

  firstUpdated() {
    this.menu.anchor = this.textfield;
    this.textfield.layout();

    if (!this.disableAutoLoad && !this.companies.length && this.apiService) {
      this.reloadCompanies();
    }
  }

  private async getCompanies() {
    try {
      const get = this.apiService?.getAsync<Partial<Company>>(`Companies?${this.odataParts.join('&')}`);
      const result = await get;
      return result?.toList() ?? [];
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
    return [];
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    if (this.textfield) {
      this.textfield.value = '';
      this.textfield.isUiValid = true;
      this.textfield.mdcFoundation?.setValid?.(true);
    }
    this.searchTerm = '';
    this.selected = null;
    this.suggestions = this.companies;
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    await this.textfield.updateComplete;
    this.textfield.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.textfield.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.textfield.reportValidity();
  }

  /**
   *  Runs layout() method on textfield.
   */
  layout() {
    this.textfield.layout();
  }

  private async setSelected(company: Partial<Company> | null) {
    const previouslySelected = this.selected;
    this.selected = company;
    if (this.selected) {
      this.textfield.reportValidity();
    }

    if (previouslySelected?.Id !== this.selected?.Id) {
      this.dispatchEvent(new LeavittCompanySelectSelectedEvent(company));
    }
  }

  private onInput(searchTerm: string) {
    this.setSelected(null);
    this.searchTerm = searchTerm;

    const options = {
      includeScore: true,
      keys: ['Name', 'ShortName'],
      shouldSort: true,
      threshold: 0.3,
    };

    if (this.searchTerm) {
      const fuse = new Fuse(this.companies, options);
      const fuseResults = fuse.search(searchTerm);
      this.suggestions = fuseResults.map(o => o.item);
    } else {
      this.suggestions = this.companies;
    }

    this.menu.open = !!this.searchTerm || !!this.suggestions.length;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      --mdc-menu-max-width: 550px;
      --mdc-list-item-graphic-size: 40px;
    }

    mwc-textfield {
      width: 100%;
      background-color: var(--leavitt-company-select-background-color, #fff);
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    img[selected] {
      height: 24px;
      width: 24px;
      position: absolute;
      top: 16px;
      left: 12px;
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
      <mwc-textfield
        outlined
        icon=${this.selected?.Id ? 'l' : this.icon}
        .label=${this.label}
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .validationMessage=${this.validationMessage}
        .validityTransform=${this.validityTransform}
        .value=${this.selected?.Name || this.searchTerm || ''}
        .helper=${this.helper}
        .required=${this.required}
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown')) {
            this.menu.focusItemAtIndex(0);
          }
          if (e.key == 'Escape') {
            e.stopPropagation();
            this.searchTerm = '';
            this.setSelected(null);
          }
        }}
        @input=${async (e: DOMEvent<TextField>) => {
          this.onInput(e.target.value);
        }}
        @focus=${() => {
          if (this.selected) {
            this.textfield.select();
          } else {
            this.menu.open = !!this.searchTerm || !!this.suggestions.length;
          }
        }}
      ></mwc-textfield>
      ${this.selected ? html`<img selected src=${this.selected.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />` : ''}
      <mwc-menu
        fixed
        activatable
        corner="BOTTOM_LEFT"
        defaultFocus="NONE"
        x="0"
        y=${this.validationMessage ? '-19' : '0'}
        @opened=${() =>
          //Prevent previouslyFocused behavior of msc-menu on close
          ((this.menu.mdcRoot as MenuSurface & { previouslyFocused: null }).previouslyFocused = null)}
        @selected=${(e: CustomEvent<SelectedDetail<number>>) => {
          e.stopPropagation();
          const selectedIndex = e.detail.index;

          if (selectedIndex > -1) {
            const selected = this.suggestions?.[selectedIndex] ?? null;
            this.setSelected(selected);
          }
        }}
      >
        <mwc-linear-progress .closed=${!this.isLoading} indeterminate></mwc-linear-progress>
        ${!this.isLoading && this.searchTerm
          ? html`<div summary>
              ${this.suggestions.length} result${this.suggestions.length === 1 ? '' : 's'} ${this.searchTerm ? `for '${this.searchTerm}'` : ''}
            </div>`
          : ''}
        ${!this.isLoading && !this.searchTerm
          ? html`<div summary>Showing ${this.suggestions.length} compan${this.companies.length === 1 ? 'y' : 'ies'}</div>`
          : ''}
        ${this.suggestions.map(
          company => html`
            <mwc-list-item twoline graphic="medium" ?selected=${this.selected?.Id === company.Id} value=${String(company.Id)}>
              <span>${company.Name}</span>
              <span slot="secondary">${company.ShortName || '-'}</span>
              <img company-mark slot="graphic" src=${company.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />
            </mwc-list-item>
          `
        )}
      </mwc-menu>
    `;
  }
}
