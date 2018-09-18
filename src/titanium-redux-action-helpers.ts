import { StringMap, AnyFunction } from './titanium-types';

export type Action<T extends string = string, P = void> = P extends void ? Readonly<{ type: T }> : Readonly<{ type: T; payload: P }>;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

// conditional type for filtering actions in epics/effects
export type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType>? ActionUnion : never;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  const action = payload === undefined ? {type} : {type, payload};
  return action;
}