import { AnyFunction } from './titanium-types';

// tslint:disable: no-any
export const debounce = (callBack: AnyFunction, interval: number) => {
  let timer: number;
  let previousPromise: Promise<any> = Promise.resolve();
  return (...args): Promise<any> => {
    clearTimeout(timer);
    const tempPromise = new Promise(function(resolve) {
      timer = window.setTimeout(async () => {
        await previousPromise;
        previousPromise = tempPromise;
        resolve(callBack(...args));
      }, interval);
    });
    return tempPromise;
  };
};
