import { css } from 'lit';

export const formStyles = css`
  form,
  input-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 16px 43px;
  }

  form [fullwidth],
  input-container [fullwidth] {
    grid-column: 1 / -1;
  }

  @media (max-width: 786px) {
    form,
    input-container {
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
      grid-gap: 8px 24px;
    }
  }
`;
