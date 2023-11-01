import '@leavittsoftware/titanium-header/lib/header';
import '../../titanium/card/card';
import '@leavittsoftware/titanium-smart-attachment-input/lib/smart-attachment-input';
import '@material/mwc-button';
import '@material/mwc-textarea';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';

import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import { LoadWhile, isDevelopment } from '@leavittsoftware/titanium-helpers';
import { PendingStateEvent } from '@leavittsoftware/titanium-loading-indicator/lib/loading';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/snackbar';
import { h1, p } from '@leavittsoftware/titanium-styles';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { WebsiteBugDto, WebsiteFeedback } from '@leavittsoftware/lg-core-typescript';
import { TitaniumSmartAttachmentInputElement } from '@leavittsoftware/titanium-smart-attachment-input/lib/smart-attachment-input';
import ApiService from '@leavittsoftware/api-service/lib/api-service';

const websiteBugApiService = new ApiService(new AuthenticatedTokenProvider());
websiteBugApiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
websiteBugApiService.addHeader('X-LGAppName', 'WebsiteBug');
Object.freeze(websiteBugApiService);

const feedbackApiService = new ApiService(new AuthenticatedTokenProvider());
feedbackApiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
feedbackApiService.addHeader('X-LGAppName', 'WebsiteFeedback');
Object.freeze(feedbackApiService);

@customElement('leavitt-user-feedback')
export class LeavittUserFeedback extends LoadWhile(LitElement) {
  @property({ type: Boolean }) isActive: boolean = false;

  @state() private activeIndex: number = 0;

  @queryAll('mwc-textarea') private allInputs: NodeListOf<any & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean }>;
  @query('mwc-textarea[feedback]') private commentTextArea: any & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('mwc-textarea[problem]') private problemTextArea: any & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('titanium-smart-attachment-input') imageInput: TitaniumSmartAttachmentInputElement;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('isActive') && this.isActive) {
      this.reset();
    }
  }

  reset() {
    this.imageInput?.reset();
    this.allInputs.forEach(input => {
      input.value = '';
      input.isUiValid = true;
      input.mdcFoundation?.setValid?.(true);
    });
  }

  async #submitProblem() {
    if (!this.problemTextArea.reportValidity() || this.isLoading) {
      return;
    }

    const dto: WebsiteBugDto = {
      SiteName: location.hostname,
      Description: this.problemTextArea.value,
      Attachments: (this.imageInput.getFiles() ?? []).map(o => o.file),
    };

    try {
      const post = websiteBugApiService.postAsync<WebsiteBugDto>('WebsiteBugs/ReportProblem', dto, { sendAsFormData: true });
      this.dispatchEvent(new PendingStateEvent(post));
      this.loadWhile(post);
      const entity = (await post).entity;

      if (!entity) {
        throw new Error('Error submitting problem. Please try again.');
      } else {
        TitaniumSnackbarSingleton.open(
          html`Thank you for bringing this issue to our attention!<br />
            <br />
            Our engineering teams will promptly investigate and address it.`
        );
        this.reset();
      }
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
    }
  }

  async #submitFeedback() {
    if (!this.commentTextArea.reportValidity() || this.isLoading) {
      return;
    }

    const dto = {
      SiteName: location.hostname,
      Comment: this.commentTextArea.value,
    } satisfies Partial<WebsiteFeedback>;

    try {
      const post = feedbackApiService.postAsync<WebsiteFeedback>('WebsiteFeedbacks', dto);
      this.dispatchEvent(new PendingStateEvent(post));
      this.loadWhile(post);
      const entity = (await post).entity;

      if (!entity) {
        throw new Error('Error submitting feedback. Please try again.');
      } else {
        TitaniumSnackbarSingleton.open('We appreciate your input, and we will promptly conduct a review!');
        this.reset();
      }
    } catch (error) {
      TitaniumSnackbarSingleton.open(error);
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

      mwc-tab-bar {
        margin-bottom: 16px;
        overflow: hidden;
      }

      @media (max-width: 768px) {
        mwc-tab-bar {
          --mdc-typography-button-font-size: 11px;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-header header="Report a problem" subHeader="Report bugs and provide feedback for this site" no-nav></titanium-header>

      <titanium-card has-footer>
        <mwc-tab-bar activeIndex=${this.activeIndex} full-width>
          <mwc-tab
            @click=${() => {
              this.reset();
              this.activeIndex = 0;
            }}
            label="Report a problem"
          ></mwc-tab>
          <mwc-tab
            @click=${() => {
              this.reset();
              this.activeIndex = 1;
            }}
            label="Provide feedback"
          ></mwc-tab>
        </mwc-tab-bar>

        <main>
          <form ?hidden=${this.activeIndex !== 0}>
            <p full-width>
              Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it can
              be addressed as soon as possible.
            </p>
            <mwc-textarea problem label="Describe the issue" rows="5" required outlined></mwc-textarea>
            <titanium-smart-attachment-input
              multiple
              full-width
              label="Supporting files"
              noItemsText="No files"
              addButtonLabel="Add file"
            ></titanium-smart-attachment-input>
          </form>

          <form ?hidden=${this.activeIndex !== 1}>
            <p full-width>
              User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall user
              experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our website
              based on the needs and expectations of our users.
            </p>
            <p full-width>
              Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
              carefully reviewed and planned into the next development cycle.
            </p>
            <mwc-textarea feedback label="Feedback" rows="5" required outlined></mwc-textarea>
          </form>
        </main>
        <span nav card-footer>
          <mwc-button @click=${() => (this.activeIndex === 0 ? this.#submitProblem() : this.#submitFeedback())} ?disabled=${this.isLoading}>Submit</mwc-button>
        </span>
      </titanium-card>
    `;
  }
}
