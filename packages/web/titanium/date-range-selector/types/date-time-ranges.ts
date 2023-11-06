import { DateRangeOption } from './date-range-option';
import { DateRangeTimeKey } from './date-range-time-key';
import dayjs, { Dayjs } from 'dayjs/esm';

const today: Dayjs = dayjs();

export const DateTimeRanges = new Map<DateRangeTimeKey, DateRangeOption>([
  [
    'lastTen',
    {
      name: 'Last ten minutes',
      startDate: today.subtract(10, 'minutes').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'timer',
    },
  ],
  [
    'lastFifteen',
    {
      name: 'Last fifteen minutes',
      startDate: today.subtract(15, 'minutes').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'timer',
    },
  ],
  [
    'lastThirty',
    {
      name: 'Last thirty minutes',
      startDate: today.subtract(30, 'minutes').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'timer',
    },
  ],
  [
    'lastHour',
    {
      name: 'Last hour',
      startDate: today.subtract(1, 'hour').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'alarm',
    },
  ],
  [
    'lastThree',
    {
      name: 'Last three hours',
      startDate: today.subtract(3, 'hour').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'alarm',
    },
  ],
  [
    'lastSix',
    {
      name: 'Last six hours',
      startDate: today.subtract(6, 'hour').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'alarm',
    },
  ],
  [
    'lastTwelve',
    {
      name: 'Last twelve hours',
      startDate: today.subtract(12, 'hour').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'schedule',
    },
  ],
  [
    'lastTwentyFour',
    {
      name: 'Last twenty-four hours',
      startDate: today.subtract(24, 'hour').format('YYYY-MM-DDTHH:mm'),
      endDate: today.format('YYYY-MM-DDTHH:mm'),
      icon: 'schedule',
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
