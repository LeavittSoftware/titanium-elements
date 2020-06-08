import { css, customElement, html, LitElement, property } from 'lit-element';
import '@leavittsoftware/titanium-svg-button';

/**
 * Material design inspired chips.
 *
 * @element titanium-chip
 *
 * @slot chip-icon - Optional chip icon (replaces the image if src was provided)
 *
 * @fires titanium-chip-close - Fired when the close button is clicked
 *
 * @cssprop {Color} --app-border-color - Chip border color
 * @cssprop {Color} --app-text-color - Label color
 * @cssprop {Color} --titanium-chip-label-background-color - Chip background color
 * @cssprop {Color} --app-hover-color - Hover background color
 */
@customElement('titanium-chip')
export class TitaniumChipElement extends LitElement {
  /**
   *  Main text of the chip
   */
  @property({ type: String }) label: string;

  /**
   *  Optional: src to image that will prefix the label
   */
  @property({ type: String }) src: string | undefined;

  /**
   *  Disables chip
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Adds a close button to the chip when true
   */
  @property({ type: Boolean, reflect: true }) closeable: boolean = false;

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
      max-width: 100%;
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

    label {
      width: 100%;
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
      color: var(--app-text-color, #5f6368);
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
      flex-shrink: 0;
    }

    ::slotted(img),
    ::slotted(svg) {
      height: 18px;
      width: 18px;
      flex-shrink: 0;
    }

    titanium-svg-button {
      --titanium-svg-button-svg-size: 18px;
      --titanium-svg-button-size: 28px;
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
        ${this.src ? html` <img src=${this.src} /> ` : ''}
      </slot>
      <label>${this.label}</label>
      <titanium-svg-button
        path="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        ?disabled=${this.disabled}
        @click=${(e) => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('titanium-chip-close', { bubbles: true, composed: true }));
        }}
      >
      </titanium-svg-button>
    `;
  }
}
