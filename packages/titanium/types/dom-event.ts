export interface DOMEvent<T extends EventTarget> extends Event {
  readonly target: T;
}
