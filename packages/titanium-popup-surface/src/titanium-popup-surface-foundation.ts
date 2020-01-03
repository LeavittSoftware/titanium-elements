import { LitElement, property, css } from 'lit-element';

let cachedCssTransformPropertyName_: CssTransformPropertyName | undefined;
export function getTransformPropertyName(globalObj: Window, forceRefresh = false): CssTransformPropertyName {
  if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }
  return cachedCssTransformPropertyName_;
}

type CssTransformPropertyName = 'transform' | 'webkitTransform';

export interface MenuDimensions {
  width: number;
  height: number;
}

export interface MenuDistance {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface MenuPoint {
  x: number;
  y: number;
}

enum CornerBit {
  BOTTOM = 1,
  CENTER = 2,
  RIGHT = 4,
  FLIP_RTL = 8,
}

export enum Corner {
  TOP_LEFT = 0,
  TOP_RIGHT = CornerBit.RIGHT,
  BOTTOM_LEFT = CornerBit.BOTTOM,
  BOTTOM_RIGHT = CornerBit.BOTTOM | CornerBit.RIGHT,
  TOP_START = CornerBit.FLIP_RTL,
  TOP_END = CornerBit.FLIP_RTL | CornerBit.RIGHT,
  BOTTOM_START = CornerBit.BOTTOM | CornerBit.FLIP_RTL,
  BOTTOM_END = CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL,
}

interface AutoLayoutMeasurements {
  anchorSize: MenuDimensions;
  bodySize: MenuDimensions;
  surfaceSize: MenuDimensions;
  viewportDistance: MenuDistance;
  viewportSize: MenuDimensions;
  windowScroll: MenuPoint;
}

export class TitaniumPopupSurfaceFoundation extends LitElement {
  @property({ type: Object }) anchorElement!: Element | null; // assigned in initialSyncWithDOM()

  /**
   * Anchors margin from bottom
   */
  @property({ type: Number, attribute: 'anchor-margin-bottom' }) anchorMarginBottom = 0;

  /**
   * Anchors margin from top
   */
  @property({ type: Number, attribute: 'anchor-margin-top' }) anchorMarginTop = 0;

  /**
   * Anchors margin from right
   */
  @property({ type: Number, attribute: 'anchor-margin-right' }) anchorMarginRight = 0;

  /**
   * Anchors margin from left
   */
  @property({ type: Number, attribute: 'anchor-margin-left' }) anchorMarginLeft = 0;

  /**
   *  Defines the corner the surface is anchored to
   * TOP_LEFT = 0
   * TOP_RIGHT = 4
   * BOTTOM_LEFT = 1
   * BOTTOM_RIGHT = 5
   * TOP_START = 8
   * TOP_END = 12
   * BOTTOM_START = 9
   * BOTTOM_END = 13
   */
  @property({ type: Number, attribute: 'anchor-corner' }) anchorCorner: Corner = Corner.TOP_START;

  @property({ type: Boolean, reflect: true }) protected opened: boolean = false;
  @property({ type: Boolean, reflect: true }) protected opening: boolean = false;
  @property({ type: Boolean, reflect: true }) protected closing: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'quick-open' }) isQuickOpen = false;

  /** Used to indicate if the menu-surface is hoisted to the body. */
  @property({ type: Boolean, reflect: true, attribute: 'hoisted-element' }) isHoistedElement = false;

  /** Used to set the menu-surface calculations based on a fixed position menu. */
  @property({ type: Boolean, reflect: true, attribute: 'fixed-position' }) isFixedPosition = false;

  private openAnimationEndTimerId_ = 0;
  private closeAnimationEndTimerId_ = 0;
  private animationRequestId_ = 0;
  private isOpen_ = false;

  private position_: MenuPoint = { x: 0, y: 0 };

  private dimensions_!: MenuDimensions;
  private measurements_!: AutoLayoutMeasurements;
  private previousFocus_?: HTMLElement | SVGElement | null;

  static styles = css`
    :host {
      display: none;
      position: absolute;
      box-sizing: border-box;
      min-width: 112px;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 32px);
      margin: 0;
      padding: 0;
      transform-origin: top left;
      opacity: 0;
      overflow: auto;
      will-change: transform, opacity;
      z-index: 8;

      -webkit-transition: opacity 0.03s linear, -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 0.03s linear, -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
      -o-transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
      -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
      background-color: #fff;
      color: #000;
    }

    :host([fixed-position]) {
      position: fixed;
    }

    :host([opened]) {
      display: inline-block;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    :host([opening]) {
      display: inline-block;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
    }

    :host([closing]) {
      display: inline-block;
      opacity: 0;
      -webkit-transition: opacity 0.075s linear;
      -o-transition: opacity 0.075s linear;
      transition: opacity 0.075s linear;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleKeydown);
  }

  private registerBodyListener() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  private unregisterBodyListener() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  firstUpdated() {
    const parentEl = this.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains('popup--anchor') ? parentEl : null;
  }

  private autoPosition_() {
    this.measurements_ = this.getAutoLayoutMeasurements_();
    const corner = this.getOriginCorner_();
    const maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
    const verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
    let horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
    const horizontalOffset = this.getHorizontalOriginOffset_(corner);
    const verticalOffset = this.getVerticalOriginOffset_(corner);
    const { anchorSize, surfaceSize } = this.measurements_;

    const position: Partial<MenuDistance> = {
      [horizontalAlignment]: horizontalOffset,
      [verticalAlignment]: verticalOffset,
    };

    // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    if (anchorSize.width / surfaceSize.width > 0.67) {
      horizontalAlignment = 'center';
    }

    // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
    if (this.isHoistedElement || this.isFixedPosition) {
      this.adjustPositionForHoistedElement_(position);
    }

    this.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);

    //set position
    this.style.left = 'left' in position ? `${position.left}px` : '';
    this.style.right = 'right' in position ? `${position.right}px` : '';
    this.style.top = 'top' in position ? `${position.top}px` : '';
    this.style.bottom = 'bottom' in position ? `${position.bottom}px` : '';

    //set max height
    this.style.maxHeight = maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '';
  }

  destroy() {
    clearTimeout(this.openAnimationEndTimerId_);
    clearTimeout(this.closeAnimationEndTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
  }

  /**
   * @param corner Default anchor corner alignment of top-left menu surface corner.
   */
  setAnchorCorner(corner: Corner) {
    this.anchorCorner = corner;
  }

  /**
   * @param margin Set of margin values from anchor.
   */
  setAnchorMargin(margin: Partial<MenuDistance>) {
    this.anchorMarginTop = margin.top || 0;
    this.anchorMarginRight = margin.right || 0;
    this.anchorMarginBottom = margin.bottom || 0;
    this.anchorMarginLeft = margin.left || 0;
  }

  /** Sets the menu-surface position on the page. */
  setAbsolutePosition(x: number, y: number) {
    this.position_.x = Number.isFinite(x) ? x : 0;
    this.position_.y = Number.isFinite(y) ? y : 0;
  }

  isOpen() {
    return this.isOpen_;
  }

  /**
   * Open the pop-over
   */
  open() {
    if (this.isOpen_) {
      return;
    }

    this.saveFocus();

    if (!this.isQuickOpen) {
      this.opening = true;
    }

    this.animationRequestId_ = requestAnimationFrame(async () => {
      this.opened = true;
      await this.updateComplete;
      this.dimensions_ = this.getInnerDimensions();
      this.autoPosition_();
      if (this.isQuickOpen) {
        this.registerBodyListener();
        this.dispatchEvent(
          new CustomEvent<boolean>('opened-changed', { detail: true })
        );
      } else {
        this.openAnimationEndTimerId_ = window.setTimeout(() => {
          this.openAnimationEndTimerId_ = 0;
          this.opening = false;
          this.registerBodyListener();
          this.dispatchEvent(
            new CustomEvent<boolean>('opened-changed', { detail: true })
          );
        }, 120);
      }
    });

    this.isOpen_ = true;
  }

  /**
   * Close the pop-over
   */
  close(skipRestoreFocus = false) {
    if (!this.isQuickOpen) {
      this.closing = true;
    }

    requestAnimationFrame(async () => {
      this.opened = false;
      await this.updateComplete;
      if (this.isQuickOpen) {
        this.unregisterBodyListener();
        this.dispatchEvent(
          new CustomEvent<boolean>('opened-changed', { detail: false })
        );
      } else {
        this.closeAnimationEndTimerId_ = window.setTimeout(() => {
          this.closeAnimationEndTimerId_ = 0;
          this.closing = false;
          this.unregisterBodyListener();
          this.dispatchEvent(
            new CustomEvent<boolean>('opened-changed', { detail: false })
          );
        }, 75);
      }
    });

    this.isOpen_ = false;
    if (!skipRestoreFocus) {
      this.maybeRestoreFocus_();
    }
  }

  private handleBodyClick = (evt: MouseEvent) => {
    if (evt.composedPath().includes(this)) {
      return;
    }
    this.close();
  };

  private handleKeydown = (evt: KeyboardEvent) => {
    const { keyCode, key } = evt;

    const isEscape = key === 'Escape' || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };

  /**
   * @return Measurements used to position menu surface popup.
   */
  private getAutoLayoutMeasurements_(): AutoLayoutMeasurements {
    const anchorRect = this.getAnchorDimensions() || {
      top: this.position_.y,
      right: this.position_.x,
      bottom: this.position_.y,
      left: this.position_.x,
      width: 0,
      height: 0,
    };
    const bodySize = this.getBodyDimensions();
    const viewportSize = this.getWindowDimensions();
    const windowScroll = this.getWindowScroll();

    return {
      anchorSize: anchorRect,
      bodySize,
      surfaceSize: this.dimensions_,
      viewportDistance: {
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left,
      },
      viewportSize,
      windowScroll,
    };
  }

  private setTransformOrigin(origin) {
    const propertyName = `${getTransformPropertyName(window)}-origin`;
    this.style.setProperty(propertyName, origin);
  }

  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
   */
  private getMenuSurfaceMaxHeight_(corner: Corner): number {
    const { viewportDistance } = this.measurements_;

    let maxHeight = 0;
    const isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    const isBottomAnchored = this.hasBit_(this.anchorCorner, CornerBit.BOTTOM);

    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    const MARGIN_TO_EDGE = 32;

    // When maximum height is not specified, it is handled from CSS.
    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMarginTop - MARGIN_TO_EDGE;
      if (!isBottomAnchored) {
        maxHeight += this.measurements_.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMarginBottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
      if (isBottomAnchored) {
        maxHeight -= this.measurements_.anchorSize.height;
      }
    }
    return maxHeight;
  }

  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
   */
  private getHorizontalOriginOffset_(corner: Corner): number {
    const { anchorSize } = this.measurements_;

    // isRightAligned corresponds to using the 'right' property on the surface.
    const isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
    const avoidHorizontalOverlap = this.hasBit_(this.anchorCorner, CornerBit.RIGHT);

    if (isRightAligned) {
      const rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMarginLeft : this.anchorMarginRight;

      // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
      // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
      // the right property is correct.
      if (this.isHoistedElement || this.isFixedPosition) {
        return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
      }

      return rightOffset;
    }

    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMarginRight : this.anchorMarginLeft;
  }

  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
   */
  private getVerticalOriginOffset_(corner: Corner): number {
    const { anchorSize } = this.measurements_;
    const isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
    const avoidVerticalOverlap = this.hasBit_(this.anchorCorner, CornerBit.BOTTOM);

    let y = 0;
    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMarginTop : -this.anchorMarginBottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMarginBottom : this.anchorMarginTop;
    }
    return y;
  }

  /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
  private adjustPositionForHoistedElement_(position: Partial<MenuDistance>) {
    const { windowScroll, viewportDistance } = this.measurements_;

    const props = Object.keys(position) as Array<keyof Partial<MenuDistance>>;

    for (const prop of props) {
      let value = position[prop] || 0;

      // Hoisted surfaces need to have the anchor elements location on the page added to the
      // position properties for proper alignment on the body.
      value += viewportDistance[prop];

      // Surfaces that are absolutely positioned need to have additional calculations for scroll
      // and bottom positioning.
      if (!this.isFixedPosition) {
        if (prop === 'top') {
          value += windowScroll.y;
        } else if (prop === 'bottom') {
          value -= windowScroll.y;
        } else if (prop === 'left') {
          value += windowScroll.x;
        } else {
          // prop === 'right'
          value -= windowScroll.x;
        }
      }

      position[prop] = value;
    }
  }

  /**
   * The last focused element when the menu surface was opened should regain focus, if the user is
   * focused on or within the menu surface when it is closed.
   */
  private maybeRestoreFocus_() {
    const isRootFocused = document.activeElement === this;
    const childHasFocus = document.activeElement && this.isElementInContainer(document.activeElement);
    if (isRootFocused || childHasFocus) {
      this.restoreFocus();
    }
  }

  private isElementInContainer(el): boolean {
    return this.shadowRoot?.contains(el) ?? false;
  }

  /**
   * Computes the corner of the anchor from which to animate and position the menu surface.
   */
  private getOriginCorner_(): Corner {
    // Defaults: open from the top left.
    let corner = Corner.TOP_LEFT;

    const { viewportDistance, anchorSize, surfaceSize } = this.measurements_;

    const isBottomAligned = this.hasBit_(this.anchorCorner, CornerBit.BOTTOM);
    const availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMarginBottom : viewportDistance.top + this.anchorMarginTop;
    const availableBottom = isBottomAligned
      ? viewportDistance.bottom - this.anchorMarginBottom
      : viewportDistance.bottom + anchorSize.height - this.anchorMarginTop;

    const topOverflow = surfaceSize.height - availableTop;
    const bottomOverflow = surfaceSize.height - availableBottom;
    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner = this.setBit_(corner, CornerBit.BOTTOM);
    }

    const isRtl = true;
    const isFlipRtl = this.hasBit_(this.anchorCorner, CornerBit.FLIP_RTL);
    const avoidHorizontalOverlap = this.hasBit_(this.anchorCorner, CornerBit.RIGHT);
    const isAlignedRight = (avoidHorizontalOverlap && !isRtl) || (!avoidHorizontalOverlap && isFlipRtl && isRtl);
    const availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMarginRight : viewportDistance.left + this.anchorMarginLeft;
    const availableRight = isAlignedRight ? viewportDistance.right - this.anchorMarginRight : viewportDistance.right + anchorSize.width - this.anchorMarginLeft;

    const leftOverflow = surfaceSize.width - availableLeft;
    const rightOverflow = surfaceSize.width - availableRight;

    if (
      (leftOverflow < 0 && isAlignedRight && isRtl) ||
      (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
      (rightOverflow > 0 && leftOverflow < rightOverflow)
    ) {
      corner = this.setBit_(corner, CornerBit.RIGHT);
    }

    return corner;
  }

  private saveFocus() {
    this.previousFocus_ = document.activeElement as HTMLElement | SVGElement | null;
  }

  private restoreFocus() {
    if (this.contains(document.activeElement)) {
      if (this.previousFocus_ && this.previousFocus_.focus) {
        this.previousFocus_.focus();
      }
    }
  }

  private getInnerDimensions() {
    return { width: this.offsetWidth, height: this.offsetHeight };
  }

  private hasBit_(corner: Corner, bit: CornerBit): boolean {
    return Boolean(corner & bit);
  }

  private setBit_(corner: Corner, bit: CornerBit): Corner {
    return corner | bit;
  }

  private getAnchorDimensions() {
    return this.anchorElement ? this.anchorElement.getBoundingClientRect() : null;
  }

  private getWindowDimensions() {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  private getBodyDimensions() {
    return { width: document.body.clientWidth, height: document.body.clientHeight };
  }

  private getWindowScroll() {
    return { x: window.pageXOffset, y: window.pageYOffset };
  }
}
