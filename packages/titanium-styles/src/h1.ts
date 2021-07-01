import { css } from 'lit-element';

export const h1 = css`
  [heading1],
  h1 {
    color: var(--app-dark-text-color, #202124);
    font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;

    margin: 0;
    padding: 0;
  }
`;
