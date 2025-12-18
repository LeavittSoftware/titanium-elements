import { css } from 'lit';
export const heroStyles = css`
  [heading1],
  h1 {
    font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    letter-spacing: -1px;

    margin: 0;
    padding: 0;
  }

  [heading2],
  h2 {
    font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    letter-spacing: -1.3px;

    margin: 0;
    padding: 0;
  }

  [heading2],
  h3 {
    font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.6px;

    margin: 0;
    padding: 0;
  }
`;
