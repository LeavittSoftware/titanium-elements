import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * Material design inspired button.
 *
 * @element titanium-button
 *
 * @slot - main slot for button content
 *
 * @cssprop {Color} --app-link-color - Button slotted text color
 * @cssprop {Color} --titanium-solid-button-text-color - Button slotted text color for raised and unelevated styles
 * @cssprop {Color} --app-primary-color - Button BG color
 */
@customElement('titanium-button')
export class TitaniumButtonElement extends LitElement {
  /**
   * Disables the button
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Applies the raised button style
   */
  @property({ type: Boolean, reflect: true }) raised: boolean = false;

  /**
   * Applies the  outlined button style
   */
  @property({ type: Boolean, reflect: true }) outlined: boolean = false;

  /**
   * Applies the  dense button style
   */
  @property({ type: Boolean, reflect: true }) dense: boolean = false;

  /**
   * Applies the  unelevated button style
   */
  @property({ type: Boolean, reflect: true }) unelevated: boolean = false;

  /**
   * Increases border radius of button
   */
  @property({ type: Boolean, reflect: true }) shaped: boolean = false;

  static styles = css`
    :host {
      display: inline-flex;
      font-family: Roboto, Noto, sans-serif;
      -webkit-user-select: none; /* Chrome all / Safari all */
      -moz-user-select: none; /* Firefox all */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
      --mdc-theme-primary: var(--app-link-color, #3b95ff);
    }

    button {
      /* Button Reset */
      border: none;
      outline: none;
      margin: 0;
      width: auto;
      background: transparent;
      /* inherit font & color from ancestor */
      font: inherit;
      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
      box-sizing: border-box;
      min-width: 64px;
      height: 36px;
      display: block;
      cursor: pointer;
      color: var(--app-link-color, #3b95ff);
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1.25px;
      padding: 0 16px;
      border-radius: 4px;
      outline: none;
      position: relative;
    }

    button::-moz-focus-inner {
      border: 0;
    }

    :host([shaped]) button {
      border-radius: 18px;
    }

    :host([raised]:not([disabled])) {
      --mdc-theme-primary: var(--app-link-color, #3b95ff);
    }

    :host([raised]:not([disabled])) button {
      color: var(--titanium-solid-button-text-color, #fff);
      background-color: var(--app-primary-color, #3b95ff);
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }

    :host([raised]:not([disabled])) button:active {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    :host([outlined]:not([disabled])) button {
      border-color: var(--app-link-color, #3b95ff);
    }

    :host([outlined][disabled]) button {
      border-color: transparent;
    }

    :host([outlined]) button {
      border-style: solid;
      border-width: 1px;
    }

    :host([dense]) button {
      height: 28px;
      padding: 0 16px;
    }

    :host([unelevated]:not([disabled])) button {
      color: var(--titanium-solid-button-text-color, #fff);
      background-color: var(--app-primary-color, #3b95ff);
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.37);
      cursor: default;
    }
  `;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
