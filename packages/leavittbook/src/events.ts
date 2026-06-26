export class SiteErrorEvent extends CustomEvent<string> {
  static eventName = 'site-error';
  constructor(message: string) {
    super(SiteErrorEvent.eventName, { bubbles: true, composed: true, detail: message });
  }
}
