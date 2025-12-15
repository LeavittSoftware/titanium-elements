import '@material/web/dialog/dialog';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/text-button';

import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { LoadWhile, isDevelopment } from '../../titanium/helpers/helpers';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { h1, p } from '../../titanium/styles/styles';
import { IssueDto } from '@leavittsoftware/lg-core-typescript';
import ApiService from '../api-service/api-service';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { dialogZIndexHack } from '../../titanium/hacks/dialog-zindex-hack';
import { DOMEvent } from '../../titanium/types/dom-event';
import { SnackbarStack } from '../../titanium/snackbar/snackbar-stack';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../../titanium/hacks/dialog-navigation-hack';
import { AuthZeroLgUserManager } from '../user-manager/auth-zero-lg-user-manager';
import { AuthenticatedTokenProvider } from '../api-service/authenticated-token-provider';

@customElement('provide-feedback-dialog')
export class ProvideFeedbackDialog extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor userManager: AuthZeroLgUserManager | null;
  @query('md-dialog') private accessor dialog!: MdDialog;
  @query('titanium-snackbar-stack') private accessor snackbar: SnackbarStack;
  @query('md-outlined-text-field') private accessor textArea: MdOutlinedTextField;

  show() {
    this.reset();
    this.dialog.show();
  }

  reset() {
    this.dialog.returnValue = '';
    this.textArea?.reset();
  }

  async #submit() {
    if (!this.textArea.reportValidity() || this.isLoading || !this.textArea.value) {
      return;
    }

    const dto: IssueDto = {
      SiteName: location.hostname,
      PathName: window.location.pathname + window.location.search,
      IssueType: 'Feedback',
      Description: this.textArea.value,
      Attachments: [],
    };

    try {
      if (this.userManager) {
        const apiService = new ApiService(this.userManager || new AuthenticatedTokenProvider());
        apiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
        apiService.addHeader('X-LGAppName', 'IssueTracking');
        const post = apiService.postAsync<IssueDto>('Issues/ReportIssue', dto, { sendAsFormData: true });
        this.dispatchEvent(new PendingStateEvent(post));
        this.loadWhile(post);
        const entity = (await post).entity;

        if (!entity) {
          throw new Error('Error submitting feedback. Please try again.');
        } else {
          document.dispatchEvent(new ShowSnackbarEvent('We appreciate your input, and we will promptly conduct a review!'));
          this.reset();
          this.dialog.close('done');
        }
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
        <div slot="headline">Provide feedback</div>
        <form slot="content" method="dialog">
          <p>
            User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall user
            experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our website
            based on the needs and expectations of our users.
          </p>
          <p>
            Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
            carefully reviewed and planned into the next development cycle.
          </p>
          <md-outlined-text-field ?disabled=${this.isLoading} type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
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
