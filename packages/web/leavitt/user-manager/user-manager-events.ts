export class UserManagerUpdatedEvent extends Event {
  static eventName = 'um-updated';
  constructor() {
    super(UserManagerUpdatedEvent.eventName, { bubbles: false, composed: true });
  }
}
