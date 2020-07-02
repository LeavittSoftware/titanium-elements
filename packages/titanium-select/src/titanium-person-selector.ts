import { css, customElement, html, LitElement, property, query } from 'lit-element';
import '@leavittsoftware/titanium-progress';
import '@leavittsoftware/profile-picture';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';

import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { getSearchTokens, Debouncer, LoadWhile } from '@leavittsoftware/titanium-helpers';
import Api2ServiceMixin from '@leavittsoftware/api-service/lib/api2-service';
import { Person } from '@leavittsoftware/lg-core-typescript/lg.core';

export class TitaniumPersonSelectorSelectedEvent extends Event {
  static eventType = 'selected';
  person: Partial<Person | null>;

  constructor(person: Partial<Person | null>, eventInitDict?: EventInit) {
    super(TitaniumPersonSelectorSelectedEvent.eventType, eventInitDict);
    this.person = person;
  }
}

/**
 *  Searchable person single select
 *  Does not currently support setting a pre-selected person.
 *
 *  @fires selected - Fired when selection is made or cleared
 */

@customElement('titanium-person-selector')
export class TitaniumPersonSelectorElement extends LoadWhile(Api2ServiceMixin(LitElement, { defaultLGAppNameHeader: 'PLGameAdmin' })) {
  @property({ type: Object }) selected: Person | null = null;
  @property({ type: Array }) people: Array<Person> = [];

  @property({ type: Number }) protected count: number = 0;
  @property({ type: String }) protected searchTerm: string;

  @property({ type: String }) validationMessage: string;
  @property({ type: String }) label: string = 'Person';
  @property({ type: String }) placeholder: string = 'Search for a person';
  @property({ type: Boolean }) required: boolean = false;

  @query('mwc-menu') menu: Menu;
  @query('mwc-textfield') textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  firstUpdated() {
    this.menu.anchor = this.textfield;
    this.textfield.layout();

    this.textfield.validityTransform = () => {
      if (this.required) {
        return {
          valid: !!this.selected,
          valueMissing: !!this.selected,
        };
      }
      return {};
    };
  }

  reset() {
    this.textfield.value = '';
    this.selected = null;
    this.people = [];
    this.count = 0;
    this.textfield.isUiValid = true;
    this.textfield.mdcFoundation?.setValid?.(true);
    this.searchTerm = '';
  }

  async focus() {
    await this.textfield.updateComplete;
    this.textfield.focus();
  }

  checkValidity() {
    return this.textfield.checkValidity();
  }

  reportValidity() {
    return this.textfield.reportValidity();
  }

  private async _doSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }
    try {
      const odataParts = ['$top=8', '$count=true', '$select=FirstName,LastName,CompanyName,Id'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(startswith(FirstName, '${token}') or startswith(LastName, '${token}'))`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      return await this.api2.getAsync<Person>(`People?${odataParts.join('&')}`);
    } catch (error) {
      AppSnackbar.open(error);
    }
    return null;
  }

  private setSelected(person: Person | null) {
    this.selected = person;
    if (person) {
      this.textfield.reportValidity();
    }
    this.dispatchEvent(new TitaniumPersonSelectorSelectedEvent(person));
  }

  private _doSearchDebouncer = new Debouncer((searchTerm: string) => this._doSearch(searchTerm));

  private async onInput(term: string) {
    this.setSelected(null);
    this.searchTerm = term;
    this.menu.open = !!this.searchTerm;
    this.people = [];
    this.count = 0;
    const result = await this._doSearchDebouncer.debounce(term);
    this.people = result?.entities ?? [];
    this.count = result?.odataCount ?? 0;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    mwc-textfield {
      width: 100%;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    profile-picture[selected] {
      position: absolute;
      top: 16px;
      left: 16px;
    }

    [no-result] {
      padding: 0 16px;
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
        icon="search"
        .label=${this.label}
        .placeholder=${this.placeholder}
        .validationMessage=${this.validationMessage}
        .required=${this.required}
        @input=${async e => {
          this.loadWhile(this.onInput(e.target.value));
        }}
        @focus=${() => (!this.selected ? (this.menu.open = !!this.searchTerm) : '')}
      ></mwc-textfield>
      ${this.selected ? html` <profile-picture selected .personId=${this.selected?.Id || 0} shape="circle" size="24"></profile-picture>` : ''}
      <mwc-menu
        fullwidth
        activatable
        corner="BOTTOM_LEFT"
        defaultFocus="NONE"
        x="0"
        y=${this.validationMessage ? '-19' : '0'}
        @selected=${e => {
          e.stopPropagation();
          const selectedIndex = e.detail.index;
          if (selectedIndex > -1) {
            const selected = this.people?.[selectedIndex] ?? null;
            this.setSelected(selected);
            this.textfield.value = `${selected?.FirstName} ${selected?.LastName}`;
          }
        }}
      >
        <mwc-linear-progress .closed=${!this.isLoading} indeterminate></mwc-linear-progress>
        ${this.people.map(
          person => html`
            <mwc-list-item twoline graphic="avatar">
              <span>${person.FirstName} ${person.LastName}</span>
              <span slot="secondary">${person.CompanyName}</span>
              <profile-picture slot="graphic" .personId=${person?.Id || 0} shape="circle" size="32"></profile-picture>
            </mwc-list-item>
          `
        )}
        ${this.count === 0 && !!this.searchTerm && this.isLoading === false ? html`<div no-result>0 result for '${this.searchTerm}'</div>` : ''}
      </mwc-menu>
    `;
  }
}
