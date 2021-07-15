import { css, customElement, html, LitElement, property, query } from 'lit-element';
import '@material/mwc-checkbox';
import { Checkbox } from '@material/mwc-checkbox';

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
  @property({ reflect: true, type: Boolean }) selected: boolean = false;

  /**
   *  Disables ability to select this row.
   */
  @property({ type: Boolean, attribute: 'disable-select' }) disableSelect: boolean;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true }) narrow: boolean = false;

  @query('mwc-checkbox') checkbox: Checkbox;

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

    this.addEventListener('dblclick', () => {
      this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { detail: this.item }));
    });
  }

  toggleSelected() {
    this.selected ? this.deselect() : this.select();
  }

  select() {
    if (this.checkbox && !this.checkbox.checked) {
      this.checkbox.click();
    }
  }

  deselect() {
    if (this.checkbox?.checked) {
      this.checkbox.click();
    }
  }

  _handleToggleButton() {
    if (this.checkbox.checked) {
      this.selected = !this.checkbox.checked;
      this.checkbox.click();
    }
  }

  static styles = css`
    :host {
      display: block;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      text-decoration: none;

      background-color: #fff;
      border-bottom: 1px var(--app-border-color, #dadce0) solid;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    :host(:last-of-type) {
      border: none;
    }

    :host main {
      display: flex;
      flex-direction: row;
      align-items: center;

      min-height: 48px;
    }

    :host(:not([disable-select]):hover) {
      background-color: var(--app-hover-color, #f9f9f9);
      transition: 0.3s ease;
    }

    :host(:not([disable-select])[selected]) {
      background-color: rgb(66, 133, 244, 0.12);
    }

    ::slotted(row-item) {
      display: block;

      font-size: 14px;
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

    ::slotted(row-item[image]) {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    ::slotted(row-item[right]) {
      text-align: right;
    }

    mwc-checkbox {
      flex-shrink: 0;
      align-self: center;
      margin: 0 0 0 9px;
    }

    :host([disable-select]) ::slotted(row-item:first-of-type) {
      padding-left: 24px;
    }

    :host([narrow]) ::slotted(row-item[desktop]) {
      display: none;
    }
  `;

  render() {
    return html`
      <main>
        ${this.disableSelect
          ? ''
          : html`
              <mwc-checkbox
                .disabled=${this.disableSelect}
                @dblclick=${e => e.stopPropagation()}
                @change=${() => {
                  this.selected = this.checkbox.checked;
                  this.dispatchEvent(
                    new CustomEvent('titanium-data-table-item-selected-changed', {
                      composed: true,
                      bubbles: true,
                      detail: { isSelected: this.selected, item: this.item, checkbox: this.checkbox },
                    })
                  );
                }}
              ></mwc-checkbox>
            `}

        <slot></slot>
      </main>
      <slot name="item-footer"></slot>
    `;
  }
}
