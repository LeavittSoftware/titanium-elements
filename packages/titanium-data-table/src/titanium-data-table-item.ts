import { css, customElement, html, LitElement, property, query } from 'lit-element';
import '@material/mwc-checkbox';
import { Checkbox } from '@material/mwc-checkbox';
import { TitaniumDataTableElement } from './titanium-data-table';

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

  @property({ type: Boolean, reflect: true, attribute: 'nudge-down' }) protected nudgeDown: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'nudge-up' }) protected nudgeUp: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragged' }) protected dragged: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragging' }) protected dragging: boolean;

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
      //Force the transition to end on the double-click
      this.dispatchEvent(new Event('transitionend'));
      this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { detail: this.item }));
    });

    if (this.enableDrag) {
      this.addEventListener('mousedown', e => this.startItemDrag(e, 'mouse'));
      this.addEventListener('touchstart', e => {
        e.preventDefault();
        this.startItemDrag(e, 'touch');
      });
    }
  }

  updateDragProps(dragging: boolean, originIndex: number | null, hoverIndex: number | null) {
    const myIndex = this.items.indexOf(this);
    this.nudgeDown = originIndex !== null && hoverIndex !== null && myIndex < originIndex && myIndex >= hoverIndex;
    this.nudgeUp = originIndex !== null && hoverIndex !== null && myIndex > originIndex && myIndex <= hoverIndex;
    this.dragged = originIndex === myIndex;
    this.dragging = dragging;
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

  @property({ type: Number }) hoverIndex: number | null = null;

  // Index of the item currently being dragged
  @property({ type: Number }) originIndex: number | null = null;

  private get dataTable() {
    return this.parentElement as TitaniumDataTableElement;
  }

  private get items() {
    return this.dataTable.itemsSlot?.assignedElements() as TitaniumDataTableItemElement[];
  }

  private get itemsContainer() {
    return this.dataTable.itemsContainer;
  }

  private startItemDrag(event, type: 'touch' | 'mouse') {
    this.dragging = true;
    this.originIndex = this.items.indexOf(this);

    const moveEvent = type === 'touch' ? 'touchmove' : 'mousemove';
    const upEvents = type === 'touch' ? 'touchend' : 'mouseup,mouseout';

    // Offsets to remember for when translating the dragged item
    const containerY = this.itemsContainer.getBoundingClientRect().top + window.scrollY;
    const startY = event.pageY ?? event.touches[0].pageY;

    /*
     * Moving the dragged item
     */
    const moveItem = event => {
      // Translate and keep track of which index we are hovering over.
      const pageY = event.pageY ?? event.touches[0].pageY;
      const itemAbsoluteTop = pageY - containerY;
      const transformY = pageY - startY;

      this.style.transform = `translateY(${transformY}px)`;
      // Can get the index we're hovering over easily due to fixed element
      // heights. This calculation needs to get fancier to support
      // a list of any-height elements.
      this.hoverIndex = Math.max(Math.floor(itemAbsoluteTop / 48), 0);
      this.items.forEach(o => o.updateDragProps(this.dragging, this.originIndex, this.hoverIndex));
    };

    const onMoveEvent = event => {
      moveItem(event);
    };
    moveItem(event);

    const onUpEvent = () => {
      this.dragging = false;
      this.items.forEach(o => o.updateDragProps(this.dragging, this.originIndex, this.hoverIndex));
      document.removeEventListener(moveEvent, onMoveEvent);

      upEvents.split(',').forEach(upEvent => {
        this.removeEventListener(upEvent, onUpEvent);
      });

      // Perform the swap after the item translates to its resting spot.
      const onTransitionEnd = () => {
        if (this.originIndex !== null && this.hoverIndex !== null) {
          this.dispatchEvent(new DataTableItemDropEvent(this.originIndex, this.hoverIndex));
        }
        this.originIndex = null;
        this.hoverIndex = null;
        this.items.forEach(o => o.updateDragProps(this.dragging, this.originIndex, this.hoverIndex));

        this.style.transform = '';
        this.style.transition = '';
        this.removeEventListener('transitionend', onTransitionEnd);
      };
      this.addEventListener('transitionend', onTransitionEnd);

      // Translate the item to its resting spot.
      const finalTransformY = ((this.hoverIndex ?? 0) - (this.originIndex ?? 0)) * 48;
      this.style.transition = 'transform 0.1s ease-out';
      this.style.transform = `translate3d(0, ${finalTransformY}px, 0)`;
    };

    upEvents.split(',').forEach(upEvent => {
      this.addEventListener(upEvent, onUpEvent);
    });
    document.addEventListener(moveEvent, onMoveEvent);
  }

  static styles = css`
    :host {
      display: block;

      -webkit-touch-callout: none;
      user-select: none;
      text-decoration: none;

      background-color: #fff;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;

      transition: none;
      z-index: 1;
      margin-top: -1px;
      box-sizing: border-box;
      border-bottom: 1px var(--app-border-color, #dadce0) solid;
      border-top: 1px var(--app-border-color, #dadce0) solid;
      position: relative;
    }

    :host(:not([disable-select])[selected]) {
      background-color: #e8f0fe;
    }

    :host(:not([disable-select]):not([selected]):hover) {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    :host([enable-dragging]) {
      height: 48px !important;
      overflow: hidden;
      cursor: grab;
    }

    mwc-icon[drag] {
      display: none;
      color: var(--app-border-color, #dadce0);
      margin-right: -24px;
    }

    :host([enable-dragging]:hover) mwc-icon[drag] {
      display: block;
    }

    :host([nudge-down]:not([dragged])) {
      transform: translate3d(0, 48px, 0);
    }

    :host([nudge-up]:not([dragged])) {
      transform: translate3d(0, -48px, 0);
    }

    :host([dragged]) {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      transition: none;
      z-index: 2 !important;
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }

    :host main {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 48px;
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
    `;
  }
}

export class DataTableItemDropEvent extends Event {
  static eventType = 'titanium-data-table-item-drop';
  hoverIndex: number;
  originIndex: number;

  constructor(originIndex: number, hoverIndex: number) {
    super(DataTableItemDropEvent.eventType, { composed: true, bubbles: true });
    this.hoverIndex = hoverIndex;
    this.originIndex = originIndex;
  }
}
