import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * Material design inspired SVG button.
 *
 * @element titanium-svg-button
 *
 * @cssprop {Length} --titanium-svg-button-size - Size of the SVG button (default: 42px)
 * @cssprop {Color} --app-hover-color - Button hover color
 * @cssprop {Color} --titanium-svg-button-focus-color - Button focus color
 * @cssprop {Color} --app-text-color - Icon fill color
 * @cssprop {Color} --app-primary-color - Ripple color
 * @cssprop {Length} --titanium-svg-button-svg-size - Size of the SVG in the button (default: 80%)
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
    }

    button {
      /* Button Reset */
      border: none;
      outline: none;
      margin: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      /* inherit font & color from ancestor */
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
      padding: 1px 6px;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    button:hover,
    button:focus {
      outline: none;
      background-color: var(--app-hover-color, #f9f9f9);
      background-color: none;
    }

    button::-moz-focus-inner {
      border: 0;
    }

    button:focus {
      background-color: var(--titanium-svg-button-focus-color, inherit);
    }

    :host([hidden]) {
      display: none;
    }

    :host(:not([disabled])) {
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
    }

    svg {
      display: block;
      margin: 0 auto;
      width: var(--titanium-svg-button-svg-size, 80%);
      height: var(--titanium-svg-button-svg-size, 80%);
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
        <mwc-ripple ?disabled=${this.disabled} unbounded primary></mwc-ripple>
      </button>
    `;
  }
}
