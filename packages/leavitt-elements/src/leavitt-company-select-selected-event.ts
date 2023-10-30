import { Company } from '@leavittsoftware/lg-core-typescript/lg.net.core';

export class LeavittCompanySelectSelectedEvent extends Event {
  static eventType = 'selected';
  company: Partial<Company | null>;

  constructor(company: Partial<Company | null>, eventInitDict?: EventInit) {
    super(LeavittCompanySelectSelectedEvent.eventType, eventInitDict);
    this.company = company;
  }
}
