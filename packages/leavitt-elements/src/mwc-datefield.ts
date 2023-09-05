/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@material/mwc-textfield';
import { property, customElement } from 'lit/decorators.js';
import { NotchedOutline } from '@material/mwc-notched-outline';
import Bowser from 'bowser';
import { css } from 'lit';

/**
 *  Date/Time Field input that extends mwc TextField
 *  Additional TextField props/methods here: https://www.npmjs.com/package/@material/mwc-textfield
 *  @element mwc-datefield
 *
 */
@customElement('mwc-datefield')
export class DateField extends TextField {
  /**
   *  Allows either only date ('yyyy-mm-dd') selection or date with time ('yyyy-mm-dd MM:hh:ss') selection
   */
  @property({ type: String, attribute: 'date-type' }) dateType: 'datetime-local' | 'date' = 'date';

  updated(changedProps: Map<keyof this, unknown>) {
    if (changedProps.has('dateType')) {
      this.placeholder = this.dateType === 'date' ? 'yyyy-mm-dd' : 'yyyy-mm-dd MM:hh:ss';
      this.type = this.dateType;
    }
  }

  firstUpdated() {
    super.firstUpdated();
    const bowser = Bowser.getParser(window.navigator.userAgent);
    if (bowser.getBrowserName(true) === 'chrome') {
      //Chrome mobile get normal mwc training icon
      //Chrome desktop gets native calendar icon positioned over blank reserved icon space
      //FF && Safari bring unstyled native calendar icons
      this.iconTrailing = bowser.getPlatformType() === 'mobile' ? 'event' : ' ';
    }
  }

  /**
   *  Forces the input to layout and float label. useful when the input is initially rendered when hidden
   */
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
    /**
     *  @ignore
     */
    this.type = 'date';
    /**
     *  @ignore
     */
    this.iconTrailing = '';
    /**
     *  @ignore
     */
    this.outlined = true;
    /**
     *  @ignore
     */
    this.max = '2999-12-31';
  }

  static get styles() {
    return [
      css`
        input::-webkit-calendar-picker-indicator {
          display: block !important;
          position: absolute;
          top: 15px;
          right: 9px;
          opacity: 1;
          width: 26px;
          height: 100%;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23757575" d="M12 12H17V17H12V12M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5Z"/></svg>');
          cursor: pointer;
        }
      `,
      ...super.styles,
    ] as any;
  }
}
