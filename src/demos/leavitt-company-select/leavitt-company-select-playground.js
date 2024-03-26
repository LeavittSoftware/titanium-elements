import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';
/* playground-fold-end */
import '@leavittsoftware/web/leavitt/company-select/company-select';
/* playground-fold */
let LeavittPersonCompanySelectPlayground = class LeavittPersonCompanySelectPlayground extends LitElement {
    #apiService_accessor_storage;
    get apiService() { return this.#apiService_accessor_storage; }
    set apiService(value) { this.#apiService_accessor_storage = value; }
    #methodsSelect_accessor_storage;
    get methodsSelect() { return this.#methodsSelect_accessor_storage; }
    set methodsSelect(value) { this.#methodsSelect_accessor_storage = value; }
    #inputs_accessor_storage;
    get inputs() { return this.#inputs_accessor_storage; }
    set inputs(value) { this.#inputs_accessor_storage = value; }
    constructor() {
        super();
        this.apiService = new ApiService(new AuthenticatedTokenProvider());
        this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
        this.apiService.addHeader('X-LGAppName', 'Testing');
    }
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
      <user-manager disableAutoload></user-manager>
      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-company-select
          @selected=${(e) => console.log('selected change 1', e.target.selected)}
          style="width: 400px;"
          methods-demo
          required
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <section buttons>
          <md-outlined-button @click=${() => this.methodsSelect.reset()}>reset()</md-outlined-button>
          <md-outlined-button @click=${() => this.methodsSelect.focus()}>focus()</md-outlined-button>
          <md-outlined-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${() => (this.methodsSelect.required = !this.methodsSelect.required)}>Toggle required</md-outlined-button>

          <md-outlined-button @click=${() => this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-outlined-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-company-select disableAutoLoad label="default" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="pre-selected"
          .selected=${{ Id: 57, Name: 'Leavitt Group Enterprises' }}
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="disabled pre-selected"
          .selected=${{
            Id: 57,
            Name: 'Leavitt Group Enterprises',
        }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-company-select>
      </div>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
    }
};
__decorate([
    state()
], LeavittPersonCompanySelectPlayground.prototype, "apiService", null);
__decorate([
    query('leavitt-company-select[methods-demo]')
], LeavittPersonCompanySelectPlayground.prototype, "methodsSelect", null);
__decorate([
    queryAll('leavitt-company-select')
], LeavittPersonCompanySelectPlayground.prototype, "inputs", null);
LeavittPersonCompanySelectPlayground = __decorate([
    customElement('leavitt-company-select-playground')
], LeavittPersonCompanySelectPlayground);
export { LeavittPersonCompanySelectPlayground };
//# sourceMappingURL=leavitt-company-select-playground.js.map