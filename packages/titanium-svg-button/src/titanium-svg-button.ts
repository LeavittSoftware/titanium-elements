import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * Material design inspired SVG button.
 *
 * @element titanium-svg-button
 *
 * @cssprop {Length} [--titanium-svg-button-size=42px] - Size of the SVG button (default: 42px)
 * @cssprop {Color} [--app-text-color=#5f6368] - Icon fill color
 * @cssprop {Color} [--app-primary-color=#3b95ff] - Ripple color
 * @cssprop {Length} [--titanium-svg-button-svg-size=60%] - Size of the SVG in the button (default: 60%)
 */

@customElement('titanium-svg-button')
export class TitaniumSvgButton extends LitElement {
  /**
   * SVG path
   */
  @property({ type: String }) path: string = '';

  /**
   * Disables the button
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
      flex-shrink: 0;
      width: var(--titanium-svg-button-size, 42px);
      height: var(--titanium-svg-button-size, 42px);
      cursor: pointer;
      border-radius: 50%;
      overflow: hidden;
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
    }

    button {
      /* Button Reset */
      border: none;
      outline: none;
      margin: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      /* inherit font and color from ancestor */
      font: inherit;
      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      box-sizing: border-box;
      display: block;
      cursor: pointer;
      width: var(--titanium-svg-button-size, 42px);
      height: var(--titanium-svg-button-size, 42px);
      border-radius: 50%;
      padding: 0;
      position: relative;
      outline: none;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    button::-moz-focus-inner {
      border: 0;
    }

    :host([hidden]) {
      display: none;
    }

    svg {
      display: block;
      margin: 0 auto;
      width: var(--titanium-svg-button-svg-size, 60%);
      height: var(--titanium-svg-button-svg-size, 60%);
      fill: var(--app-text-color, #5f6368);
    }

    :host([disabled]) svg {
      fill: rgba(0, 0, 0, 0.37);
    }
  `;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <svg viewBox="0 0 24 24">
          <path d="${this.path}" />
        </svg>
      </button>
    `;
  }
}
