import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import '@material/web/progress/circular-progress';

import '../../titanium/snackbar/snackbar-stack';

import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { EmailTemplateLog } from '@leavittsoftware/lg-core-typescript';
import { promiseTracking } from '../../titanium/helpers/promise-tracking';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../../titanium/types/dom-event';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import ApiService from '../api-service/api-service';
import { SnackbarStack } from '../../titanium/snackbar/snackbar-stack';
import { p } from '../../titanium/styles/p';

export type CloseReason = 'done';

@customElement('leavitt-view-sent-email-dialog')
export class LeavittViewSentEmailDialog extends LitElement {
  @promiseTracking('trackLoadingPromise')
  @state()
  accessor isLoading = false;
  declare trackLoadingPromise: (promise: Promise<unknown>) => Promise<void>;

  @property({ type: Object }) accessor apiService: ApiService | null;

  @state() private accessor emailTemplateLogId: number | null;
  @state() private accessor emailTemplateLog: Partial<EmailTemplateLog> | null;
  @query('titanium-snackbar-stack') private accessor snackbar!: SnackbarStack;

  @query('md-dialog') private accessor dialog: MdDialog;

  #resolve: (value: CloseReason) => void;
  async open(emailTemplateLogId: number) {
    this.emailTemplateLogId = emailTemplateLogId;
    this.emailTemplateLog = null;
    this.dialog.returnValue = '';

    await this.updateComplete;

    this.dialog.show();

    this.emailTemplateLog = await this.#getEmailTemplateLog(emailTemplateLogId);

    return await new Promise<CloseReason>((resolve) => {
      this.#resolve = resolve;
    });
  }

  async #getEmailTemplateLog(emailTemplateLogId: number) {
    if (!this.apiService) {
      console.warn('No api service provided');
      return null;
    }

    const odataParts = [];

    try {
      const get = this.apiService.getAsync<Partial<EmailTemplateLog>>(`EmailTemplateLogs(${emailTemplateLogId})?${odataParts.join('&')}`);
      this.trackLoadingPromise(get);
      const result = await get;
      return result?.entity;
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return null;
  }

  static styles = [
    p,
    css`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main[email-body] {
          margin: 12px 24px;
          background-color: #f7f7f7;
          border-radius: 12px;
          overflow-x: auto;

          interpolate-size: allow-keywords;
          transition: all 0.25s;
          @starting-style {
            height: 0px;
          }
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => {
          dialogOpenNavigationHack(e.target);
          dialogZIndexHack(e.target);
        }}
        @close=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue === 'done' || e.target.returnValue === 'navigation-close') {
            dialogCloseNavigationHack(e.target);
            this.snackbar.dismissAll();
            return this.#resolve(e.target.returnValue as CloseReason);
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">Email log</div>

        ${this.isLoading
          ? html`<main slot="content">Loading...</main>`
          : !this.emailTemplateLog
            ? html`<main slot="content">No email template log found</main>`
            : html`<main slot="content" email-body>${unsafeHTML(this.emailTemplateLog?.EmailBody ?? '')}</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${() => this.dialog.close('done')}
            >Done ${this.isLoading ? html`<md-circular-progress slot="icon" indeterminate></md-circular-progress>` : nothing}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `;
  }
}
