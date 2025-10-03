import { HttpError } from '../../../leavitt/api-service/HttpError';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SimpleSnackbar } from './simple-snackbar';

import '@material/web/button/text-button';
import { SnackbarOptions } from '../types/snackbar-options';

/**
 * Material design snackbar.
 *
 *
 */

@customElement('titanium-http-error-snackbar')
export class HttpErrorSnackbar extends LitElement {
  #resolve: (reason: string) => void;

  /**
   * Firefox support
   */
  @property({ type: Boolean, reflect: true }) private accessor open: boolean;

  @property({ type: Array }) private accessor httpErrors: Partial<HttpError>[] = [];

  constructor() {
    super();
    this.popover = 'manual';
  }

  show(httpError: Partial<HttpError>, options?: SnackbarOptions) {
    //Firefox support
    if (this.showPopover) {
      this.showPopover();
    } else {
      this.open = true;
    }
    this.httpErrors.push(httpError);

    this.#setAutoHide(options);
    this.#consoleWarn(httpError);

    return new Promise<string>((resolve) => {
      this.#resolve = resolve;
    });
  }

  #consoleWarn(httpError: Partial<HttpError>) {
    const message = httpError.message;
    const detail = httpError.detail;
    console.warn('APP-HTTP-ERROR:', message || '', detail || '');
  }

  #setAutoHide(options?: SnackbarOptions) {
    if (options?.autoHide) {
      clearTimeout(this.#autoCloseTimeout);
      const duration = typeof options?.autoHide === 'number' ? options?.autoHide : 5000;
      this.#autoCloseTimeout = window.setTimeout(() => this.close('auto-close'), duration);
    }
  }

  addError(httpError: Partial<HttpError>, options?: SnackbarOptions) {
    this.#setAutoHide(options);
    this.#consoleWarn(httpError);
    this.httpErrors = [...this.httpErrors, httpError];
  }

  #autoCloseTimeout = 0;
  close(reason: string = '') {
    //Firefox support
    if (this.hidePopover) {
      this.hidePopover();
    } else {
      this.open = false;
    }

    this.#resolve(reason);
  }

  static styles = [
    ...SimpleSnackbar.styles,
    css`
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

      div[actions] {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 6px;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  #addNewLineBreaks(text: string) {
    const lines = text.split('\n');
    const l = lines.length;

    return lines.map((line: string, i) => (i === l - 1 ? line : html`${line}<br />`));
  }

  render() {
    return html`
      <div main>
        <http-error>
          <span action> ${this.httpErrors.length > 1 ? html`${this.httpErrors.length} Network errors` : this.httpErrors?.[0]?.action} </span>
          <span status> ${this.httpErrors.length > 1 ? html`${this.httpErrors?.[0]?.action}` : nothing} ${this.httpErrors?.[0]?.statusCode} </span>
          <span error>${this.#addNewLineBreaks(this.httpErrors?.[0]?.message ?? '')}</span>
          ${this.httpErrors?.[0]?.detail ? html` <code detail>${this.#addNewLineBreaks(this.httpErrors?.[0]?.detail)}</code>` : nothing}
        </http-error>
      </div>
      <div actions>
        <md-text-button
          @click=${() => {
            if (this.httpErrors.length === 1) {
              this.close('dismiss');
            } else {
              this.httpErrors = [...this.httpErrors.filter((o) => o !== this.httpErrors?.[0])];
            }
          }}
          >Dismiss
        </md-text-button>
        <md-text-button ?hidden=${this.httpErrors.length === 1} @click=${() => this.close('dismiss')}>Dismiss all (${this.httpErrors.length}) </md-text-button>
      </div>
    `;
  }
}
