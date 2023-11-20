import '@material/web/icon/icon';
import '@material/web/field/outlined-field';
import '@material/web/menu/menu';
import '@material/web/button/text-button';

import '@material/web/list/list';
import '@material/web/list/list-item';

import '../date-input/date-input';

import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import dayjs from 'dayjs/esm';
import { DateRangeOption } from './types/date-range-option';
import { DateTimeRanges } from './types/date-time-ranges';
import { DateRangeKey } from './types/date-range-key';
import { DateRangeTimeKey } from './types/date-range-time-key';
import { DateRanges } from './types/date-ranges';
import { TitaniumDateInput } from '../date-input/date-input';
import { DOMEvent } from '../types/dom-event';
import { Menu } from '@material/web/menu/internal/menu';
import { List } from '@material/web/list/internal/list';
import { humanizeRange } from './types/range-label';
import { redispatchEvent } from '@material/web/internal/controller/events';

/**
 *  Date range selector that allows selection from a list of pre-defined ranges or a custom range
 *
 *  @element titanium-date-range-selector
 *
 *  @fires date-range-changed - Fired when a range selection is made or cleared or the start or end date are changed to a valid combination
 *
 */
@customElement('titanium-date-range-selector')
export class TitaniumDateRangeSelector extends LitElement {
  /**
   *  The selected selected range.
   */
  @property({ type: String }) accessor range: string = 'custom';

  /**
  //  *  The selected start date.
  //  */
  @property({ type: String }) accessor startDate: string = '';

  // /**
  //  *  The selected end date.
  //  */
  @property({ type: String }) accessor endDate: string = '';

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) accessor label: string = '';

  /**
   *  Controls the display of the time picker.
   */
  @property({ type: Boolean }) accessor enableTime: boolean = false;

  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;

  /**
   *  Override default ranges with custom options. Needs to contain, at least, 'allTime'.
   */
  @property({ type: Object }) accessor customDateRanges: Map<string, DateRangeOption> | null = null;

  /**
   * Conveys additional information below the text field, such as how it should
   * be used.
   */
  @property({ attribute: 'supporting-text' }) accessor supportingText = '';

  @property() positioning: 'absolute' | 'fixed' | 'document' | 'popover' = 'popover';

  @query('titanium-date-input[start-date]') protected accessor startDateField: TitaniumDateInput;
  @query('md-menu') private accessor menu!: Menu | null;
  @query('md-list') private accessor list!: List | null;

  @state() private accessor proposedRange: string = 'custom';
  @state() private accessor proposedStartDate: string = '';
  @state() private accessor proposedEndDate: string = '';
  @state() private accessor open: boolean;
  @state() private accessor focused = false;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('range')) {
      const range = this.#getRange(this.range);
      if (range) {
        this.startDate = range.startDate;
        this.endDate = range.endDate;
      }
    }

    if (changedProps.has('endDate') || changedProps.has('startDate')) {
      this.range =
        Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).find(
          (o) => o[1].startDate === this.startDate && o[1].endDate === this.endDate
        )?.[0] || 'custom';
    }

    // Firefox does not support popover. Fall-back to using fixed.
    if (changedProps.has('positioning') && this.positioning === 'popover' && !this.showPopover) {
      this.positioning = 'fixed';
    }
  }

  /**
   * resets the validity of the start and end date inputs
   */
  async reset() {
    this.range = 'allTime';
  }

  #validateDates(startDate: string, endDate: string) {
    return !(!!startDate && !!endDate && dayjs(startDate).isAfter(dayjs(endDate)));
  }

  static styles = css`
    :host {
      display: flex;
      position: relative;
    }

    main {
      display: grid;
      grid:
        'list inputs'
        'buttons buttons' / 220px minmax(300px, 1fr);
      gap: 0 24px;
      margin: 0;
    }

    menu-actions {
      grid-area: buttons;
      display: flex;
      flex-direction: row;

      justify-content: flex-end;

      gap: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--md-sys-color-outline-variant);
    }

    md-outlined-field {
      width: 100%;
    }

    md-outlined-field md-icon {
      margin: 0 12px;
    }

    md-list {
      grid-area: list;
      --md-list-container-color: --md-sys-color-surface-container;

      max-height: 260px;
      overflow-y: auto;
      border-right: 1px solid var(--md-sys-color-outline-variant);
    }

    md-list-item[selected] {
      background-color: rgb(from var(--md-sys-color-primary) r g b / 0.18);
    }

    @-moz-document url-prefix() {
      md-list-item[selected] {
        background-color: var(--md-sys-color-outline-variant);
      }
    }

    input-container {
      grid-area: inputs;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;

      margin-right: 16px;
    }

    span[error] {
      font-size: 12px;
      margin-top: -18px;
      color: var(--md-sys-color-error, #b3261e);
    }

    [invisible] {
      visibility: hidden;
    }

    @media (max-width: 450px) {
      main {
        grid:
          'inputs'
          'list'
          'buttons' / 1fr;
        min-width: 280px;
      }

      input-container {
        margin: 24px 24px 0 24px;
      }

      md-list {
        max-height: 190px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }
    }
  `;

  #getRange(key: DateRangeKey | string) {
    if (!!this.customDateRanges) {
      return this.customDateRanges.get(key);
    }
    if (this.enableTime) {
      return DateTimeRanges.get(key as DateRangeTimeKey);
    }
    return DateRanges.get(key as DateRangeKey);
  }

  #scrollSelectedListItemIntoView(focusItemToo: boolean = false) {
    if (!this.list) {
      return;
    }

    const items = this.list.items;
    const selectedItem = items.find((o) => o.hasAttribute('selected')) || items[0];
    if (selectedItem) {
      this.list.scrollTop = selectedItem.offsetTop - 10;
      selectedItem.tabIndex = 0;
      if (focusItemToo) {
        selectedItem.focus();
      }
    }
  }

  render() {
    return html`
      <md-outlined-field
        aria-haspopup="listbox"
        role="combobox"
        part="field"
        id="field"
        tabindex=${this.disabled ? '-1' : '0'}
        aria-describedby="description"
        aria-controls="listbox"
        label=${this.label}
        .focused=${this.focused || this.open}
        populated
        .disabled=${this.disabled}
        has-end
        supporting-text=${this.supportingText}
        @keydown=${(event: KeyboardEvent) => {
          if (this.open || this.disabled || !this.menu) {
            return;
          }

          const isOpenKey = event.code === 'Space' || event.code === 'ArrowDown' || event.code === 'Enter';
          if (isOpenKey) {
            event.preventDefault();
            this.open = true;
            return;
          }
        }}
        @click=${() => (this.open = true)}
        @focus=${() => (this.focused = true)}
        @blur=${() => (this.focused = false)}
      >
        <!--  need to render &nbsp; so that line-height can apply and give it a
      non-zero height -->
        <!-- prettier-ignore -->
        <div>${humanizeRange(
          this.range,
          this.startDate,
          this.endDate,
          this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges
        ) || html`&nbsp;`}</div>

        <md-icon slot="start">${this.#getRange(this.range)?.icon || 'date_range'}</md-icon>
        <md-icon slot="end">${this.open ? 'arrow_drop_up' : 'arrow_drop_down'}</md-icon>
      </md-outlined-field>

      <!-- stay-open-on-focusout -->
      <md-menu
        default-focus="none"
        .positioning=${this.positioning}
        id="menu"
        anchor="field"
        .open=${this.open}
        @closing=${(e) => {
          this.open = false;
          redispatchEvent(this, e);
        }}
        @opening=${async (e) => {
          this.proposedEndDate = this.endDate;
          this.proposedStartDate = this.startDate;
          this.proposedRange = this.range;
          redispatchEvent(this, e);
          await this.updateComplete;
          this.#scrollSelectedListItemIntoView();
        }}
      >
        <main>
          <md-list>
            ${Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).map(
              (o) =>
                html`<md-list-item
                  type="button"
                  ?selected=${this.proposedRange === o[0]}
                  @click=${() => {
                    this.proposedRange = o[0];
                    const range = this.#getRange(o[0]);
                    if (range) {
                      this.proposedStartDate = range.startDate ?? '';
                      this.proposedEndDate = range.endDate ?? '';
                    }
                  }}
                  value=${o[0]}
                >
                  <md-icon slot="start">${o[1].icon}</md-icon>
                  <div slot="headline">${o[1].name}</div>
                </md-list-item>`
            )}
            <md-list-item type="button" ?selected=${this.proposedRange === 'custom'} @click=${() => (this.proposedRange = 'custom')} value="custom">
              <md-icon slot="start">date_range</md-icon>
              <div slot="headline">Custom range</div>
            </md-list-item>
          </md-list>
          <input-container>
            <titanium-date-input
              start-date
              label="From"
              type=${this.enableTime ? 'datetime-local' : 'date'}
              .value=${this.proposedStartDate ?? ''}
              @change=${async (e: DOMEvent<TitaniumDateInput>) => {
                this.proposedStartDate = e.target.value ?? '';
                this.proposedRange =
                  Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).find(
                    (o) => o[1].startDate === this.proposedStartDate && o[1].endDate === this.proposedEndDate
                  )?.[0] || 'custom';
                await this.updateComplete;
                this.#scrollSelectedListItemIntoView();
              }}
            ></titanium-date-input>

            <titanium-date-input
              end-date
              label="To"
              type=${this.enableTime ? 'datetime-local' : 'date'}
              .value=${this.proposedEndDate ?? ''}
              @change=${async (e: DOMEvent<TitaniumDateInput>) => {
                this.proposedEndDate = e.target.value ?? '';
                this.proposedRange =
                  Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).find(
                    (o) => o[1].startDate === this.proposedStartDate && o[1].endDate === this.proposedEndDate
                  )?.[0] || 'custom';
                await this.updateComplete;
                this.#scrollSelectedListItemIntoView();
              }}
            >
            </titanium-date-input>
            <span error ?invisible=${this.#validateDates(this.proposedStartDate, this.proposedEndDate)}>From date cannot start after To date</span>
          </input-container>
          <menu-actions
            ><md-text-button @click=${() => (this.open = false)}>Cancel</md-text-button>
            <md-text-button
              ?disabled=${this.startDate === this.proposedStartDate && this.endDate === this.proposedEndDate && this.proposedRange === this.range}
              @click=${() => {
                if (!this.#validateDates(this.proposedStartDate, this.proposedEndDate)) {
                  return;
                }
                this.startDate = this.proposedStartDate;
                this.endDate = this.proposedEndDate;
                this.range = this.proposedRange;
                this.dispatchEvent(new Event('change'));
                this.open = false;
              }}
              >Apply</md-text-button
            >
          </menu-actions>
        </main>
      </md-menu>
    `;
  }
}
