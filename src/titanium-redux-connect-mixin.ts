/*
  If you are lazy loading any connected elements, then these elements must be
  able to lazily install their reducers. This is a store enhancer that
  enables that.
  Sample use (where you define your redux store, in store.js):
  import lazyReducerEnhancer from
  '../node_modules/pwa-helpers/lazy-reducer-enhancer.js'; import someReducer
  from './reducers/someReducer.js'; export const store = createStore( (state,
  action) => state, compose(lazyReducerEnhancer(combineReducers),
  applyMiddleware(thunk))
  );
  Then, in your page/element, you can lazy load a specific reducer with:
  store.addReducers({
    someReducer
  });
*/

type Constructable = new (...args: any[]) => any;

export interface ConnectMixinConstructor {
  new(...args: any[]): ConnectMixin;
}
export interface ConnectMixin {
  _stateChanged(state: any): void;
}

// export const connectMixin = (store) => (baseElement) => class extends
// baseElement {
export const connectMixin =
    <T extends Constructable>(store: any, superClass: T): T&
    ConnectMixinConstructor => class extends superClass {
  connectedCallback() {
    // Connect the element to the store.
    this.__storeUnsubscribe =
        store.subscribe(() => this._stateChanged(store.getState()));
    this._stateChanged(store.getState());
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }

  disconnectedCallback() {
    this.__storeUnsubscribe();

    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  __storeUnsubscribe = () => {};

  // This is called every time something is updated in the store.
  _stateChanged(_state) {
    throw new Error('_stateChanged() not implemented');
  }
};
