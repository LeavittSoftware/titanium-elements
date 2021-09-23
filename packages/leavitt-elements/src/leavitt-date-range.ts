import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import './mwc-datefield';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { DateField } from './mwc-datefield';
import dayjs, { Dayjs, OpUnitType } from 'dayjs/esm';
import quarterOfYear from 'dayjs/esm/plugin/quarterOfYear';
import { Debouncer } from '@leavittsoftware/titanium-helpers';
import { DateRangeChangedEvent } from './DateRangeChangedEvent';

dayjs.extend(quarterOfYear);

const quarter = 'quarter' as OpUnitType;
const today: Dayjs = dayjs();
const yesterday: Dayjs = today.subtract(1, 'day');
const lastWeek: Dayjs = today.subtract(1, 'week');
const lastMonth: Dayjs = today.subtract(1, 'month');
const lastQuarter: Dayjs = today.subtract(1, quarter);
const lastYear: Dayjs = today.subtract(1, 'year');

const dates = {
  today: { startDate: today, endDate: today },
  yesterday: { startDate: yesterday, endDate: yesterday },
  thisWeek: { startDate: today.startOf('week'), endDate: today.endOf('week') },
  thisMonth: { startDate: today.startOf('month'), endDate: today.endOf('month') },
  thisQuarter: { startDate: today.startOf(quarter), endDate: today.endOf(quarter) },
  thisYear: { startDate: today.startOf('year'), endDate: today.endOf('year') },
  thisYearToDate: { startDate: today.startOf('year'), endDate: today },
  lastWeek: { startDate: lastWeek.startOf('week'), endDate: lastWeek.endOf('week') },
  lastMonth: { startDate: lastMonth.startOf('month'), endDate: lastMonth.endOf('month') },
  lastQuarter: { startDate: lastQuarter.startOf(quarter), endDate: lastQuarter.endOf(quarter) },
  lastYear: { startDate: lastYear.startOf('year'), endDate: lastYear.endOf('year') },
  lastYearToDate: { startDate: lastYear.startOf('year'), endDate: today },
};

@customElement('leavitt-date-range')
export class LeavittDateRangeElement extends LitElement {
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

  private _determineRange = (startDate, endDate) => {
    let range = '';
    Object.keys(dates).some(key => {
      if (dates[key].startDate.format('YYYY-MM-DD') === startDate && dates[key].endDate.format('YYYY-MM-DD') === endDate) {
        range = key;
        return true;
      }
      return false;
    });
    return range;
  };

  private _checkValidity() {
    if (!this.startDate || !this.endDate) {
      return false;
    }

    if (dayjs(this.startDate).isAfter(dayjs(this.endDate))) {
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
          this.dispatchEvent(new DateRangeChangedEvent(this.startDate, this.endDate));
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
        .value=${this._determineRange(this.startDate, this.endDate)}
        outlined
        @change=${async event => {
          const date = dates[event.target.value];
          if (date && (!dayjs(this.startDate).isSame(date.startDate) || !dayjs(this.endDate).isSame(date.endDate))) {
            this.startDate = date.startDate.format('YYYY-MM-DD');
            this.endDate = date.endDate.format('YYYY-MM-DD');
            await this.startDateField.updateComplete;
            await this.endDateField.updateComplete;
            this.startDateField.layout();
            this.endDateField.layout();
            if (this._checkValidity()) {
              this.dispatchEvent(new DateRangeChangedEvent(this.startDate, this.endDate));
            }
          }
        }}
      >
        <mwc-list-item graphic="icon" value="">Custom Range</mwc-list-item>
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
      </mwc-select>

      <mwc-datefield
        start-date
        label="Start date"
        value=${this.startDate}
        @change=${event => {
          const value = event.target.value;
          if (this.startDate !== value) {
            this.startDate = value;
            this._dispatchDateRangeChangeEventDebouncer.debounce();
          }
        }}
      ></mwc-datefield>

      <mwc-datefield
        end-date
        label="End date"
        value=${this.endDate}
        @change=${event => {
          const value = event.target.value;
          if (this.endDate !== value) {
            this.endDate = value;
            this._dispatchDateRangeChangeEventDebouncer.debounce();
          }
        }}
      ></mwc-datefield>
    `;
  }
}
