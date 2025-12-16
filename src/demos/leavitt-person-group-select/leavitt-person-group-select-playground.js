import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
/* playground-fold-end */
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
import UserManager from '../../services/user-manager-service';
/* playground-fold */
let LeavittPersonGroupSelectPlayground = class LeavittPersonGroupSelectPlayground extends LitElement {
    #apiService_accessor_storage;
    get apiService() { return this.#apiService_accessor_storage; }
    set apiService(value) { this.#apiService_accessor_storage = value; }
    #inputs_accessor_storage;
    get inputs() { return this.#inputs_accessor_storage; }
    set inputs(value) { this.#inputs_accessor_storage = value; }
    #methodsSelect_accessor_storage;
    get methodsSelect() { return this.#methodsSelect_accessor_storage; }
    set methodsSelect(value) { this.#methodsSelect_accessor_storage = value; }
    constructor() {
        super();
        this.apiService = new ApiService(UserManager);
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
      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-person-group-select label="default" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select
          label="pre-selected"
          .selected=${{
            Name: 'LGE Programmer Basic Access',
            Id: 22,
            type: 'PeopleGroup',
        }}
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select
          label="disabled pre-selected"
          .selected=${{
            Name: 'Aaron Drabeck',
            ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            Id: 11056,
            type: 'Person',
        }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-group-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div>
        <leavitt-person-group-select methods-demo required .apiService=${this.apiService}></leavitt-person-group-select>
        <section buttons>
          <md-text-button @click=${() => this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>
    `;
    }
};
__decorate([
    state()
], LeavittPersonGroupSelectPlayground.prototype, "apiService", null);
__decorate([
    queryAll('leavitt-person-group-select)')
], LeavittPersonGroupSelectPlayground.prototype, "inputs", null);
__decorate([
    query('leavitt-person-group-select[methods-demo]')
], LeavittPersonGroupSelectPlayground.prototype, "methodsSelect", null);
LeavittPersonGroupSelectPlayground = __decorate([
    customElement('leavitt-person-group-select-playground')
], LeavittPersonGroupSelectPlayground);
export { LeavittPersonGroupSelectPlayground };
//# sourceMappingURL=leavitt-person-group-select-playground.js.map