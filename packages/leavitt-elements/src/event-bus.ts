export type CrudEventTypes = 'Add' | 'Update' | 'Remove';

export type EventCallback<TArg> = (arg: TArg) => void;

interface Subscription<TEntityTypes, TEventTypes> {
  entityType: TEntityTypes;
  eventTypes: TEventTypes | 'All';
  callback: EventCallback<unknown>;
}

export class EventBus<TEntityTypes, TEventTypes> {
  #subscribers: Array<Subscription<TEntityTypes, TEventTypes>> = [];

  subscribe<TArg>(entityType: TEntityTypes | TEntityTypes[], eventTypes: TEventTypes | TEventTypes[], callback: EventCallback<TArg>) {
    if (Array.isArray(entityType)) {
      entityType.forEach(o => this.subscribe(o, eventTypes, callback));
    } else {
      if (Array.isArray(eventTypes)) {
        eventTypes.forEach(o => this.subscribe(entityType, o, callback));
      } else {
        this.#addSubscription(entityType, eventTypes, callback);
      }
    }
  }

  subscribeAll(entityType: TEntityTypes | TEntityTypes[], callback: () => void) {
    if (Array.isArray(entityType)) {
      entityType.forEach(o => this.#addSubscription(o, 'All', callback));
    } else {
      this.#addSubscription(entityType, 'All', callback);
    }
  }

  #addSubscription(entityType: TEntityTypes, eventTypes: TEventTypes | 'All', callback: EventCallback<unknown>) {
    const subscription: Subscription<TEntityTypes, TEventTypes> = {
      entityType: entityType,
      eventTypes,
      callback,
    };
    this.#subscribers.push(subscription);
  }

  unsubscribe(entityType: TEntityTypes | TEntityTypes[], eventTypes: TEventTypes | TEventTypes[], callback: EventCallback<TEntityTypes>) {
    if (Array.isArray(entityType)) {
      entityType.forEach(o => this.unsubscribe(o, eventTypes, callback));
    } else {
      if (Array.isArray(eventTypes)) {
        eventTypes.forEach(o => this.unsubscribe(entityType, o, callback));
      } else {
        this.#removeSubscription(entityType, eventTypes, callback);
      }
    }
  }

  #removeSubscription(entityType: TEntityTypes, eventTypes: TEventTypes, callback: EventCallback<TEntityTypes>) {
    this.#subscribers = this.#subscribers.filter(s => s.callback !== callback || s.entityType !== entityType || s.eventTypes !== eventTypes);
  }

  dispatch<TArg>(entityType: TEntityTypes, eventTypes: TEventTypes, object?: TArg) {
    setTimeout(
      () =>
        this.#subscribers.filter(s => s.entityType === entityType && (s.eventTypes === 'All' || s.eventTypes === eventTypes)).forEach(s => s.callback(object)),
      0
    );
  }
}
