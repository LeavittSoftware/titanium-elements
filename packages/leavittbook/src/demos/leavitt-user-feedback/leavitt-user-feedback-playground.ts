/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import { LeavittUserFeedback } from '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import { ReportAProblemDialog } from '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog';
import { ProvideFeedbackDialog } from '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog';

/* playground-fold */
@customElement('leavitt-user-feedback-playground')
export class LeavittPersonCompanySelectPlayground extends LitElement {
  @query('leavitt-user-feedback[methods-demo]') protected accessor methodsSelect!: LeavittUserFeedback;
  @query('report-a-problem-dialog') protected accessor reportAProblemDialog!: ReportAProblemDialog;
  @query('provide-feedback-dialog') protected accessor provideFeedbackDialog!: ProvideFeedbackDialog;
  @queryAll('leavitt-user-feedback') protected accessor inputs!: NodeListOf<LeavittUserFeedback>;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <user-manager></user-manager>

      <h1>Default</h1>
      <p></p>
      <div>
        <md-outlined-button @click=${() => this.reportAProblemDialog.show()}>Report a problem</md-outlined-button>
        <md-outlined-button @click=${() => this.provideFeedbackDialog.show()}>Provide feedback</md-outlined-button>
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>

      <report-a-problem-dialog></report-a-problem-dialog>
      <provide-feedback-dialog></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
