/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p, button } from '../../../../titanium/styles/styles';

import '@material/mwc-button';
import ApiService from '../../../../leavitt/api-service/api-service';

/* playground-fold-end */
import '../../../../leavitt/user-feedback/user-feedback';
import { LeavittUserFeedback } from '../../../../leavitt/user-feedback/user-feedback';

/* playground-fold */
@customElement('leavitt-user-feedback-playground')
export class LeavittPersonCompanySelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @query('leavitt-user-feedback[methods-demo]') protected methodsSelect!: LeavittUserFeedback;
  @query('leavitt-user-feedback[duplicate-api-calls]') protected duplicateAPICallsSelect!: LeavittUserFeedback;
  @queryAll('leavitt-user-feedback') protected inputs!: NodeListOf<LeavittUserFeedback>;

  static styles = [
    h1,
    p,
    button,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
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
      <div style="background-color: #eee ">
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
