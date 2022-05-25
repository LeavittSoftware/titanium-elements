import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-button-playground';

@customElement('titanium-button-demo')
export class TitaniumButtonDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium button" deprecatedReason="use mwc-button" packageName="titanium-button" className="TitaniumButtonElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-button/project.json"
        ><titanium-button-playground></titanium-button-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-button"></api-docs>
    `;
  }
}
