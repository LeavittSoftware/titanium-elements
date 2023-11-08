import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { TitaniumDataTable } from './data-table';

import '@material/web/checkbox/checkbox';
import '@material/web/icon/icon';

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
 * @fires titanium-data-table-item-drop - Fired when item is dropped after a drag
 *
 * @slot default - Main slot that should contain a list of row-item elements
 * @slot item-footer - Optional footer content below the row with the row-items
 *
 * @cssprop {Color} [--md-sys-color-secondary-container] - Row selected  color
 * @cssprop {Color} [--md-sys-color-on-surface] - Row hover color
 * @cssprop {Color} [--md-sys-color-outline-variant] - Bottom division line
 * @cssprop [--titanium-data-table-font-family=Roboto, Noto, sans-serif] - Set the font family of the data table item
 */
@customElement('titanium-data-table-item')
export class TitaniumDataTableItem extends LitElement {
  /**
   * The backing object that is displayed in this row.  Sent in navigate and selected events.
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
   *  <titanium-data-table @titanium-data-table-items-reorder=${() => this.requestUpdate('items')} ... >
   *
   */
  @property({ type: Boolean, reflect: true, attribute: 'enable-dragging' }) enableDrag: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'nudge-down' }) protected nudgeDown: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'nudge-up' }) protected nudgeUp: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragged' }) protected dragged: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragging' }) protected dragging: boolean;

  @state() protected nudgeHeight: number;
  @state() protected hoverIndex: number | null = null;
  @state() protected originIndex: number | null = null;

  @query('item-content') itemContent: HTMLDivElement;

  protected mouseEvent = (e) => this.#startItemDrag(e, 'mouse');
  protected touchEvent = (e) => {
    this.#startItemDrag(e, 'touch');
  };

  async updated(changed: PropertyValues<this>) {
    if (changed.has('enableDrag')) {
      if (this.enableDrag) {
        this.addEventListener('mousedown', this.mouseEvent);
        this.addEventListener('touchstart', this.touchEvent);
      } else {
        this.removeEventListener('mousedown', this.mouseEvent);
        this.removeEventListener('touchstart', this.touchEvent);
      }
    }
  }

  firstUpdated() {
    const elements = this.shadowRoot?.querySelector<HTMLSlotElement>('slot')?.assignedElements();
    elements?.forEach((e) => {
      const element = e as HTMLElement;
      const width = element.getAttribute('width');
      if (width) {
        element.style.width = width;
      }
    });

    this.addEventListener('dblclick', () => {
      //Force the transition to end on the double-click
      /**
       * @internal
       */
      this.dispatchEvent(new Event('transitionend'));
      this.dispatchEvent(new CustomEvent('titanium-data-table-item-navigate', { detail: this.item }));
    });
  }

  /**
   * @ignore
   */
  updateDragProps(dragging: boolean, originIndex: number | null, hoverIndex: number | null, originHeight: number) {
    const myIndex = this.items.indexOf(this);
    this.nudgeDown = originIndex !== null && hoverIndex !== null && myIndex < originIndex && myIndex >= hoverIndex;
    this.nudgeUp = originIndex !== null && hoverIndex !== null && myIndex > originIndex && myIndex <= hoverIndex;
    this.dragged = originIndex === myIndex;
    this.dragging = dragging;
    this.nudgeHeight = originHeight;
  }

  /**
   *  toggles item's checkbox which triggers this.selected to toggle as well
   */
  toggleSelected() {
    this.selected ? this.deselect() : this.select();
  }

  /**
   *  if not already checked, triggers click on checkbox which triggers this.selected to be set as well
   */
  select() {
    if (!this.selected) {
      this.#setSelected(true);
    }
  }

  /**
   *  if already checked, triggers click on checkbox which triggers this.selected to be set to false as well
   */
  deselect() {
    if (this.selected) {
      this.#setSelected(false);
    }
  }

  #setSelected(value: boolean) {
    this.selected = value;
    this.dispatchEvent(new Event('titanium-data-table-item-selected-changed', { bubbles: true, composed: true }));
  }

  protected get dataTable() {
    return this.parentElement as TitaniumDataTable;
  }

  protected get items() {
    return (this.dataTable.itemsSlot?.assignedElements() as TitaniumDataTableItem[]) ?? [];
  }

  protected get itemsContainer() {
    return this.dataTable.itemsContainer;
  }

  /**
   *  Return index of item over
   */
  #getIndexOver(itemEndPositions: number[], hoverPosition: number) {
    for (let index = 0; index < itemEndPositions.length; index++) {
      const endPosition = itemEndPositions[index];
      if (hoverPosition <= endPosition) {
        return index;
      }
    }
    return itemEndPositions.length - 1;
  }

  /**
   *  Given the origin and hover index determine items that will be affected
   */
  #determineRange(originIndex: number | null, hoverIndex: number | null) {
    //PREF: ONLY UPDATE ITEMS BETWEEN ORIGIN AND HOVER (+1 and -1)
    const high = Math.max(hoverIndex ?? 0, originIndex ?? 0) + 1;
    let low = Math.min(hoverIndex ?? 0, originIndex ?? 0) - 1;
    low = low < 0 ? 0 : low;

    return [high, low];
  }

  #notifySiblingsDrag(originIndex: number | null, hoverIndex: number | null, dragging: boolean, itemHeight: number) {
    const range = this.#determineRange(originIndex, hoverIndex);
    for (let index = range[1]; index <= range[0]; index++) {
      const o = this.items?.[index];
      o?.updateDragProps(dragging, this.originIndex, this.hoverIndex, itemHeight);
    }
  }

  #notifySiblingDragStop(originIndex: number | null, hoverIndex: number | null) {
    const range = this.#determineRange(originIndex, hoverIndex);
    for (let index = range[1]; index <= range[0]; index++) {
      const o = this.items?.[index];
      o?.updateDragProps(false, null, null, 0);
    }
  }

  #startItemDrag(event, type: 'touch' | 'mouse') {
    //only allow primary mouse for drag
    if (type === 'mouse' && event.which !== 1) {
      return;
    }

    //Prevent native scrolling
    event.preventDefault();

    this.dragging = true;
    this.originIndex = this.items.indexOf(this);

    const moveEvent = type === 'touch' ? 'touchmove' : 'mousemove';
    const upEvent = type === 'touch' ? 'touchend' : 'mouseup';
    const containerY = this.itemsContainer?.getBoundingClientRect().top + window.scrollY;
    const startY = event.pageY ?? event.touches[0].pageY;
    const itemHeight = this.getBoundingClientRect().height - 1;

    //Cache the end positions of each item for variable height list items
    let cumulativeSum = 0;
    const itemEndPositions = this.items.map((o) => {
      cumulativeSum = cumulativeSum + (o.getBoundingClientRect().height - 1);
      return cumulativeSum;
    });

    const moveItemHandler = (event) => {
      // Translate and keep track of which index we are hovering over.
      const pageY = event.pageY ?? event.touches[0].pageY;
      const clientY = event.clientY ?? event.touches[0].clientY;

      const itemAbsoluteTop = pageY - containerY;
      const transformY = pageY - startY;

      this.style.transform = `translateY(${transformY}px)`;
      this.hoverIndex = this.#getIndexOver(itemEndPositions, itemAbsoluteTop);
      this.#notifySiblingsDrag(this.originIndex, this.hoverIndex, this.dragging, itemHeight);

      //Scroll on when item approaches bottom/top of viewport
      if (clientY < 5) {
        scrollBy({
          top: -(window.innerHeight / 5),
          behavior: 'smooth',
        });
      } else if (clientY < 25) {
        scrollBy({
          top: -(window.innerHeight / 10),
          behavior: 'smooth',
        });
      }

      if (window.innerHeight - clientY < 5) {
        scrollBy({
          top: window.innerHeight / 5,
          behavior: 'smooth',
        });
      } else if (window.innerHeight - clientY < 25) {
        scrollBy({
          top: window.innerHeight / 10,
          behavior: 'smooth',
        });
      }
    };

    const cancelDragHandler = () => {
      document.removeEventListener(moveEvent, moveItemHandler);
      this.removeEventListener(upEvent, dragCompleteHandler);
      this.dragging = false;

      const onTransitionEnd = () => {
        this.#notifySiblingDragStop(this.originIndex, this.hoverIndex);
        this.originIndex = null;
        this.hoverIndex = null;

        this.style.transform = '';
        this.style.transition = '';
        this.removeEventListener('transitionend', onTransitionEnd);
      };
      this.addEventListener('transitionend', onTransitionEnd);

      this.style.transition = 'transform 0.1s ease-out';
      this.style.transform = 'translate3d(0, 0, 0)';

      document.removeEventListener('mouseout', cancelDragHandler);
    };

    const dragCompleteHandler = () => {
      this.dragging = false;
      this.items.forEach((o) => (o.dragging = false));
      document.removeEventListener(moveEvent, moveItemHandler);

      document.removeEventListener(upEvent, dragCompleteHandler);
      if (type === 'mouse') {
        document.removeEventListener('mouseout', cancelDragHandler);
      }

      // Perform the swap after the item translates to its resting spot.
      const onTransitionEnd = () => {
        if (this.originIndex !== null && this.hoverIndex !== null) {
          /**
           * @ignore
           */
          this.dispatchEvent(new DataTableItemDropEvent(this.originIndex, this.hoverIndex));
        }
        this.#notifySiblingDragStop(this.originIndex, this.hoverIndex);
        this.originIndex = null;
        this.hoverIndex = null;

        this.style.transform = '';
        this.style.transition = '';
        this.removeEventListener('transitionend', onTransitionEnd);
      };
      this.addEventListener('transitionend', onTransitionEnd);

      //Count the nudged items heights to know final transform amount
      const finalTransformYUp = this.items
        .filter((o) => o.nudgeUp)
        .map((o) => (o.getBoundingClientRect().height > 0 ? o.getBoundingClientRect().height - 1 : 0))
        .reduce((a, b) => a + b, 0);

      const finalTransformYDown = this.items
        .filter((o) => o.nudgeDown)
        .map((o) => -o.getBoundingClientRect().height - 1)
        .reduce((a, b) => a + b, 0);

      const finalTransformY = finalTransformYUp !== 0 ? finalTransformYUp : finalTransformYDown;

      // Translate the item to its resting spot.
      this.style.transition = 'transform 0.1s ease-out';
      this.style.transform = `translate3d(0, ${finalTransformY}px, 0)`;
    };

    if (type === 'mouse') {
      window.addEventListener('mouseout', cancelDragHandler);
    }
    document.addEventListener(upEvent, dragCompleteHandler);
    document.addEventListener(moveEvent, moveItemHandler);
    moveItemHandler(event);
  }

  static styles = css`
    :host {
      display: block;

      -webkit-touch-callout: none;
      user-select: none;
      text-decoration: none;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;

      transition: none;
      margin-top: -1px;
      box-sizing: border-box;
      border-bottom: 1px var(--md-sys-color-outline-variant) solid;
      border-top: 1px var(--md-sys-color-outline-variant) solid;
      position: relative;
    }

    :host(:not([disable-select])[selected]) {
      background-color: var(--md-sys-color-secondary-container);
    }

    :host(:not([disable-select]):not([selected]):hover) {
      background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
    }

    :host([enable-dragging]) {
      cursor: grab;
    }

    md-icon[drag] {
      display: none;
      color: var(--md-sys-color-outline, #dadce0);
      margin-right: -24px;
    }

    :host([enable-dragging]:hover) md-icon[drag] {
      display: block;
    }

    :host([dragged]) {
      box-shadow:
        0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23);
      transition: none;
      overflow: hidden;
      z-index: 1 !important;
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }

    /* :host {
      transition: transform 0.2s ease-out;
    } */

    :host main {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 48px;
    }

    /* Do not apply :hover style on touch devices */
    @media (hover: hover) and (pointer: fine) {
      :host([enable-dragging]) div[item-footer] ::slotted(*) {
        pointer-events: none;
      }
    }

    ::slotted(row-item) {
      display: block;
      font-size: 14px;
      line-height: 18px;
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

    md-checkbox {
      flex-shrink: 0;
      align-self: center;
      margin: 0 14px 0 20px;
    }

    :host([disable-select]) ::slotted(row-item:first-of-type) {
      padding-left: 24px;
    }

    :host([narrow]) ::slotted(row-item[desktop]) {
      display: none;
    }

    @media (max-width: 768px) {
      :host([enable-dragging]) md-icon[drag] {
        display: block;
      }
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <main part="main">
        ${this.disableSelect
          ? ''
          : html`
              <md-icon drag>drag_indicator</md-icon>
              <md-checkbox
                .checked=${this.selected}
                @mousedown=${(e: MouseEvent) => e.stopPropagation()}
                @touchstart=${(e: TouchEvent) => e.stopPropagation()}
                @dblclick=${(e) => e.stopPropagation()}
                @change=${(e) => this.#setSelected(e.target.checked)}
              ></md-checkbox>
            `}

        <slot></slot>
      </main>
      <div item-footer part="item-footer-container">
        <slot name="item-footer"></slot>
      </div>
    `;
  }
}

/**
 * @class
 * @ignore
 */
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
