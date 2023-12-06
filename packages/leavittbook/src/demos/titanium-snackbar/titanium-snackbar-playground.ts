/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { MdDialog } from '@material/web/dialog/dialog';

import '@material/web/dialog/dialog';
import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';
import { SnackbarStack } from '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';

import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';

/* playground-fold */
@customElement('titanium-snackbar-playground')
export class TitaniumSnackbarPlayground extends LitElement {
  @query('md-dialog') dialog: MdDialog;
  @query('titanium-snackbar-stack') snackbar: SnackbarStack;

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

  #counter = 0;

  render() {
    /* playground-fold-end */
    return html`
      <h1>Demo</h1>

      <div>
        <section buttons>
          <md-outlined-button
            @click=${() => {
              this.#counter++;
              this.dispatchEvent(new ShowSnackbarEvent(`Default snackbar #${this.#counter}`));
            }}
            >Default</md-outlined-button
          >
          <md-outlined-button @click=${() => this.dispatchEvent(new ShowSnackbarEvent('Auto-hide snackbar', { autoHide: 2000 }))}>Auto-hide</md-outlined-button>
          <md-outlined-button
            @click=${() =>
              this.dispatchEvent(
                new ShowSnackbarEvent({
                  action: 'GET',
                  message: 'Network error. Check your connection and try again.',
                  statusCode: undefined,
                  type: 'HttpError',
                } satisfies Partial<HttpError>)
              )}
            >HTTP error</md-outlined-button
          >
          <md-outlined-button
            @click=${() =>
              this.dispatchEvent(
                new ShowSnackbarEvent({
                  action: 'GET',
                  message: 'Network error. Check your connection and try again.',
                  statusCode: 404,
                  type: 'HttpError',
                  detail: 'Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance.',
                } satisfies Partial<HttpError>)
              )}
            >HTTP error with detail</md-outlined-button
          >

          <md-outlined-button @click=${() => this.dispatchEvent(new ShowSnackbarEvent('', { overrideTemplate: html`<h1 style="color:red">ALERT!</h1>` }))}
            >Template literal</md-outlined-button
          >

          <md-dialog @open=${(e: DOMEvent<MdDialog>) => dialogZIndexHack(e.target)} @close=${() => this.snackbar.dismissAll()}>
            <span slot="headline">Snackbar from a dialog</span>
            <main slot="content">
              <titanium-snackbar-stack></titanium-snackbar-stack>
              <md-outlined-button
                @click=${(e: MouseEvent) =>
                  e.target?.dispatchEvent(
                    new ShowSnackbarEvent({
                      action: 'GET',
                      message: 'Network error. Check your connection and try again.',
                      statusCode: undefined,
                      type: 'HttpError',
                    } satisfies Partial<HttpError>)
                  )}
                >Open snackbar
              </md-outlined-button>
            </main>
          </md-dialog>

          <md-outlined-button @click=${() => this.dialog.show()}>Open dialog </md-outlined-button>
        </section>
      </div>
    `;
  }
}
