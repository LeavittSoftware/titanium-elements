import { css } from 'lit-element';

export const p = css`
  [paragraph],
  p {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    font-weight: 400;
    color: var(--app-text-color, #5f6368);
    letter-spacing: 0.2px;
    line-height: 20px;

    margin: 0;
    padding: 0;
  }
`;
