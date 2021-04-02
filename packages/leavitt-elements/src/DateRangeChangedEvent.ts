export class DateRangeChangedEvent extends Event {
  static eventType = 'date-range-changed';
  startDate: string;
  endDate: string;

  constructor(startDate: string, endDate: string, eventInitDict?: EventInit) {
    super(DateRangeChangedEvent.eventType, { bubbles: false, composed: true, ...eventInitDict });
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
