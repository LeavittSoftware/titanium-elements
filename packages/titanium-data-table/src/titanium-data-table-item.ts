import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * A data table element to organize row data and handle row selection.
 *
 * row-item positioning attributes:
 *    - right
 *    - desktop
 *    - large
 *    - center
 *    - width - ex. "140px"
 *
 * @element titanium-data-table-item
 *
 * @fires titanium-data-table-item-navigate - Fired on double click of a row. detail: unknown(this.item)
 * @fires titanium-data-table-item-selected-changed - Fired when item is selected.  detail: { isSelected: boolean, item: unknown }
 *
 * @slot - Main slot that should contain a list of row-item elements
 *
 * @cssprop {Color} --app-text-color - Row text color
 * @cssprop {Color} --app-hover-color - Row hover color
 * @cssprop {Color} --app-border-color - Bottom division line
 */
@customElement('titanium-data-table-item')
export class TitaniumDataTableItemElement extends LitElement {
  /**
   * The backing object that is display in this row.  Sent in navigate and selected events.
   */
  @property({ type: Object }) item: unknown;

  /**
   * True when row is selected.
   */
  @property({ reflect: true, type: Boolean, attribute: 'is-selected' }) isSelected: boolean = false;

  /**
   *  Disables ability to select this row.
   */
  @property({ type: Boolean, attribute: 'disable-select' }) disableSelect: boolean;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true, attribute: 'narrow' }) isTableNarrow: boolean = false;

  private _isClicking: boolean = false;
  private _clickTimeoutHandle: number;

  constructor() {
    super();
    this.addEventListener('click', () => this._handleClick());
  }

  firstUpdated() {
    // Set width of each slotted row with based on width
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.shadowRoot as any)
      .querySelector('slot')
      .assignedNodes()
      .filter(e => e.nodeType === Node.ELEMENT_NODE)
      .forEach(e => {
        if (e => e.getAttribute('width')) {
          e.style.width = e.getAttribute('width');
        }
      });
  }

  _handleClick() {
    if (this._isClicking) {
      this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { composed: true, detail: this.item, bubbles: true }));
      window.clearTimeout(this._clickTimeoutHandle);
      this._isClicking = false;
      return;
    }

    this._isClicking = true;
    this.toggleSelected();
    this._clickTimeoutHandle = window.setTimeout(() => {
      this._isClicking = false;
    }, 300);
  }

  toggleSelected() {
    if (this.disableSelect) {
      return;
    }
    this.isSelected = !this.isSelected;
    this.dispatchEvent(
      new CustomEvent('titanium-data-table-item-selected-changed', { bubbles: true, composed: true, detail: { isSelected: this.isSelected, item: this.item } })
    );
  }

  select() {
    if (!this.isSelected) {
      this.toggleSelected();
    }
  }

  deselected() {
    if (this.isSelected) {
      this.toggleSelected();
    }
  }

  _handleToggleButton() {
    this.toggleSelected();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      min-height: 32px;
      text-decoration: none;

      background-color: #fff;
      border-bottom: 1px var(--app-border-color, #dadce0) solid;

      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    :host(:not([disable-select])[is-selected]),
    :host(:not([disable-select]):hover) {
      background-color: var(--app-hover-color, #f9f9f9);
      transition: 0.3s ease;
    }

    ::slotted(row-item) {
      display: block;

      font-size: 13px;
      line-height: 18px;
      color: var(--app-text-color, #5f6368);
      font-weight: 400;
      padding: 4px 8px;
      margin: 0;
    }

    ::slotted(row-item:last-of-type) {
      padding-right: 24px;
    }

    ::slotted(row-item:not([width])) {
      -ms-flex: 3;
      -webkit-flex: 3;
      flex: 3;
    }

    ::slotted(row-item:not([width])[large]) {
      -ms-flex: 5;
      -webkit-flex: 5;
      flex: 5;
    }

    ::slotted(row-item[center]) {
      text-align: center;
    }

    ::slotted(row-item[right]) {
      text-align: right;
    }

    item-checkbox {
      display: block;
      flex-shrink: 0;
      align-self: center;
      margin: 8px 8px 8px 24px;
      width: 22px;
      height: 22px;
      cursor: pointer;
    }

    item-checkbox svg {
      fill: var(--app-text-color, #5f6368);
    }

    :host([disable-select]) item-checkbox {
      display: none;
    }

    :host([disable-select]) ::slotted(row-item:first-of-type) {
      padding-left: 24px;
    }

    :host([narrow]) ::slotted(row-item[desktop]) {
      display: none;
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <item-checkbox>
        <svg empty viewBox="0 0 24 24" ?hidden="${this.isSelected}">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        </svg>
        <svg checked viewBox="0 0 24 24" ?hidden="${!this.isSelected}">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </item-checkbox>
      <slot></slot>
    `;
  }
}
