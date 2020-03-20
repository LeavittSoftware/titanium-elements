// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new (...args: any[]): T };
const LoadWhile = <C extends Constructor<HTMLElement>>(base: C) =>
  class extends base {
    static get properties() {
      return {
        isLoading: { type: Boolean },
      };
    }
    _promiseCount = 0;
    isLoading: boolean;
    async loadWhile(promise: Promise<unknown>) {
      this.isLoading = true;
      this._promiseCount++;
      try {
        await promise;
      } catch (error) {
      } finally {
        this._promiseCount--;
        if (this._promiseCount === 0) {
          this.isLoading = false;
        }
      }
    }
  };
export default LoadWhile;
