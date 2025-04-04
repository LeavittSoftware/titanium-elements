import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-select-playground';
let LeavittPersonSelectDemo = class LeavittPersonSelectDemo extends LitElement {
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
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      ${this.refreshToken
            ? html `<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-select/project.json"
            ><leavitt-person-select-playground></leavitt-person-select-playground>
          </smart-demo>`
            : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `;
    }
};
__decorate([
    state()
], LeavittPersonSelectDemo.prototype, "refreshToken", null);
LeavittPersonSelectDemo = __decorate([
    customElement('leavitt-person-select-demo')
], LeavittPersonSelectDemo);
export { LeavittPersonSelectDemo };
//# sourceMappingURL=leavitt-person-select-demo.js.map