import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field';
import '@leavittsoftware/api-service/lib/api-service-element';

import {ApiServiceElement} from '@leavittsoftware/api-service/lib/api-service-element';
import {ODataDto} from '@leavittsoftware/api-service/lib/odata-dto';
import {customElement, observe, property, query} from '@polymer/decorators';
import {html, PolymerElement} from '@polymer/polymer';
import {timeOut} from '@polymer/polymer/lib/utils/async';
import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {getSearchTokens} from './titanium-search-token-mixin';

export interface Person extends ODataDto {
  Id: number;
  LastName: string;
  FirstName: string;
}

export type personComboBoxItem = {
  label: string,
  value: Partial<Person>
};

@customElement('titanium-person-selector')
export class TitaniumPersonSelectorElement extends PolymerElement {
  @property() isLoading: boolean = false;

  @property() controllerNamespace: string;

  @property() opened: boolean;
  @property() label: string|null;
  @property() placeholder: string|null = 'Search...';
  @property({type: Number, notify: true}) personId: number|null;

  @property() filter: string;
  @property() select: string;
  @property() expand: string;

  @property() disableAutoload: boolean = false;

  @property() searchTerm: string;
  @property() items: Array<personComboBoxItem>;
  @property({type: Object, notify: true})
  selectedPerson: personComboBoxItem|string = '';

  @query('api-service') apiService: ApiServiceElement;

  private _debounceJob: Debouncer;

  @observe('personId')
  async personIdChanged(personId: number|undefined) {
    if (!personId ||
        (this.selectedPerson &&
         (this.selectedPerson as personComboBoxItem).value.Id === personId)) {
      return;
    }

    let queryOptions: Array<string> = [];

    let selectItems = ['Id', 'FirstName', 'LastName'];
    if (this.select)
      selectItems.push(this.select);
    queryOptions.push(`$select=${selectItems.join(',')}`);

    queryOptions.push(`$filter=Id eq ${personId}`);

    if (this.expand)
      queryOptions.push(`&$expand=${this.expand}`);

    // restore selected person from person id
    try {
      const person =
          (await this.apiService.getAsync<Partial<Person>&ODataDto>(
               `People/?${queryOptions.join('&')}`, this.controllerNamespace))
              .firstOrDefault();
      this.isLoading = false;
      if (person) {
        // populate the combobox
        const personItem = {
          label: `${person.FirstName} ${person.LastName}`,
          value: person
        };
        this.items = [personItem];
        this.selectedPerson = personItem;
      }
    } catch (error) {
      this.reportError(error);
    }
  }

  @observe('selectedPerson')
  selectedPersonChanged(selectedPerson: personComboBoxItem) {
    if (selectedPerson && selectedPerson.value.Id === this.personId)
      return;

    if (selectedPerson && selectedPerson.value.Id === 0) {
      this.selectedPerson = '';
      this.searchTerm = '';
      return;
    }

    this.personId = !selectedPerson || !selectedPerson.value.Id ?
        null :
        selectedPerson.value.Id;
  }

  private reportError(error: string) {
    this.dispatchEvent(new CustomEvent(
        'titanium-person-selector-error',
        {bubbles: true, composed: true, detail: {message: error}}));
  }

  @observe('searchTerm', 'opened')
  protected searchTermChanged(searchTerm: string, opened: boolean) {
    this.items = [];

    if (!searchTerm && this.disableAutoload !== false)
      return;

    // Important: Check status of opened in debounce call back.  When search
    // terms are cleared, searchterm is changed to empty before opened is false.
    this._debounceJob =
        Debouncer.debounce(this._debounceJob, timeOut.after(300), async () => {
          if (!opened) {
            return;
          }
          this.items = await this._getProducers(searchTerm);
        });
  }

  private async _getProducers(searchTerm: string) {
    const queryOptions: Array<string> = [];

    const searchFilters =
        getSearchTokens(searchTerm)
            .map(
                (token: string) => `(startswith(FirstName, '${
                    token}') or startswith(LastName, '${token}'))`);
    if (this.filter)
      searchFilters.push(this.filter);

    if (searchFilters.length) {
      queryOptions.push(`$filter=${searchFilters.join(' and ')}`);
    } else {
      queryOptions.push('$orderby=FirstName');
    }

    queryOptions.push('$top=10');

    let selectItems = ['Id', 'FirstName', 'LastName'];
    if (this.select) {
      selectItems.push(this.select);
    }

    queryOptions.push(`$select=${selectItems.join(',')}`);

    if (this.expand)
      queryOptions.push(`$expand=${this.expand}`);

    this.isLoading = true;
    let returnValue = new Array<personComboBoxItem>();

    try {
      const results =
          (await this.apiService.getAsync<Partial<Person>&ODataDto>(
               `People?${queryOptions.join('&')}`, this.controllerNamespace))
              .toList();
      this.isLoading = false;
      returnValue = results.map(o => {
        return {label: `${o.FirstName} ${o.LastName}`, value: o};
      });
    } catch (error) {
      this.reportError(error);
    }
    if (returnValue && returnValue.length == 0)
      returnValue.push({label: `No Results`, value: {Id: 0} as Person});

    this.isLoading = false;
    return returnValue;
  }

  public clear() {
    this.selectedPerson = '';
    this.searchTerm = '';
  }

  static get template() {
    return html`
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
<vaadin-combo-box-light opened="{{opened}}" filter="{{searchTerm}}" filtered-items="[[items]]" selected-item="{{selectedPerson}}">
  <vaadin-text-field placeholder="[[placeholder]]" label="[[label]]">
    <template>
      <style>
        img[profile] {
          border-radius: 50%;
          margin-right: 16px;
        }
      </style>
      <img profile src="https://mapi.leavitt.com/People([[item.value.Id]])/Default.Picture(size=24)" />
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

const ComboboxStyles = document.createElement('template');

ComboboxStyles.innerHTML =
    `<dom-module id="people-combo-box" theme-for="vaadin-combo-box-item">
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