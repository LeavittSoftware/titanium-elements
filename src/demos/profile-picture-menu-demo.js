import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';
let ProfilePictureMenuDemo = class ProfilePictureMenuDemo extends LitElement {
    static { this.styles = [StoryStyles]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Profile picture menu" level1Href="/profile-picture-menu" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Profile Picture Menu" className="ProfilePictureMenu"></story-header>

            <div>
              <h1>Default</h1>
              <profile-picture-menu
                .userManager=${UserManager}
                name="Testboii Testeri"
                email="testboi-tester@leavitt.com"
                company="Kasey Quality Assurance Inc."
              ></profile-picture-menu>
            </div>

            <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
ProfilePictureMenuDemo = __decorate([
    customElement('profile-picture-menu-demo')
], ProfilePictureMenuDemo);
export { ProfilePictureMenuDemo };
//# sourceMappingURL=profile-picture-menu-demo.js.map