export type Constructor<T> = { new (...args: any[]): T };
export const LoadWhile = <C extends Constructor<HTMLElement>>(base: C) =>
  class extends base {
    static get properties() {
      return {
        isLoading: { type: Boolean },
      };
    }
    /**
     *  @internal
     */
    #promiseCount = 0;
    isLoading: boolean;
    async loadWhile(promise: Promise<unknown>) {
      this.isLoading = true;
      this.#promiseCount++;
      try {
        await promise;
      } catch {
        // Do nothing, this will be handled by others
      } finally {
        this.#promiseCount--;
        if (this.#promiseCount === 0) {
          this.isLoading = false;
        }
      }
    }
  };
