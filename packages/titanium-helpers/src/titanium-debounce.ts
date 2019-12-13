/**
 * @deprecated since version 2.1.2
 */
export function debounce<T, A>(callBack: (...args: A[]) => Promise<T>, interval: number) {
  let timer: number;
  let previousPromise: Promise<T>;
  return (...args: A[]) => {
    clearTimeout(timer);
    const deferred = new Promise<T>(resolve => {
      timer = window.setTimeout(async () => {
        await previousPromise;
        previousPromise = deferred;
        resolve(callBack(...args));
      }, interval);
    });
    return deferred;
  };
}

export class Debounce<T, A> {
  private _debouncePromise: Promise<T> | undefined;
  private _debounceResolve: { (arg0: T): void; (value?: T | PromiseLike<T> | undefined): void };
  private timer: number = 0;
  private work: (...args: A[]) => Promise<T>;
  private interval: number;

  constructor(promise: (...args: A[]) => Promise<T>, interval: number = 300) {
    this.work = promise;
    this.interval = interval;
  }

  /**
   * Returns the same pending promise each time called until interval expires.
   *
   * When the interval expires, the work promise is executed with the args from the latest call
   * to debounce. Then all pending promises are resolved with the value from the work promise.
   *
   */
  debounce(...args: A[]) {
    clearTimeout(this.timer);
    this.timer = window.setTimeout(async () => {
      this._debounceResolve(await this.work(...args));
      this._debouncePromise = undefined;
    }, this.interval);

    if (!this._debouncePromise) {
      this._debouncePromise = new Promise<T>(async res => {
        this._debounceResolve = res;
      });
    }
    return this._debouncePromise;
  }
}
