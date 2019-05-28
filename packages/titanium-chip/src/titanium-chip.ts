import { css, customElement, html, LitElement, property } from 'lit-element';
import '@leavittsoftware/titanium-svg-button';

@customElement('titanium-chip')
export class TitaniumChipElement extends LitElement {
  @property({ type: String }) label: string;
  @property({ type: String }) src: string | undefined;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) closeable: boolean;

  disable() {
    this.disabled = !this.disabled;
  }

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      background-color: var(--titanium-chip-label-background-color, #fff);
      border-radius: 16px;
      cursor: pointer;
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */
      height: 30px;
      border: 1px solid var(--app-border-color, #dadce0);
    }

    :host([disabled]) {
      opacity: 0.6;
      cursor: inherit;
    }

    :host(:not([disabled]):hover) {
      background-color: var(--app-hover-color, #f9f9f9);
      transition: 0.2s linear;
    }

    :host(:not([disabled]):active) {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    :host ::slotted(*) {
      margin-left: 8px;
    }

    label {
      flex: 1 1 auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-font-smoothing: antialiased;
      margin: 0 16px;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 13px;
      line-height: 18px;
      font-weight: 500;
      color: var(--app-dark-text-color, #202124);
      cursor: pointer;
    }

    :host([disabled]) label {
      cursor: inherit;
    }

    img {
      border-radius: 50%;
      border: 1px solid transparent;
      height: 28px;
      width: 28px;
    }

    ::slotted(*) {
      height: 18px;
      width: 18px;

      flex-shrink: 0;
    }

    titanium-svg-button {
      height: 28px;
      width: 28px;
      flex-shrink: 0;
    }

    :host(:not([closeable])) titanium-svg-button {
      display: none;
    }

    svg {
      fill: var(--app-border-color, #dadce0);
      width: 18px;
      height: 18px;
    }
  `;

  render() {
    return html`
      <slot slot="chip-icon" name="chip-icon">
        <img src=${this.src} ?hidden=${!this.src} />
      </slot>
      <label>${this.label}</label>
      <titanium-svg-button
        path="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        ?disabled=${this.disabled}
        @click=${() => this.dispatchEvent(new CustomEvent('titanium-chip-close', { bubbles: true, composed: true }))}
      >
      </titanium-svg-button>
    `;
  }
}
