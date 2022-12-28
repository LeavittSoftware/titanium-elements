import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

/**
 * Material design inspired dialog base element
 *
 * @element titanium-dialog-base
 *
 * @slot default - dialog content
 *
 * @fires titanium-dialog-opened - Fired after open animation is complete
 * @fires opening - Fired when opening animation begins
 * @fires opened - Fired after open animation is complete
 * @fires closing - Fired when closing animation begins
 * @fires closed - Fired after closing animation is complete
 * @fires removed - Fired when element is removed from the DOM
 *
 * @cssprop  [--titanium-dialog-background-color=#ffffff] - Background color of the dialog
 *
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-max-width=calc(100vh - 32px)] - max-width of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-min-width=none] - min-width of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-max-height=none] - max-height of dialog
 * @cssprop {<length> | <percentage> | none | max-content | min-content | fit-content | fill-available} [--titanium-dialog-min-height=calc(100vh - 32px)] - min-height of dialog
 *
 */

@customElement('titanium-native-dialog-base')
export class TitaniumNativeDialogBaseElement extends LitElement {
  /**
   * Sets dialog width to vw less 32px
   */
  @property({ type: Boolean, reflect: true }) protected fullWidth: boolean = false;

  /**
   * Sets dialog height to vh less 32px
   */
  @property({ type: Boolean, reflect: true }) protected fullHeight: boolean = false;

  /**
   * Disabled the closing animation
   */
  @property({ type: Boolean, attribute: 'disabled-closing-animation', reflect: true }) disableClosingAnimation: boolean = false;

  /**
   * Prevents focusing of elements outside of the opened dialog.
   */
  @property({ type: Boolean, attribute: 'focus-trap', reflect: true }) focusTrap: boolean = false;

  @query('dialog') protected dialog!: HTMLElement & { open: boolean; showModal: () => void; close(returnValue: string): void; returnValue: string };

  #resolve: { (value?: string | PromiseLike<string> | undefined): void; (reason: string): void };

  protected async firstUpdated() {
    // const htmlNode = document.querySelector('html');
    // if (htmlNode) {
    //   htmlNode.style.scrollbarGutter = 'stable both-edges';
    // }

    this.dialog.addEventListener('click', this.lightDismiss);
    this.dialog.addEventListener('close', this.dialogClose);
    this.dialog.addEventListener('cancel', this.onCancel);

    this.dialogAttrObserver.observe(this.dialog, {
      attributes: true,
    });

    this.dialogDeleteObserver.observe(document.body, {
      attributes: false,
      subtree: false,
      childList: true,
    });

    // prevent page load @keyframes playing
    await TitaniumNativeDialogBaseElement.animationsComplete(this.dialog);

    // remove loading attribute
    this.dialog.removeAttribute('loading');
  }

  static async animationsComplete(element: HTMLElement) {
    return await Promise.allSettled(element.getAnimations().map(animation => animation.finished));
  }

  protected dialogAttrObserver = new MutationObserver(mutations => {
    mutations.forEach(async mutation => {
      if (mutation.attributeName === 'open') {
        const dialog = mutation.target as HTMLElement;

        const isOpen = dialog.hasAttribute('open');
        if (!isOpen) {
          return;
        }

        dialog.removeAttribute('inert');

        dialog.dispatchEvent(new Event('opening'));
        await TitaniumNativeDialogBaseElement.animationsComplete(dialog);
        dialog.dispatchEvent(new Event('opened'));
      }
    });
  });

  protected dialogDeleteObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.removedNodes.forEach(removedNode => {
        if (removedNode.nodeName === 'DIALOG') {
          removedNode.removeEventListener('click', this.lightDismiss);
          removedNode.removeEventListener('close', this.dialogClose);
          removedNode.removeEventListener('cancel', this.onCancel);
          removedNode.dispatchEvent(new Event('removed'));
        }
      });
    });
  });

  protected lightDismiss({ target: dialog }) {
    if (dialog.nodeName === 'DIALOG') {
      dialog.close('backdrop');
    }
  }

  protected onCancel = (e: Event) => {
    e.preventDefault();

    if (!this.focusTrap) {
      this.close('cancel');
    }
  };

  protected closeDialog = () => {
    this.close('navigate-away');
  };

  protected async dialogClose({ target: dialog }) {
    dialog.setAttribute('inert', '');
    dialog.dispatchEvent(new Event('closing'));

    await TitaniumNativeDialogBaseElement.animationsComplete(dialog);

    dialog.dispatchEvent(new Event('closed'));
  }

  /**
   * Opens the dialog and returns a promise which is resolved if and when the dialog is closed.
   * Promise returns a string stating the reason for closing.
   */
  open() {
    return new Promise<string>(resolve => {
      this.#resolve = resolve;
      window.addEventListener('popstate', this.closeDialog, false);
      this.dialog.showModal();
    });
  }

  show() {
    return this.open();
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
    if (!this.dialog.open) {
      return;
    }
    window.removeEventListener('popstate', this.closeDialog);
    this.dialog.close(reason);

    this.#resolve(reason);
  }

  static styles = [
    css`
      dialog {
        /* Safari has issues with display: grid */
        display: flex;
        flex-direction: column;

        cursor: default;

        overflow: initial;

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        margin: auto;
        border-radius: 8px;
        padding: 0;
        max-width: var(--titanium-dialog-max-width, calc(100vw - 32px));
        min-width: var(--titanium-dialog-min-width, none);
        min-height: var(--titanium-dialog-min-height, none);
        max-height: var(--titanium-dialog-max-height, calc(100vh - 32px));
        background: var(--titanium-dialog-background-color, #fff);
        font-size: 14px;
        -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid var(--app-border-color);

        transition: opacity 150ms;
        animation: scale-down 150ms cubic-bezier(0.25, -0.5, 0.1, 1.5) forwards;
        animation-timing-function: cubic-bezier(0.25, -0.5, 0.1, 1.5);
      }

      :host([disabled-closing-animation]) dialog:not([open]) {
        opacity: 0;
        animation: none;
        transition: none;
      }

      dialog[inert],
      dialog:not([open]),
      dialog[closing] {
        opacity: 0;
        pointer-events: none;
      }

      dialog[open] {
        animation: fade-in 75ms cubic-bezier(0.25, -0.5, 0.1, 1.5), scale-up 150ms cubic-bezier(0.25, 0, 0.3, 1) forwards, forwards;
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes scale-up {
        to {
          transform: scale(1);
        }
        from {
          transform: scale(0.75);
        }
      }

      @keyframes scale-down {
        to {
          transform: scale(0.75);
        }
      }

      dialog[loading] {
        visibility: hidden;
      }

      ::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
      }

      @supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
        ::backdrop {
          background-color: rgba(255, 255, 255, 0.7);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          /* Not supported yet */
          transition: backdrop-filter 0.5s ease;
        }
      }

      :host([focus-trap]) ::backdrop {
        pointer-events: none;
      }

      :host([full-width]) dialog,
      :host([fullWidth]) dialog {
        width: calc(100vw - var(--titanium-dialog-full-width-offset, 32px));
      }

      :host([full-height]) dialog,
      :host([fullHeight]) dialog {
        height: calc(100vh - var(--titanium-dialog-full-height-offset, 32px));
      }
    `,
  ];

  protected renderSlot() {
    return html` <slot></slot> `;
  }

  protected setBodyOverflow(value: string) {
    const htmlNode = document.querySelector('html');
    if (htmlNode) {
      htmlNode.style.overflow = value;
    }
  }

  // mwc-ripple depends on listening for mouseup events on the window
  // to support ripple inside the dialog, we will not intercept these two
  // events...for now.
  //
  // @mouseup=${(e: MouseEvent) => e.stopPropagation()}
  // @touchend=${(e: MouseEvent) => e.stopPropagation()}
  render() {
    return html` <dialog
      @click=${(e: MouseEvent) => e.stopPropagation()}
      @dblclick=${(e: MouseEvent) => e.stopPropagation()}
      @mousedown=${(e: MouseEvent) => e.stopPropagation()}
      @mouseout=${(e: MouseEvent) => e.stopPropagation()}
      @mouseleave=${(e: MouseEvent) => e.stopPropagation()}
      @mouseenter=${(e: MouseEvent) => e.stopPropagation()}
      @mouseover=${(e: MouseEvent) => e.stopPropagation()}
      @mousemove=${(e: MouseEvent) => e.stopPropagation()}
      @mousewheel=${(e: MouseEvent) => e.stopPropagation()}
      @touch=${(e: TouchEvent) => e.stopPropagation()}
      @touchstart=${(e: TouchEvent) => e.stopPropagation()}
      @touchcancel=${(e: TouchEvent) => e.stopPropagation()}
      @keydown=${(e: KeyboardEvent) => e.stopPropagation()}
      @keypress=${(e: KeyboardEvent) => e.stopPropagation()}
      @keyup=${(e: KeyboardEvent) => e.stopPropagation()}
      inert
      @opening=${e => {
        if (e.target.nodeName === 'DIALOG') {
          //Prevent document scroll
          this.setBodyOverflow('hidden');
          this.dispatchEvent(new Event('opening'));
        }
      }}
      @closing=${e => {
        if (e.target.nodeName === 'DIALOG') {
          this.dispatchEvent(new Event('closing'));
        }
      }}
      @closed=${e => {
        if (e.target.nodeName === 'DIALOG') {
          this.setBodyOverflow('');
          this.#resolve(this.dialog.returnValue);
          this.dispatchEvent(new Event('closed'));
        }
      }}
      @removed=${e => {
        if (e.target.nodeName === 'DIALOG') {
          this.dispatchEvent(new Event('removed'));
        }
      }}
      @opened=${e => {
        if (e.target.nodeName === 'DIALOG') {
          this.dispatchEvent(new CustomEvent('titanium-dialog-opened'));
          this.afterOpen();
          this.dispatchEvent(new Event('opened'));
        }
      }}
    >
      ${this.renderSlot()}
    </dialog>`;
  }
}
