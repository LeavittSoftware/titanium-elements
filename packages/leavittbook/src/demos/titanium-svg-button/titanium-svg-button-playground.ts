/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-svg-button';

/* playground-fold */
@customElement('titanium-svg-button-playground')
export class TitaniumSVGButtonPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default button styles</p>
      <div>
        <titanium-svg-button
          style="--titanium-svg-button-size: 60px;"
          path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        ></titanium-svg-button>
        <titanium-svg-button path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></titanium-svg-button>
      </div>

      <h1>Disabled</h1>
      <p>Disabled button styles</p>
      <div>
        <titanium-svg-button
          style="--titanium-svg-button-size: 60px;"
          disabled
          path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        ></titanium-svg-button>
        <titanium-svg-button disabled path="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></titanium-svg-button>
      </div>
    `;
  }
}
