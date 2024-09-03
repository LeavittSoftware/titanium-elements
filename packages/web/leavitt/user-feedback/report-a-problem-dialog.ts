import '@material/web/dialog/dialog';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/text-button';

import '../../titanium/snackbar/snackbar-stack';
import '../../titanium/smart-attachment-input/smart-attachment-input';

import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { LoadWhile, isDevelopment } from '../../titanium/helpers/helpers';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { h1, p } from '../../titanium/styles/styles';
import { AuthenticatedTokenProvider } from '../api-service/authenticated-token-provider';
import { IssueDto } from '@leavittsoftware/lg-core-typescript';
import ApiService from '../api-service/api-service';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { DOMEvent } from '../../titanium/types/dom-event';
import { SnackbarStack } from '../../titanium/snackbar/snackbar-stack';
import { TitaniumSmartAttachmentInput } from '../../titanium/smart-attachment-input/smart-attachment-input';

const websiteBugApiService = new ApiService(new AuthenticatedTokenProvider());
websiteBugApiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
websiteBugApiService.addHeader('X-LGAppName', 'IssueTracking');
Object.freeze(websiteBugApiService);

@customElement('report-a-problem-dialog')
export class ReportAProblemDialog extends LoadWhile(LitElement) {
  @query('md-dialog') private accessor dialog!: MdDialog;
  @query('titanium-snackbar-stack') private accessor snackbar: SnackbarStack;

  @query('md-outlined-text-field') private accessor textArea: MdOutlinedTextField;
  @query('titanium-smart-attachment-input') private accessor imageInput: TitaniumSmartAttachmentInput | null;

  show() {
    this.reset();
    this.dialog.show();
  }

  reset() {
    this.dialog.returnValue = '';
    this.imageInput?.reset();
    this.textArea?.reset();
  }

  async #submit() {
    if (!this.textArea.reportValidity() || this.isLoading) {
      return;
    }

    const dto: IssueDto = {
      SiteName: location.hostname,
      PathName: window.location.pathname + window.location.search,
      IssueType: 'Bug',
      Description: this.textArea.value,
      Attachments: (this.imageInput?.getFiles() ?? []).map((o) => o.file),
    };

    try {
      const post = websiteBugApiService.postAsync<IssueDto>('Issues/ReportIssue', dto, { sendAsFormData: true });
      this.dispatchEvent(new PendingStateEvent(post));
      this.loadWhile(post);
      const entity = (await post).entity;

      if (!entity) {
        throw new Error('Error submitting problem. Please try again.');
      } else {
        document.dispatchEvent(
          new ShowSnackbarEvent('', {
            overrideTemplate: html`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`,
          })
        );
        this.reset();
        this.dialog.close('done');
      }
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
  }

  static styles = [
    h1,
    p,
    css`
      :host {
        display: grid;
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      md-outlined-text-field {
        resize: none;
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
          if (e.target.returnValue === 'cancel' || e.target.returnValue === 'done') {
            dialogCloseNavigationHack(e.target);
            this.snackbar.dismissAll();
            return;
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">Report a problem</div>
        <form slot="content" method="dialog">
          <p>
            Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it can be
            addressed as soon as possible.
          </p>
          <md-outlined-text-field
            ?disabled=${this.isLoading}
            type="textarea"
            problem
            label="Describe the issue"
            rows="5"
            required
            outlined
          ></md-outlined-text-field>
          <titanium-smart-attachment-input
            ?disabled=${this.isLoading}
            multiple
            label="Supporting files"
            noItemsText="No files"
            addButtonLabel="Add file"
          ></titanium-smart-attachment-input>
        </form>
        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>

        <div slot="actions">
          <md-text-button ?disabled=${this.isLoading} @click=${() => this.dialog.close('cancel')}> Cancel </md-text-button>
          <md-text-button ?disabled=${this.isLoading} @click=${() => this.#submit()}>Submit</md-text-button>
        </div>
      </md-dialog>
    `;
  }
}
