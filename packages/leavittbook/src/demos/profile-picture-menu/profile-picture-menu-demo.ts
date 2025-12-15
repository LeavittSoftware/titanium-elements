import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';

import '@api-viewer/docs';

import '../../shared/story-header';
import '../../shared/smart-demo';
import './profile-picture-menu-playground';
import UserManager from '../../services/user-manager-service';

@customElement('profile-picture-menu-demo')
export class ProfilePictureMenuDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Profile picture menu" className="ProfilePictureMenu"></story-header>
      <profile-picture-menu-playground .userManager=${UserManager}></profile-picture-menu-playground>
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `;
  }
}
