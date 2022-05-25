import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-shadow-text-playground';

@customElement('titanium-shadow-text-demo')
export class TitaniumShadowTextDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Shadow Text" packageName="titanium-shadow-text" className="TitaniumShadowTextElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-shadow-text/project.json"
        ><titanium-shadow-text-playground></titanium-shadow-text-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-shadow-text"></api-docs>
    `;
  }
}
