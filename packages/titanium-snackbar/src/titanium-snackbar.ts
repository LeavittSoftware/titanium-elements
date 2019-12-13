import '@material/mwc-ripple';
import { css, customElement, html, LitElement, property } from 'lit-element';

export class BasicSnackBar {
  _isComponent = false;
  open(message: string, options?: SnackbarOptions) {
    alert(message);
    console.warn(`Titanium Snackbar.open called before an instance was created. Did you forget to add the Titanium Snackbar element to your project?`, options);
  }

  close() {
    console.warn(`Titanium Snackbar.close called before an instance was created. Did you forget to add the TitaniumSnackbar element to your project?`);
  }
}

export let TitaniumSnackbarSingleton = new BasicSnackBar();

export type SnackbarOptions = {
  actionText?: string | null;
  autoHide?: boolean;
  style?: 'informational' | 'error';
  noAction?: boolean;
};

/**
 * Material design snackbar.
 *
 * @element titanium-snackbar
 *
 * Only one snackbar is intended to be used per site.
 * Use TitaniumSnackbarSingleton export to fetch the instance of the snackbar when you need to use it.
 * ex.
 * import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar';
 * AppSnackbar.open('Hello world');
 *
 * @cssprop {Color} --titanium-snackbar-action-color - Action button text color
 * @cssprop {Color} --titanium-snackbar-background-color - Snackbar background color
 * @cssprop {Color} --titanium-snackbar-text-color - Color of the text in the snackbar
 *
 */

@customElement('titanium-snackbar')
export class TitaniumSnackbar extends LitElement implements BasicSnackBar {
  @property({ type: Boolean, reflect: true }) protected opened: boolean;
  @property({ type: Boolean, reflect: true }) protected closing: boolean;
  @property({ type: Boolean, reflect: true }) protected opening: boolean;
  @property({ type: Boolean, reflect: true }) protected thirdline: boolean;
  @property({ type: Boolean, reflect: true }) protected noaction: boolean;
  @property({ type: Boolean, reflect: true }) protected informational: boolean;
  @property({ type: Boolean, reflect: true }) protected error: boolean;

  @property({ type: String }) private actionText: string;
  @property({ type: String }) private message: string;

  private _animationTimer: number;
  private _animationFrame: number;
  private _resolve: { (value?: {} | PromiseLike<{}> | undefined): void; (): void };
  private _closeTimeoutHandle: number;

  _isComponent = true;

  constructor() {
    super();
    if (!TitaniumSnackbarSingleton || !TitaniumSnackbarSingleton._isComponent) {
      TitaniumSnackbarSingleton = this;
    } else {
      console.warn('More than one <titanium-snackbar> element has been used in this web application, consider removing one.');
    }
  }

  updated(changedProps) {
    if (changedProps.has('actionText') && changedProps.get('actionText') !== this.actionText) {
      this.thirdline = !!this.actionText && this.actionText.length > 8;
    }
  }

  /**
   * Opens the snackbar with the supplied message.
   *
   * optional options object:
   * actionText?: string | null;
   * autoHide?: boolean;
   * style?: 'informational' | 'error';
   * noAction?: boolean;
   *
   */
  open(message: string, options?: SnackbarOptions) {
    return new Promise(resolve => {
      //reset
      clearTimeout(this._closeTimeoutHandle);
      this.noaction = false;
      this.informational = false;
      this.error = false;
      this.actionText = 'DISMISS';

      if (message) {
        this.message = message;
      }

      if (options) {
        if (options.style === 'informational') {
          this.informational = true;
        }

        if (options.style === 'error') {
          this.error = true;
        }

        if (options.actionText) {
          this.actionText = options.actionText;
        }

        if (options.noAction) {
          this.noaction = true;
        }

        if (options.autoHide) {
          this._closeTimeoutHandle = window.setTimeout(() => {
            this.close();
          }, 5000);
        }
      }

      this._resolve = resolve;
      this.closing = false;
      this.opened = false;
      this.opening = true;

      this.runNextAnimationFrame_(() => {
        this.opened = true;
        this._animationTimer = window.setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    });
  }

  /**
   * Closes the snackbar
   */
  close() {
    if (!this.opened) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    clearTimeout(this._animationTimer);
    this._animationTimer = window.setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);

    this._resolve();
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

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  static styles = css`
    :host {
      display: none;
      flex-direction: row;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      position: fixed;
      bottom: 0;
      left: 0;
      max-width: 600px;
      margin: 16px;
      padding: 8px;
      border-radius: 4px;
      background: var(--titanium-snackbar-background-color, #323232);
      color: var(--titanium-snackbar-text-color, #f1f1f1);
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

    :host([informational]) {
      background-color: #43a047;
      color: #fff;
    }

    :host([error]) {
      background-color: #d32f2f;
      color: #fff;
    }

    :host([thirdline]) {
      flex-direction: column;
    }

    :host([opening]),
    :host([opened]),
    :host([closing]) {
      display: flex;
    }

    :host([closing]) {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: opacity 75ms linear;
      -o-transition: opacity 75ms linear;
      transition: opacity 75ms linear;
    }

    :host([opening]) {
      -webkit-transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      -o-transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    :host([opened]) {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    span {
      align-self: center;
      flex: 1 1 auto;
      margin: 8px;
    }

    a {
      display: block;
      cursor: pointer;
      align-self: flex-end;
      text-decoration: none;
      color: var(--titanium-snackbar-action-color, #3b95ff);
      font-weight: 600;
      padding: 16px;
      user-select: none;
      border-radius: 4px;
    }

    :host([error]) a,
    :host([informational]) a {
      color: #fff;
    }

    [hidden] {
      display: none !important;
    }
  `;

  render() {
    return html`
      <span>${this.message}</span>
      <a
        ?hidden=${this.noaction}
        @click=${(e: Event) => {
          e.preventDefault();
          clearTimeout(this._closeTimeoutHandle);
          this.close();
        }}
      >
        ${this.actionText}<mwc-ripple></mwc-ripple
      ></a>
    `;
  }
}
