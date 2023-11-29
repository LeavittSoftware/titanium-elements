import dayjs from 'dayjs/esm';
import { DateRangeKey } from './date-range-key';
import { DateRanges } from './date-ranges';
import { DateRangeOption } from './date-range-option';

export function rangeLabel(range: DateRangeKey, startDate: string | null, endDate: string | null, prefix = 'Created', ranges = DateRanges) {
  if (range !== 'custom') {
    return `${prefix} ${ranges.get(range)?.name?.toLowerCase() ?? ''}`;
  } else {
    if (startDate && endDate) {
      return `${prefix} ${dayjs(startDate).format('MMM D, YYYY')} to ${dayjs(endDate).format('MMM D, YYYY')}`;
    }
    return endDate ? `${prefix} from ${dayjs(endDate).format('MMM D, YYYY')}` : `${prefix} to ${dayjs(startDate).format('MMM D, YYYY')}`;
  }
}

export function humanizeRange(rangeKey: string, startDate: string | null, endDate: string | null, ranges: Map<string, DateRangeOption> = DateRanges) {
  if (rangeKey !== 'custom') {
    return `${ranges.get(rangeKey)?.name ?? ''}`;
  } else {
    if (startDate && endDate) {
      return `${dayjs(startDate).format('MMM D, YYYY')} to ${dayjs(endDate).format('MMM D, YYYY')}`;
    }
    return endDate ? `Ending ${dayjs(endDate).format('MMM D, YYYY')}` : `Starting ${dayjs(startDate).format('MMM D, YYYY')}`;
  }
}
