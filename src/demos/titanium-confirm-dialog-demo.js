import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog-open-event';
import StoryStyles from '../styles/story-styles';
let TitaniumConfirmDialogDemo = class TitaniumConfirmDialogDemo extends LitElement {
    #confirmed_accessor_storage = false;
    get confirmed() { return this.#confirmed_accessor_storage; }
    set confirmed(value) { this.#confirmed_accessor_storage = value; }
    #confirmDialog_accessor_storage;
    get confirmDialog() { return this.#confirmDialog_accessor_storage; }
    set confirmDialog(value) { this.#confirmDialog_accessor_storage = value; }
    async #open() {
        const confirmationDialogEvent = new ConfirmDialogOpenEvent('Confirm delete?', 'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.');
        this.dispatchEvent(confirmationDialogEvent);
        this.confirmed = await confirmationDialogEvent.dialogResult;
    }
    firstUpdated() {
        this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e) => {
            await import('@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog');
            this.confirmDialog.handleEvent(e);
        });
    }
    static { this.styles = [
        StoryStyles,
        css `
      h3 {
        margin-bottom: 12px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium confirm dialog" level1Href="/titanium-confirm-dialog" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium confirm dialog" className="TitaniumConfirmDialog"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-confirm-dialog</kbd> is deprecated. Use <kbd>titanium-confirmation-dialog</kbd> instead.</p>
            </deprecation-notice>
            <div>
              <h1>Default</h1>
              <h3>Confirmed: ${this.confirmed}</h3>
              <md-filled-tonal-button @click=${this.#open}>Open</md-filled-tonal-button>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
      <titanium-confirm-dialog></titanium-confirm-dialog>
    `;
    }
};
__decorate([
    state()
], TitaniumConfirmDialogDemo.prototype, "confirmed", null);
__decorate([
    query('titanium-confirm-dialog')
], TitaniumConfirmDialogDemo.prototype, "confirmDialog", null);
TitaniumConfirmDialogDemo = __decorate([
    customElement('titanium-confirm-dialog-demo')
], TitaniumConfirmDialogDemo);
export { TitaniumConfirmDialogDemo };
//# sourceMappingURL=titanium-confirm-dialog-demo.js.map