export class Debouncer<T, A> {
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
      const workResult = await this.work(...args);
      this._debounceResolve(workResult);
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
