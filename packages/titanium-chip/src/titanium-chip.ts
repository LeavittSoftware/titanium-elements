import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@material/mwc-icon-button';
import { CheckableElement, SingleSelectionController } from '@material/mwc-radio/single-selection-controller';

/**
 * Material design inspired chips.
 *
 * @element titanium-chip
 *
 * @slot chip-icon - Optional chip icon (replaces the image if src was provided)
 * @slot label - Optional slot to override the label text
 *
 * @fires titanium-chip-close - Fired when the close button is clicked
 * @fires checked - Fired when item is checked. Selectable attribute must be present.
 *
 * @cssprop {Color} --app-border-color - Chip border color
 * @cssprop {Color} --app-text-color - Label color
 * @cssprop {Color} --titanium-chip-label-background-color - Chip background color
 * @cssprop {Color} --app-hover-color - Hover background color
 * @cssprop {Color} --titanium-side-menu-item-selected-background-color - Selected BG color
 * @cssprop {Color} --titanium-side-menu-item-selected-color - Checked text and icon color
 */
@customElement('titanium-chip')
export class TitaniumChipElement extends LitElement implements CheckableElement {
  /**
   *  Name of the input for form submission, and identifier for the selection group.
   *  Selectable attribute must be present.
   */
  @property({ type: String }) name = '';

  @property({ type: Number }) formElementTabIndex = 0;

  /**
   *  Main text of the chip
   */
  @property({ type: String }) label: string;

  /**
   *  Icon used for the close icon button
   */
  @property({ type: String }) closeIcon: string = 'close';

  /**
   *  Optional: src to image that will prefix the label
   */
  @property({ type: String }) src: string | undefined;

  /**
   *  Optional: image shown if error loading src image attribute
   */
  @property({ type: String }) fallbackSrc: string | undefined;

  /**
   *  Disables chip
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Adds a close button to the chip when true
   */
  @property({ type: Boolean, reflect: true }) closeable: boolean = false;

  /**
   *  Enables ability for chip to be selectable and participate in a radio group
   */
  @property({ type: Boolean }) selectable: boolean = false;

  /**
   *  Enables ability for chip to be readonly
   */
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;

  protected _checked = false;
  /**
   *  Whether this chip is the currently-selected one in its group.
   */
  @property({ type: Boolean, reflect: true })
  get checked(): boolean {
    return this._checked;
  }
  set checked(isChecked: boolean) {
    const oldValue = this._checked;
    if (isChecked === oldValue) {
      return;
    }
    this._checked = isChecked;
    this._selectionController?.update(this);
    this.requestUpdate('checked', oldValue);
    this.dispatchEvent(new Event('checked', { bubbles: true, composed: true }));
  }

  protected _selectionController?: SingleSelectionController;

  firstUpdated() {
    this.addEventListener('click', () => {
      if (this.selectable) {
        this.checked = true;
      }
    });
  }

  disable() {
    this.disabled = !this.disabled;
  }

  connectedCallback() {
    super.connectedCallback();
    this._selectionController = SingleSelectionController.getController(this);
    this._selectionController.register(this);
    this._selectionController.update(this);
  }

  disconnectedCallback() {
    this._selectionController?.unregister(this);
    this._selectionController = undefined;
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

    :host([readonly]) {
      cursor: inherit;
    }

    :host([checked]) label {
      color: var(--titanium-side-menu-item-selected-color, #1967d2);
      fill: var(--titanium-side-menu-item-selected-color, #1967d2);
    }

    :host([checked]) {
      background: var(--titanium-side-menu-item-selected-background-color, #e8f0fe);
    }

    :host(:not([disabled]):not([readonly]):hover) {
      background-color: var(--app-hover-color, #f9f9f9);
      transition: 0.2s linear;
    }

    :host(:not([disabled]):not([readonly]):active) {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    label {
      flex: 1 1 auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-font-smoothing: antialiased;
      margin: 0 8px;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: var(--app-text-color, #5f6368);
      cursor: pointer;
    }

    :host([readonly]) label,
    :host([disabled]) label {
      cursor: inherit;
    }

    img {
      border-radius: 50%;
      border: 1px solid transparent;
      height: 28px;
      width: 28px;
      flex-shrink: 0;
      image-rendering: -moz-crisp-edges; /* Firefox */
      image-rendering: -o-crisp-edges; /* Opera */
      image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
      image-rendering: crisp-edges;
    }

    ::slotted(img),
    ::slotted(svg) {
      height: 18px;
      width: 18px;
      flex-shrink: 0;
      image-rendering: -moz-crisp-edges; /* Firefox */
      image-rendering: -o-crisp-edges; /* Opera */
      image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
      image-rendering: crisp-edges;
    }

    ::slotted(mwc-icon) {
      --mdc-icon-size: 18px;
      color: var(--app-text-color, #5f6368);
      margin-left: 8px;
      flex-shrink: 0;
    }

    :host([checked]) ::slotted(mwc-icon) {
      color: var(--titanium-side-menu-item-selected-color, #1967d2);
    }

    mwc-icon-button {
      color: var(--app-text-color, #5f6368);
      --mdc-icon-size: 18px;
      --mdc-icon-button-size: 28px;
      flex-shrink: 0;
    }

    :host(:not([closeable])) mwc-icon-button {
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
      <slot slot="chip-icon">
        ${this.src ? html` <img onerror=${ifDefined(this.fallbackSrc ? `this.src='${this.fallbackSrc}'` : undefined)} src=${this.src} /> ` : ''}
      </slot>
      <label><slot slot="label">${this.label}</slot></label>
      <mwc-icon-button
        icon=${this.closeIcon}
        ?disabled=${this.disabled}
        @click=${e => {
          e.stopPropagation();
          this.dispatchEvent(new CustomEvent('titanium-chip-close', { bubbles: true, composed: true }));
        }}
      >
      </mwc-icon-button>
    `;
  }
}
