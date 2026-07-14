/**
 * Return value that stops the routing pipeline (skip remaining matches and the page render).
 * Prefer this constant over the `'halt'` string when writing `before` handlers.
 */
export const ROUTE_HALT = 'halt' as const;

/** Return `ROUTE_HALT` / `'halt'` to stop the pipeline. Returning nothing continues. */
export type RouteHandlerResult = typeof ROUTE_HALT | void;

/**
 * A route with a pattern and a `before` handler but no page or redirect.
 * All middleware routes matching the destination run in declaration order before
 * the first matching page/redirect route; the pipeline continues automatically
 * unless a handler returns `ROUTE_HALT` / `'halt'`.
 */
export type MiddlewareRoute = {
  pattern: URLPattern;
  before: (params: Record<string, string>, url: URL) => RouteHandlerResult | Promise<RouteHandlerResult>;
};

export type PageRoute = {
  pattern: URLPattern;
  page: string;
  import: () => Promise<unknown>;
  before?: (params: Record<string, string>, url: URL) => RouteHandlerResult | Promise<RouteHandlerResult>;
};

export type RedirectRoute = {
  pattern: URLPattern;
  redirect: string | ((params: Record<string, string>) => string);
};

export type AppRoute = MiddlewareRoute | PageRoute | RedirectRoute;
