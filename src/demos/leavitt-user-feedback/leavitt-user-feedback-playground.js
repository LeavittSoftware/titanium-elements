import { __decorate } from "tslib";
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
import UserManager from '../../services/user-manager-service';
/* playground-fold */
let LeavittPersonCompanySelectPlayground = class LeavittPersonCompanySelectPlayground extends LitElement {
    #methodsSelect_accessor_storage;
    get methodsSelect() { return this.#methodsSelect_accessor_storage; }
    set methodsSelect(value) { this.#methodsSelect_accessor_storage = value; }
    #reportAProblemDialog_accessor_storage;
    get reportAProblemDialog() { return this.#reportAProblemDialog_accessor_storage; }
    set reportAProblemDialog(value) { this.#reportAProblemDialog_accessor_storage = value; }
    #provideFeedbackDialog_accessor_storage;
    get provideFeedbackDialog() { return this.#provideFeedbackDialog_accessor_storage; }
    set provideFeedbackDialog(value) { this.#provideFeedbackDialog_accessor_storage = value; }
    #inputs_accessor_storage;
    get inputs() { return this.#inputs_accessor_storage; }
    set inputs(value) { this.#inputs_accessor_storage = value; }
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
    render() {
        /* playground-fold-end */
        return html `
      <h1>Default</h1>
      <p></p>
      <div>
        <md-outlined-button @click=${() => this.reportAProblemDialog.show()}>Report a problem</md-outlined-button>
        <md-outlined-button @click=${() => this.provideFeedbackDialog.show()}>Provide feedback</md-outlined-button>
        <leavitt-user-feedback></leavitt-user-feedback>
      </div>

      <report-a-problem-dialog .userManager=${UserManager}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${UserManager}></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
    }
};
__decorate([
    query('leavitt-user-feedback[methods-demo]')
], LeavittPersonCompanySelectPlayground.prototype, "methodsSelect", null);
__decorate([
    query('report-a-problem-dialog')
], LeavittPersonCompanySelectPlayground.prototype, "reportAProblemDialog", null);
__decorate([
    query('provide-feedback-dialog')
], LeavittPersonCompanySelectPlayground.prototype, "provideFeedbackDialog", null);
__decorate([
    queryAll('leavitt-user-feedback')
], LeavittPersonCompanySelectPlayground.prototype, "inputs", null);
LeavittPersonCompanySelectPlayground = __decorate([
    customElement('leavitt-user-feedback-playground')
], LeavittPersonCompanySelectPlayground);
export { LeavittPersonCompanySelectPlayground };
//# sourceMappingURL=leavitt-user-feedback-playground.js.map