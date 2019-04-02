import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light';
import './vaadin-text-field-material-outlined';
import '@vaadin/vaadin-text-field/src/vaadin-text-field';
import '@leavittsoftware/api-service/lib/api-service-element';

import {ApiServiceElement} from '@leavittsoftware/api-service/lib/api-service-element';
import {ODataDto} from '@leavittsoftware/api-service/lib/odata-dto';
import {timeOut} from '@polymer/polymer/lib/utils/async';
import {Debouncer} from '@polymer/polymer/lib/utils/debounce';
import {css, customElement, html, LitElement, property, query} from 'lit-element';

export interface Company extends ODataDto {
  Id: number;
  Names: Array<CompanyName>;
  Name?: string;
}

export interface CompanyRole extends ODataDto {
  '@odata.type': string;
  'Id': number;
}

export interface CompanyName extends ODataDto {
  Name: string;
}

export type CompanyComboBoxItem = {
  label: string,
  value: Partial<Company>
};

@customElement('titanium-company-selector')
export class TitaniumCompanySelectorElement extends LitElement {
  @property({type: Boolean}) isLoading: boolean = false;

  @property({type: String}) controllerNamespace: string;

  @property({type: String}) label: string|null;
  @property({type: String}) placeholder: string|null = 'Search...';
  @property({type: Number}) companyId: number|null;

  @property({type: String}) filter: string = 'not IsExpired';
  @property({type: String}) nameFilter: string = '';
  @property({type: String}) expand: string = '';
  @property({type: String}) select: string = '';

  @property({type: Array}) items: Array<CompanyComboBoxItem> = [];
  @property({type: Object}) selectedCompany: CompanyComboBoxItem|null;

  @query('api-service') apiService: ApiServiceElement;
  @query('vaadin-combo-box-light') comboBox: any;

  private _hasListLoaded;
  private _getCompaniesDebouncer;

  firstUpdated() {
    this._getCompanies();
  }

  selectedCompanyChanged(e: CustomEvent<{value: CompanyComboBoxItem, label: string}>) {
    this.companyId = ((e.detail.value || {}).value || {}).Id || null;
  }

  updated(changedProps: Map<string|number|symbol, unknown>) {
    if (changedProps.has('companyId') && this.companyId != changedProps.get('companyId') && this._hasListLoaded) {
      this.setSelected(this.companyId);
    }

    if ((changedProps.has('filter') || changedProps.has('nameFilter')) && (!this.isLoading && this.items)) {
      this._getCompanies();
    }
  }

  public clear() {
    this.companyId = null;
  }

  setSelected(companyId: number|null) {
    if (Number(companyId) < 1) {
      this._setSelectedCompany(null);
      this._setCompanyId(null);
      return;
    }

    // restore selected company from company id
    const company = this.items.filter(v => companyId === v.value.Id)[0];
    if (!company) {
      this.reportError(`No company with the Id ${companyId} could be found.`);
      return;
    }

    this._setSelectedCompany(company);
    this._setCompanyId(company.value.Id || 0);
  }

  private _setCompanyId(value: number|null) {
    this.companyId = value;
    this.dispatchEvent(new CustomEvent('company-id-changed', {composed: true, detail: {value: this.companyId}}));
  }

  private _setSelectedCompany(value: CompanyComboBoxItem|null) {
    this.comboBox.selectedItem = value;
    this.selectedCompany = value;
    this.dispatchEvent(new CustomEvent('selected-company-changed', {composed: true, detail: {value: this.selectedCompany}}));
  }

  private reportError(error: string) {
    this.dispatchEvent(new CustomEvent('titanium-company-selector-error', {bubbles: true, composed: true, detail: {message: error}}));
  }


  private async _getCompanies() {
    this._getCompaniesDebouncer = Debouncer.debounce(this._getCompaniesDebouncer, timeOut.after(300), async () => {
      this.isLoading = true;
      let returnValue = new Array<CompanyComboBoxItem>();

      try {
        let queryOptions: Array<string> = [];

        let selectItems = ['Id'];
        if (this.select)
          selectItems.push(this.select);
        queryOptions.push(`$select=${selectItems.join(',')}`);

        let nameFilters = [`not IsExpired and CompanyNameType eq 'Main'`];
        if (this.nameFilter)
          nameFilters.push(this.nameFilter);

        let expands = [`Names($filter=${nameFilters.join(' and ')};$select=Name;$top=1)`];
        if (this.expand)
          expands.push(this.expand);
        queryOptions.push(`$expand=${expands.join(',')}`);

        if (this.filter)
          queryOptions.push(`$filter=${this.filter}`);

        const result: Array<Company> = (await this.apiService.getAsync<Company>(`Companies?${queryOptions.join('&')}`, this.controllerNamespace)).toList();
        returnValue = result
                          .filter((company: Company) => {
                            return !!company.Names.length;
                          })
                          .map((company: Company) => {
                            let value = {...company};
                            value.Name = value.Names[0].Name;
                            return {label: value.Name, value: value};
                          })
                          .sort((a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0);
        this._hasListLoaded = true;
      } catch (error) {
        this.reportError(error);
      }
      this.isLoading = false;
      this.items = returnValue;

      if (Number(this.companyId) > 0) {
        this.setSelected(this.companyId);
      }
    });
  }

  openedChanged(e: CustomEvent) {
    if (!e.detail.value || this.isLoading || (this.items && this.items.length))
      return;

    this._getCompanies();
  }

  static styles = css` :host {
   display: block;
 }

 vaadin-combo-box-light {
   width: 100%;
   --material-primary-color: var(--titanium-input-color, #2c7eea);
   --material-primary-text-color: var(--titanium-input-color, #2c7eea);
 }

 vaadin-text-field {
   width: 100%;
   min-width: 0;
   padding-bottom: 0;
 }

 [hidden] {
   display: none;
 }

 svg {
   fill: var(--titanium-input-color, #2c7eea);
   width: 24px;
   height: 24px;
 }

 loading-spinner {
   display: inline-block;
   position: relative;
   width: 24px;
   height: 24px;
 }

 loading-spinner>div {
   box-sizing: border-box;
   display: block;
   position: absolute;
   width: 21px;
   height: 21px;
   margin: 3px;
   border: 3px solid var(--titanium-input-color, #2c7eea);
   border-radius: 50%;
   animation: loading-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
   border-color: var(--titanium-input-color, #2c7eea) transparent transparent transparent;
 }

 loading-spinner>div:nth-child(1) {
   animation-delay: -0.45s;
 }

 loading-spinner>div:nth-child(2) {
   animation-delay: -0.3s;
 }

 loading-spinner>div:nth-child(3) {
   animation-delay: -0.15s;
 }

 @keyframes loading-spinner {
   0% {
     transform: rotate(0deg);
   }

   100% {
     transform: rotate(360deg);
   }
 }

 vaadin-combo-box-light[disabled] .clear-button,
 vaadin-combo-box-light[readonly] .clear-button,
 vaadin-combo-box-light[empty] .clear-button {
   display: none;
 }`;

  render() {
    return html`<api-service></api-service>
<vaadin-combo-box-light @opened-changed="${this.openedChanged}" .items="${this.items}"
  @selected-item-changed="${this.selectedCompanyChanged}" 
  ?empty="${!this.selectedCompany}">
  <vaadin-text-field .placeholder="${this.placeholder}" .label="${this.label}">
    <template>
      <span>[[item.label]]</span>
    </template>
    <loading-spinner slot="suffix" ?hidden="${!this.isLoading}">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </loading-spinner>
    <svg slot="suffix" class="clear-button" @click="${this.clear}" viewBox="0 0 24 24">
      <path
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </vaadin-text-field>
</vaadin-combo-box-light>`;
  }
}

const ComboboxStyles = document.createElement('template');

ComboboxStyles.innerHTML = `<dom-module id="company-combo-box" theme-for="vaadin-combo-box-item">
  <template>
    <style>
    :host::before {
        display: none !important;
    }

    [part="content"] {
        @apply --layout-horizontal;
        @apply --layout-center;
      }
    </style>
  </template>
</dom-module>`;

(document as any).head.appendChild(ComboboxStyles.content);
