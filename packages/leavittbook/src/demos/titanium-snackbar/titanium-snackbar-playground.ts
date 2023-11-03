/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/snackbar/snackbar';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/web/titanium/snackbar/snackbar';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';

/* playground-fold */
@customElement('titanium-snackbar-playground')
export class TitaniumSnackbarPlayground extends LitElement {
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
      <h1>Demo</h1>

      <div>
        <section buttons>
          <md-outlined-button @click=${() => TitaniumSnackbarSingleton?.open('Default snackbar')}>Default</md-outlined-button>
          <md-outlined-button @click=${() => TitaniumSnackbarSingleton?.open('Auto-hide snackbar', { autoHide: true })}>Auto-hide</md-outlined-button>
          <md-outlined-button
            @click=${() =>
              TitaniumSnackbarSingleton?.open({
                action: 'GET',
                message: 'Network error. Check your connection and try again.',
                statusCode: undefined,
                type: 'HttpError',
              } as Partial<HttpError> as string)}
            >HTTP error</md-outlined-button
          >
          <md-outlined-button
            @click=${() =>
              TitaniumSnackbarSingleton?.open({
                action: 'GET',
                message: 'Network error. Check your connection and try again.',
                statusCode: undefined,
                type: 'HttpError',
                detail: 'Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance.',
              } as Partial<HttpError> as string)}
            >HTTP error with detail</md-outlined-button
          >
        </section>
      </div>

      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
