import { css, customElement, html, LitElement, property, query } from 'lit-element';
import '@leavittsoftware/profile-picture';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';

import { ifDefined } from 'lit-html/directives/if-defined';
import { Menu } from '@material/mwc-menu';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar/lib/titanium-snackbar';

import { getSearchTokens, Debouncer, LoadWhile } from '@leavittsoftware/titanium-helpers';
import Api2ServiceMixin from '@leavittsoftware/api-service/lib/api2-service';
import { Person as CorePerson, PeopleGroup as CorePeopleGroup } from '@leavittsoftware/lg-core-typescript/lg.core';
import { peopleGroupIcons } from './people-group-icons';

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
export class LeavittPersonGroupSelectElement extends LoadWhile(Api2ServiceMixin(LitElement)) {
  @property({ type: Number }) protected count: number = 0;
  @property({ type: String }) protected searchTerm: string;
  @property({ type: Array }) protected suggestions: Array<Partial<Person | PeopleGroup>> = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected textfield: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

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
   *  API namespace to be sent with the person search query.
   */
  @property({ type: String }) apiNamespace: string = '';

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

  private async _doSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }

    const results = await Promise.all([this._doPersonSearch(searchTerm), this._doGroupSearch(searchTerm)]);
    const entities = [...(results[0]?.entities ?? []), ...(results[1]?.entities ?? [])];
    const odataCount = (results[0]?.odataCount ?? 0) + (results[1]?.odataCount ?? 0);
    return { entities: entities.sort(this.compare).slice(0, 8), count: odataCount };
  }

  private compare(a: Partial<Person | PeopleGroup>, b: Partial<Person | PeopleGroup>) {
    const aName = (a.type === 'PeopleGroup' ? a.Name : a.type === 'Person' ? `${a.FirstName}  ${a.LastName}` : a.Id) ?? 0;
    const bName = (b.type === 'PeopleGroup' ? b.Name : b.type === 'Person' ? `${b.FirstName}  ${b.LastName}` : b.Id) ?? 1;

    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  }

  private async _doPersonSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }
    try {
      const odataParts = ['$top=6', '$count=true', '$select=FirstName,LastName,Id,CompanyName'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `(startswith(FirstName, '${token}') or startswith(LastName, '${token}'))`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      const results = await this.api2.getAsync<Person>(`People?${odataParts.join('&')}`, this.apiNamespace);
      results.entities.forEach(p => (p.type = 'Person'));
      return results;
    } catch (error) {
      AppSnackbar.open(error);
    }
    return null;
  }

  private async _doGroupSearch(searchTerm: string) {
    if (!searchTerm) {
      return null;
    }
    try {
      const odataParts = ['$top=6', '$count=true', '$select=Name,Id,Description'];
      const searchTokens = getSearchTokens(searchTerm);
      if (searchTokens.length > 0) {
        const searchFilter = searchTokens.map((token: string) => `contains(Name, '${token}')`).join(' and ');
        odataParts.push(`$filter=${searchFilter}`);
      }
      const results = await this.api2.getAsync<PeopleGroup>(`PeopleGroups?${odataParts.join('&')}`, this.apiNamespace);
      results.entities.forEach(p => (p.type = 'PeopleGroup'));
      return results;
    } catch (error) {
      AppSnackbar.open(error);
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

  private _doSearchDebouncer = new Debouncer((searchTerm: string) => this._doSearch(searchTerm));

  private async onInput(term: string) {
    if (this.selected !== null) {
      this.setSelected(null);
    }
    this.searchTerm = term;
    this.menu.open = !!this.searchTerm;
    this.suggestions = [];
    this.count = 0;
    const result = await this._doSearchDebouncer.debounce(term);
    this.suggestions = result?.entities ?? [];
    this.count = result?.count ?? 0;
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    mwc-textfield {
      width: 100%;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    mwc-icon[selected],
    profile-picture[selected] {
      position: absolute;
      top: 16px;
      left: 16px;
    }

    mwc-icon {
      background-color: #7ab7ff;
      color: #fff;
    }

    mwc-icon[selected] {
      border-radius: 50%;
      --mdc-icon-size: 24px;
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
            >${peopleGroupIcons.get(this.selected['@odata.type'])?.icon ?? 'group_work'}</mwc-icon
          >`
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
            const selected = this.suggestions?.[selectedIndex] ?? null;
            this.setSelected(selected);
            this.textfield.value =
              (selected?.type === 'Person' ? `${selected?.FirstName} ${selected?.LastName}` : selected?.type === 'PeopleGroup' ? selected?.Name : '') ?? '';
          }
        }}
      >
        <mwc-linear-progress .closed=${!this.isLoading} indeterminate></mwc-linear-progress>
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
                    >${peopleGroupIcons.get(suggestion['@odata.type'])?.icon ?? 'group_work'}</mwc-icon
                  >
                </mwc-list-item>
              `
            : ''
        )}
        ${this.count === 0 && !!this.searchTerm && this.isLoading === false ? html`<div no-result>0 result for '${this.searchTerm}'</div>` : ''}
      </mwc-menu>
    `;
  }
}
