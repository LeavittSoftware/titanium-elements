export function notUndefined<T>(val: T | undefined): val is T {
  return typeof val !== 'undefined';
}
