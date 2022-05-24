import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-image-input-demo')
export class TitaniumImageInputDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 800px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Image Input" packageName="titanium-image-input" className="TitaniumImageInputElement"></story-header>
      <playground-ide html-file=${'index.html'} line-numbers resizable project-src="../src/demos/titanium-image-input/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-image-input"></api-docs>
    `;
  }
}
