import { customElement, html, LitElement, query, css, property } from 'lit-element';
import { TitaniumMenuSurfaceElement } from '@leavittsoftware/titanium-popup-surface/lib/titanium-menu-surface';

import '@leavittsoftware/titanium-popup-surface/lib/titanium-menu-surface';
import './titanium-svg-button';

/**
 * Material design inspired svg button with menu.
 *
 * @element titanium-svg-button-menu
 *
 * @cssprop {Color} --app-hover-color - Item hover color
 * @cssprop {Color} --app-text-color - Item text color
 * @cssprop {Color} --app-border-color - Item divider (hr) color
 */

@customElement('titanium-svg-button-menu')
export class TitaniumSvgButtonMenuElement extends LitElement {
  @query('titanium-menu-surface') surface: TitaniumMenuSurfaceElement;

  /**
   * SVG path
   */
  @property({ type: String }) path: string =
    'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z';

  static styles = css`
    :host {
      display: block;
      font-family: 'Roboto', 'Noto', sans-serif;
    }

    ::slotted(div) {
      height: 48px;
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      color: var(--app-text-color, #5f6368);
      padding: 16px;
      box-sizing: border-box;
      white-space: nowrap;
      cursor: pointer;
    }

    ::slotted(div:hover) {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    ::slotted(div:focus) {
      outline: none;
      background-color: var(--app-hover-color, #f9f9f9);
    }

    ::slotted(hr) {
      border: 0;
      border-top: 1px solid var(--app-border-color, #dadce0);
      margin: 8px 0;
      height: 1px;
    }

    div {
      display: inline-block;
      position: relative;
    }

    titanium-menu-surface {
      padding: 8px 0;
    }
  `;

  render() {
    return html`
      <div class="popup--anchor">
        <titanium-svg-button @click=${() => this.surface.open()} path=${this.path}></titanium-svg-button>
        <titanium-menu-surface anchor-corner="8" anchor-margin-top="34" anchor-margin-right="10">
          <slot></slot>
        </titanium-menu-surface>
      </div>
    `;
  }
}
