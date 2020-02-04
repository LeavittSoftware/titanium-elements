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
      overflow: hidden;
      -webkit-user-select: none; /* Chrome all / Safari all */
      -ms-user-select: none; /* IE 10+ */
      -moz-user-select: none; /* Firefox all */
      user-select: none;
      --mdc-theme-primary: var(--app-link-color, #3b95ff);
    }

    button {
      /* Button Reset */
      border: none;
      outline: none;
      margin: 0;
      width: auto;
      overflow: hidden;
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
    }

    button::-moz-focus-inner {
      border: 0;
    }

    :host([shaped]) button {
      border-radius: 18px;
    }

    button:active,
    button:hover {
      font-weight: 500;
      outline-style: none;
      box-shadow: none;
      background-color: var(--app-link-color, rgba(59, 149, 255, 0.11));
    }

    button:focus {
      outline: none;
    }

    :host([selected]:not([disabled])) button {
      color: var(--titanium-selected-text-color, #fff);
      background-color: var(--app-selected-color, #1a73e8);
      --mdc-theme-primary: var(--app-selected-color, #1a73e8);
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
        ?disabled=${this.disabled}
        @click=${() => {
          this.selected = !this.selected;
          this.dispatchEvent(new CustomEvent('selected-changed', { detail: this.selected }));
        }}
      >
        <slot></slot>
        <mwc-ripple ?disabled=${this.disabled} primary></mwc-ripple>
      </button>
    `;
  }
}
