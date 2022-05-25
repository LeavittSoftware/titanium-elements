import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-chip-multi-select-playground';

@customElement('titanium-chip-multi-select-demo')
export class TitaniumChipMultiSelectDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium chip multi-select" packageName="titanium-chip-multi-select" className="TitaniumChipMultiSelectElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip-multi-select/project.json"
        ><titanium-chip-multi-select-playground></titanium-chip-multi-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `;
  }
}
