import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-attachment-input-demo')
export class TitaniumAttachmentInputDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 1300px;
      }
    `,
  ];

  render() {
    return html`
      <story-header
        name="Titanium Attachment Input"
        packageName="titanium-attachment-input"
        tagName="titanium-attachment-input"
        klass="TitaniumAttachmentInputElement"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-attachment-input/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-attachment-input"></api-docs>
    `;
  }
}
