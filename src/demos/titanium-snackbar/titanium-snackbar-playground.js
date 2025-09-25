import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/dialog/dialog';
import '@material/web/button/outlined-button';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import { dialogZIndexHack } from '@leavittsoftware/web/titanium/hacks/dialog-zindex-hack';
/* playground-fold */
let TitaniumSnackbarPlayground = class TitaniumSnackbarPlayground extends LitElement {
    static { this.styles = [
        h1,
        p,
        css `
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
    ]; }
    #counter = 0;
    render() {
        /* playground-fold-end */
        return html `
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
            @click=${() => this.dispatchEvent(new ShowSnackbarEvent({
            action: 'GET',
            message: 'Network error. Check your connection and try again.',
            statusCode: undefined,
            type: 'HttpError',
        }))}
            >HTTP error</md-outlined-button
          >
          <md-outlined-button
            @click=${() => this.dispatchEvent(new ShowSnackbarEvent({
            action: 'GET',
            message: 'Network error. Check your connection and try again.',
            statusCode: 404,
            type: 'HttpError',
            detail: 'Major Outage. This was probably caused by a network outage in your area. Please contact your ISP for further assistance.',
        }))}
            >HTTP error with detail</md-outlined-button
          >

          <md-outlined-button @click=${() => this.dispatchEvent(new ShowSnackbarEvent('', { overrideTemplate: html `<h1 style="color:red">ALERT!</h1>` }))}
            >Template literal</md-outlined-button
          >

          <md-dialog @open=${(e) => dialogZIndexHack(e.target)} @close=${() => this.snackbar.dismissAll()}>
            <span slot="headline">Snackbar from a dialog</span>
            <main slot="content">
              <titanium-snackbar-stack></titanium-snackbar-stack>
              <md-outlined-button
                @click=${(e) => e.target?.dispatchEvent(new ShowSnackbarEvent({
            action: 'GET',
            message: 'Network error. Check your connection and try again.',
            statusCode: undefined,
            type: 'HttpError',
        }))}
                >Open snackbar
              </md-outlined-button>
            </main>
          </md-dialog>

          <md-outlined-button @click=${() => this.dialog.show()}>Open dialog </md-outlined-button>
        </section>
      </div>
    `;
    }
};
__decorate([
    query('md-dialog')
], TitaniumSnackbarPlayground.prototype, "dialog", void 0);
__decorate([
    query('titanium-snackbar-stack')
], TitaniumSnackbarPlayground.prototype, "snackbar", void 0);
TitaniumSnackbarPlayground = __decorate([
    customElement('titanium-snackbar-playground')
], TitaniumSnackbarPlayground);
export { TitaniumSnackbarPlayground };
//# sourceMappingURL=titanium-snackbar-playground.js.map