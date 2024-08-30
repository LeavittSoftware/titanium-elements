/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { TitaniumStepper } from '@leavittsoftware/web/titanium/stepper/stepper';

/* playground-fold-end */
import '@material/web/button/outlined-button';
import '@leavittsoftware/web/titanium/stepper/stepper';

/* playground-fold */
@customElement('titanium-stepper-playground')
export class TitaniumStepperPlayground extends LitElement {
  @queryAll('titanium-stepper') protected accessor steppers!: NodeListOf<TitaniumStepper>;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <div>
        <titanium-stepper></titanium-stepper>
      </div>
    `;
  }
}
