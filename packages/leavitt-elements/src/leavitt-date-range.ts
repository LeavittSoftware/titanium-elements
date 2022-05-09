import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import './mwc-datefield';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { DateField } from './mwc-datefield';
import { Select } from '@material/mwc-select';
import dayjs, { Dayjs, QUnitType } from 'dayjs/esm';
import quarterOfYear from 'dayjs/esm/plugin/quarterOfYear';
import { Debouncer } from '@leavittsoftware/titanium-helpers/lib/titanium-debouncer';
import { DateRangeChangedEvent } from './DateRangeChangedEvent';
import { DOMEvent } from './dom-event';

dayjs.extend(quarterOfYear);

const quarter = 'quarter' as QUnitType;
const today: Dayjs = dayjs();
const yesterday: Dayjs = today.subtract(1, 'day');
const lastWeek: Dayjs = today.subtract(1, 'week');
const lastMonth: Dayjs = today.subtract(1, 'month');
const lastQuarter: Dayjs = today.subtract(1, quarter);
const lastYear: Dayjs = today.subtract(1, 'year');

export const DateRanges = {
  today: { startDate: today.format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') },
  yesterday: { startDate: yesterday.format('YYYY-MM-DD'), endDate: yesterday.format('YYYY-MM-DD') },
  thisWeek: { startDate: today.startOf('week').format('YYYY-MM-DD'), endDate: today.endOf('week').format('YYYY-MM-DD') },
  thisMonth: { startDate: today.startOf('month').format('YYYY-MM-DD'), endDate: today.endOf('month').format('YYYY-MM-DD') },
  thisQuarter: { startDate: today.startOf(quarter).format('YYYY-MM-DD'), endDate: today.endOf(quarter).format('YYYY-MM-DD') },
  thisYear: { startDate: today.startOf('year').format('YYYY-MM-DD'), endDate: today.endOf('year').format('YYYY-MM-DD') },
  thisYearToDate: { startDate: today.startOf('year').format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') },
  lastWeek: { startDate: lastWeek.startOf('week').format('YYYY-MM-DD'), endDate: lastWeek.endOf('week').format('YYYY-MM-DD') },
  lastMonth: { startDate: lastMonth.startOf('month').format('YYYY-MM-DD'), endDate: lastMonth.endOf('month').format('YYYY-MM-DD') },
  lastQuarter: { startDate: lastQuarter.startOf(quarter).format('YYYY-MM-DD'), endDate: lastQuarter.endOf(quarter).format('YYYY-MM-DD') },
  lastYear: { startDate: lastYear.startOf('year').format('YYYY-MM-DD'), endDate: lastYear.endOf('year').format('YYYY-MM-DD') },
  lastYearToDate: { startDate: lastYear.startOf('year').format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') },
  allTime: { startDate: '', endDate: '' },
};
export type DateRangeType = keyof typeof DateRanges | 'custom';

@customElement('leavitt-date-range')
export class LeavittDateRangeElement extends LitElement {
  @property({ type: String }) range: DateRangeType = 'custom';
  @property({ type: String }) startDate: string = '';
  @property({ type: String }) endDate: string = '';

  @query('mwc-datefield[start-date]') startDateField: DateField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('mwc-datefield[end-date]') endDateField: DateField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  async reset() {
    if (this.startDateField) {
      this.startDateField.isUiValid = true;
      this.startDateField.mdcFoundation?.setValid?.(true);
      await this.startDateField.layout();
    }

    if (this.endDateField) {
      this.endDateField.isUiValid = true;
      this.endDateField.mdcFoundation?.setValid?.(true);
      await this.endDateField.layout();
    }
  }

  async layout() {
    return Promise.all([this.startDateField.layout(), this.endDateField.layout()]);
  }

  private _checkValidity() {
    if (!!this.startDate && !!this.endDate && dayjs(this.startDate).isAfter(dayjs(this.endDate))) {
      this.startDateField.setCustomValidity('Start date must be before end date');
      this.startDateField.reportValidity();
      return false;
    }
    this.startDateField.setCustomValidity('');
    this.startDateField.reportValidity();
    return true;
  }

  private _dispatchDateRangeChangeEventDebouncer = new Debouncer(
    () =>
      Promise.resolve().then(() => {
        if (this._checkValidity()) {
          this.dispatchEvent(new DateRangeChangedEvent(this.range, this.startDate, this.endDate));
        }
      }),
    1000
  );

  static styles = css`
    :host {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: 'select start end';
    }

    mwc-select {
      grid-area: select;
    }

    mwc-datefield[start-date] {
      grid-area: start;
    }

    mwc-datefield[end-date] {
      grid-area: end;
    }

    @media (max-width: 1050px) {
      :host {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          'select select'
          'start end';
      }
    }

    @media (max-width: 450px) {
      :host {
        grid-template-columns: 1fr;
        grid-template-areas:
          'select'
          'start'
          'end';
      }
    }
  `;

  render() {
    return html`
      <mwc-select
        icon="date_range"
        .value=${this.range}
        outlined
        @change=${async (event: DOMEvent<Select>) => {
          this.range = event.target.value as DateRangeType;
          const date = DateRanges[event.target.value];

          if (this.range !== 'custom') {
            this.startDate = date.startDate ?? '';
            this.endDate = date.endDate ?? '';

            await this.startDateField.updateComplete;
            this.startDateField.layout();

            await this.endDateField.updateComplete;
            this.endDateField.layout();
          }

          if (this._checkValidity()) {
            this.dispatchEvent(new DateRangeChangedEvent(this.range, this.startDate, this.endDate));
          }
        }}
      >
        <mwc-list-item graphic="icon" value="custom">Custom Range</mwc-list-item>
        <mwc-list-item graphic="icon" value="today">Today</mwc-list-item>
        <mwc-list-item graphic="icon" value="thisWeek">This week</mwc-list-item>
        <mwc-list-item graphic="icon" value="thisMonth">This month</mwc-list-item>
        <mwc-list-item graphic="icon" value="thisQuarter">This quarter</mwc-list-item>
        <mwc-list-item graphic="icon" value="thisYear">This year</mwc-list-item>
        <mwc-list-item graphic="icon" value="thisYearToDate">This year to date</mwc-list-item>
        <mwc-list-item graphic="icon" value="lastWeek">Last week</mwc-list-item>
        <mwc-list-item graphic="icon" value="lastMonth">Last month</mwc-list-item>
        <mwc-list-item graphic="icon" value="lastQuarter">Last quarter</mwc-list-item>
        <mwc-list-item graphic="icon" value="lastYear">Last year</mwc-list-item>
        <mwc-list-item graphic="icon" value="lastYearToDate">Last year to date</mwc-list-item>
        <mwc-list-item graphic="icon" value="yesterday">Yesterday</mwc-list-item>
        <mwc-list-item graphic="icon" value="allTime">All time</mwc-list-item>
      </mwc-select>

      <mwc-datefield
        start-date
        label="Start date"
        value=${this.startDate ?? ''}
        @change=${(event: DOMEvent<DateField>) => {
          const value = event.target.value;
          if (this.startDate !== value) {
            this.startDate = value;
            this.range = 'custom';
            this._dispatchDateRangeChangeEventDebouncer.debounce();
          }
        }}
      ></mwc-datefield>

      <mwc-datefield
        end-date
        label="End date"
        value=${this.endDate ?? ''}
        @change=${(event: DOMEvent<DateField>) => {
          const value = event.target.value;
          if (this.endDate !== value) {
            this.endDate = value;
            this.range = 'custom';
            this._dispatchDateRangeChangeEventDebouncer.debounce();
          }
        }}
      ></mwc-datefield>
    `;
  }
}
