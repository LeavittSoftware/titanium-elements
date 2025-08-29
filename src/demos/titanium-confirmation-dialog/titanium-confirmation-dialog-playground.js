import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/outlined-button';
import '@material/web/textfield/outlined-text-field';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog';
/* playground-fold */
let TitaniumConfirmationDialogPlayground = class TitaniumConfirmationDialogPlayground extends LitElement {
    #result_accessor_storage;
    get result() { return this.#result_accessor_storage; }
    set result(value) { this.#result_accessor_storage = value; }
    #result2_accessor_storage;
    get result2() { return this.#result2_accessor_storage; }
    set result2(value) { this.#result2_accessor_storage = value; }
    #result3_accessor_storage;
    get result3() { return this.#result3_accessor_storage; }
    set result3(value) { this.#result3_accessor_storage = value; }
    #confirmationDialog_accessor_storage;
    get confirmationDialog() { return this.#confirmationDialog_accessor_storage; }
    set confirmationDialog(value) { this.#confirmationDialog_accessor_storage = value; }
    #confirmationDialog2_accessor_storage;
    get confirmationDialog2() { return this.#confirmationDialog2_accessor_storage; }
    set confirmationDialog2(value) { this.#confirmationDialog2_accessor_storage = value; }
    #confirmationDialog3_accessor_storage;
    get confirmationDialog3() { return this.#confirmationDialog3_accessor_storage; }
    set confirmationDialog3(value) { this.#confirmationDialog3_accessor_storage = value; }
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
      <div>
        <p>Result: ${this.result}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
            this.result = await this.confirmationDialog?.open('Confirmation delete?', 'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.');
        }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo1></titanium-confirmation-dialog>
      </div>

      <h1>Custom button text</h1>
      <div>
        <p>Result: ${this.result2}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
            this.result2 = await this.confirmationDialog2?.open('Do you agree?', 'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.');
        }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo2 confirmActionText="Agree" cancelActionText="Disagree"></titanium-confirmation-dialog>
      </div>

      <h1>Slot demo</h1>
      <div>
        <p>Result: ${this.result3}</p>
        <br />
        <section buttons>
          <md-outlined-button
            @click=${async () => {
            this.result3 = await this.confirmationDialog3?.open('What is your favorite color?', 'asf saf asdf');
        }}
            >Open</md-outlined-button
          >
        </section>
        <titanium-confirmation-dialog demo3>
          <md-outlined-text-field label="What is your favorite color?"></md-outlined-text-field>
        </titanium-confirmation-dialog>
      </div>
    `;
    }
};
__decorate([
    state()
], TitaniumConfirmationDialogPlayground.prototype, "result", null);
__decorate([
    state()
], TitaniumConfirmationDialogPlayground.prototype, "result2", null);
__decorate([
    state()
], TitaniumConfirmationDialogPlayground.prototype, "result3", null);
__decorate([
    query('titanium-confirmation-dialog[demo1]')
], TitaniumConfirmationDialogPlayground.prototype, "confirmationDialog", null);
__decorate([
    query('titanium-confirmation-dialog[demo2]')
], TitaniumConfirmationDialogPlayground.prototype, "confirmationDialog2", null);
__decorate([
    query('titanium-confirmation-dialog[demo3]')
], TitaniumConfirmationDialogPlayground.prototype, "confirmationDialog3", null);
TitaniumConfirmationDialogPlayground = __decorate([
    customElement('titanium-confirmation-dialog-playground')
], TitaniumConfirmationDialogPlayground);
export { TitaniumConfirmationDialogPlayground };
//# sourceMappingURL=titanium-confirmation-dialog-playground.js.map