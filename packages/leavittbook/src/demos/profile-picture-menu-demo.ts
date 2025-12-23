import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { heroStyles } from '../styles/hero-styles';

import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';

@customElement('profile-picture-menu-demo')
export class ProfilePictureMenuDemo extends LitElement {
  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      h1 {
        margin-bottom: 12px;
      }
    `,
  ];

  render() {
    return html`
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
}
