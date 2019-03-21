import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field';
import '@leavittsoftware/api-service/lib/api-service-element';

import {ApiServiceElement} from '@leavittsoftware/api-service/lib/api-service-element';
import {ODataDto} from '@leavittsoftware/api-service/lib/odata-dto';
import {customElement, html, LitElement, property, query} from 'lit-element';

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

export type companyComboBoxItem = {
  label: string,
  value: Partial<Company>
};

@customElement('titanium-company-selector')
export class TitaniumCompanySelectorElement extends LitElement {
  @property({attribute: 'is-loading'}) isLoading: boolean = false;

  @property({attribute: 'controller-namespace'}) controllerNamespace: string;

  @property() label: string|null;
  @property() placeholder: string|null = 'Search...';
  @property({type: Number, reflect: true, attribute: 'company-id'})
  companyId: number|null;

  @property({attribute: 'disable-autoload'}) disableAutoload: boolean = false;

  @property() filter: string = 'not IsExpired';
  @property({attribute: 'name-filter'}) nameFilter: string = '';
  @property() expand: string = '';
  @property() select: string = '';

  @property() searchTerm: string;
  @property() items: Array<companyComboBoxItem>;
  @property({type: Object, reflect: true, attribute: 'selected-company'})
  selectedCompany: companyComboBoxItem|string = '';

  @query('api-service') apiService: ApiServiceElement;

  async updated(changedProps: Map<string|number|symbol, unknown>) {
    if (changedProps.has('items') || changedProps.has('companyId')) {
      this.companyIdChanged(this.companyId);
    }

    if ((changedProps.has('filter') || changedProps.has('nameFilter')) &&
        (!this.isLoading && this.items)) {
      this.items = await this._getCompanies();
    }
  }

  // @observe('companyId', 'items')
  async companyIdChanged(companyId: number|null) {
    if (!companyId ||
        (this.selectedCompany &&
         (this.selectedCompany as companyComboBoxItem).value.Id ===
             companyId)) {
      return;
    }

    if (!this.isLoading && !this.items && this.disableAutoload !== false) {
      this.items = await this._getCompanies();
    } else if (this.isLoading) {
      return;
    }

    // restore selected company from company id
    const companyItems = this.items.filter(v => companyId === v.value.Id);
    if (!companyItems.length) {
      this.reportError(`No company with the Id ${companyId} could be
      found.`);
    } else {
      this.selectedCompany = companyItems[0];
    }
  }

  // @observe('selectedCompany')
  selectedCompanyChanged(e: CustomEvent) {
    const selectedCompany = e.detail.value;
    if (selectedCompany && selectedCompany.value.Id === this.companyId)
      return;
    this.companyId = !selectedCompany || !selectedCompany.value.Id ?
        null :
        selectedCompany.value.Id;
  }

  private reportError(error: string) {
    this.dispatchEvent(new CustomEvent(
        'titanium-company-selector-error',
        {bubbles: true, composed: true, detail: {message: error}}));
  }

  private async _getCompanies() {
    this.isLoading = true;
    let returnValue = new Array<companyComboBoxItem>();

    try {
      let queryOptions: Array<string> = [];

      let selectItems = ['Id'];
      if (this.select)
        selectItems.push(this.select);
      queryOptions.push(`$select=${selectItems.join(',')}`)

      let nameFilters = [`not IsExpired and CompanyNameType eq 'Main'`];
      if (this.nameFilter)
        nameFilters.push(this.nameFilter);

      let expands =
          [`Names($filter=${nameFilters.join(' and ')};$select=Name;$top=1)`];
      if (this.expand)
        expands.push(this.expand);
      queryOptions.push(`$expand=${expands.join(',')}`);

      if (this.filter)
        queryOptions.push(`$filter=${this.filter}`);

      const result: Array<Company> =
          (await this.apiService.getAsync<Company>(
               `Companies?${queryOptions.join('&')}`, this.controllerNamespace))
              .toList();
      returnValue =
          result.filter((company: Company) => {return !!company.Names.length})
              .map((company: Company) => {
                let value = {...company};
                value.Name = value.Names[0].Name;
                return {label: value.Name, value: value};
              })
              .sort(
                  (a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0);
    } catch (error) {
      this.reportError(error);
    }
    this.isLoading = false;
    return returnValue;
  }

  // @observe('opened')
  async openedChanged(e: CustomEvent) {
    if (!e.detail.value || this.isLoading || (this.items && this.items.length))
      return;

    this.items = await this._getCompanies();
  }

  async firstUpdated() {
    if (this.disableAutoload === false) {
      this.items = await this._getCompanies();
    }
  }

  public clear() {
    this.selectedCompany = '';
    this.searchTerm = '';
  }

  render() {
    return html`
  <style>
  :host {
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
  }

  [hidden] {
    display: none;
  }

  svg {
    fill: var(--titanium-input-color, #2c7eea);
    width: 24px;
    height: 24px;
  }

  lds-ring {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }
  lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 21px;
    height: 21px;
    margin: 3px;
    border: 3px solid var(--titanium-input-color, #2c7eea);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--titanium-input-color, #2c7eea) transparent transparent transparent;
  }
  lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
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
  }
</style>
<api-service></api-service>
<vaadin-combo-box-light
  @opened-changed="${this.openedChanged}"
  .items="${this.items}"
  .selectedItem="${this.selectedCompany}"
  @selected-item-changed="${this.selectedCompanyChanged}"
  ?empty="${!this.selectedCompany}">
  <vaadin-text-field .placeholder="${this.placeholder}" .label="${this.label}">
    <template>
      <span>[[item.label]]</span>
    </template>
    <lds-ring
      slot="suffix"
      ?hidden="${!this.isLoading}">
      <div></div><div></div><div></div><div></div></lds-ring>
    <svg slot="suffix" class="clear-button" @click="${
        this.clear}" viewBox="0 0 24 24">
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </vaadin-text-field>

</vaadin-combo-box-light>
`;
  }
}

const ComboboxStyles = document.createElement('template');

ComboboxStyles.innerHTML =
    `<dom-module id="company-combo-box" theme-for="vaadin-combo-box-item">
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
