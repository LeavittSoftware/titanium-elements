import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-svg-button-menu-playground';

@customElement('titanium-svg-button-menu-demo')
export class TitaniumSVGButtonMenuDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium SVG button"
        deprecatedReason="use mwc-menu"
        packageName="titanium-svg-button"
        className="TitaniumSvgButtonMenuElement"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-svg-button-menu/project.json"
        ><titanium-svg-button-menu-playground></titanium-svg-button-menu-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-svg-button-menu"></api-docs>
    `;
  }
}
