import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * A simple loading indicator.
 *
 * @element titanium-loading-indicator
 *
 * @slot - Overwrites the default "Loading..." text
 *
 * @cssprop {Color} [--app-text-color=#6200ee] - Loading text and icon color
 *
 */
@customElement('titanium-loading-indicator')
export class TitaniumLoadingIndicatorButton extends LitElement {
  /**
   * SVG path attribute
   */
  @property({ type: String }) path: string =
    'M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z';

  /**
   * Disables element
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * SVG viewbox attribute
   */
  @property({ type: String }) viewBox: string = '0 0 20 20';

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    :host([hidden]) {
      display: none;
    }

    text-container {
      display: block;
      padding-left: 8px;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      color: var(--app-text-color, #5f6368);
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;
      fill: var(--app-text-color, #5f6368);
    }

    :host(:not([disabled])) svg {
      -animation: spin 2s infinite linear;
      -webkit-animation: spin 2s infinite linear;
      -ms-animation: spin 2s infinite linear;
      -moz-animation: spin 2s infinite linear;
    }

    @-ms-keyframes spin {
      from {
        -ms-transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
      }
    }

    @-moz-keyframes spin {
      from {
        -moz-transform: rotate(0deg);
      }
      to {
        -moz-transform: rotate(360deg);
      }
    }

    @-webkit-keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`
      <svg viewBox="${this.viewBox}">
        <path d="${this.path}" />
      </svg>
      <text-container><slot>Loading...</slot></text-container>
    `;
  }
}
