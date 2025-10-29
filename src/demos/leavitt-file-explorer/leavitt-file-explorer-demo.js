import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';
import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-file-explorer-playground';
let LeavittUserFileExplorerDemo = class LeavittUserFileExplorerDemo extends LitElement {
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
      <story-header name="Leavitt file explorer" className="LeavittUserFileExplorer"></story-header>
      ${this.refreshToken
            ? html `<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-file-explorer/project.json"
          >
            <leavitt-file-explorer-playground></leavitt-file-explorer-playground>
          </smart-demo>`
            : nothing}
    `;
    }
};
__decorate([
    state()
], LeavittUserFileExplorerDemo.prototype, "refreshToken", null);
LeavittUserFileExplorerDemo = __decorate([
    customElement('leavitt-file-explorer-demo')
], LeavittUserFileExplorerDemo);
export { LeavittUserFileExplorerDemo };
//# sourceMappingURL=leavitt-file-explorer-demo.js.map