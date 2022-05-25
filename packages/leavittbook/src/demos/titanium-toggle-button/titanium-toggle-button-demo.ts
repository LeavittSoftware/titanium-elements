import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-toggle-button-playground';

@customElement('titanium-toggle-button-demo')
export class TitaniumToggleButtonDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium toggle button"
        deprecatedReason="Use titanium-chip-multi-select"
        packageName="titanium-button"
        className="TitaniumToggleButtonElement"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-toggle-button/project.json"
        ><titanium-toggle-button-playground></titanium-toggle-button-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-toggle-button"></api-docs>
    `;
  }
}
