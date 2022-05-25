import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './profile-picture-menu-playground';

@customElement('profile-picture-menu-demo')
export class ProfilePictureMenuDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Profile picture menu" packageName="profile-picture" className="ProfilePictureMenuElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/profile-picture-menu/project.json"
        ><profile-picture-menu-playground></profile-picture-menu-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `;
  }
}
