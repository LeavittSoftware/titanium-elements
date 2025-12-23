import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';

import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';

import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';

@customElement('leavitt-user-feedback-demo')
export class LeavittUserFeedbackDemo extends LitElement {
  @query('report-a-problem-dialog') protected accessor reportAProblemDialog!: ReportAProblemDialog;
  @query('provide-feedback-dialog') protected accessor provideFeedbackDialog!: ProvideFeedbackDialog;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt user feedback" level1Href="/leavitt-user-feedback" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt User Feedback" className="LeavittUserFeedback"></story-header>

            <div>
              <h1>Default</h1>
              <p>User feedback components with report problem and provide feedback dialogs</p>
              <item-row>
                <md-filled-tonal-button @click=${() => this.reportAProblemDialog.show()}>Report a problem</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.provideFeedbackDialog.show()}>Provide feedback</md-filled-tonal-button>
                <leavitt-user-feedback></leavitt-user-feedback>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <report-a-problem-dialog .userManager=${UserManager}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${UserManager}></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
