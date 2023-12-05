import { HttpError } from '../../leavitt/api-service/HttpError';
import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/text-button';
import { SnackbarOptions } from './types/snackbar-options';

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
 *
 */

@customElement('titanium-snackbar-popover')
export class TitaniumSnackbarPopover extends LitElement {
  #resolve: (reason?: string) => void;

  /**
   * Firefox support
   */
  @property({ type: Boolean, reflect: true }) accessor open: boolean;

  /**
   * Hides the action button
   */
  @property({ type: Boolean, reflect: true }) accessor noAction: boolean;

  /**
   * Text used on the button
   */
  @property({ type: String }) accessor actionText: string;

  /**
   * Message used in the snackbar.
   */
  @property({ type: String }) accessor message: string | TemplateResult | HttpError;

  /**
   *
   */
  constructor() {
    super();
    this.popover = 'manual';
  }

  show(message: string | TemplateResult | HttpError, options?: SnackbarOptions) {
    //Firefox support
    this.showPopover ? this.showPopover() : (this.open = true);

    this.message = message;
    this.noAction = options?.noAction ?? false;
    this.actionText = options?.actionText ?? 'Dismiss';

    if (options?.autoHide) {
      const duration = typeof options?.autoHide === 'number' ? options?.autoHide : 5000;
      this.#autoCloseTimeout = window.setTimeout(() => this.close('auto-close'), duration);
    }

    return new Promise((resolve) => {
      this.#resolve = resolve;
    });
  }

  #autoCloseTimeout = 0;
  close(reason: string = '') {
    clearTimeout(this.#autoCloseTimeout);
    //Firefox support
    this.hidePopover ? this.hidePopover() : (this.open = false);
    this.#resolve(reason);
  }

  static styles = css`
    :host {
      display: none;
    }

    :host([popover]),
    :host([open]) {
      display: flex;

      position: fixed;
      inset: unset;
      left: 0;
      bottom: 0;
      border: 0;

      min-width: 240px;
      flex-direction: column;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      margin: 16px;
      padding: 8px;
      border-radius: 4px;
      background: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
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
    }

    /* Firefox non-popover support */
    :host([open]) {
      z-index: 99;
    }

    div[main] {
      max-width: 600px;
      overflow: hidden;
      margin: 12px;
    }

    md-text-button {
      --md-text-button-label-text-color: var(--md-sys-color-inverse-primary);
      align-self: flex-end;
    }

    /* HTTP error styles */
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
    }

    http-error [error] {
      grid-area: error;
    }

    http-error [status] {
      grid-area: status;
      font-size: 12px;
      justify-self: end;
    }

    http-error [action] {
      grid-area: action;

      font-size: 12px;
    }
  `;

  #addNewLineBreaks(text: string) {
    const lines = text.split('\n');
    const l = lines.length;

    return lines.map((line: string, i) => (i === l - 1 ? line : html`${line}<br />`));
  }

  renderHttpErrorMessage(httpError: HttpError) {
    return html`
      <http-error>
        <span error>${this.#addNewLineBreaks(httpError.message)}</span>
        <span status>${httpError.statusCode}</span>
        <span action>${httpError.action}</span>
        ${httpError.detail ? html` <code detail>${this.#addNewLineBreaks(httpError.detail)}</code>` : nothing}
      </http-error>
    `;
  }

  render() {
    return html`
      <div main>
        ${typeof this.message !== 'string' && (this.message as HttpError)?.type === 'HttpError'
          ? this.renderHttpErrorMessage(this.message as HttpError)
          : this.message}
      </div>
      <md-text-button ?hidden=${this.noAction} @click=${() => this.close('dismiss')}>${this.actionText} </md-text-button>
    `;
  }
}
