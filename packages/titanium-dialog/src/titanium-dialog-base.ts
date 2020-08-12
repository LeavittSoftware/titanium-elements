import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * Material design inspired dialog base element
 *
 * @element titanium-dialog-base
 *
 * @slot - dialog content
 *
 * @fires titanium-dialog-opened - Fired after open animation is complete
 *
 * @cssprop {Color} --titanium-dialog-background-color - Background color of the dialog
 *
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} --titanium-dialog-max-width - Max-width of dialog container
 *
 */
@customElement('titanium-dialog-base')
export class TitaniumDialogBaseElement extends LitElement {
  /**
   * True when dialog is opened.
   */
  @property({ type: Boolean, reflect: true }) protected opened: boolean = false;

  /**
   * Sets dialog width to vw less 32px
   */
  @property({ type: Boolean, reflect: true }) protected fullwidth: boolean = false;

  /**
   * Sets dialog height to vh less 32px
   */
  @property({ type: Boolean, reflect: true }) protected fullheight: boolean = false;

  /**
   * True when dialog is opening. (used for animation purposes)
   */
  @property({ type: Boolean, reflect: true }) protected opening: boolean = false;

  /**
   * True when dialog is closing.  (used for animation purposes)
   */
  @property({ type: Boolean, reflect: true }) protected closing: boolean = false;

  /**
   * Prevents focusing of elements outside of the opened dialog
   */
  @property({ type: Boolean, attribute: 'focus-trap' }) focusTrap: boolean = false;

  private _animationTimer: number;
  private _animationFrame: number;
  private _resolve: { (value?: string | PromiseLike<string> | undefined): void; (reason: string): void };

  /**
   * Opens the dialog and returns a promise which is resolved if and when the dialog is closed.
   * Promise returns a string stating the reason for closing.
   */
  open() {
    return new Promise<string>(resolve => {
      this._resolve = resolve;
      this.closing = false;
      this.opened = false;
      this.opening = true;
      const htmlNode = document.querySelector('html');
      if (htmlNode) {
        htmlNode.style.overflow = 'hidden';
      }

      this.runNextAnimationFrame_(() => {
        this.opened = true;
        window.addEventListener('keydown', this._handleKeydown);
        this.afterOpen();

        if (this.focusTrap) {
          this.trapFocus();
          console.log('FOCUS TRAP');
        }

        this._animationTimer = window.setTimeout(() => {
          this.dispatchEvent(new CustomEvent('titanium-dialog-opened'));
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    });
  }

  private selectorWhiteList =
    'mwc-button:not([disabled]), mwc-textfield:not([disabled]), mwc-select:not([disabled]), mwc-textarea:not([disabled]), mwc-datefield:not([disabled])';

  private trapFocus() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const focusableEls = [...(this.shadowRoot?.querySelectorAll(this.selectorWhiteList) as any), ...(this.querySelectorAll(this.selectorWhiteList) as any)];
    console.log(focusableEls);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    this.addEventListener('keydown', function (e) {
      const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
      console.log(e.key);
      if (!isTabPressed) {
        return;
      }

      console.log(e.shiftKey);
      if (e.shiftKey) {
        /* shift + tab */

        console.log(document.activeElement, firstFocusableEl);
        if (document.activeElement === firstFocusableEl || this.shadowRoot?.activeElement === firstFocusableEl) {
          console.log('focus first');
          lastFocusableEl?.focus?.();
          e.preventDefault();
        }
      } /* tab */ else {
        if (document.activeElement === lastFocusableEl || this.shadowRoot?.activeElement === lastFocusableEl) {
          console.log('focus last');
          firstFocusableEl?.focus?.();
          e.preventDefault();
        }
      }
    });
  }

  /**
   * Called when dialog is open and rendered.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected afterOpen() {}

  /**
   * Closes the dialog returning the reason to the open promise.
   */
  close(reason: string) {
    if (!this.opened) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    window.removeEventListener('keydown', this._handleKeydown);
    const htmlNode = document.querySelector('html');
    if (htmlNode) {
      htmlNode.style.overflow = '';
    }

    clearTimeout(this._animationTimer);
    this._animationTimer = window.setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);

    this._resolve(reason);
  }

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */
  private runNextAnimationFrame_(callback: () => void) {
    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = requestAnimationFrame(() => {
      this._animationFrame = 0;
      clearTimeout(this._animationFrame);
      this._animationFrame = window.setTimeout(callback, 0);
    });
  }

  private _handleKeydown = ({ key }) => {
    if (key === 'Escape' || key === 'Esc') {
      this.close('esc-keydown');
    }
  };

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  static styles = css`
    :host {
      display: flex;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: none;
    }

    click-trap {
      display: block;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.32);
      opacity: 0;
    }

    :host([opening]),
    :host([closing]),
    :host([opened]) {
      z-index: 7;
      display: flex;
    }

    :host([opening]) click-trap {
      -webkit-transition: opacity 150ms linear;
      -o-transition: opacity 150ms linear;
      transition: opacity 150ms linear;
    }

    :host([closing]) click-trap {
      -webkit-transition: opacity 75ms linear;
      -o-transition: opacity 75ms linear;
      transition: opacity 75ms linear;
    }

    :host([opened]) click-trap {
      opacity: 1;
    }

    dialog-container {
      display: flex;
      flex-direction: column;
      min-width: 280px;
      max-height: calc(100% - 32px);
      max-width: var(--titanium-dialog-max-width, none);
      margin: 16px;
      border-radius: 8px;
      background: var(--titanium-dialog-background-color, #fff);
      font-size: 14px;
      -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
      z-index: 2;
    }

    :host([fullwidth]) dialog-container {
      width: calc(100vw - 32px);
    }

    :host([fullheight]) dialog-container {
      height: calc(100vh - 32px);
    }

    :host([opening]) dialog-container,
    :host([opened]) dialog-container,
    :host([closing]) dialog-container {
      display: flex;
    }

    :host([closing]) dialog-container {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: opacity 75ms linear;
      -o-transition: opacity 75ms linear;
      transition: opacity 75ms linear;
    }

    :host([opening]) dialog-container {
      -webkit-transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      -o-transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    :host([opened]) dialog-container {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  `;

  protected renderSlot() {
    return html` <slot></slot> `;
  }

  render() {
    return html`
      <click-trap @click=${() => this.close('veil-click')}></click-trap>
      <dialog-container>
        ${this.renderSlot()}
      </dialog-container>
    `;
  }
}
