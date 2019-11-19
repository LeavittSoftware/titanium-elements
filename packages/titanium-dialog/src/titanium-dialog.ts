import '@leavittsoftware/titanium-button';
import { css, customElement, html, LitElement, property, query } from 'lit-element';

/**
 * Material design inspired dialog
 *
 * @element titanium-dialog
 *
 * @slot content - dialog content
 * @slot actions - dialog buttons (if provided will overwrite the default close button)
 *
 * @cssprop {Color} --titanium-dialog-background-color - Background color of the dialog
 * @cssprop {Color} --app-light-text-color - Content text color
 * @cssprop {Color} --app-dark-text-color - Dialog header color
 * @cssprop {Color} --app-border-color - Dialog border color
 */
@customElement('titanium-dialog')
export class TitaniumDialogElement extends LitElement {
  /**
   * Dialog title
   */
  @property({ type: String }) title: string;

  /**
   * Disables momentum-based scrolling on (webkit only)
   */
  @property({ type: Boolean, reflect: true }) disableSmoothScroll: boolean = false;

  /**
   * True when dialog is opened.
   */
  @property({ type: Boolean, reflect: true }) protected opened: boolean = false;

  /**
   * True when dialog is opening. (used for animation purposes)
   */
  @property({ type: Boolean, reflect: true }) protected opening: boolean = false;

  /**
   * True when dialog is closing.  (used for animation purposes)
   */
  @property({ type: Boolean, reflect: true }) protected closing: boolean = false;

  /**
   * Allows dialog content to scroll.  (automatically controlled based on content and viewport size)
   */
  @property({ type: Boolean, reflect: true }) protected scrolls: boolean = false;

  /**
   * Makes the dialog fullscreen
   */
  @property({ type: Boolean, reflect: true }) protected fullscreen: boolean = false;

  @query('section') section: HTMLElement;

  private _animationTimer: number;
  private _animationFrame: number;
  private _resolve: { (value?: string | PromiseLike<string> | undefined): void; (reason: string): void };

  recalculateLayout() {
    // Experimental way to determine if scroll bar is present.
    // Prevents user from having to declare if modal is scrollable.
    // TODO: Use Resize observers in the future......
    this.scrolls = this.section.scrollHeight > this.section.offsetHeight;
  }

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
      if (htmlNode) htmlNode.style.overflow = 'hidden';

      this.runNextAnimationFrame_(() => {
        this.opened = true;
        window.addEventListener('keydown', this._handleKeydown);
        this.recalculateLayout();

        this._animationTimer = window.setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    });
  }

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
    if (htmlNode) htmlNode.style.overflow = '';

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

    @media (max-width: 592px) {
      dialog-container {
        max-width: calc(100vw - 32px);
      }
    }

    @media (min-width: 592px) {
      :host(:not([fullscreen])) dialog-container {
        max-width: 560px;
      }
    }

    header {
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-size: 22px;
      color: var(--app-dark-text-color, #202124);
      line-height: 28px;
      font-weight: 400;
      letter-spacing: 0.0125em;
      padding: 24px 24px 16px 24px;
    }

    section {
      color: var(--app-dark-text-color, #202124);
      padding: 8px 24px 16px 24px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      letter-spacing: 0.5px;
      overflow-y: auto;
    }

    :host([scrolls]) header {
      border-bottom: 1px solid var(--app-border-color, #dadce0);
      padding: 16px 24px;
    }

    :host([scrolls]:not([disableSmoothScroll])) section {
      -webkit-overflow-scrolling: touch;
    }

    :host([scrolls]) footer {
      border-top: 1px solid var(--app-border-color, #dadce0);
    }

    footer {
      display: flex;
      flex-direction: row-reverse;
      padding: 8px;
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

  render() {
    return html`
      <click-trap @click=${() => this.close('veil-click')}></click-trap>

      <dialog-container>
        <header>${this.title}</header>
        <section>
          <slot name="content"></slot>
        </section>

        <footer>
          <slot name="actions"
            ><titanium-button
              @click=${(e: Event) => {
                e.preventDefault();
                this.close('close-click');
              }}
            >
              CLOSE
            </titanium-button>
          </slot>
        </footer>
      </dialog-container>
    `;
  }
}
