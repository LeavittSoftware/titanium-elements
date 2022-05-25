import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-chip-playground';

@customElement('titanium-chip-demo')
export class TitaniumChipDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium chip" packageName="titanium-chip" className="TitaniumChipElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip/project.json"
        ><titanium-chip-playground></titanium-chip-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
  }
}
