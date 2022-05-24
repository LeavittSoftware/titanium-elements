import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import { TitaniumMenuSurfaceElement } from '@leavittsoftware/titanium-popup-surface/lib/titanium-menu-surface';

import '@leavittsoftware/titanium-popup-surface/lib/titanium-menu-surface';
import './titanium-svg-button';
import { Corner } from '@leavittsoftware/titanium-popup-surface';

/**
 * Material design inspired svg button with menu.
 *
 * @element titanium-svg-button-menu
 *
 * @cssprop {Color} [--app-hover-color=#f9f9f9] - Item hover color
 * @cssprop {Color} [--app-text-color=#5f6368] - Item text color
 * @cssprop {Color} [--app-border-color=#dadce0] - Item divider (hr) color
 */

@customElement('titanium-svg-button-menu')
export class TitaniumSvgButtonMenuElement extends LitElement {
  @query('titanium-menu-surface') surface: TitaniumMenuSurfaceElement;

  /**
   * Anchors margin from bottom
   */
  @property({ type: Number, attribute: 'anchor-margin-bottom' }) anchorMarginBottom = 0;

  /**
   * Anchors margin from top
   */
  @property({ type: Number, attribute: 'anchor-margin-top' }) anchorMarginTop = 34;

  /**
   * Anchors margin from right
   */
  @property({ type: Number, attribute: 'anchor-margin-right' }) anchorMarginRight = 10;

  /**
   * Anchors margin from left
   */
  @property({ type: Number, attribute: 'anchor-margin-left' }) anchorMarginLeft = 0;

  /**
   *  Defines the corner the surface is anchored to
   * TOP_LEFT = 0
   * TOP_RIGHT = 4
   * BOTTOM_LEFT = 1
   * BOTTOM_RIGHT = 5
   * TOP_START = 8
   * TOP_END = 12
   * BOTTOM_START = 9
   * BOTTOM_END = 13
   */
  @property({ type: Number, attribute: 'anchor-corner' }) anchorCorner: Corner = Corner.TOP_START;

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
        <titanium-menu-surface
          .anchorCorner=${this.anchorCorner}
          .anchorMarginRight=${this.anchorMarginRight}
          .anchorMarginBottom=${this.anchorMarginBottom}
          .anchorMarginTop=${this.anchorMarginTop}
          .anchorMarginLeft=${this.anchorMarginLeft}
        >
          <slot></slot>
        </titanium-menu-surface>
      </div>
    `;
  }
}
