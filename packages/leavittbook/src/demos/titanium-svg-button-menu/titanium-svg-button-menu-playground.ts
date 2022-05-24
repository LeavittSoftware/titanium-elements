/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-svg-button/lib/titanium-svg-button-menu';

/* playground-fold */
@customElement('titanium-svg-button-menu-playground')
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

      :host > div {
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
      <p>Default svg button menu styles</p>
      <div>
        <titanium-svg-button-menu>
          <div role="menuitem">Option A</div>
          <div role="menuitem">Option B</div>
          <div role="menuitem">Option C</div>
          <div role="menuitem">Option D</div>
          <hr />
          <div role="menuitem">About</div>
          <div role="menuitem">Help</div>
        </titanium-svg-button-menu>
      </div>
    `;
  }
}
