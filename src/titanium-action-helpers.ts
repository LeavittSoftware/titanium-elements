/**
 * use this type definition instead of `Function` type constructor
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * simple alias to save you keystrokes when defining JS typed object maps
 */
export type StringMap<T> = {
  [key: string]: T
};

export type Action<T extends string = string, P = void> = P extends void ? Readonly<{type: T}>: Readonly<{type: T; payload: P}>;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

// conditional type for filtering actions in epics/effects
export type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType>? ActionUnion : never;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  const action = payload === undefined ? {type} : {type, payload};
  return action;
}