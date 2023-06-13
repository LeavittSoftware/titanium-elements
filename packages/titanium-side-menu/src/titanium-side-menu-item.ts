import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Material design inspired website side menu
 *
 * @element titanium-side-menu-item
 *
 * @slot default - main slot item title
 *
 * @cssprop {Color} [--app-menu-text-color=#5f6368] - Item text color
 * @cssprop {Color} [--app-hover-color=#f9f9f9] - Background hover and focus color
 * @cssprop {Color} [--titanium-side-menu-item-selected-background-color=#e8f0fe] - Selected item background color
 * @cssprop {Color} [--titanium-side-menu-item-selected-color=#1967d2] - Selected item text color
 */

@customElement('titanium-side-menu-item')
export class TitaniumSideMenuItemElement extends LitElement {
  /**
   *  True when item is selected
   */
  @property({ type: Boolean, reflect: true }) selected: boolean;

  /**
   * Disables the button
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * The URL that the item points to
   */
  @property({ type: String }) href: string;

  /**
   * The URL target
   */
  @property({ type: String }) target: '_blank' | '_parent' | '_self' | '_top';

  static styles = css`
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Metropolis, Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      letter-spacing: 0.35px;
      padding: 10px 16px 10px 24px;
      border-radius: 0 50px 50px 0;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: var(--app-menu-text-color, #3c4043);
      fill: var(--app-menu-text-color, #3c4043);
      transition: background 75ms;
    }

    a:hover {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    a ::slotted(svg) {
      margin-right: 16px;
      height: 24px;
      width: 24px;
    }

    a ::slotted(mwc-icon) {
      margin-right: 16px;
      --mdc-icon-size: 24px;
    }

    a ::slotted(mwc-icon[ext]) {
      --mdc-icon-size: 18px;
      color: var(--app-light-text-color, #80868b);
      margin-right: 0;
    }

    a ::slotted(span) {
      flex: 1 1 auto;
    }

    a:active,
    a:focus {
      outline: none;
      background-color: var(--app-hover-color, #f9f9f9);
    }

    a::-moz-focus-inner {
      border: 0;
    }

    :host([selected]) a {
      background: var(--titanium-side-menu-item-selected-background-color, #e8f0fe);
      color: var(--titanium-side-menu-item-selected-color, #1967d2);
      fill: var(--titanium-side-menu-item-selected-color, #1967d2);
    }

    :host([disabled]:not([selected])) a {
      color: rgba(0, 0, 0, 0.37);
      cursor: default;
      pointer-events: none;
    }
  `;

  render() {
    return html` <a part="anchor" href=${this.href} target=${ifDefined(this.target)}><slot></slot></a> `;
  }
}
