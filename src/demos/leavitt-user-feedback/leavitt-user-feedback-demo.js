import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';
import StoryStyles from '../../styles/story-styles';
import '@api-viewer/docs';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-user-feedback-playground';
let LeavittUserFeedbackDemo = class LeavittUserFeedbackDemo extends LitElement {
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
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      ${this.refreshToken
            ? html `<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-user-feedback/project.json"
          >
            <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
          </smart-demo>`
            : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `;
    }
};
__decorate([
    state()
], LeavittUserFeedbackDemo.prototype, "refreshToken", null);
LeavittUserFeedbackDemo = __decorate([
    customElement('leavitt-user-feedback-demo')
], LeavittUserFeedbackDemo);
export { LeavittUserFeedbackDemo };
//# sourceMappingURL=leavitt-user-feedback-demo.js.map