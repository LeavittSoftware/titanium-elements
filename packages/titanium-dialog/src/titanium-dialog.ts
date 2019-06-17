import '@leavittsoftware/titanium-button';
import { css, customElement, html, LitElement, property, query } from 'lit-element';

@customElement('titanium-dialog')
export class TitaniumDialogElement extends LitElement {
  @property({ type: Boolean, reflect: true }) protected opened: boolean;
  @property({ type: Boolean, reflect: true }) protected opening: boolean;
  @property({ type: Boolean, reflect: true }) protected closing: boolean;
  @property({ type: Boolean, reflect: true }) protected scrolls: boolean;
  @property({ type: String }) title: string;
  @query('section') section: HTMLElement;

  private _animationTimer: number;
  private _animationFrame: number;
  private _resolve: { (value?: string | PromiseLike<string> | undefined): void; (reason: string): void };

  open() {
    return new Promise<string>(resolve => {
      this._resolve = resolve;
      this.closing = false;
      this.opened = false;
      this.opening = true;
      document.body.style.overflow = 'hidden';

      // Experimental way to determine if scroll bar is present.
      // Prevents user from having to declare if modal is scrollable.
      this.scrolls = this.section.scrollHeight > this.section.offsetHeight;

      this.runNextAnimationFrame_(() => {
        this.opened = true;

        this._animationTimer = window.setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    });
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

  close(reason: string) {
    if (!this.opened) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    document.body.style.overflow = '';

    clearTimeout(this._animationTimer);
    this._animationTimer = window.setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);

    this._resolve(reason);
  }

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
      z-index: -1;
    }

    click-trap {
      display: block;
      position: fixed;
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
      max-height: calc(100vh - 32px);
      margin: 16px;
      border-radius: 4px;
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
    }

    @media (max-width: 592px) {
      dialog-container {
        max-width: calc(100vw - 32px);
      }
    }
    @media (min-width: 592px) {
      dialog-container {
        max-width: 560px;
      }
    }

    section {
      color: var(--app-light-text-color, #80868b);
      padding: 20px 24px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      letter-spacing: 0.5px;
      overflow-y: auto;
    }

    header {
      font-size: 20px;
      color: var(--app-dark-text-color, #202124);
      line-height: 32px;
      font-weight: 500;
      letter-spacing: 0.0125em;
      padding: 16px 24px 9px 24px;
    }

    :host([scrolls]) header {
      border-bottom: 1px solid var(--app-border-color, #dadce0);
      padding: 16px 24px;
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
        <header ?hidden=${!this.title}>${this.title}</header>
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
