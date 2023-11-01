export function notNullOrUndefined<T>(val: T | null | undefined): val is T {
  return val !== null || typeof val !== 'undefined';
}
