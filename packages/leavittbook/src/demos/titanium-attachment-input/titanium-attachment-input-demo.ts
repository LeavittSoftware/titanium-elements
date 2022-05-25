import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-attachment-input-playground';

@customElement('titanium-attachment-input-demo')
export class TitaniumAttachmentInputDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Attachment Input" packageName="titanium-attachment-input" className="TitaniumAttachmentInputElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-attachment-input/project.json"
        ><titanium-attachment-input-playground></titanium-attachment-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-attachment-input"></api-docs>
    `;
  }
}
