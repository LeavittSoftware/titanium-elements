import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';

import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { LeavittUserFeedback } from '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
import { heroStyles } from '../styles/hero-styles';

import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';

@customElement('leavitt-user-feedback-demo')
export class LeavittUserFeedbackDemo extends LitElement {
  @query('leavitt-user-feedback[methods-demo]') protected accessor methodsSelect!: LeavittUserFeedback;
  @query('report-a-problem-dialog') protected accessor reportAProblemDialog!: ReportAProblemDialog;
  @query('provide-feedback-dialog') protected accessor provideFeedbackDialog!: ProvideFeedbackDialog;
  @queryAll('leavitt-user-feedback') protected accessor inputs!: NodeListOf<LeavittUserFeedback>;

  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      p {
        margin-bottom: 12px;
      }

      item-row {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 12px;
      }
    `,
  ];

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
