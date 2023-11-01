import { css } from 'lit';

export const h1 = css`
  [heading1],
  h1 {
    font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
    text-wrap: balance;

    margin: 0;
    padding: 0;
  }
`;
