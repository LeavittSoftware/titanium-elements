import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Titanium drawer - a minimalist fly-out style drawer based on a native dialog
 *
 * @element titanium-drawer
 * @slot - Main drawer content slot
 * @csspart dialog - internal native dialog element
 * @cssprop {Color} [--md-sys-color-outline-variant] Color of left border when open
 * @cssprop {Color} [--md-sys-color-on-background] Color of slotted h3 and h4
 */
@customElement('titanium-drawer')
export class TitaniumDrawer extends LitElement {
  @query('dialog') private dialog: HTMLDialogElement | null;

  /**
   * Set the position of content fixed when menu is closed. Only takes effect if always-show-content is set.
   */
  @property({ type: Boolean, reflect: true }) fixed: boolean = false;

  /**
   * Show the slotted content regardless if the menu is open or closed
   */
  @property({ type: Boolean, reflect: true, attribute: 'always-show-content' }) alwayShowContent: boolean = false;

  async firstUpdated() {
    let touchstartX = 0;
    let touchendX = 0;

    this.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    });

    this.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      if (touchendX < touchstartX) {
        this.close();
      }
    });

    this.dialog?.addEventListener('click', e => {
      if (e.target instanceof Element && e.target?.nodeName === 'DIALOG') {
        this.close();
      }
    });

    this.dialog?.addEventListener('cancel', event => {
      event.preventDefault();
      this.close();
    });

    window.addEventListener('popstate', () => this.dialog?.close(), false);

    // prevent page load @keyframes playing
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await TitaniumDrawer.animationsComplete(this.dialog!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await TitaniumDrawer.animationsComplete(this.dialog!);
    this.dialog?.removeAttribute('loading');
  }

  static async animationsComplete(element: HTMLElement) {
    return await Promise.allSettled(element.getAnimations().map(animation => animation.finished));
  }

  /**
   *  Opens drawer
   */
  open() {
    this.dialog?.showModal();
    this.dialog?.removeAttribute('hide');
    this.setBodyOverflow('hidden');
  }

  /**
   *  Closes drawer
   */
  async close() {
    if (this.dialog?.open) {
      this.dialog?.setAttribute('hide', '');
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await TitaniumDrawer.animationsComplete(this.dialog!);
      this.dialog?.close();
      this.dialog?.removeAttribute('hide');
    }
  }

  /**
   *  Closes drawer without animations
   */
  closeQuick() {
    if (this.dialog?.open) {
      this.dialog?.close();
    }
  }

  protected setBodyOverflow(value: string) {
    const htmlNode = document.querySelector('html');
    if (htmlNode) {
      htmlNode.style.overflow = value;
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    dialog {
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);
    }

    dialog[loading] {
      visibility: hidden;
    }

    dialog[open] {
      display: flex;
      inset-inline-end: inherit;
      border: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      flex-direction: column;
      width: 300px;

      min-height: 100vh;
      max-height: -webkit-fill-available;

      border-right: 1px solid var(--md-sys-color-outline-variant);
      padding-right: 8px;
      animation: show 0.25s ease normal;
    }

    :host([always-show-content]) dialog:not([open]) {
      display: flex;
      inset-inline-start: initial;
      inset-inline-end: inherit;
      border: 0;
      position: relative;
      min-width: 300px;
      padding: 0;
      margin: 0;
      width: 100%;
      flex-direction: column;

      animation: show 0.25s ease normal;
    }

    :host([always-show-content][fixed]) dialog:not([open]) {
      position: fixed;
      top: 56px;
      max-width: 300px;
      max-height: calc(100vh - 56px);
      overflow-y: auto;
    }

    ::slotted(h3) {
      font-family: 'Metropolis';
      color: var(--md-sys-color-on-background);
      margin: 0px;
      font-weight: 400;
      padding: 12px 0px 8px 24px;
    }

    ::slotted(h4) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--md-sys-color-on-background);
      font-weight: 400;
      cursor: pointer;
      margin: 0px;
      padding: 16px 24px 8px 24px;
      min-height: 24px;
    }

    ::slotted(h4[sub]) {
      font-weight: 300;
      font-size: 14px;
      padding: 0px 12px 6px 66px;
      cursor: inherit;
    }

    dialog[hide] {
      animation: close 0.25s ease normal;
    }

    @keyframes show {
      from {
        transform: translateX(-110%);
      }
      to {
        transform: translateX(0%);
      }
    }

    @keyframes close {
      to {
        transform: translateX(-110%);
      }
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }

    @supports ((backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px))) {
      dialog::backdrop {
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        /* Not supported yet */
        transition: backdrop-filter 0.5s ease;
      }
    }
  `;

  render() {
    return html`<dialog
      loading
      @close=${() => {
        this.setBodyOverflow('');
      }}
      part="dialog"
    >
      <slot></slot>
    </dialog>`;
  }
}
