import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './profile-picture-playground';

@customElement('profile-picture-demo')
export class ProfilePictureDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Profile picture" className="ProfilePicture"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/profile-picture/project.json"
        ><profile-picture-playground></profile-picture-playground>
      </smart-demo>

      <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
    `;
  }
}
