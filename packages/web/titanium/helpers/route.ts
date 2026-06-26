export type PageRoute = {
  pattern: URLPattern;
  page: string;
  import: () => Promise<unknown>;
  before?: (params: Record<string, string>, url: URL) => void | Promise<void>;
};

export type RedirectRoute = {
  pattern: URLPattern;
  redirect: string | ((params: Record<string, string>) => string);
};

export type AppRoute = PageRoute | RedirectRoute;
