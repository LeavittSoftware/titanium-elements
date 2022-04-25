import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@leavittsoftware/profile-picture';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';
import Fuse from 'fuse.js';

import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { getSearchTokens, Debouncer, LoadWhile } from '@leavittsoftware/titanium-helpers';
import { Person as CorePerson, PeopleGroup as CorePeopleGroup } from '@leavittsoftware/lg-core-typescript/lg.net.core';
import { peopleGroupIcons } from './people-group-icons';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { SelectedDetail } from '@material/mwc-list';
import { DOMEvent } from './dom-event';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';

export class LeavittPersonGroupSelectSelectedEvent extends Event {
  static eventType = 'selected';
  person: Partial<CorePerson> | null;
  group: Partial<CorePeopleGroup> | null;

  constructor(entity: Partial<Person | PeopleGroup> | null, eventInitDict?: EventInit) {
    super(LeavittPersonGroupSelectSelectedEvent.eventType, eventInitDict);
    this.person = entity?.type === 'Person' ? entity : null;
    this.group = entity?.type === 'PeopleGroup' ? entity : null;
  }
}

type Person = CorePerson & { type: 'Person' };
type PeopleGroup = CorePeopleGroup & { type: 'PeopleGroup' };

/**
 *  Single select input that searches both Leavitt Group employees and groups
 *
 *  @element leavitt-person-group-select
 *
 *  @fires selected - Fired when selection is made or cleared
 *
 */
@customElement('leavitt-person-group-select')
export class LeavittPersonGroupSelectElement extends LoadWhile(LitElement) {
  @state() protected count: number = 0;
  @state() protected searchTerm: string;
  @state() protected suggestions: Array<Partial<Person | PeopleGroup>> = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  /**
   *  Required
   */
  @property({ attribute: false }) apiService: ApiService | null;

  /**
   *  The person or group object selected by the user.
   */
  @property({ type: Object }) selected: Partial<Person | (PeopleGroup & { odataType: string })> | null = null;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Person or group';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Search a person or group';

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if no image is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

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

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selected') && this.selected) {
      this.textfield.value =
        (this.selected?.type === 'Person'
          ? `${this.selected?.FirstName} ${this.selected?.LastName}`
          : this.selected?.type === 'PeopleGroup'
          ? this.selected?.Name
          : '') ?? '';
    }
  }

  focus() {
    this.textfield.focus();
  }

  checkValidity() {
    return this.textfield.checkValidity();
  }

  reportValidity() {
    return this.textfield.reportValidity();
  }

  private abortController: AbortController = new AbortController();

  private async doSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

    this.abortController.abort();
    this.abortController = new AbortController();

    const results = await Promise.all([this.doPersonSearch(searchTerm), this.doGroupSearch(searchTerm)]);
    const entities = [...(results[0]?.entities ?? []), ...(results[1]?.entities ?? [])];
    const odataCount = (results[0]?.odataCount ?? 0) + (results[1]?.odataCount ?? 0);

    const options = {
      includeScore: true,
      keys: ['Name', 'FirstName', 'LastName'],
    };

    const fuse = new Fuse(entities, options);
    const fuseResults = fuse.search(searchTerm).sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0));
    return { entities: fuseResults.map(o => o.item), count: odataCount };
  }

  private async doPersonSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

    try {
      const odataParts = ['top=100', 'count=true', 'select=FirstName,LastName,Id,CompanyName'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(startswith(FirstName, '${token}') or startswith(LastName, '${token}'))`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      const results = await this.apiService?.getAsync<Person>(`People?${odataParts.join('&')}`, { abortController: this.abortController });
      results?.entities.forEach(p => (p.type = 'Person'));
      return results;
    } catch (error) {
      if (!error?.Message?.include('Abort error')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    return null;
  }

  private async doGroupSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }
    try {
      const odataParts = ['top=100', 'count=true', 'select=Name,Id,Description'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `contains(Name, '${token}')`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      const results = await this.apiService?.getAsync<PeopleGroup>(`PeopleGroups?${odataParts.join('&')}`, { abortController: this.abortController });
      results?.entities.forEach(p => (p.type = 'PeopleGroup'));
      return results;
    } catch (error) {
      if (!error?.Message?.include('Abort error')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    return null;
  }

  private setSelected(entity: Partial<Person | PeopleGroup> | null) {
    const previouslySelected = this.selected;
    this.selected = entity;
    if (this.selected) {
      this.textfield.reportValidity();
    }
    if (previouslySelected !== this.selected) {
      this.dispatchEvent(new LeavittPersonGroupSelectSelectedEvent(this.selected));
    }
  }

  private doSearchDebouncer = new Debouncer((searchTerm: string) => this.doSearch(searchTerm));

  private async onInput(term: string) {
    if (this.selected !== null) {
      this.setSelected(null);
    }
    this.dispatchEvent(new Event('change'));
    this.searchTerm = term;
    this.menu.open = !!this.searchTerm;
    this.suggestions = [];
    this.count = 0;
    const result = await this.doSearchDebouncer.debounce(term);
    this.suggestions = result?.entities ?? [];
    this.count = result?.count ?? 0;
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
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    mwc-list-item mwc-icon {
      color: var(--app-accent-color-blue, #4285f4);
      --mdc-icon-size: 40px;
    }

    mwc-icon[selected],
    profile-picture[selected] {
      position: absolute;
      top: 16px;
      left: 16px;
    }

    mwc-icon[selected] {
      background: #fff;
      --mdc-icon-size: 24px;
      color: var(--app-accent-color-blue, #4285f4);
    }

    [summary] {
      padding: 0px 16px 4px 16px;
      font-family: Roboto, Arial, sans-serif;
      color: var(--app-light-text-color, #80868b);
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
        .required=${this.required}
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown')) {
            this.menu.focusItemAtIndex(0);
          }
          if (e.key == 'Escape') {
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
      ${this.selected?.type === 'Person'
        ? html`<profile-picture selected .personId=${this.selected?.Id || 0} shape="circle" size="24"></profile-picture>`
        : this.selected?.type === 'PeopleGroup'
        ? html`<mwc-icon selected title=${peopleGroupIcons.get(this.selected['@odata.type'])?.displayName ?? 'People group'} slot="graphic"
            >${peopleGroupIcons.get(this.selected['@odata.type'])?.icon ?? 'task_alt'}</mwc-icon
          >`
        : ''}
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
        ${this.suggestions.map(suggestion =>
          suggestion.type == 'Person'
            ? html`
                <mwc-list-item twoline graphic="avatar">
                  <span title="${suggestion?.FirstName} ${suggestion?.LastName}">${suggestion?.FirstName} ${suggestion?.LastName}</span>
                  <span title=${ifDefined(suggestion?.CompanyName ?? undefined)} slot="secondary">${suggestion?.CompanyName}</span>
                  <profile-picture slot="graphic" .personId=${suggestion?.Id || 0} shape="circle" size="40"></profile-picture>
                </mwc-list-item>
              `
            : suggestion.type == 'PeopleGroup'
            ? html`
                <mwc-list-item twoline graphic="avatar">
                  <span title=${suggestion.Name ?? ''}>${suggestion.Name}</span>
                  <span slot="secondary">${suggestion.Description || (peopleGroupIcons.get(suggestion['@odata.type'])?.displayName ?? 'People group')}</span>
                  <mwc-icon title=${peopleGroupIcons.get(suggestion['@odata.type'])?.displayName ?? 'People group'} slot="graphic"
                    >${peopleGroupIcons.get(suggestion['@odata.type'])?.icon ?? 'task_alt'}</mwc-icon
                  >
                </mwc-list-item>
              `
            : ''
        )}
      </mwc-menu>
    `;
  }
}
