import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-group-select-playground';
let LeavittPersonGroupSelectDemo = class LeavittPersonGroupSelectDemo extends LitElement {
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
      <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>
      ${this.refreshToken
            ? html `<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-group-select/project.json"
            ><leavitt-person-group-select-playground></leavitt-person-group-select-playground>
          </smart-demo>`
            : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
    `;
    }
};
__decorate([
    state()
], LeavittPersonGroupSelectDemo.prototype, "refreshToken", null);
LeavittPersonGroupSelectDemo = __decorate([
    customElement('leavitt-person-group-select-demo')
], LeavittPersonGroupSelectDemo);
export { LeavittPersonGroupSelectDemo };
//# sourceMappingURL=leavitt-person-group-select-demo.js.map