import {Reducer, ReducersMapObject, StoreCreator} from 'redux/index';

export const lazyReducerEnhancer = function<T>(
    combineReducers: (reducers: ReducersMapObject<T, any>) => Reducer<T>) {
  return (nextCreator: StoreCreator) => {
    return (origReducer: Reducer<T>, preloadedState) => {
      let lazyReducers = {};
      const nextStore = nextCreator(origReducer, preloadedState);
      function addReducers(this: any, newReducers: ReducersMapObject<T, any>) {
        this.replaceReducer(combineReducers(
            lazyReducers = Object.assign({}, lazyReducers, newReducers)));
      }
      return Object.assign({}, nextStore, {addReducers});
    };
  };
};