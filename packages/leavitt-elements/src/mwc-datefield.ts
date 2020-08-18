import { customElement, css } from 'lit-element';
import { TextField } from '@material/mwc-textfield';

@customElement('mwc-datefield')
export class DateField extends TextField {
  constructor() {
    super();
    this.type = 'date';
    this.iconTrailing = 'event';
    this.placeholder = 'yyyy-mm-dd';
    this.outlined = true;
  }

  static get styles() {
    return css`
      ${super.styles}
      input::-webkit-calendar-picker-indicator {
        display: block !important;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        width: 48px;
        height: 100%;
        cursor: pointer;
      }
    `;
  }
}
