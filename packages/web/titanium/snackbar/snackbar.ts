// import '@material/mwc-button';
import { HttpError } from '../../leavitt/api-service/HttpError';
import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
export class BasicSnackBar {
  _isComponent = false;
  open(message: string | TemplateResult, options?: SnackbarOptions) {
    const msg = typeof message === 'string' ? message : message.values;

    alert(msg);
    console.warn('Titanium Snackbar.open called before an instance was created. Did you forget to add the Titanium Snackbar element to your project?', options);
  }

  close() {
    console.warn('Titanium Snackbar.close called before an instance was created. Did you forget to add the TitaniumSnackbar element to your project?');
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
 * import { TitaniumSnackbarSingleton } from '@leavittsoftware/web/snackbar/snackbar';
 * TitaniumSnackbarSingleton.open('Hello world');
 *
 * @cssprop {Color} [--titanium-snackbar-background-color=#323232] - Snackbar background color
 * @cssprop {Color} [--titanium-snackbar-text-color=#f1f1f1] - Color of the text in the snackbar
 * @cssprop {Color} [--app-light-text-color=#707175] - Color used on http error and status
 *
 */

@customElement('titanium-snackbar')
export class TitaniumSnackbar extends LitElement implements BasicSnackBar {
  /**
   * True when opened
   */
  @property({ type: Boolean, reflect: true }) protected opened: boolean;
  /**
   * True when closing
   */
  @property({ type: Boolean, reflect: true }) protected closing: boolean;
  /**
   * True when opening
   */
  @property({ type: Boolean, reflect: true }) protected opening: boolean;
  /**
   * Hides the action button
   */
  @property({ type: Boolean, reflect: true }) protected noaction: boolean;
  /**
   * Styles the snackbar as informational (green)
   */
  @property({ type: Boolean, reflect: true }) protected informational: boolean;
  /**
   * Styles the snackbar as an error (red)
   */
  @property({ type: Boolean, reflect: true }) protected error: boolean;

  /**
   * Text used on the button
   */
  @property({ type: String }) protected actionText: string;
  /**
   * Message used in the snackbar.
   */
  @property({ type: String }) protected message: string | TemplateResult;

  #animationTimer: number;
  #animationFrame: number;
  #resolve;
  #closeTimeoutHandle: number;

  /**
   * @ignore
   */
  _isComponent = true;

  constructor() {
    super();
    if (!TitaniumSnackbarSingleton || !TitaniumSnackbarSingleton._isComponent) {
      /* eslint-disable  @typescript-eslint/no-this-alias */
      TitaniumSnackbarSingleton = this;
    } else {
      console.warn('More than one <titanium-snackbar> element has been used in this web application, consider removing one.');
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
  open(message: string | TemplateResult | HttpError, options?: SnackbarOptions) {
    return new Promise((resolve) => {
      //reset
      clearTimeout(this.#closeTimeoutHandle);
      this.noaction = false;
      this.informational = false;
      this.error = false;
      this.actionText = 'DISMISS';

      if (typeof message !== 'string' && (message as HttpError)?.type === 'HttpError') {
        const error = message as HttpError;
        this.message = html` <http-error>
          <span error>${this.#addNewLineBreaks(error.message)}</span>
          <span status>${error.statusCode}</span>
          <span action>${error.action}</span>
          ${error.detail ? html` <code detail>${this.#addNewLineBreaks(error.detail)}</code>` : nothing}
        </http-error>`;
      } else if (message) {
        this.message = message as string | TemplateResult;
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
          this.#closeTimeoutHandle = window.setTimeout(() => {
            this.close();
          }, 5000);
        }
      }

      this.#resolve = resolve;
      this.closing = false;
      this.opened = false;
      this.opening = true;

      this.#runNextAnimationFrame_(() => {
        this.opened = true;
        this.#animationTimer = window.setTimeout(() => {
          this.#handleAnimationTimerEnd_();
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

    cancelAnimationFrame(this.#animationFrame);
    this.#animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    clearTimeout(this.#animationTimer);
    this.#animationTimer = window.setTimeout(() => {
      this.#handleAnimationTimerEnd_();
    }, 75);

    this.#resolve();
  }

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */
  #runNextAnimationFrame_(callback: () => void) {
    cancelAnimationFrame(this.#animationFrame);
    this.#animationFrame = requestAnimationFrame(() => {
      this.#animationFrame = 0;
      clearTimeout(this.#animationFrame);
      this.#animationFrame = window.setTimeout(callback, 0);
    });
  }

  #handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  #addNewLineBreaks(text: string) {
    const lines = text.split('\n');
    const l = lines.length;

    return lines.map((line: string, i) => (i === l - 1 ? line : html`${line}<br />`));
  }

  static styles = css`
    :host {
      display: none;
      min-width: 240px;
      flex-direction: column;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      position: fixed;
      bottom: 0;
      left: 0;
      margin: 16px;
      padding: 8px;
      border-radius: 4px;
      background: var(--titanium-snackbar-background-color, #323232);
      color: var(--titanium-snackbar-text-color, #f1f1f1);
      font-size: 14px;
      -webkit-box-shadow:
        0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12);
      box-shadow:
        0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14),
        0 1px 18px 0 rgba(0, 0, 0, 0.12);

      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      z-index: 2;
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
      -webkit-transition:
        opacity 75ms linear,
        -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition:
        opacity 75ms linear,
        -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      -o-transition:
        opacity 75ms linear,
        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition:
        opacity 75ms linear,
        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition:
        opacity 75ms linear,
        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
        -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    :host([opened]) {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    http-error {
      display: grid;
      gap: 24px;
      grid:
        'action status'
        'error error';
    }

    http-error [detail] {
      font-size: 12px;
      overflow-y: auto;
      overflow-y: auto;
      max-height: 400px;
      grid-column: 1 / -1;
      color: #929397;
    }

    http-error [error] {
      grid-area: error;
    }

    http-error [status] {
      grid-area: status;
      font-size: 12px;
      justify-self: end;
      color: var(--app-light-text-color, #707175);
    }

    http-error [action] {
      grid-area: action;
      font-size: 12px;
      color: var(--app-light-text-color, #707175);
    }

    span[main] {
      max-width: 600px;
      overflow: hidden;
      margin: 12px;
    }

    mwc-button {
      align-self: flex-end;
    }

    :host([error]) mwc-button,
    :host([informational]) mwc-button {
      --mdc-theme-primary: #fff;
    }

    [hidden] {
      display: none !important;
    }
  `;

  render() {
    return html`
      <span main>${this.message}</span>
      <mwc-button
        ?hidden=${this.noaction}
        @click=${() => {
          clearTimeout(this.#closeTimeoutHandle);
          this.close();
        }}
        .label=${this.actionText}
      >
      </mwc-button>
    `;
  }
}