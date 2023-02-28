import '@material/mwc-select';
import '@leavittsoftware/titanium-icon';
import '@material/mwc-list/mwc-list-item';
import '@leavittsoftware/leavitt-elements/lib/mwc-datefield';

import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { DateField } from '@leavittsoftware/leavitt-elements/src/mwc-datefield';
import { Select } from '@material/mwc-select';
import dayjs, { Dayjs, QUnitType } from 'dayjs/esm';
import quarterOfYear from 'dayjs/esm/plugin/quarterOfYear';
import { Debouncer } from '@leavittsoftware/titanium-helpers/lib/titanium-debouncer';
import { DateRangeChangedEvent } from './date-range-change-event';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/src/dom-event';

dayjs.extend(quarterOfYear);

const quarter = 'quarter' as QUnitType;
const today: Dayjs = dayjs();
const yesterday: Dayjs = today.subtract(1, 'day');
const lastWeek: Dayjs = today.subtract(1, 'week');
const lastMonth: Dayjs = today.subtract(1, 'month');
const lastQuarter: Dayjs = today.subtract(1, 'quarter');
const lastYear: Dayjs = today.subtract(1, 'year');

export type DateRangeKey =
  | 'today'
  | 'yesterday'
  | 'thisWeek'
  | 'thisMonth'
  | 'thisQuarter'
  | 'thisYear'
  | 'thisYearToDate'
  | 'lastWeek'
  | 'lastMonth'
  | 'lastQuarter'
  | 'lastYear'
  | 'last12Months'
  | 'lastYearToDate'
  | 'allTime'
  | 'custom';
export type DateRangeOption = { startDate: string; endDate: string; icon: string; name: string; isDefault?: boolean };
export const DateRanges = new Map<DateRangeKey, DateRangeOption>([
  [
    'today',
    {
      name: 'Today',
      startDate: today.format('YYYY-MM-DD'),
      endDate: today.format('YYYY-MM-DD'),
      icon: 'today',
    },
  ],
  [
    'thisWeek',
    {
      name: 'This week',
      startDate: today.startOf('week').format('YYYY-MM-DD'),
      endDate: today.endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'thisMonth',
    {
      name: 'This month',
      startDate: today.startOf('month').format('YYYY-MM-DD'),
      endDate: today.endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'thisQuarter',
    {
      name: 'This quarter',
      startDate: today.startOf(quarter).format('YYYY-MM-DD'),
      endDate: today.endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'thisYear',
    {
      name: 'This year',
      startDate: today.startOf('year').format('YYYY-MM-DD'),
      endDate: today.endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'thisYearToDate',
    {
      name: 'This year to date',
      startDate: today.startOf('year').format('YYYY-MM-DD'),
      endDate: today.format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'lastWeek',
    {
      name: 'Last week',
      startDate: lastWeek.startOf('week').format('YYYY-MM-DD'),
      endDate: lastWeek.endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'lastMonth',
    {
      name: 'Last month',
      startDate: lastMonth.startOf('month').format('YYYY-MM-DD'),
      endDate: lastMonth.endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'lastQuarter',
    {
      name: 'Last quarter',
      startDate: lastQuarter.startOf(quarter).format('YYYY-MM-DD'),
      endDate: lastQuarter.endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'lastYear',
    {
      name: 'Last year',
      startDate: lastYear.startOf('year').format('YYYY-MM-DD'),
      endDate: lastYear.endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'last12Months',
    {
      name: 'Last 12 months',
      startDate: today.add(-1, 'year').format('YYYY-MM-DD'),
      endDate: today.format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'lastYearToDate',
    {
      name: 'Last year to date',
      startDate: lastYear.startOf('year').format('YYYY-MM-DD'),
      endDate: today.format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'yesterday',
    {
      name: 'Yesterday',
      startDate: yesterday.format('YYYY-MM-DD'),
      endDate: yesterday.format('YYYY-MM-DD'),
      icon: 'event_repeat',
    },
  ],
  [
    'allTime',
    {
      name: 'All time',
      startDate: '',
      endDate: '',
      icon: 'watch_later',
    },
  ],
]);

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
  @property({ type: String }) label: string = '';

  /**
   *  The selected selected range.
   */
  @property({ type: String }) range: string = 'custom';

  /**
   *  Override default ranges with custom options. Needs to contain, at least, 'allTime'.
   */
  @property({ type: Object }) customDateRanges: Map<string, DateRangeOption> | null = null;

  /**
   *  The selected start date.
   */
  @property({ type: String }) startDate: string = '';

  /**
   *  The selected end date.
   */
  @property({ type: String }) endDate: string = '';

  @property({ type: String, reflect: true }) protected size: 'medium' | 'small' | undefined = undefined;
  @query('mwc-datefield[start-date]') protected startDateField: DateField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('mwc-datefield[end-date]') protected endDateField: DateField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('mwc-select') protected select!: Select;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('endDate') || changedProps.has('startDate')) {
      this.#dateChangedDebouncer.debounce();
    }
  }

  firstUpdated() {
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        this.size = cr.width < 380 ? 'small' : cr.width < 580 ? 'medium' : undefined;
      }
    });

    ro.observe(this);
  }

  /**
   * resets the validity of the start and end date inputs
   */
  async reset() {
    this.range = 'allTime';
  }

  /**
   * forces layout on all inputs
   */
  async layout() {
    return Promise.all([this.startDateField.layout(), this.endDateField.layout(), this.select.layout()]);
  }

  reportValidity() {
    if (!!this.startDate && !!this.endDate && dayjs(this.startDate).isAfter(dayjs(this.endDate))) {
      this.startDateField.setCustomValidity('Start date must be before end date');
      this.startDateField.reportValidity();
      return false;
    }
    this.startDateField.setCustomValidity('');
    this.startDateField.reportValidity();
    return true;
  }

  #dateChangedDebouncer = new Debouncer(async () => {
    //Keep range selector up to date with new date selection
    this.range = Array.from(this.customDateRanges ?? DateRanges).find(o => o[1].startDate === this.startDate && o[1].endDate === this.endDate)?.[0] || 'custom';
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

    :host([size='medium']) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'select select'
        'start end';
    }

    :host([size='small']) {
      grid-template-columns: 1fr;
      grid-template-areas:
        'select'
        'start'
        'end';
    }
  `;

  #getRange(key: DateRangeKey | string) {
    return !!this.customDateRanges ? this.customDateRanges.get(key) : DateRanges.get(key as DateRangeKey);
  }

  render() {
    return html`
      <mwc-select
        .label=${this.label}
        icon=${this.#getRange(this.range)?.icon || 'date_range'}
        .value=${this.range}
        outlined
        @selected=${async (event: DOMEvent<Select>) => {
          this.range = event.target.value as DateRangeKey;
          const date = this.#getRange(this.range);
          if (date && event.target.value !== 'custom') {
            this.startDate = date.startDate ?? '';
            this.endDate = date.endDate ?? '';
          }
        }}
      >
        <mwc-list-item graphic="icon" value="custom">
          <titanium-icon slot="graphic" icon="date_range"></titanium-icon>
          Custom range</mwc-list-item
        >
        ${Array.from(this.customDateRanges ?? DateRanges).map(
          o => html`<mwc-list-item graphic="icon" value=${o[0]}>
            <titanium-icon slot="graphic" icon=${o[1].icon}></titanium-icon>
            ${o[1].name}</mwc-list-item
          >`
        )}
      </mwc-select>

      <mwc-datefield
        start-date
        label="After"
        value=${this.startDate ?? ''}
        @change=${(e: DOMEvent<DateField>) => (this.startDate = e.target.value ?? '')}
      ></mwc-datefield>
      <mwc-datefield
        end-date
        label="Before"
        value=${this.endDate ?? ''}
        @change=${(e: DOMEvent<DateField>) => (this.endDate = e.target.value ?? '')}
      ></mwc-datefield>
    `;
  }
}
