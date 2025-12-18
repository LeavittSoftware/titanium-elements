import '../shared/story-header';

import '@api-viewer/docs';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import StoryStyles from '../styles/story-styles';

@customElement('profile-picture-demo')
export class ProfilePictureDemo extends LitElement {
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
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      [custom]::part(test-user-indicator) {
        background: var(--md-sys-color-error);
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Profile Picture" className="ProfilePicture"></story-header>
      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture></profile-picture>
      </div>

      <h1>Square</h1>
      <p>Square profile picture styles</p>
      <div>
        <profile-picture shape="square"></profile-picture>
      </div>

      <h1>Color ring</h1>
      <p>Color ring variant</p>
      <div>
        <profile-picture shape="square" show-ring></profile-picture>
        <profile-picture show-ring></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" show-ring style="--profile-picture-ring-color: purple"></profile-picture>
      </div>

      <h1>Sizes</h1>
      <p>Sizes include 32, 64, 128, 256, and 512px</p>
      <div>
        <profile-picture profile-picture-link-person-id="11056" size="24"></profile-picture>
        <profile-picture size="32"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="64"></profile-picture>
        <profile-picture size="128"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="256"></profile-picture>
      </div>

      <h1>Responsive</h1>
      <p>Size can be adjusted further using responsive units</p>
      <div>
        <profile-picture size="256" useIntrisicImageSize style="width: 20vh;"></profile-picture>
        <profile-picture profile-picture-link-person-id="11056" size="256" useIntrisicImageSize style="width: 20vw;"></profile-picture>
      </div>

      <h1>Filename fallback</h1>
      <p>Profile picture with fallback when filename doesn't exist</p>
      <div>
        <profile-picture fileName="filenamedoesntexist.webp"></profile-picture>
      </div>

      <h1>Test user indicator</h1>
      <p>Profile pictures with test user indicators</p>
      <div>
        <profile-picture show-test-user-indicator size="24"></profile-picture>
        <profile-picture show-test-user-indicator size="32"></profile-picture>
        <profile-picture show-test-user-indicator size="64"></profile-picture>
        <profile-picture show-test-user-indicator size="128"></profile-picture>
        <profile-picture custom show-test-user-indicator size="256"></profile-picture>
      </div>

      <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
    `;
  }
}
