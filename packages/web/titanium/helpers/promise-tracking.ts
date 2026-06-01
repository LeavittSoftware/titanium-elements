/**
 * Decorates a reactive boolean accessor so that calling the generated method
 * sets the property to `true` while the supplied promise is pending, and
 * back to `false` once it resolves or rejects.
 *
 * Errors are caught so the caller's `await` never rejects (execution is not
 * halted at the call site), but the error is forwarded to the global
 * `unhandledrejection` handler so it still surfaces in the console / error
 * reporting tools and isn't silently swallowed.
 *
 * Reentrancy: if the method is called multiple times concurrently, the
 * property only flips back to `false` after ALL outstanding promises settle.
 *
 * Because the method name is a runtime string, TypeScript can't see it on
 * the host class. Consumers add a one-line `declare` next to the accessor.
 *
 * @param methodName The name of the method to add to the host prototype.
 *
 * @example
 * ```ts
 * \@promiseTracking('trackLoadingPromise')
 * \@state() accessor isLoading = false;
 * declare trackLoadingPromise: (p: Promise<unknown>) => Promise<void>;
 *
 * await this.trackLoadingPromise(api.load());
 * ```
 */
export function promiseTracking(methodName: string) {
  return function (target: object, propertyKey: string | symbol, _descriptor: PropertyDescriptor): void {
    const counterKey = Symbol(`__${String(propertyKey)}_count__`);

    Object.defineProperty(target, methodName, {
      configurable: true,
      writable: true,
      value: async function (this: any, promise: Promise<unknown>) {
        this[counterKey] = (this[counterKey] ?? 0) + 1;
        this[propertyKey] = true;
        try {
          await promise;
        } catch (err) {
          // Forward as an unhandled rejection so window.onunhandledrejection
          // and dev tools surface it, but don't reject this method's promise
          // (so callers' awaits don't throw and stop execution).
          Promise.reject(err);
        } finally {
          this[counterKey]--;
          if (this[counterKey] === 0) {
            this[propertyKey] = false;
          }
        }
      },
    });
  };
}
