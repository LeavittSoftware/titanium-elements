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

/** A matched route together with the params pulled out of its pattern. */
export type RouteMatch<T extends AppRoute = AppRoute> = {
  route: T;
  params: Record<string, string>;
};

/** The URL to route, after redirects, and the routes to execute for it. */
export type ResolvedRoute = {
  url: URL;
  matches: RouteMatch<MiddlewareRoute | PageRoute>[];
};

/** Guards against a redirect cycle spinning the tab forever. */
const MAX_REDIRECT_HOPS = 10;

/**
 * Set only while `resolveRoute` rewrites the address bar, so `getInterceptableUrl`
 * can tell the router's own rewrite apart from a real navigation. Module-private on
 * purpose: the two halves of this must never be separated by a consumer.
 */
let isRewritingUrl = false;

/**
 * The destination URL when the app router should take this navigation over, or `null`
 * to leave it to the browser.
 *
 * Use in a `navigate` listener:
 *
 * ```ts
 * const url = getInterceptableUrl(event);
 * if (!url) return;
 * event.intercept({ handler: () => this.#route(url) });
 * ```
 */
export function getInterceptableUrl(event: NavigateEvent): URL | null {
  // A redirect rewrite from resolveRoute — whoever triggered it is already routing.
  if (isRewritingUrl) {
    return null;
  }
  if (!event.canIntercept || event.hashChange || event.downloadRequest !== null) {
    return null;
  }
  // Dev-server live reload and user refresh must fetch fresh modules — don't SPA-handle reloads.
  if (event.navigationType === 'reload') {
    return null;
  }
  const url = new URL(event.destination.url);
  return url.origin === location.origin ? url : null;
}

/**
 * Follows any redirect routes for `url` by rewriting the address bar, then returns the
 * final URL along with the routes to execute for it — matching middleware in declaration
 * order, ending at the first page route. Redirect routes are never returned; they are
 * already resolved.
 *
 * Redirects deliberately do **not** call `navigation.navigate()`. A navigation started
 * during boot, or from inside an intercept handler, produces a `NavigateEvent` whose
 * handler settles once it is no longer the ongoing event, tripping
 * `CHECK_EQ(this, window->navigation()->ongoing_navigate_event_)` in Blink's
 * `NavigateEvent::ReactDone` — which kills the renderer process, not just the navigation.
 *
 * Because a redirect means "this URL is not real", middleware matching an intermediate
 * URL does not run; only the final URL's routes are returned. An unresolvable redirect
 * cycle yields no matches, which callers should treat as a 404.
 */
export function resolveRoute(routes: AppRoute[], url: URL): ResolvedRoute {
  for (let hop = 0; hop <= MAX_REDIRECT_HOPS; hop++) {
    const matches: RouteMatch<MiddlewareRoute | PageRoute>[] = [];
    let redirect: string | null = null;

    for (const route of routes) {
      const match = route.pattern.exec({ pathname: url.pathname });
      if (!match) {
        continue;
      }
      const params = match.pathname.groups as Record<string, string>;
      if ('redirect' in route) {
        redirect = typeof route.redirect === 'function' ? route.redirect(params) : route.redirect;
        break; // terminal
      }
      matches.push({ route, params });
      if ('page' in route) {
        break; // terminal — first matching page wins
      }
      // middleware entry — keep collecting
    }

    if (redirect === null) {
      return { url, matches };
    }

    url = new URL(redirect, location.origin);
    // replaceState dispatches a navigate event synchronously; the flag keeps the router
    // from intercepting its own rewrite and starting a second, racing routing pass.
    isRewritingUrl = true;
    try {
      history.replaceState({}, '', url.pathname + url.search + url.hash);
    } finally {
      isRewritingUrl = false;
    }
  }

  return { url, matches: [] };
}
