import { css, CSSResult } from 'lit';
import { TextField } from '@material/mwc-textfield';
import { property, customElement } from 'lit/decorators.js';
import { NotchedOutline } from '@material/mwc-notched-outline';

@customElement('mwc-datefield')
export class DateField extends TextField {
  @property({ type: String, attribute: 'date-type' }) dateType: 'datetime-local' | 'date' = 'date';

  updated(changedProps: Map<keyof this, unknown>) {
    if (changedProps.has('dateType')) {
      this.placeholder = this.dateType === 'date' ? 'yyyy-mm-dd' : 'yyyy-mm-dd MM:hh:ss';
      this.type = this.dateType;
    }
  }

  public async layout() {
    await super.layout();
    this.labelElement?.floatingLabelFoundation.float(true);
    (this.outlineElement as (NotchedOutline & { openOrClose(shouldOpen: boolean, width?: number): void }) | null)?.openOrClose(
      true,
      this.labelElement?.offsetWidth
    );
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
    ] as CSSResult[];
  }
}
