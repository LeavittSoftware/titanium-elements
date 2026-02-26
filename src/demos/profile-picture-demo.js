import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import StoryStyles from '../styles/story-styles';
let ProfilePictureDemo = class ProfilePictureDemo extends LitElement {
    static { this.styles = [
        StoryStyles,
        css `
      [custom]::part(test-user-indicator) {
        background: var(--md-sys-color-error);
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Profile picture" level1Href="/profile-picture" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Profile Picture" className="ProfilePicture"></story-header>

            <div>
              <h1>Default</h1>
              <p>Default profile picture styles</p>
              <profile-picture></profile-picture>
            </div>

            <div>
              <h1>Square</h1>
              <p>Square profile picture styles</p>
              <profile-picture shape="square"></profile-picture>
            </div>

            <div>
              <h1>Color ring</h1>
              <p>Color ring variant</p>
              <item-row>
                <profile-picture shape="square" show-ring></profile-picture>
                <profile-picture show-ring></profile-picture>
                <profile-picture profile-picture-link-person-id="11056" show-ring style="--profile-picture-ring-color: purple"></profile-picture>
              </item-row>
            </div>

            <div>
              <h1>Sizes</h1>
              <p>Sizes include 32, 64, 128, 256, and 512px</p>
              <item-row>
                <profile-picture profile-picture-link-person-id="11056" size="24"></profile-picture>
                <profile-picture size="32"></profile-picture>
                <profile-picture profile-picture-link-person-id="11056" size="64"></profile-picture>
                <profile-picture size="128"></profile-picture>
                <profile-picture profile-picture-link-person-id="11056" size="256"></profile-picture>
              </item-row>
            </div>

            <div>
              <h1>Responsive</h1>
              <p>Size can be adjusted further using responsive units</p>
              <item-row>
                <profile-picture size="256" useIntrisicImageSize style="width: 20vh;"></profile-picture>
                <profile-picture profile-picture-link-person-id="11056" size="256" useIntrisicImageSize style="width: 20vw;"></profile-picture>
              </item-row>
            </div>

            <div>
              <h1>Filename fallback</h1>
              <p>Profile picture with fallback when filename doesn't exist</p>
              <profile-picture fileName="filenamedoesntexist.webp"></profile-picture>
            </div>

            <div>
              <h1>Test user indicator</h1>
              <p>Profile pictures with test user indicators</p>
              <item-row>
                <profile-picture show-test-user-indicator size="24"></profile-picture>
                <profile-picture show-test-user-indicator size="32"></profile-picture>
                <profile-picture show-test-user-indicator size="64"></profile-picture>
                <profile-picture show-test-user-indicator size="128"></profile-picture>
                <profile-picture custom show-test-user-indicator size="256"></profile-picture>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
ProfilePictureDemo = __decorate([
    customElement('profile-picture-demo')
], ProfilePictureDemo);
export { ProfilePictureDemo };
//# sourceMappingURL=profile-picture-demo.js.map