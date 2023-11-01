export class DateRangeChangedEvent extends Event {
  static eventType = 'date-range-changed';

  constructor(public range: string, public startDate: string, public endDate: string, eventInitDict?: EventInit) {
    super(DateRangeChangedEvent.eventType, { bubbles: false, composed: true, ...eventInitDict });
  }
}
