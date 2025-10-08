import { css } from 'lit';

export const dataTableContentStyles = css`
  [supporting-text] {
    font-size: 12px;
    line-height: 14px;
    opacity: 0.8;
  }

  two-line {
    display: grid;
    grid-auto-flow: row;
    gap: 0;
  }

  image-row {
    display: grid;
    grid: 'image label' / auto 1fr;
    align-items: center;
    gap: 0 12px;

    img {
      grid-area: image;
      height: 32px;
      width: 32px;
      image-rendering: -webkit-optimize-contrast;
    }

    [supporting-text] {
      grid-area: supporting-text;
    }
  }

  image-row:has([supporting-text]) {
    grid:
      'image label'
      'image supporting-text' / auto 1fr;
  }
`;
