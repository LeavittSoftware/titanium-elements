import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';
import '@leavittsoftware/profile-picture';

import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { getSearchTokens, Debouncer, LoadWhile } from '@leavittsoftware/titanium-helpers';
import { Person } from '@leavittsoftware/lg-core-typescript/lg.core';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { DOMEvent } from './dom-event';
import { SelectedDetail } from '@material/mwc-menu/mwc-menu-base';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';

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
  @state() protected suggestions: Array<Person> = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService;

  /**
   *  Odata parts for the Company API call
   */
  @property({ type: Array }) odataParts: Array<string> = ['top=15', 'orderby=FirstName', 'select=FirstName,LastName,CompanyName,Id', 'count=true'];

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

  firstUpdated() {
    this.menu.anchor = this.textfield;
    this.textfield.layout();
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
    this.selected = null;
    this.suggestions = [];
    this.count = 0;
    this.searchTerm = '';
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    await this.textfield.updateComplete;
    this.textfield.focus();
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selected') && this.selected) {
      this.textfield.value = `${this.selected.FirstName} ${this.selected.LastName}`;
    }
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

  private abortController: AbortController = new AbortController();

  private async doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.abortController.abort();
    this.abortController = new AbortController();
    try {
      const searchTokens = getSearchTokens(searchTerm);
      const odataParts = this.clone(this.odataParts);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(startswith(FirstName, '${token}') or startswith(LastName, '${token}'))`).join(' and ');
        const existingFilterIndex = odataParts.findIndex(o => o.startsWith('filter=') || o.startsWith('$filter='));
        if (existingFilterIndex > -1) {
          odataParts[existingFilterIndex] = [odataParts[existingFilterIndex], searchFilter].join(' and ');
        } else {
          odataParts.push(`filter=${searchFilter}`);
        }
      }

      const get = this.apiService.getAsync<Person>(`People?${odataParts.join('&')}`, { abortController: this.abortController });
      this.loadWhile(get);
      const result = await get;
      this.suggestions = result?.entities ?? [];
      this.count = result?.odataCount ?? 0;
      return;
    } catch (error) {
      if (!error.Message.include('Abort error')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    this.suggestions = [];
    this.count = 0;
  }

  private clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  private setSelected(person: Person | null) {
    const previouslySelected = this.selected;
    this.selected = person;
    if (this.selected) {
      this.textfield.reportValidity();
    }
    if (previouslySelected !== this.selected) {
      this.dispatchEvent(new LeavittPersonSelectSelectedEvent(this.selected));
    }
  }

  private doSearchDebouncer = new Debouncer((searchTerm: string) => this.doSearch(searchTerm));

  private async onInput(term: string) {
    this.setSelected(null);
    this.searchTerm = term;
    this.menu.open = !!this.searchTerm;
    this.suggestions = [];
    this.count = 0;
    this.doSearchDebouncer.debounce(term);
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
      background-color: var(--leavitt-person-select-background-color, #fff);
      border-radius: 4px;
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    :host([shaped]) mwc-textfield {
      border-radius: 28px;
    }

    :host([shallow]) mwc-textfield {
      border-radius: 12px;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    profile-picture[selected] {
      position: absolute;
      top: 16px;
      left: 16px;
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
        icon="search"
        .label=${this.label}
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .validationMessage=${this.validationMessage}
        .validityTransform=${this.validityTransform}
        .helper=${this.helper}
        .required=${this.required}
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown')) {
            this.menu.focusItemAtIndex(0);
          }
          if (e.key == 'Escape') {
            e.stopPropagation();
            this.textfield.value = '';
            this.setSelected(null);
          }
        }}
        @input=${async (e: DOMEvent<TextField>) => {
          this.loadWhile(this.onInput(e.target.value));
        }}
        @focus=${() => {
          if (this.selected) {
            this.textfield.select();
          } else {
            this.menu.open = !!this.searchTerm;
          }
        }}
      ></mwc-textfield>
      ${this.selected ? html` <profile-picture selected .personId=${this.selected?.Id || 0} shape="circle" size="24"></profile-picture>` : ''}
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
        ${!!this.searchTerm && this.isLoading === false
          ? html`<div summary>Showing ${this.suggestions.length} of ${this.count} result${this.count === 1 ? '' : 's'} for '${this.searchTerm}'</div>`
          : ''}
        ${this.suggestions.map(
          person => html`
            <mwc-list-item twoline graphic="avatar">
              <span>${person.FirstName} ${person.LastName}</span>
              <span slot="secondary">${person.CompanyName}</span>
              <profile-picture slot="graphic" .personId=${person?.Id || 0} shape="circle" size="40"></profile-picture>
            </mwc-list-item>
          `
        )}
      </mwc-menu>
    `;
  }
}
