import { css } from 'lit';

export const dataTableContentStyles = css`
  [supporting-text] {
    font-size: 12px;
    line-height: 14px;
    opacity: 0.8;
  }

  [indicator] {
    display: inline-grid;
    place-content: center;
    width: fit-content;
    max-width: 88px;
    border-radius: 16px;
    padding: 2px 10px;
    font-size: 13px;
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
  }

  [indicator][green] {
    background-color: var(--app-accent-color-green);
    color: var(--app-accent-color-on-green);
  }

  [indicator][red] {
    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);
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

    md-icon {
      grid-area: image;
      --md-icon-size: 32px;
    }

    img {
      grid-area: image;
      height: 32px;
      width: 32px;
      image-rendering: -webkit-optimize-contrast;
    }

    profile-picture {
      grid-area: image;
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
