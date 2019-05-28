import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-svg-button')
export class TitaniumSvgButton extends LitElement {
  @property() path: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean;

  static styles = css`
    :host {
      display: block;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([hidden]) {
      display: none;
    }

    :host(:hover:not([disabled])) {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    :host(:not([disabled])) {
      cursor: pointer;
    }

    :host([large]) {
      width: 52px;
      height: 52px;
    }

    ripple-container {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }

    svg {
      display: block;
      margin: 0 auto;
      width: var(--titanium-svg-button-svg-width, 60%);
      height: var(--titanium-svg-button-svg-height, 60%);
      fill: var(--app-text-color, #5f6368);
    }

    mwc-ripple[disabled] {
      display: none;
    }

    :host([disabled]) svg {
      fill: rgba(0, 0, 0, 0.37);
    }
  `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
      <ripple-container>
        <svg viewBox="0 0 24 24">
          <path d="${this.path}" />
        </svg>
        <mwc-ripple ?disabled=${this.disabled} unbounded></mwc-ripple>
      </ripple-container>
    `;
  }
}
