import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-single-action-card-playground';

@customElement('titanium-single-action-card-demo')
export class TitaniumSingleActionCardDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium single action card" packageName="titanium-card" className="TitaniumSingleActionCardElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-single-action-card/project.json"
        ><titanium-single-action-card-playground></titanium-single-action-card-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-single-action-card"></api-docs>
    `;
  }
}
