import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-image-input-playground';

@customElement('titanium-image-input-demo')
export class TitaniumImageInputDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Image Input" packageName="titanium-image-input" className="TitaniumImageInputElement"></story-header>
      <smart-demo html-file=${'index.html'} line-numbers resizable project-src="../src/demos/titanium-image-input/project.json"
        ><titanium-image-input-playground></titanium-image-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-image-input"></api-docs>
    `;
  }
}
