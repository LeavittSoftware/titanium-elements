import { __decorate } from "tslib";
import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import StoryStyles from '../../styles/story-styles';
import '@api-viewer/docs';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './profile-picture-menu-playground';
import { GetAuthZeroLgUserManager } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-user-manager';
let ProfilePictureMenuDemo = class ProfilePictureMenuDemo extends LitElement {
    #refreshToken_accessor_storage = null;
    get refreshToken() { return this.#refreshToken_accessor_storage; }
    set refreshToken(value) { this.#refreshToken_accessor_storage = value; }
    static { this.styles = [StoryStyles, css ``]; }
    async firstUpdated() {
        const userManager = GetAuthZeroLgUserManager();
        await userManager?.authenticate();
        this.refreshToken = userManager?.refreshToken ?? null;
    }
    render() {
        return html `
      <story-header name="Profile picture menu" className="ProfilePictureMenu"></story-header>
      ${this.refreshToken
            ? html ` <smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/profile-picture-menu/project.json"
            ><profile-picture-menu-playground></profile-picture-menu-playground>
          </smart-demo>`
            : nothing}
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `;
    }
};
__decorate([
    state()
], ProfilePictureMenuDemo.prototype, "refreshToken", null);
ProfilePictureMenuDemo = __decorate([
    customElement('profile-picture-menu-demo')
], ProfilePictureMenuDemo);
export { ProfilePictureMenuDemo };
//# sourceMappingURL=profile-picture-menu-demo.js.map