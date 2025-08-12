export const installMediaQueryWatcher = (mediaQuery: string, layoutChangedCallback: (mediaQueryMatches: boolean) => void) => {
  const mql = window.matchMedia(mediaQuery);
  mql.addEventListener('change', (e) => layoutChangedCallback(e.matches));
  layoutChangedCallback(mql.matches);
};
