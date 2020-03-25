import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property, query } from 'lit-element';
import { Ripple } from '@material/mwc-ripple';

/**
 * Material design inspired SVG button.
 *
 * @element titanium-svg-button
 *
 * @cssprop {Length} --titanium-svg-button-size - Size of the SVG button (default: 42px)
 * @cssprop {Color} --app-text-color - Icon fill color
 * @cssprop {Color} --app-primary-color - Ripple color
 * @cssprop {Length} --titanium-svg-button-svg-size - Size of the SVG in the button (default: 60%)
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

  @query('mwc-ripple') private ripple: Ripple;

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

    mwc-ripple {
      border-radius: 50%;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      overflow: hidden;
    }

    :host([disabled]) svg {
      fill: rgba(0, 0, 0, 0.37);
    }
  `;

  render() {
    return html`
      <button
        ?disabled=${this.disabled}
        @mouseenter=${() => this.ripple.handleMouseEnter()}
        @mouseleave=${() => this.ripple.handleMouseLeave()}
        @focus=${() => this.ripple.handleFocus()}
        @blur=${() => this.ripple.handleBlur()}
        @mousedown=${e => this.ripple.activate(e)}
        @mouseup=${() => this.ripple.deactivate()}
        @keydown=${e => (e.which === 32 ? this.ripple.activate() : '')}
        @keyup=${() => this.ripple.deactivate()}
      >
        <svg viewBox="0 0 24 24">
          <path d="${this.path}" />
        </svg>
        <mwc-ripple ?disabled=${this.disabled} unbounded primary></mwc-ripple>
      </button>
    `;
  }
}
