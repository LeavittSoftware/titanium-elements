/** Return 'halt' to stop the routing pipeline (skip remaining matches and the page render). Returning nothing continues. */
export type RouteHandlerResult = 'halt' | void;

/**
 * A route with a pattern and a `before` handler but no page or redirect.
 * All middleware routes matching the destination run in declaration order before
 * the first matching page/redirect route; the pipeline continues automatically
 * unless a handler returns 'halt'.
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
