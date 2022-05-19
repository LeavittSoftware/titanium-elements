/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-loading-indicator/lib/titanium-loading-indicator';

/* playground-fold */
@customElement('titanium-loading-indicator-playground')
export class TitaniumLoadingIndicatorPlayground extends LitElement {
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
      <p>Default loading indicator</p>
      <div><titanium-loading-indicator></titanium-loading-indicator></div>

      <h1>Disabled</h1>
      <p>Disabled loading indicator</p>
      <div><titanium-loading-indicator disabled></titanium-loading-indicator></div>

      <h1>Viewbox</h1>
      <p>Default viewbox override</p>
      <div><titanium-loading-indicator viewbox="0 0 50 50"></titanium-loading-indicator></div>

      <h1>Slot</h1>
      <p>Default text override</p>
      <div>
        <titanium-loading-indicator><slot>Please wait a moment...</slot></titanium-loading-indicator>
      </div>
    `;
  }
}
