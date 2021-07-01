import { css } from 'lit-element';

export const a = css`
  [anchor],
  a {
    text-decoration: none;
    font-size: 14px;

    color: var(--app-link-color, #1a73e8);
    font-family: var(--titanium-styles-a-font-family, Metropolis, Roboto, Noto, sans-serif);
    font-weight: 400;
  }

  [anchor]:hover,
  a:hover {
    text-decoration: underline;
  }
`;
