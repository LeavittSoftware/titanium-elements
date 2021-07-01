import { css } from 'lit-element';

export const h3 = css`
  [heading3],
  h3 {
    color: var(--app-dark-text-color, #202124);
    font-family: var(--titanium-styles-h3-font-family, Roboto, Noto, sans-serif);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }
`;
