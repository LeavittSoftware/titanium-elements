import { css } from 'lit';
import { labelStyles } from './label-styles';
import { inputStyles } from './input-styles';

export const formStyles = css`
  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 24px;
    align-items: start;

    [full-width],
    [fullWidth] {
      grid-column: 1 / -1;
    }

    form-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }

    ${labelStyles};
    ${inputStyles};
  }

  @media (max-width: 420px) {
    form {
      display: grid;
      grid-auto-flow: row;
      grid-template-columns: initial;
    }
  }
`;
