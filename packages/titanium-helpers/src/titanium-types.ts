/**
 * use this type definition instead of `Function` type constructor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

/**
 * simple alias to save you keystrokes when defining JS typed object maps
 */
export type StringMap<T> = {
  [key: string]: T;
};
