import { css, CSSResultGroup, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * @class
 * @ignore
 */
export class ItemDropEvent extends Event {
  static eventType = 'item-drop';
  hoverIndex: number;
  originIndex: number;

  constructor(originIndex: number, hoverIndex: number) {
    super(ItemDropEvent.eventType, { composed: true, bubbles: true });
    this.hoverIndex = hoverIndex;
    this.originIndex = originIndex;
  }
}

export class DraggableItemBase extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'nudge-down' }) protected accessor nudgeDown: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'nudge-up' }) protected accessor nudgeUp: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragged' }) protected accessor dragged: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'dragging' }) protected accessor dragging: boolean;
  @property({ type: Boolean, attribute: 'disable-drag', reflect: true }) protected accessor disableDrag: boolean;

  @state() protected accessor nudgeHeight: number;
  @state() protected accessor hoverIndex: number | null = null;
  @state() protected accessor originIndex: number | null = null;

  static styles: CSSResultGroup = css`
    md-icon[drag] {
      cursor: grab;
    }

    md-elevation {
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }

    :host([disable-drag]) md-icon[drag] {
      cursor: inherit;
      opacity: 0.2;
    }

    :host([dragged]) md-elevation {
      --md-elevation-level: 3;
    }

    :host([dragged]) {
      transition: none;

      z-index: 5 !important;
      background-color: var(--md-sys-color-surface-container-high);
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }
  ` as CSSResultGroup;

  protected get items(): DraggableItemBase[] {
    return [];
  }

  protected get itemsContainer(): HTMLElement | null {
    return null;
  }

  protected mouseEvent = (e) => {
    if (this.disableDrag) {
      return;
    }
    return this.#startItemDrag(e, 'mouse');
  };

  protected touchEvent = (e) => {
    if (this.disableDrag) {
      return;
    }

    return this.#startItemDrag(e, 'touch');
  };

  updateDragProps(dragging: boolean, originIndex: number | null, hoverIndex: number | null, originHeight: number) {
    const myIndex = this.items.indexOf(this);
    this.nudgeDown = originIndex !== null && hoverIndex !== null && myIndex < originIndex && myIndex >= hoverIndex;
    this.nudgeUp = originIndex !== null && hoverIndex !== null && myIndex > originIndex && myIndex <= hoverIndex;
    this.dragged = originIndex === myIndex;
    this.dragging = dragging;
    this.nudgeHeight = originHeight;
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
    const containerY = (this.itemsContainer?.getBoundingClientRect()?.top ?? 0) + window.scrollY;

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
      const itemsPageY = event.pageY ?? event.touches[0].pageY;
      const clientY = event.clientY ?? event.touches[0].clientY;

      const itemAbsoluteTop = itemsPageY - containerY;

      const transformY = itemsPageY - startY;

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
          this.dispatchEvent(new ItemDropEvent(this.originIndex, this.hoverIndex));
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
}
