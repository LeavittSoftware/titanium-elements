import dayjs from 'dayjs/esm';
import { DateRangeKey } from './date-range-key';
import { DateRanges } from './date-ranges';

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
