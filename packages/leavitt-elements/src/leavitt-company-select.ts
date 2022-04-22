import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item.js';
import '@leavittsoftware/titanium-shadow-text';

import { Select } from '@material/mwc-select';

import { LoadWhile } from '@leavittsoftware/titanium-helpers';
import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { DOMEvent } from './dom-event';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

/**
 *  Single select input that searches Leavitt Group companies
 *
 *  @element leavitt-company-select
 *
 *  @fires selected - Fired when a selection has been made. Property index is the selected index (will be of type number)
 *  @fires opened - Fired menu opens
 *  @fires closed - Fired menu closes
 *
 */
@customElement('leavitt-company-select')
export class LeavittCompanySelectElement extends LoadWhile(LitElement) {
  @query('mwc-select') protected select: Select & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  /**
   *  Required if you want component to load companies automatically
   */
  @property({ attribute: false }) apiService: ApiService | null;

  /**
   *  If no service is supplied, consumer can bind in custom list of companies
   */
  @property({ type: Array }) companies: Array<Partial<Company>> = [];

  /**
   *  The company object selected by the user.
   */
  @property({ type: Object }) value: Partial<Company> | null = null;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Company';

  /**
   *  Helper text to display below the select. Always displays by default.
   */
  @property({ type: String }) helper: string = '';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Sets the dropdown menu's position to fixed. This is useful when the select is inside of a stacking context e.g. inside of an mwc-dialog. Note, that --mdc-menu-min-width or --mdc-menu-max-width may have to be set to resize the menu to the width anchor.
   */
  @property({ type: Boolean }) fixedMenuPosition: boolean = true;

  /**
   *  Displays error state if value is empty and select is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Callback called before each validation check. See the mwc-textfield's validation section for more details.
   */
  @property({ type: Object }) validityTransform: null = null;

  /**
   *  Add a empty list item to the list
   */
  @property({ type: Boolean }) enableEmptyListItem: boolean = false;

  /**
   *  Label of the empty list item
   */
  @property({ type: String }) emptyListItemLabel: string = '';

  /**
   *  Odata parts for the Company API call
   */
  @property({ type: Array }) odataParts: Array<string> = ['orderby=name', 'select=Id,Name,Shortname,MarkUrl'];

  async firstUpdated() {
    if (!this.companies.length && this.apiService) {
      this.reloadCompanies();
    }
  }

  /**
   *  Force the list of companies to reload from remote
   */
  async reloadCompanies() {
    this.companies = await this.getCompanies();
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.select.value = '';
    this.value = null;
    this.companies = [];
    this.select.isUiValid = true;
    this.select.mdcFoundation?.setValid?.(true);
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    await this.select.updateComplete;
    this.select.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.select.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.select.reportValidity();
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

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    mwc-select {
      width: 100%;
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    img[selected] {
      height: 24px;
      width: 24px;
      position: absolute;
      top: 16px;
      left: 12px;
    }

    img[company-mark] {
      height: 40px;
      width: 40px;
    }

    mwc-list-item {
      --mdc-list-item-graphic-size: 40px;
    }
  `;

  render() {
    return html`
      <mwc-select
        outlined
        ?disabled=${this.disabled}
        .validationMessage=${this.validationMessage}
        .fixedMenuPosition=${this.fixedMenuPosition}
        .required=${this.required}
        .validityTransform=${this.validityTransform}
        .helper=${this.helper}
        icon=${this.value?.Id ? 'll' : 'business'}
        label=${this.label}
        .value=${(this.value?.Id ?? -1) > -1 ? String(this.value?.Id) ?? '' : ''}
        @selected=${(event: DOMEvent<Select>) => {
          this.value =
            event.target.value === '0' ? { Name: this.emptyListItemLabel, Id: 0 } : this.companies.find(o => o.Id === Number(event.target.value)) ?? null;
        }}
        >${this.enableEmptyListItem ? html`<mwc-list-item value="0">${this.emptyListItemLabel}</mwc-list-item>` : ''}
        ${this.companies.map(
          company => html`
            <mwc-list-item twoline graphic="medium" ?selected=${this.value?.Id === company.Id} value=${String(company.Id)}>
              <span>${company.Name}</span>
              <span slot="secondary"><titanium-shadow-text text=${company.ShortName || '-'}></titanium-shadow-text></span>
              <img company-mark slot="graphic" src=${company.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />
            </mwc-list-item>
          `
        )}
      </mwc-select>
      ${this.value && (this.value?.Id ?? 0) > 0 ? html`<img selected src=${this.value.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg'} />` : ''}
    `;
  }
}
