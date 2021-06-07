import { css } from 'lit-element';

export const a = css`
  [anchor],
  a {
    text-decoration: none;
    font-size: 14px;

    color: var(--app-link-color, #1a73e8);
    font-family: 'Metropolis';
    font-weight: 400;
  }

  [anchor]:hover,
  a:hover {
    text-decoration: underline;
  }
`;
