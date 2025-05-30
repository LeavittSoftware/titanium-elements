import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-company-select-playground';
let LeavittPersonCompanySelectDemo = class LeavittPersonCompanySelectDemo extends LitElement {
    #refreshToken_accessor_storage = null;
    get refreshToken() { return this.#refreshToken_accessor_storage; }
    set refreshToken(value) { this.#refreshToken_accessor_storage = value; }
    static { this.styles = [StoryStyles, css ``]; }
    async firstUpdated() {
        const userManager = await GetUserManagerInstance();
        await userManager.authenticateAsync();
        this.refreshToken = window.localStorage.getItem('LG-AUTH-RT');
    }
    render() {
        return html `
      <story-header name="Leavitt Person/Company Select" className="LeavittPersonCompanySelect"></story-header>
      ${this.refreshToken
            ? html `<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-company-select/project.json"
          >
            <leavitt-person-company-select-playground></leavitt-person-company-select-playground>
          </smart-demo>`
            : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `;
    }
};
__decorate([
    state()
], LeavittPersonCompanySelectDemo.prototype, "refreshToken", null);
LeavittPersonCompanySelectDemo = __decorate([
    customElement('leavitt-person-company-select-demo')
], LeavittPersonCompanySelectDemo);
export { LeavittPersonCompanySelectDemo };
//# sourceMappingURL=leavitt-person-company-select-demo.js.map