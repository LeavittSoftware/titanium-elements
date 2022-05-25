import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-single-select-playground';

@customElement('titanium-single-select-demo')
export class TitaniumSingleSelectDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium Search Input"
        packageName="titanium-single-select"
        className="TitaniumSingleSelectElement"
        deprecatedReason="No longer supported"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-single-select/project.json"
        ><titanium-single-select-playground></titanium-single-select-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-single-select"></api-docs>
    `;
  }
}
