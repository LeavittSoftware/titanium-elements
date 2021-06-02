import { css, customElement, html, LitElement, property } from 'lit-element';
import '@material/mwc-icon-button';
import { CheckableElement, SingleSelectionController } from '@material/mwc-radio/single-selection-controller';

/**
 * Material design inspired chips.
 *
 * @element titanium-chip
 *
 * @slot chip-icon - Optional chip icon (replaces the image if src was provided)
 *
 * @fires titanium-chip-close - Fired when the close button is clicked
 * @fires checked - Fired when item is checked. Selectable attribute must be present.
 *
 * @cssprop {Color} --app-border-color - Chip border color
 * @cssprop {Color} --app-text-color - Label color
 * @cssprop {Color} --titanium-chip-label-background-color - Chip background color
 * @cssprop {Color} --app-hover-color - Hover background color
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

  /**
   *  Enables ability for chip to be selectable and participate in a radio group
   */
  @property({ type: Boolean }) selectable: boolean = false;

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

    :host([checked]) label {
      color: var(--titanium-side-menu-item-selected-color, #1967d2);
      fill: var(--titanium-side-menu-item-selected-color, #1967d2);
    }

    :host([checked]) {
      background: var(--titanium-side-menu-item-selected-background-color, #e8f0fe);
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

    mwc-icon-button {
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
      <slot slot="chip-icon" name="chip-icon"> ${this.src ? html` <img src=${this.src} /> ` : ''} </slot>
      <label>${this.label}</label>
      <mwc-icon-button
        icon="close"
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
