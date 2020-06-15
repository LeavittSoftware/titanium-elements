/**
 * @deprecated since version 2.1.2
 */

export function debounce<T, A>(callBack: (...args: A[]) => Promise<T>, interval: number) {
  let timer: number;
  let previousPromise: Promise<T>;
  return (...args: A[]) => {
    clearTimeout(timer);
    const deferred = new Promise<T>((resolve) => {
      timer = window.setTimeout(async () => {
        await previousPromise;
        previousPromise = deferred;
        resolve(callBack(...args));
      }, interval);
    });
    return deferred;
  };
}
