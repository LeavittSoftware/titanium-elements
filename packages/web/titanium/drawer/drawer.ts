import { LitElement, css, html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

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
  @query('dialog') private accessor dialog: HTMLDialogElement | null;

  /**
   * Set the position of content fixed when menu is closed. Only takes effect if always-show-content is set.
   */
  @property({ type: Boolean, reflect: true }) accessor fixed: boolean = false;

  /**
   * Show the slotted content regardless if the menu is open or closed
   */
  @property({ type: Boolean, reflect: true, attribute: 'always-show-content' }) accessor alwayShowContent: boolean = false;

  /**
   * Reverse the direction of the drawer opening and closing animations
   */
  @property({ type: String, reflect: true }) accessor direction: 'ltr' | 'rtl' = 'ltr';

  @property({ type: Boolean, reflect: true, attribute: 'has-header' }) private accessor hasHeader = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-footer' }) private accessor hasFooter = false;

  @queryAssignedElements({ slot: 'header' }) private readonly headerElements!: Element[];
  @queryAssignedElements({ slot: 'footer' }) private readonly footerElements!: Element[];

  async firstUpdated() {
    let touchstartX = 0;
    let touchendX = 0;

    this.addEventListener('touchstart', (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    this.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX;
      if (touchstartX - touchendX > 50) {
        this.close();
      }
    });

    this.dialog?.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target?.nodeName === 'DIALOG') {
        this.close();
      }
    });

    this.dialog?.addEventListener('cancel', (event) => {
      event.preventDefault();
      this.close();
    });

    window.addEventListener('popstate', () => this.dialog?.close(), false);

    // prevent page load @keyframes playing

    await TitaniumDrawer.animationsComplete(this.dialog!);

    await TitaniumDrawer.animationsComplete(this.dialog!);
    this.dialog?.removeAttribute('loading');
  }

  static async animationsComplete(element: HTMLElement) {
    return await Promise.allSettled(element.getAnimations().map((animation) => animation.finished));
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
      background-color: var(--titanium-drawer-background-color, var(--md-sys-color-background));
      color: var(--titanium-drawer-color, var(--md-sys-color-on-background));
      box-sizing: border-box;

      grid:
        'content' 1fr
        'footer' auto;
    }

    :host([has-footer]) dialog {
      grid:
        'content' 1fr
        'footer' auto;
    }

    :host([has-header]) dialog {
      grid:
        'header' auto
        'content' 1fr;
    }

    :host([has-footer][has-header]) dialog {
      grid:
        'header' auto
        'content' 1fr
        'footer' auto;
    }

    dialog[loading] {
      visibility: hidden;
    }

    dialog[open] {
      display: grid;

      inset-inline-end: inherit;
      border: 0;
      padding: 0;
      margin: 0;

      flex-direction: column;
      width: var(--titanium-drawer-width, 300px);

      min-height: 100dvh;
      max-height: -webkit-fill-available;

      border-right: 1px solid var(--md-sys-color-outline-variant);
      padding-right: 8px;
      animation: show 0.25s ease normal;
    }

    :host([direction='rtl']) dialog[open] {
      animation: show-reverse 0.25s ease normal;
    }

    main {
      grid-area: content;
      scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
      scrollbar-width: thin;
      overflow-y: auto;
    }

    header,
    footer {
      display: none;

      background-color: var(--titanium-drawer-background-color, var(--md-sys-color-background));
      color: var(--titanium-drawer-color, var(--md-sys-color-on-background));
    }

    :host([has-footer]) header {
      display: grid;
      grid-area: header;
    }

    :host([has-footer]) footer {
      grid-area: footer;

      display: flex;
      flex-direction: row;
      padding: 8px 24px;
      gap: 24px;
    }

    footer ::slotted(a) {
      text-decoration: none;
      color: var(--md-sys-color-on-surface-variant);
      font-family: var(--titanium-styles-a-font-family, Metropolis, Roboto, Noto, sans-serif);
      font-weight: 400;
      font-size: 12px;
      opacity: 0.8;
    }

    :host([always-show-content]) dialog:not([open]) {
      position: sticky;
      top: var(--titanium-drawer-full-height-padding, 48px);

      display: grid;
      inset-inline-start: initial;
      inset-inline-end: inherit;
      border: 0;
      min-width: var(--titanium-drawer-width, 300px);
      padding: 0;
      margin: 0;
      width: 100%;

      height: calc(100dvh - var(--titanium-drawer-full-height-padding, 48px));

      animation: show 0.25s ease normal;
    }

    :host([always-show-content][direction='rtl']) dialog:not([open]) {
      animation: show-reverse 0.25s ease normal;
    }

    ::slotted(h3) {
      font-family: 'Metropolis';
      color: var(--md-sys-color-on-background);
      margin: 0px;
      font-weight: 400;
      padding: 12px 0px 4px 16px;
    }

    ::slotted(h4) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--md-sys-color-on-background);
      font-weight: 400;
      margin: 0px;
      padding: 16px 16px 8px 16px;
      min-height: 24px;
    }

    ::slotted(h4[sub]) {
      font-weight: 300;
      font-size: 14px;
      padding: 4px 12px 2px 66px;
      cursor: inherit;
    }

    dialog[hide] {
      animation: close 0.25s ease normal;
    }

    dialog[hide][direction='rtl'] {
      animation: close-reverse 0.25s ease normal;
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

    @keyframes show-reverse {
      from {
        transform: translateX(110%);
      }
      to {
        transform: translateX(0%);
      }
    }

    @keyframes close-reverse {
      to {
        transform: translateX(110%);
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
      <header part="header"><slot name="header" @slotchange=${() => (this.hasHeader = this.headerElements.length > 0)}></slot></header>
      <main part="main"><slot></slot></main>
      <footer part="footer"><slot name="footer" @slotchange=${() => (this.hasFooter = this.footerElements.length > 0)}></slot></footer>
    </dialog>`;
  }
}
