import '../shared/story-header';

import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';

@customElement('profile-picture-menu-demo')
export class ProfilePictureMenuDemo extends LitElement {
  static styles = [
    StoryStyles,
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
        align-items: flex-end;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Profile Picture Menu" className="ProfilePictureMenu"></story-header>
      <h1>Default</h1>
      <p>Profile picture menu with user information</p>
      <div>
        <profile-picture-menu
          .userManager=${UserManager}
          name="Testboii Testeri"
          email="testboi-tester@leavitt.com"
          company="Kasey Quality Assurance Inc."
        ></profile-picture-menu>
      </div>

      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `;
  }
}
