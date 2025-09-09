import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/filled-button';

import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { EmailTemplateLog } from '@leavittsoftware/lg-core-typescript';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../../titanium/types/dom-event';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import ApiService from '../api-service/api-service';

export type CloseReason = 'done';

@customElement('leavitt-view-sent-email-dialog')
export class LeavittViewSentEmailDialog extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor apiService: ApiService | null;

  @state() private accessor emailTemplateLogId: number | null;
  @state() private accessor emailTemplateLog: Partial<EmailTemplateLog> | null;

  @query('md-dialog') private accessor dialog: MdDialog;

  #resolve: (value: CloseReason) => void;
  async open(emailTemplateLogId: number) {
    this.emailTemplateLogId = emailTemplateLogId;
    this.emailTemplateLog = null;

    await this.updateComplete;

    this.emailTemplateLog = await this.#getEmailTemplateLog(emailTemplateLogId);
    if (!this.emailTemplateLog) return;
    this.dialog.returnValue = '';
    this.dialog.show();
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
      this.loadWhile(get);
      this.dispatchEvent(new PendingStateEvent(get));
      const result = await get;
      return result?.entity;
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return null;
  }

  static styles = [
    css`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main {
          margin: 12px 24px;
          background-color: #f7f7f7;
          border-radius: 12px;

          overflow-x: auto;
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
            return this.#resolve(e.target.returnValue as CloseReason);
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">Email log</div>

        <main slot="content">${unsafeHTML(this.emailTemplateLog?.EmailBody ?? '')}</main>
        <div slot="actions">
          <md-filled-button autofocus ?disabled=${this.isLoading} @click=${() => this.dialog.close('done')}>Done</md-filled-button>
        </div>
      </md-dialog>
    `;
  }
}
