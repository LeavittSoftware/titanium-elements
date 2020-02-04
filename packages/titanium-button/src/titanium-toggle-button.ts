import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * Material design inspired button.
 *
 * @element titanium-button
 *
 * @slot - main slot for button content
 *
 * @fires selected-changed - Fired when user interaction causes selected prop to change.
 *
 * @cssprop {Color} --app-link-color - Button slotted text color
 * @cssprop {Color} --app-selected-color - Button selected background color
 * @cssprop {Color} --titanium-selected-text-color - Button slotted text color for when in the selected state
 * @cssprop {Color} --app-primary-color - Button BG color
 */
@customElement('titanium-toggle-button')
export class TitaniumToggleButtonElement extends LitElement {
  /**
   * Disables the button
   */
  @property({ type: Boolean, reflect: true }) selected: boolean = false;

  /**
   * Disables the button
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Applies the  outlined button style
   */
  @property({ type: Boolean, reflect: true }) outlined: boolean = false;

  /**
   * Applies the  dense button style
   */
  @property({ type: Boolean, reflect: true }) dense: boolean = false;

  /**
   * Increases border radius of button
   */
  @property({ type: Boolean, reflect: true }) shaped: boolean = false;

  static styles = css`
    :host {
      display: inline-flex;
      position: relative;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      border-radius: 4px;
      overflow: hidden;
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
      overflow: visible;
      background: transparent;
      /* inherit font & color from ancestor */
      font: inherit;
      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
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
    }

    :host([shaped]),
    :host([shaped]) button {
      border-radius: 18px;
      overflow: hidden;
    }

    focus-veil {
      position: absolute;
      display: none;
      user-select: none;
      pointer-events: none;
      top: 0;
      right: 0;
      left: 0;
      background-color: var(--app-link-color, #3b95ff);
      bottom: 0;
      opacity: 0.12;
    }

    button:active,
    button:hover {
      font-weight: 500;
      outline-style: none;
      box-shadow: none;
    }

    button:focus {
      outline: none;
    }

    :host([selected]:not([disabled])) button {
      color: var(--titanium-selected-text-color, #fff);
      background-color: var(--app-selected-color, #1a73e8);
      --mdc-theme-primary: var(--app-selected-color, #1a73e8);
    }

    button:hover focus-veil {
      display: block;
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
      <button
        @click=${() => {
          this.selected = !this.selected;
          this.dispatchEvent(new CustomEvent('selected-changed', { detail: this.selected }));
        }}
      >
        <slot></slot>
        <mwc-ripple ?disabled=${this.disabled} primary></mwc-ripple>
        <focus-veil></focus-veil>
      </button>
    `;
  }
}
