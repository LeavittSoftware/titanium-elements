import dayjs from 'dayjs/esm';
import { DateRangeKey, DateRanges } from './titanium-date-range-selector';

export function rangeLabel(range: DateRangeKey, startDate: string | null, endDate: string | null, prefix = 'Created', ranges = DateRanges) {
  if (range !== 'custom') {
    return `${prefix} ${ranges.get(range)?.name?.toLowerCase() ?? ''}`;
  } else {
    if (startDate && endDate) {
      return `${prefix} ${dayjs(startDate).format('MMM D, YYYY')} to ${dayjs(endDate).format('MMM D, YYYY')}`;
    }
    return endDate ? `${prefix} before ${dayjs(endDate).format('MMM D, YYYY')}` : `${prefix} after ${dayjs(startDate).format('MMM D, YYYY')}`;
  }
}
