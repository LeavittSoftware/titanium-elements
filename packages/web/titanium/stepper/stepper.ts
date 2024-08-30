import '@material/web/icon/icon';

import { html, css, PropertyValues, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Material design stepper component
 *
 * @element titanium-stepper
 *
 */

@customElement('titanium-stepper')
export class TitaniumStepper extends LitElement {
  firstUpdated() {}

  updated(changedProps: PropertyValues<this>) {}

  static styles = [css``];

  render() {
    return html` Stepper `;
  }
}
