import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field';
import '@leavittsoftware/api-service/lib/api-service-element';

import {ApiServiceElement} from '@leavittsoftware/api-service/lib/api-service-element';
import {ODataDto} from '@leavittsoftware/api-service/lib/odata-dto';
import {customElement, observe, property, query} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';

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
export class TitaniumCompanySelectorElement extends PolymerElement {
  @property() isLoading: boolean = false;

  @property() controllerNamespace: string;

  @property() opened: boolean;
  @property() label: string|null;
  @property() placeholder: string|null = 'Search...';
  @property({type: Number, notify: true}) companyId: number|null;

  @property() disableAutoload: boolean = false;

  @property() filter: string = 'not IsExpired';
  @property() nameFilter: string = '';
  @property() expand: string = '';
  @property() select: string = '';

  @property() searchTerm: string;
  @property() items: Array<companyComboBoxItem>;
  @property({type: Object, notify: true})
  selectedCompany: companyComboBoxItem|string = '';

  @query('api-service') apiService: ApiServiceElement;

  @observe('companyId', 'items')
  async companyIdChanged(companyId: number|undefined) {
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
      this.reportError(`No company with the Id ${companyId} could be found.`);
    } else {
      this.selectedCompany = companyItems[0];
    }
  }

  @observe('selectedCompany')
  selectedCompanyChanged(selectedCompany: companyComboBoxItem) {
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

  @observe('opened')
  async openedChanged(opened: boolean) {
    if (!opened || this.isLoading || (this.items && this.items.length))
      return;

    this.items = await this._getCompanies();
  }

  async ready() {
    super.ready();
    if (this.disableAutoload === false) {
      this.items = await this._getCompanies();
    }
  }

  public clear() {
    this.selectedCompany = '';
    this.searchTerm = '';
  }


  static get template() {
    return html`
  <dom-module id="company-combo-box" theme-for="vaadin-combo-box-item">
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
  </dom-module>

  <style>
  :host {
    display: block;
  }

  vaadin-combo-box-light {
    width: 100%;
  }

  vaadin-text-field {
    width: 100%;
    min-width: 0;
  }

  [hidden] {
    display: none;
  }

  svg {
    fill: var(--app-text-color-lighter);
    width: 24px;
    height: 24px;
  }

  dual-ring-spinner {
    display: inline-block;
    width: 26px;
    height: 26px;
  }
  dual-ring-spinner:after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    margin: 1px;
    border-radius: 50%;
    border: 3px solid var(--material-primary-color);
    border-color: var(--material-primary-color) transparent var(--material-primary-color) transparent;
    animation: dual-ring-spinner 1.2s linear infinite;
  }
  @keyframes dual-ring-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  vaadin-combo-box-light[disabled] .clear-button,
  vaadin-combo-box-light[readonly] .clear-button,
  vaadin-combo-box-light:not([has-value]) .clear-button {
    display: none;
  }
</style>
<api-service></api-service>
<vaadin-combo-box-light opened="{{opened}}" items="[[items]]" selected-item="{{selectedCompany}}">
  <vaadin-text-field placeholder="[[placeholder]]" label="[[label]]">
    <template>
      <style>
        img[profile] {
          border-radius: 50%;
          margin-right: 16px;
        }
      </style>
      <span>[[item.label]]</span>
    </template>
    <dual-ring-spinner slot="suffix" hidden$="[[!isLoading]]"></dual-ring-spinner>
    <svg slot="suffix" class="clear-button" viewBox="0 0 24 24">
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </vaadin-text-field>

</vaadin-combo-box-light>
`;
  }
}
