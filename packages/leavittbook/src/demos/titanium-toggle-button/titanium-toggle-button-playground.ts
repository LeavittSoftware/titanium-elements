/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-button/lib/titanium-toggle-button';

/* playground-fold */
@customElement('titanium-toggle-button-playground')
export class TitaniumToggleButtonPlayground extends LitElement {
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
      <p>Default toggle button styles</p>
      <div>
        <titanium-toggle-button>Default</titanium-toggle-button>
        <titanium-toggle-button outlined>Outlined</titanium-toggle-button>
        <titanium-toggle-button shaped>Shaped</titanium-toggle-button>
        <titanium-toggle-button disabled>Disabled</titanium-toggle-button>
      </div>

      <h1>Selected</h1>
      <p>Selected toggle button styles</p>
      <div>
        <titanium-toggle-button selected>Default</titanium-toggle-button>
        <titanium-toggle-button selected outlined>Outlined</titanium-toggle-button>
        <titanium-toggle-button selected shaped>Shaped</titanium-toggle-button>
        <titanium-toggle-button selected disabled>Disabled</titanium-toggle-button>
      </div>

      <h1>Dense</h1>
      <p>Dense toggle button styles</p>
      <div>
        <titanium-toggle-button dense>Default</titanium-toggle-button>
        <titanium-toggle-button dense outlined>Outlined</titanium-toggle-button>
        <titanium-toggle-button dense shaped>Shaped</titanium-toggle-button>
        <titanium-toggle-button dense disabled>Disabled</titanium-toggle-button>
      </div>

      <h1>Long button text</h1>
      <p>Long text toggle button styles</p>
      <div>
        <titanium-toggle-button style="width:200px;" outlined>Are you sure you want to continue?</titanium-toggle-button>
      </div>
    `;
  }
}
