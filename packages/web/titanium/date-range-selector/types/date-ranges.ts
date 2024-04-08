import dayjs, { QUnitType } from 'dayjs/esm';
import quarterOfYear from 'dayjs/esm/plugin/quarterOfYear';

import { DateRangeKey } from './date-range-key';
import { DateRangeOption } from './date-range-option';
dayjs.extend(quarterOfYear);

const quarter = 'quarter' as QUnitType;

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
      startDate: () => dayjs().format('YYYY-MM-DD'),
      endDate: () => dayjs().format('YYYY-MM-DD'),
      icon: 'today',
    },
  ],
  [
    'thisWeek',
    {
      name: 'This week',
      startDate: () => dayjs().startOf('week').format('YYYY-MM-DD'),
      endDate: () => dayjs().endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'thisMonth',
    {
      name: 'This month',
      startDate: () => dayjs().startOf('month').format('YYYY-MM-DD'),
      endDate: () => dayjs().endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'thisQuarter',
    {
      name: 'This quarter',
      startDate: () => dayjs().startOf(quarter).format('YYYY-MM-DD'),
      endDate: () => dayjs().endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'thisYear',
    {
      name: 'This year',
      startDate: () => dayjs().startOf('year').format('YYYY-MM-DD'),
      endDate: () => dayjs().endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'thisYearToDate',
    {
      name: 'This year to date',
      startDate: () => dayjs().startOf('year').format('YYYY-MM-DD'),
      endDate: () => dayjs().format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'lastWeek',
    {
      name: 'Last week',
      startDate: () => dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
      endDate: () => dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
      icon: 'calendar_view_week',
    },
  ],
  [
    'lastMonth',
    {
      name: 'Last month',
      startDate: () => dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
      endDate: () => dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
      icon: 'calendar_month',
    },
  ],
  [
    'lastQuarter',
    {
      name: 'Last quarter',
      startDate: () => dayjs().subtract(1, 'quarter').startOf(quarter).format('YYYY-MM-DD'),
      endDate: () => dayjs().subtract(1, 'quarter').endOf(quarter).format('YYYY-MM-DD'),
      icon: 'event',
    },
  ],
  [
    'lastYear',
    {
      name: 'Last year',
      startDate: () => dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
      endDate: () => dayjs().subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'last12Months',
    {
      name: 'Last 12 months',
      startDate: () => dayjs().add(-1, 'year').format('YYYY-MM-DD'),
      endDate: () => dayjs().format('YYYY-MM-DD'),
      icon: 'calendar_today',
    },
  ],
  [
    'lastYearToDate',
    {
      name: 'Last year to date',
      startDate: () => dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
      endDate: () => dayjs().format('YYYY-MM-DD'),
      icon: 'calendar_view_day',
    },
  ],
  [
    'yesterday',
    {
      name: 'Yesterday',
      startDate: () => dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      endDate: () => dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      icon: 'event_repeat',
    },
  ],
]);
