import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/field/outlined-field';
import '@material/web/icon/icon';

/**
 * A date input the works in Firefox, Safari and Chrome
 *
 * @element titanium-date-input
 *
 */
@customElement('titanium-date-input')
export class TitaniumDateInput extends LitElement {
  /**
   *  Whether or not the input should be disabled
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  static styles = css`
    :host {
      display: block;
      cursor: pointer;
    }
  `;

  protected render() {
    return html` <md-outlined-field><input type="date" ?disabled=${this.disabled} /></md-outlined-field> `;
  }
}
