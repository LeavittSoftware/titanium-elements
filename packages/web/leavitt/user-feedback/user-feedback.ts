import '../../titanium/header/header';
import '../../titanium/card/card';
import '../../titanium/smart-attachment-input/smart-attachment-input';

import '@material/web/button/filled-tonal-button';
import '@material/web/textfield/outlined-text-field';
import '@material/web/tabs/primary-tab';
import '@material/web/tabs/tabs';

import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { LoadWhile, isDevelopment } from '../../titanium/helpers/helpers';
import { PendingStateEvent } from '../../titanium/types/pending-state-event';
import { h1, p } from '../../titanium/styles/styles';
import { AuthenticatedTokenProvider } from '../api-service/authenticated-token-provider';
import { IssueDto } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSmartAttachmentInput } from '../../titanium/smart-attachment-input/smart-attachment-input';
import ApiService from '../api-service//api-service';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';
import { AuthZeroLgUserManager } from '../user-manager/auth-zero-lg-user-manager';

@customElement('leavitt-user-feedback')
export class LeavittUserFeedback extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor userManager: AuthZeroLgUserManager | null;
  @property({ type: Boolean }) accessor isActive: boolean = false;

  @state() private accessor activeIndex: number = 0;

  @query('md-outlined-text-field') private accessor textArea: MdOutlinedTextField;
  @query('titanium-smart-attachment-input') private accessor imageInput: TitaniumSmartAttachmentInput | null;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('isActive') && this.isActive) {
      this.reset();
    }
  }

  reset() {
    this.imageInput?.reset();
    this.textArea?.reset();
  }

  async #submitProblem() {
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
      const apiService = new ApiService(this.userManager || new AuthenticatedTokenProvider());
      apiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
      apiService.addHeader('X-LGAppName', 'IssueTracking');
      const post = apiService.postAsync<IssueDto>('Issues/ReportIssue', dto, { sendAsFormData: true });
      this.dispatchEvent(new PendingStateEvent(post));
      this.loadWhile(post);
      const entity = (await post).entity;

      if (!entity) {
        throw new Error('Error submitting problem. Please try again.');
      } else {
        this.dispatchEvent(
          new ShowSnackbarEvent('', {
            overrideTemplate: html`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`,
          })
        );
        this.reset();
      }
    } catch (error) {
      this.dispatchEvent(new ShowSnackbarEvent(error));
    }
  }

  async #submitFeedback() {
    if (!this.textArea.reportValidity() || this.isLoading) {
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
        this.dispatchEvent(new ShowSnackbarEvent('We appreciate your input, and we will promptly conduct a review!'));
        this.reset();
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
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 0;
      }

      titanium-card {
        padding-top: 0;
      }

      md-tabs {
        margin-bottom: 16px;
        --md-primary-tab-container-shape: 12px;
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
      <titanium-header header="Report a problem" subHeader="Report bugs and provide feedback for this site" no-nav></titanium-header>

      <titanium-card>
        <md-tabs
          full-width
          @change=${(event) => {
            this.reset();
            this.activeIndex = event.target.activeTabIndex;
          }}
        >
          <md-primary-tab
            >Report a problem
            <md-icon slot="icon">person_alert</md-icon>
          </md-primary-tab>
          <md-primary-tab
            >Provide feedback
            <md-icon slot="icon">rate_review</md-icon>
          </md-primary-tab>
        </md-tabs>

        <main>
          ${this.activeIndex === 0
            ? html` <form>
                <p full-width>
                  Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it
                  can be addressed as soon as possible.
                </p>
                <md-outlined-text-field type="textarea" problem label="Describe the issue" rows="5" required outlined></md-outlined-text-field>
                <titanium-smart-attachment-input
                  multiple
                  full-width
                  label="Supporting files"
                  noItemsText="No files"
                  addButtonLabel="Add file"
                ></titanium-smart-attachment-input>
              </form>`
            : html` <form>
                <p full-width>
                  User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall
                  user experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our
                  website based on the needs and expectations of our users.
                </p>
                <p full-width>
                  Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
                  carefully reviewed and planned into the next development cycle.
                </p>
                <md-outlined-text-field type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
              </form>`}
        </main>
        <span nav card-footer>
          <md-filled-tonal-button @click=${() => (this.activeIndex === 0 ? this.#submitProblem() : this.#submitFeedback())} ?disabled=${this.isLoading}
            >Submit</md-filled-tonal-button
          >
        </span>
      </titanium-card>
    `;
  }
}
