/**
 * use this type definition instead of `Function` type constructor
 */
// tslint:disable-next-line: no-any
export type AnyFunction = (...args: any[]) => any;

/**
 * simple alias to save you keystrokes when defining JS typed object maps
 */
export type StringMap<T> = {
  [key: string]: T;
};
