import { css } from 'lit';

export const labelStyles = css`
  label {
    min-height: 48px;
    display: flex;
    font-size: 15px;
    line-height: 17px;
    gap: 0 16px;
    align-items: center;
    align-self: center;
    user-select: none;
    cursor: pointer;

    span[supporting-text] {
      grid-area: line2;
      font-size: 12px;
      line-height: 13px;
      margin-top: 3px;

      strong {
        font-weight: 400;
      }
    }
  }

  label[disabled] span {
    opacity: 0.3;
  }

  label:has(span[supporting-text]) {
    display: grid;
    grid:
      'check line1'
      'check line2' / auto 1fr;
  }

  label > md-checkbox,
  label > md-radio,
  label > md-switch {
    grid-area: check;
  }
`;
