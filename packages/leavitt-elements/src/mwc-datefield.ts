import { customElement, css, property } from 'lit-element';
import { TextField } from '@material/mwc-textfield';

@customElement('mwc-datefield')
export class DateField extends TextField {
  @property({ type: String, attribute: 'date-type' }) dateType: 'datetime-local' | 'date' = 'date';

  updated(changedProps: Map<keyof this, unknown>) {
    if (changedProps.has('dateType')) {
      this.placeholder = this.dateType === 'date' ? 'yyyy-mm-dd' : 'yyyy-mm-dd MM:hh:ss';
      this.type = this.dateType;
    }
  }
  constructor() {
    super();
    this.type = 'date';
    this.iconTrailing = 'event';
    this.outlined = true;
  }

  static get styles() {
    return [
      css`
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
      `,
      ...super.styles,
    ];
  }
}
