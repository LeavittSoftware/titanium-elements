import { css, customElement, html, LitElement, property, PropertyValues, query, state } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';

import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

import { getSearchTokens, Debouncer, LoadWhile, isDevelopment } from '@leavittsoftware/titanium-helpers';
import { Person } from '@leavittsoftware/lg-core-typescript/lg.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

export class LeavittPersonSelectSelectedEvent extends Event {
  static eventType = 'selected';
  person: Partial<Person | null>;

  constructor(person: Partial<Person | null>, eventInitDict?: EventInit) {
    super(LeavittPersonSelectSelectedEvent.eventType, eventInitDict);
    this.person = person;
  }
}

/**
 *  Single select input that searches Leavitt Group employees
 *  Does not currently support setting a pre-selected person.
 *
 *  @element leavitt-person-select
 *
 *  @fires selected - Fired when selection is made or cleared
 *
 */
@customElement('leavitt-person-select')
export class LeavittPersonSelectElement extends LoadWhile(LitElement) {
  @state() protected count: number = 0;
  @state() protected searchTerm: string;
  @state() protected apiService: ApiService;
  @state() protected people: Array<Person> = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  /**
   *  The person object selected by the user.
   */
  @property({ type: Object }) selected: Person | null = null;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Person';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Search for a person';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if no image is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  API namespace to be sent with the person search query.
   */
  @property({ type: String }) apiNamespace: string = '';

  /**
   *  Additional properties to be selected in the person search query.
   */
  @property({ type: Array }) selectedProperties: Array<keyof Person> = [];

  /**
   *  Expand query added to the person search query.
   */
  @property({ type: String }) expand: string = '';

  /**
   *  Filter query added to the person search query in addition to search terms.
   */
  @property({ type: String }) filter: string = '';

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selected')) {
      this.textfield.value = !this.selected ? '' : `${this.selected.FirstName} ${this.selected.LastName}`;
    }
  }

  firstUpdated() {
    this.menu.anchor = this.textfield;
    this.textfield.layout();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = isDevelopment ? 'https://devapi2.leavitt.com/' : 'https://api2.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', this.apiNamespace);

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

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.textfield.value = '';
    this.selected = null;
    this.people = [];
    this.count = 0;
    this.textfield.isUiValid = true;
    this.textfield.mdcFoundation?.setValid?.(true);
    this.searchTerm = '';
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

  private _abortController: AbortController = new AbortController();

  private async _doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this._abortController.abort();
    this._abortController = new AbortController();
    try {
      const odataParts = ['$top=8', '$count=true', `$select=FirstName,LastName,CompanyName,Id${this.selectedProperties.map(o => `,${o}`).join('')}`];
      if (this.expand) {
        odataParts.push(`$expand=${this.expand}`);
      }
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(startswith(FirstName, '${token}') or startswith(LastName, '${token}'))`).join(' and ');
        const filter = `${searchFilter}${this.filter ? ` and (${this.filter})` : ''}`;
        odataParts.push(`$filter=${filter}`);
      }
      const get = this.apiService.getAsync<Person>(`People?${odataParts.join('&')}`, { abortController: this._abortController });
      this.loadWhile(get);
      const result = await get;
      this.people = result?.entities ?? [];
      this.count = result?.odataCount ?? 0;
      return;
    } catch (error) {
      if (!error?.includes?.('Abort')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    this.people = [];
    this.count = 0;
  }

  private setSelected(person: Person | null) {
    this.selected = person;
    if (person) {
      this.textfield.reportValidity();
    }
    this.dispatchEvent(new LeavittPersonSelectSelectedEvent(person));
  }

  private _doSearchDebouncer = new Debouncer((searchTerm: string) => this._doSearch(searchTerm));

  private async onInput(term: string) {
    this.setSelected(null);
    this.searchTerm = term;
    this.menu.open = !!this.searchTerm;
    this.people = [];
    this.count = 0;
    this._doSearchDebouncer.debounce(term);
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    mwc-textfield {
      width: 100%;
      background-color: var(--leavitt-person-select-background-color, #fff);
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    img {
      image-rendering: crisp-edges;
    }

    img[selected] {
      position: absolute;
      top: 16px;
      left: 16px;
      height: 24px;
      width: 24px;
      border-radius: 50%;
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
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .validationMessage=${this.validationMessage}
        .required=${this.required}
        @keydown=${e => {
          if (this.people.length > 0 && e.keyCode == '40') {
            this.menu.focusItemAtIndex(0);
          }
        }}
        @input=${async e => {
          this.loadWhile(this.onInput(e.target.value));
        }}
        @focus=${() => (!this.selected ? (this.menu.open = !!this.searchTerm) : '')}
      ></mwc-textfield>
      ${this.selected
        ? html` <img
            selected
            onerror="this.src='https://cdn.leavitt.com/user-0-64.jpeg'"
            src="https://cdn.leavitt.com/user-${this.selected?.Id ?? 0}-64.jpeg"
          />`
        : ''}
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
          }
        }}
      >
        <mwc-linear-progress .closed=${!this.isLoading} indeterminate></mwc-linear-progress>
        ${this.people.map(
          person => html`
            <mwc-list-item twoline graphic="avatar">
              <span>${person.FirstName} ${person.LastName}</span>
              <span slot="secondary">${person.CompanyName}</span>
              <img slot="graphic" onerror="this.src='https://cdn.leavitt.com/user-0-64.jpeg'" src="https://cdn.leavitt.com/user-${person?.Id ?? 0}-64.jpeg" />
            </mwc-list-item>
          `
        )}
        ${this.count === 0 && !!this.searchTerm && this.isLoading === false ? html`<div no-result>0 result for '${this.searchTerm}'</div>` : ''}
      </mwc-menu>
    `;
  }
}
