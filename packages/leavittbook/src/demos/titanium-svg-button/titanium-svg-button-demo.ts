import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-svg-button-playground';

@customElement('titanium-svg-button-demo')
export class TitaniumSVGButtonDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium SVG button"
        deprecatedReason="use mwc-icon-button"
        packageName="titanium-svg-button"
        className="TitaniumSvgButton"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-svg-button/project.json"
        ><titanium-svg-button-playground></titanium-svg-button-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-svg-button"></api-docs>
    `;
  }
}
