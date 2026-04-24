import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';
let LeavittPersonGroupSelectDemo = class LeavittPersonGroupSelectDemo extends LitElement {
    #apiService_accessor_storage;
    get apiService() { return this.#apiService_accessor_storage; }
    set apiService(value) { this.#apiService_accessor_storage = value; }
    #methodsSelect_accessor_storage;
    get methodsSelect() { return this.#methodsSelect_accessor_storage; }
    set methodsSelect(value) { this.#methodsSelect_accessor_storage = value; }
    constructor() {
        super();
        this.apiService = new ApiService(UserManager);
        this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
        this.apiService.addHeader('X-LGAppName', 'Testing');
    }
    static { this.styles = [StoryStyles]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person/group select" level1Href="/leavitt-person-group-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>

            <div>
              <h1>Default</h1>
              <item-row>
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
                <leavitt-person-group-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${this.apiService}
                ></leavitt-person-group-select>
              </item-row>
            </div>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-group-select methods-demo required .apiService=${this.apiService}></leavitt-person-group-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], LeavittPersonGroupSelectDemo.prototype, "apiService", null);
__decorate([
    query('leavitt-person-group-select[methods-demo]')
], LeavittPersonGroupSelectDemo.prototype, "methodsSelect", null);
LeavittPersonGroupSelectDemo = __decorate([
    customElement('leavitt-person-group-select-demo')
], LeavittPersonGroupSelectDemo);
export { LeavittPersonGroupSelectDemo };
//# sourceMappingURL=leavitt-person-group-select-demo.js.map