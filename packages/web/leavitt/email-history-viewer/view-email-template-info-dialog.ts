import '@material/web/dialog/dialog';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import '@material/web/progress/circular-progress';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { EmailTemplate } from '@leavittsoftware/lg-core-typescript';
import { LoadWhile } from '../../titanium/helpers/load-while';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../../titanium/types/dom-event';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import ApiService from '../api-service/api-service';
import { SnackbarStack } from '../../titanium/snackbar/snackbar-stack';
import { p } from '../../titanium/styles/p';
import { repeat } from 'lit/directives/repeat.js';
import { h2 } from '../../titanium/styles/h2';

export type CloseReason = 'done';

@customElement('leavitt-view-email-template-info-dialog')
export class LeavittViewEmailTemplateInfoDialog extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor apiService: ApiService | null;

  @state() private accessor emailTemplates: Partial<EmailTemplate>[] | null;
  @query('titanium-snackbar-stack') private accessor snackbar!: SnackbarStack;

  @query('md-dialog') private accessor dialog: MdDialog;

  #resolve: (value: CloseReason) => void;
  async open() {
    this.emailTemplates = [];
    this.dialog.returnValue = '';

    await this.updateComplete;

    this.dialog.show();

    this.emailTemplates = await this.#getEmailTemplates();

    return await new Promise<CloseReason>((resolve) => {
      this.#resolve = resolve;
    });
  }

  async #getEmailTemplates() {
    if (!this.apiService) {
      console.warn('No api service provided');
      return [];
    }

    const odataParts = ['select=Id,Name,IsExpired', 'orderby=Name', 'filter=not IsExpired'];

    try {
      const get = this.apiService.getAsync<Partial<EmailTemplate>>(`EmailTemplates?${odataParts.join('&')}`);
      this.loadWhile(get);
      const result = await get;
      return result?.entities;
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
    return [];
  }

  static styles = [
    h2,
    p,
    css`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main[email-templates] {
          padding-top: 0;

          h2 {
            padding-top: 24px;
          }

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
        <div slot="headline">What emails can I expect?</div>

        ${this.isLoading
          ? nothing
          : !this.emailTemplates?.length
            ? html`<main slot="content">No email templates found for this site</main>`
            : html`<main slot="content" email-templates>
                ${repeat(
                  this.emailTemplates,
                  (emailTemplate) => emailTemplate.Id,
                  (emailTemplate) =>
                    html`<h2>${emailTemplate.Name}</h2>
                      <p>${emailTemplate.Description ?? 'No description available'}</p>`
                )}
              </main>`}

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
