import dayjs, { Dayjs, QUnitType } from 'dayjs/esm';
import quarterOfYear from 'dayjs/esm/plugin/quarterOfYear';

import { DateRangeKey } from './date-range-key';
import { DateRangeOption } from './date-range-option';
dayjs.extend(quarterOfYear);

const today: Dayjs = dayjs();
const quarter = 'quarter' as QUnitType;
const yesterday: Dayjs = today.subtract(1, 'day');
const lastWeek: Dayjs = today.subtract(1, 'week');
const lastMonth: Dayjs = today.subtract(1, 'month');
const lastQuarter: Dayjs = today.subtract(1, 'quarter');
const lastYear: Dayjs = today.subtract(1, 'year');

export const DateRanges = new Map<DateRangeKey, DateRangeOption>([
  [
    'allTime',
    {
      name: 'All time',
      startDate: () => '',
      endDate: () => '',
      icon: 'watch_later',
    },
  ],
  [
    'today',
    {
      name: 'Today',
      startDate: () => today.format('YYYY-MM-DD'),
      endDate: () => today.format('YYYY-MM-DD'),
      icon: 'today',
    },
  ],
  [
    'thisWeek',
    {
      name: 'This week',
      startDate: () => today.startOf('week').format('YYYY-MM-DD'),
      endDate: () => today.endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'thisMonth',
    {
      name: 'This month',
      startDate: () => today.startOf('month').format('YYYY-MM-DD'),
      endDate: () => today.endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'thisQuarter',
    {
      name: 'This quarter',
      startDate: () => today.startOf(quarter).format('YYYY-MM-DD'),
      endDate: () => today.endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'thisYear',
    {
      name: 'This year',
      startDate: () => today.startOf('year').format('YYYY-MM-DD'),
      endDate: () => today.endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'thisYearToDate',
    {
      name: 'This year to date',
      startDate: () => today.startOf('year').format('YYYY-MM-DD'),
      endDate: () => today.format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'lastWeek',
    {
      name: 'Last week',
      startDate: () => lastWeek.startOf('week').format('YYYY-MM-DD'),
      endDate: () => lastWeek.endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'lastMonth',
    {
      name: 'Last month',
      startDate: () => lastMonth.startOf('month').format('YYYY-MM-DD'),
      endDate: () => lastMonth.endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'lastQuarter',
    {
      name: 'Last quarter',
      startDate: () => lastQuarter.startOf(quarter).format('YYYY-MM-DD'),
      endDate: () => lastQuarter.endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'lastYear',
    {
      name: 'Last year',
      startDate: () => lastYear.startOf('year').format('YYYY-MM-DD'),
      endDate: () => lastYear.endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'last12Months',
    {
      name: 'Last 12 months',
      startDate: () => today.add(-1, 'year').format('YYYY-MM-DD'),
      endDate: () => today.format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'lastYearToDate',
    {
      name: 'Last year to date',
      startDate: () => lastYear.startOf('year').format('YYYY-MM-DD'),
      endDate: () => today.format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'yesterday',
    {
      name: 'Yesterday',
      startDate: () => yesterday.format('YYYY-MM-DD'),
      endDate: () => yesterday.format('YYYY-MM-DD'),
      icon: 'event_repeat',
    },
  ],
]);
