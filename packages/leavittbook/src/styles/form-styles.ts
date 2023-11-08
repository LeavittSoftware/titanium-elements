import { css } from 'lit';

export const formStyles = css`
  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 24px;
  }

  form [fullwidth] {
    grid-column: 1 / -1;
  }

  /* Make things how we like it */
  form md-switch {
    --md-switch-track-height: 28px;
  }

  form label {
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-self: start;
    user-select: none;
  }

  form label > md-checkbox,
  form label > md-switch {
    margin-right: 14px;
  }

  @media (max-width: 786px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }
`;
