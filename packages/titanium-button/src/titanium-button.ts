import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-button')
export class TitaniumButtonElement extends LitElement {
  @property({ type: Boolean, reflect: true }) disabled: boolean;

  static styles = css`
    :host {
      display: inline-flex;
      position: relative;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      border-radius: 4px;
      overflow: hidden;

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
      line-height: 20px;
      letter-spacing: 1.25px;
      padding: 8px 16px;
      border-radius: 4px;
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

    :host([raised]:not([disabled])) focus-veil {
      background-color: var(--app-link-color, #3b95ff);
    }

    button:hover focus-veil {
      display: block;
    }

    :host([raised]) {
      /* Allow drop shadow through */
      padding: 4px;
    }

    :host([raised]:not([disabled])) {
      --mdc-theme-primary: var(--app-link-color, #3b95ff);
    }

    :host([raised]:not([disabled])) button {
      color: var(--titanium-solid-button-text-color, #fff);
      background-color: var(--app-primary-color, #3b95ff);
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
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
      height: 32px;
      line-height: 20px;
      padding: 6px 16px;
    }

    :host([unelevated]:not([disabled])) button {
      color: var(--titanium-solid-button-text-color, #fff);
      background-color: var(--app-primary-color, #3b95ff);
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
    }

    :host([disabled]) button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.37);
      cursor: default;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <button>
        <slot></slot>
        <mwc-ripple ?disabled=${this.disabled} primary></mwc-ripple>
        <focus-veil></focus-veil>
      </button>
    `;
  }
}
