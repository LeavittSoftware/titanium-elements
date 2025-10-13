import { css } from 'lit';
import { h5 } from './h5';
import { p } from './p';

export const dataRow = [
  h5,
  p,
  css`
    data-row {
      display: grid;
      grid: 'label text' / 150px 1fr;
      align-items: center;
      gap: 16px;

      padding: 16px 24px 16px 0;

      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }

    data-row:last-of-type {
      border: none;
    }

    /* @lit-plugin.rules.no-invalid-css */
    [data-row-container] {
      container-type: inline-size;
    }

    data-row p {
      font-size: 16px;
    }

    data-row h5 {
      opacity: 0.8;
      margin: 0 0 4px 0;
    }

    [image] {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    data-row[force-stacked] {
      grid:
        'label'
        'text';
      gap: 6px;
    }

    @container (max-width: 500px) {
      data-row {
        grid:
          'label'
          'text';
        gap: 6px;
      }
    }
  `,
];
