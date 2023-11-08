import '@material/web/textfield/outlined-text-field';
import '@material/web/icon/icon';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import { redispatchEvent } from '@material/web/internal/controller/events';

import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import dayjs from 'dayjs/esm';
import { DOMEvent } from '../types/dom-event';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { MdOutlinedSelect } from '@material/web/select/outlined-select.js';
import { Debouncer } from '../helpers/helpers';
import { DateRangeChangedEvent } from './date-range-change-event';
import { DateRangeOption } from './types/date-range-option';
import { DateTimeRanges } from './types/date-time-ranges';
import { DateRangeKey } from './types/date-range-key';
import { DateRangeTimeKey } from './types/date-range-time-key';
import { DateRanges } from './types/date-ranges';

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
   *  Sets floating label value.
   */
  @property({ type: String }) accessor label: string = '';

  /**
   *  Controls the display of the time picker.
   */
  @property({ type: Boolean }) accessor enableTime: boolean = false;

  /**
   *  The selected selected range.
   */
  @property({ type: String }) accessor range: string = 'custom';

  /**
   *  Override default ranges with custom options. Needs to contain, at least, 'allTime'.
   */
  @property({ type: Object }) accessor customDateRanges: Map<string, DateRangeOption> | null = null;

  /**
   *  The selected start date.
   */
  @property({ type: String }) accessor startDate: string = '';

  /**
   *  The selected end date.
   */
  @property({ type: String }) accessor endDate: string = '';

  @query('md-outlined-text-field[start-date]') protected accessor startDateField: MdOutlinedTextField;
  @query('md-outlined-text-field[end-date]') protected accessor endDateField: MdOutlinedTextField;
  @query('md-outlined-select') protected accessor select!: MdOutlinedSelect;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('endDate') || changedProps.has('startDate')) {
      this.#dateChangedDebouncer.debounce();
    }
  }

  /**
   * resets the validity of the start and end date inputs
   */
  async reset() {
    this.range = 'allTime';
  }

  reportValidity() {
    if (!!this.startDate && !!this.endDate && dayjs(this.startDate).isAfter(dayjs(this.endDate))) {
      this.startDateField.setCustomValidity('From date must be before to date');
      this.startDateField.reportValidity();
      return false;
    }
    this.startDateField.setCustomValidity('');
    this.startDateField.reportValidity();
    return true;
  }

  #dateChangedDebouncer = new Debouncer(async () => {
    //Keep range selector up to date with new date selection
    this.range =
      Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).find(
        (o) => o[1].startDate === this.startDate && o[1].endDate === this.endDate
      )?.[0] || 'custom';
    this.#notifyChangeIfValid();
  }, 300);

  #notifyChangeIfValid() {
    if (this.reportValidity()) {
      /**
       * @ignore
       */
      this.dispatchEvent(new DateRangeChangedEvent(this.range, this.startDate, this.endDate));
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    md-outlined-select {
      flex-basis: 480px;
      flex-grow: 9999;
    }

    md-outlined-text-field {
      align-self: flex-start;
      flex-basis: calc(25% - 64px);
      flex-grow: 1;
    }

    @-moz-document url-prefix() {
      md-outlined-text-field {
        --md-outlined-field-top-space: 3px;
        --md-outlined-field-bottom-space: 3px;
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

  render() {
    return html`
      <md-outlined-select
        @opening=${(e) => redispatchEvent(this, e)}
        @opened=${(e) => redispatchEvent(this, e)}
        @closing=${(e) => redispatchEvent(this, e)}
        @closed=${(e) => redispatchEvent(this, e)}
        part="select"
        .label=${this.label}
        .value=${this.range}
        @request-selection=${async (e: DOMEvent<MdOutlinedSelect>) => {
          this.range = e.target.value as DateRangeKey;
          const date = this.#getRange(this.range);
          if (date && e.target.value !== 'custom') {
            this.startDate = date.startDate ?? '';
            this.endDate = date.endDate ?? '';
          }
        }}
      >
        <md-icon slot="leading-icon">${this.#getRange(this.range)?.icon || 'date_range'}</md-icon>
        <md-select-option value="custom">
          <md-icon slot="start">date_range</md-icon>
          <div slot="headline">Custom range</div>
        </md-select-option>
        ${Array.from(this.customDateRanges ? this.customDateRanges : this.enableTime ? DateTimeRanges : DateRanges).map(
          (o) =>
            html`<md-select-option value=${o[0]}>
              <md-icon slot="start">${o[1].icon}</md-icon>
              <div slot="headline">${o[1].name}</div>
            </md-select-option>`
        )}
      </md-outlined-select>

      <md-outlined-text-field
        part="startDate"
        start-date
        label="From"
        type=${this.enableTime ? 'datetime-local' : 'date'}
        .value=${this.startDate ?? ''}
        @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.startDate = e.target.value ?? '')}
      ></md-outlined-text-field>

      <md-outlined-text-field
        part="endDate"
        end-date
        label="To"
        type=${this.enableTime ? 'datetime-local' : 'date'}
        .value=${this.endDate ?? ''}
        @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.endDate = e.target.value ?? '')}
      ></md-outlined-text-field>
    `;
  }
}
