export function notNull<T>(val: T | null): val is T {
  return val !== null;
}
