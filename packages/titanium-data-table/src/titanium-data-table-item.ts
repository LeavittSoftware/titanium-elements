import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-data-table-item')
export class TitaniumDataTableItemElement extends LitElement {
  @property({ type: Object }) item: Object;
  @property({ reflect: true, type: Boolean, attribute: 'is-selected' }) isSelected: boolean;
  @property({ type: Boolean }) isClicking: boolean;
  @property({ type: Boolean, attribute: 'disable-select' }) disableSelect: boolean;

  private clickTimeoutHandle: NodeJS.Timer;

  constructor() {
    super();
    this.addEventListener('click', () => this._handleClick());
    this.addEventListener('dblclick', () => this._handleDoubleClick());
  }

  firstUpdated() {
    // Set width of each slotted row with based on width
    // tslint:disable-next-line: no-any
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
    clearTimeout(this.clickTimeoutHandle);
    if (!this.isClicking) this.toggleSelected();
    this.isClicking = true;
    this.clickTimeoutHandle = setTimeout(() => {
      this.isClicking = false;
    }, 300);
  }

  _handleDoubleClick() {
    clearTimeout(this.clickTimeoutHandle);
    this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { composed: true, detail: this.item, bubbles: true }));
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

    [hidden] {
      display: none;
    }

    @media (max-width: 768px) {
      ::slotted(row-item[desktop]) {
        display: none;
      }
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
