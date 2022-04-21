import { css, html, LitElement } from 'lit';
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
 *  Does not currently support setting a pre-selected person/group.
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
   *  Required if you want component to load companies automatically
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
    this.suggestions = [];
    this.count = 0;
    this.textfield.isUiValid = true;
    this.textfield.mdcFoundation?.setValid?.(true);
    this.searchTerm = '';
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

  private async doSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

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
      const results = await this.apiService?.getAsync<Person>(`People?${odataParts.join('&')}`);
      results?.entities.forEach(p => (p.type = 'Person'));
      return results;
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
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
      const results = await this.apiService?.getAsync<PeopleGroup>(`PeopleGroups?${odataParts.join('&')}`);
      results?.entities.forEach(p => (p.type = 'PeopleGroup'));
      return results;
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
    return null;
  }

  private setSelected(entity: Partial<Person | PeopleGroup> | null) {
    this.selected = entity;
    if (entity) {
      this.textfield.reportValidity();
    }

    this.dispatchEvent(new LeavittPersonGroupSelectSelectedEvent(entity));
  }

  private doSearchDebouncer = new Debouncer((searchTerm: string) => this.doSearch(searchTerm));

  private async onInput(term: string) {
    if (this.selected !== null) {
      this.setSelected(null);
    }
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

    mwc-list-item mwc-icon {
      color: var(--app-accent-color-blue, #4285f4);
      --mdc-icon-size: 32px;
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
      padding: 0 16px;
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
        .value=${(this.selected?.type === 'Person'
          ? `${this.selected?.FirstName} ${this.selected?.LastName}`
          : this.selected?.type === 'PeopleGroup'
          ? this.selected?.Name
          : '') ?? ''}
        .validationMessage=${this.validationMessage}
        .required=${this.required}
        @keydown=${e => {
          if (this.suggestions.length > 0 && e.keyCode == '40') {
            this.menu.focusItemAtIndex(0);
          }
        }}
        @input=${async e => {
          this.loadWhile(this.onInput(e.target.value));
        }}
        @focus=${() => (!this.selected ? (this.menu.open = !!this.searchTerm) : '')}
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
