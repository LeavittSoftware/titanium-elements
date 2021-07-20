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

  /**
   *  Set to true to make item draggable.  When items are dropped, the items in the list's array are sorted accordingly.
   *  In order to reflect those updates out to the DOM, you will need to call requestUpdate on the items array when
   *  items are dropped. ex.
   *
   *  <titanium-data-table @titanium-data-table-item-drop=${() => this.requestUpdate('items')} ... >
   *
   */
  @property({ type: Boolean, reflect: true, attribute: 'enable-dragging' }) enableDrag: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'is-dragging' }) protected isDragging: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'is-over-top' }) protected isOverTop: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'is-over-bottom' }) protected isOverBottom: boolean;

  @query('mwc-checkbox') checkbox: Checkbox;
  @query('item-content') itemContent: HTMLDivElement;

  firstUpdated() {
    // Set width of each slotted row with based on width
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elements = this.shadowRoot?.querySelector<HTMLSlotElement>('slot')?.assignedElements();
    elements?.forEach(e => {
      const element = e as HTMLElement;
      const width = element.getAttribute('width');
      if (width) {
        element.style.width = width;
      }
    });

    this.addEventListener('dblclick', () => {
      this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { detail: this.item }));
    });

    if (this.enableDrag) {
      this.addEventListener('dragover', e => {
        const rect = this.itemContent.getBoundingClientRect();
        const y = e.clientY - rect.top; //y position within the element.
        this.isOverBottom = y > rect.height / 2;
        this.isOverTop = !this.isOverBottom;
      });
      this.addEventListener('dragleave', () => {
        setTimeout(() => this.notOver(), 15);
      });
      this.addEventListener('mouseleave', () => {
        this.notOver();
      });
      this.addEventListener('dragover', e => {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'move';
        }
      });
      this.addEventListener('drop', e => {
        if (!this.isDragging) {
          const draggedItem = JSON.parse(e.dataTransfer?.getData('item') ?? '');
          const rect = this.itemContent.getBoundingClientRect();
          const y = e.clientY - rect.top; //y position within the element.
          const dropPosition = y > rect.height / 2 ? 'below' : 'above';
          // console.log((draggedItem as any)?.name, ' dropped ', dropPosition, (this.item as any)?.name);
          if (
            (dropPosition === 'below' && this.hasAttribute('above-dragging-item')) ||
            (dropPosition === 'above' && this.hasAttribute('below-dragging-item'))
          ) {
            // console.log('SKIP');
          } else {
            this.dispatchEvent(new DataTableItemDropEvent(draggedItem, this.item, dropPosition));
          }
        }

        this.notOver();
        this.isDragging = false;
      });
    }
  }

  private notOver() {
    this.isOverTop = false;
    this.isOverBottom = false;
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
      this.checkbox.blur();
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

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
      margin-top: -1px;
    }

    :host(:not([below-dragging-item])[is-over-top]:not([is-dragging])) {
      margin-top: 0;
    }

    item-content {
      display: block;
      box-sizing: border-box;
      border-bottom: 1px var(--app-border-color, #dadce0) solid;
      border-top: 1px var(--app-border-color, #dadce0) solid;
    }

    :host([enable-dragging]) item-content {
      cursor: grab;
    }

    mwc-icon[drag] {
      display: none;
      color: var(--app-border-color, #dadce0);
      margin-right: -24px;
    }

    :host([is-dragging]) item-content {
      opacity: 0.4;
      height: 100%;
      /* min-height: 48px; */
    }

    :host(:not([below-dragging-item])) div[top-drop],
    :host(:not([above-dragging-item])) div[bottom-drop] {
      max-height: 0;
      transition: max-height 0.2s linear;
      background-color: rgb(66, 133, 244, 0.12);
      height: 48px;
    }

    :host(:not([above-dragging-item])[is-over-bottom]:not([is-dragging])) div[bottom-drop],
    :host(:not([below-dragging-item])[is-over-top]:not([is-dragging])) div[top-drop] {
      max-height: 48px;
    }

    :host(:last-of-type) item-content {
      border-bottom: none;
    }

    :host main {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 48px;
    }

    :host(:not([is-dragging]):not([above-dragging-item]):not([is-over-top]):not([is-over-bottom]):not([disable-select]):hover) item-content {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    :host([enable-dragging]:not([is-dragging]):not([above-dragging-item]):not([is-over-top]):not([is-over-bottom]):hover) mwc-icon[drag] {
      display: block;
    }

    :host(:not([disable-select])[selected]) item-content {
      background-color: rgb(66, 133, 244, 0.12);
    }

    div[item-footer] ::slotted(*) {
      pointer-events: none;
    }

    ::slotted(row-item) {
      display: block;
      pointer-events: none;
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

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <div top-drop></div>
      <item-content
        draggable=${this.enableDrag ? true : false}
        @dragend=${() => {
          this.isDragging = false;
          this.notOver();
          this.nextElementSibling?.removeAttribute('below-dragging-item');
          this.previousElementSibling?.removeAttribute('above-dragging-item');
        }}
        @dragstart=${e => {
          this.isDragging = true;
          e.dataTransfer.setData('item', JSON.stringify(this.item));
          this.nextElementSibling?.setAttribute('below-dragging-item', '');
          this.previousElementSibling?.setAttribute('above-dragging-item', '');
          this.dispatchEvent(new Event('titanium-data-table-item-drag-start', { composed: true, bubbles: true }));
        }}
      >
        <main>
          ${this.disableSelect
            ? ''
            : html`
                <mwc-icon drag>drag_indicator</mwc-icon>
                <mwc-checkbox
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
        <div item-footer>
          <slot name="item-footer"></slot>
        </div>
      </item-content>
      <div bottom-drop></div>
    `;
  }
}

export class DataTableItemDropEvent extends Event {
  static eventType = 'titanium-data-table-item-drop';
  draggedItem: unknown;
  targetItem: unknown;
  dropPosition: 'below' | 'above';

  constructor(draggedItem: unknown, targetItem: unknown, dropPosition: 'below' | 'above') {
    super(DataTableItemDropEvent.eventType, { composed: true, bubbles: true });
    this.draggedItem = draggedItem;
    this.targetItem = targetItem;
    this.dropPosition = dropPosition;
  }
}
