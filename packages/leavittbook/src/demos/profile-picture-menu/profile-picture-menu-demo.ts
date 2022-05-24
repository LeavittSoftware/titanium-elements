import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('profile-picture-menu-demo')
export class ProfilePictureMenuDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 1100px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Profile picture menu" packageName="profile-picture" className="ProfilePictureMenuElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/profile-picture-menu/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="profile-picture-menu"></api-docs>
    `;
  }
}
