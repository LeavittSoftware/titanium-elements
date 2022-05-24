/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';

/* playground-fold-end */

import '@leavittsoftware/titanium-side-menu/lib/titanium-side-menu-item';

/* playground-fold */
@customElement('titanium-side-menu-item-playground')
export class TitaniumSideMenuItemPlayground extends LitElement {
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
        margin: 24px 0 36px 0;
        width: 280px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using disabled and selected</p>
      <div>
        <titanium-side-menu-item href="#default">default</titanium-side-menu-item>
        <titanium-side-menu-item href="#disabled" disabled>disabled</titanium-side-menu-item>
        <titanium-side-menu-item href="#selected" selected >selected</titanium-side-menu-item>
      </div>

      <h1>Slots</h1>
      <p>Examples of typical slot usage</p>
      <div>
      <titanium-side-menu-item href="#slotted1"
          ><mwc-icon><span class="material-icons-outlined"> content_copy </span></mwc-icon><span>Slotted with 1 icon</span></titanium-side-menu-item
        >
        <titanium-side-menu-item href="#slotted2"
          ><mwc-icon>apps</mwc-icon><span>Slotted with 2 icons</span><mwc-icon ext>exit_to_app</mwc-icon></titanium-side-menu-item
        >
      </div>

      <h1>Href</h1>
      <p>items with href and target</p>
      <div>
      <titanium-side-menu-item href="https://www.google.com" target="_blank">_blank target</span></titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_parent">_parent target</titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_self">_self target</titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_top">_top target</titanium-side-menu-item>
      </div>
    `;
  }
}
