/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-button';

/* playground-fold */
@customElement('titanium-button-playground')
export class TitaniumButtonPlayground extends LitElement {
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
        <titanium-button>Default</titanium-button>
        <titanium-button disabled>Disabled</titanium-button>
        <titanium-button dense>Dense</titanium-button>
        <titanium-button shaped>Shaped</titanium-button>
      </div>

      <h1>Raised</h1>
      <p>Outlined button styles</p>
      <div>
        <titanium-button raised>Raised</titanium-button>
        <titanium-button raised disabled>Disabled</titanium-button>
        <titanium-button raised dense>Dense</titanium-button>
        <titanium-button raised shaped>Shaped</titanium-button>
      </div>

      <h1>Outlined</h1>
      <p>Outlined button styles</p>
      <div>
        <titanium-button outlined>Outlined</titanium-button>
        <titanium-button outlined disabled>Disabled</titanium-button>
        <titanium-button outlined dense>Dense</titanium-button>
        <titanium-button outlined shaped>Shaped</titanium-button>
      </div>

      <h1>Unelevated</h1>
      <p>Unelevated button styles</p>
      <div>
        <titanium-button unelevated>Unelevated</titanium-button>
        <titanium-button unelevated disabled>Disabled</titanium-button>
        <titanium-button unelevated dense>Dense</titanium-button>
        <titanium-button unelevated shaped>Shaped</titanium-button>
      </div>
    `;
  }
}
