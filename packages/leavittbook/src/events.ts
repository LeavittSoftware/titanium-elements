export class ChangePathEvent extends CustomEvent<{ path: string }> {
  static eventName = 'change-route';
  constructor(path: string) {
    super(ChangePathEvent.eventName, { bubbles: true, composed: true, detail: { path: path } });
  }
}

export class RedirectPathEvent extends CustomEvent<{ path: string }> {
  static eventName = 'redirect-route';
  constructor(path: string) {
    super(RedirectPathEvent.eventName, { bubbles: true, composed: true, detail: { path: path } });
  }
}

export class SiteErrorEvent extends CustomEvent<string> {
  static eventName = 'site-error';
  constructor(message: string) {
    super(SiteErrorEvent.eventName, { bubbles: true, composed: true, detail: message });
  }
}
