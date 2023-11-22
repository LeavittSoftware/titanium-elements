/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/button/outlined-button';
import '@material/web/dialog/dialog';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/snackbar/snackbar';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/web/titanium/snackbar/snackbar';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';
import { MdDialog } from '@material/web/dialog/dialog';

/* playground-fold */
@customElement('titanium-snackbar-playground')
export class TitaniumSnackbarPlayground extends LitElement {
  @query('md-dialog') dialog: MdDialog;
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
        <md-dialog>
          <span slot="headline">Snackbar from a dialog</span>
          <div slot="content" popover="manual">TOAST INSIDE MODAL</div>
          <md-outlined-button
            slot="actions"
            @click=${() =>
              TitaniumSnackbarSingleton?.open({
                action: 'GET',
                message: 'Network error. Check your connection and try again.',
                statusCode: undefined,
                type: 'HttpError',
              } as Partial<HttpError> as string)}
            >Open snackbar
          </md-outlined-button>
        </md-dialog>
        <md-outlined-button @click=${() => this.dialog.show()}>Open dialog </md-outlined-button>
      </div>

      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
