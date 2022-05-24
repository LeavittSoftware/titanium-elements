/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h3, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-popup-surface/lib/titanium-menu-surface';
import { Corner } from '@leavittsoftware/titanium-popup-surface/lib/titanium-popup-surface-foundation';

/* playground-fold */
@customElement('titanium-menu-surface-playground')
export class TitaniumMenuSurfacePlayground extends LitElement {
  @query('titanium-menu-surface') menuSurface;

  static styles = [
    h1,
    h3,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        position: relative;
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
      <p>Default menu surface example</p>
      <div class="popup--anchor" style="width: 200px">
        <titanium-button outlined @click=${() => this.menuSurface.open()}>Open</titanium-button>
        <titanium-menu-surface .anchorCorner=${Corner.BOTTOM_START} .anchorMarginBottom=${0}>
          <main style="margin: 24px">
            <h3>Signed into</h3>
            <p>ebay.com</p>
            <p>yahoo.com</p>
            <p>google.com</p>
            <p>msn.com</p>
            <p>twitter.com</p>
            <p>instagram.com</p>
            <p>facebook.com</p>
            <p>apple.com</p>
          </main>
        </titanium-menu-surface>
      </div>
    `;
  }
}
