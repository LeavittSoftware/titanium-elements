import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-smart-attachment-input-playground';

@customElement('titanium-smart-attachment-input-demo')
export class TitaniumSmartAttachmentInputDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Smart Attachment Input" className="TitaniumSmartAttachmentInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-smart-attachment-input/project.json"
        ><titanium-smart-attachment-input-playground></titanium-smart-attachment-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-smart-attachment-input"></api-docs>
    `;
  }
}
