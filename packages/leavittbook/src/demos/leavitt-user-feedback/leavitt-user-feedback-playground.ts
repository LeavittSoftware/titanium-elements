/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/snackbar/snackbar';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/user-feedback/user-feedback';
import { LeavittUserFeedback } from '@leavittsoftware/web/leavitt/user-feedback/user-feedback';

/* playground-fold */
@customElement('leavitt-user-feedback-playground')
export class LeavittPersonCompanySelectPlayground extends LitElement {
  @query('leavitt-user-feedback[methods-demo]') protected accessor methodsSelect!: LeavittUserFeedback;
  @query('leavitt-user-feedback[duplicate-api-calls]') protected accessor duplicateAPICallsSelect!: LeavittUserFeedback;
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
      <h1>Default</h1>
      <p></p>
      <div>
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
