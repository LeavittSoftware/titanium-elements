export type CrudEventTypes = 'Add' | 'Update' | 'Remove';

export type EventCallback<TArg> = (arg: TArg) => void;

interface Subscription<TEntityTypes, TEventTypes> {
  entityType: TEntityTypes;
  eventTypes: TEventTypes | 'All';
  callback: EventCallback<unknown>;
}

export class EventBus<TEntityTypes, TEventTypes> {
  private _subscribers: Array<Subscription<TEntityTypes, TEventTypes>> = [];

  subscribe<TArg>(entityType: TEntityTypes, eventTypes: TEventTypes, callback: EventCallback<TArg>) {
    this._addSubscription(entityType, eventTypes, callback);
  }

  subscribeAll(entityType: TEntityTypes | TEntityTypes[], callback: () => void) {
    if (Array.isArray(entityType)) {
      entityType.forEach(o => this._addSubscription(o, 'All', callback));
    } else {
      this._addSubscription(entityType, 'All', callback);
    }
  }

  private _addSubscription(entityType: TEntityTypes, eventTypes: TEventTypes | 'All', callback: EventCallback<unknown>) {
    const subscription: Subscription<TEntityTypes, TEventTypes> = {
      entityType: entityType,
      eventTypes,
      callback,
    };
    this._subscribers.push(subscription);
  }

  unsubscribe(entityType: TEntityTypes | TEntityTypes[], eventTypes: TEventTypes, callback: EventCallback<TEntityTypes>) {
    if (Array.isArray(entityType)) {
      entityType.forEach(o => this._removeSubscription(o, eventTypes, callback));
    } else {
      this._removeSubscription(entityType, eventTypes, callback);
    }
  }

  private _removeSubscription(entityType: TEntityTypes, eventTypes: TEventTypes, callback: EventCallback<TEntityTypes>) {
    this._subscribers = this._subscribers.filter(s => s.callback !== callback || s.entityType !== entityType || s.eventTypes !== eventTypes);
  }

  dispatch<TArg>(entityType: TEntityTypes, eventTypes: TEventTypes, object?: TArg) {
    this._subscribers.filter(s => s.entityType === entityType && (s.eventTypes === 'All' || s.eventTypes === eventTypes)).forEach(s => s.callback(object));
  }
}
