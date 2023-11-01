export class PendingStateEvent extends CustomEvent<{ promise: Promise<unknown> }> {
    static eventType = 'pending-state';
    constructor(promise: Promise<unknown>) {
      super(PendingStateEvent.eventType, { bubbles: true, composed: true, detail: { promise: promise } });
    }
  }
  