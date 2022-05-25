import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-address-input-playground';

@customElement('titanium-address-input-demo')
export class TitaniumAddressInputDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Address Input" packageName="titanium-address-input" className="TitaniumAddressInputElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"
        ><titanium-address-input-playground></titanium-address-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `;
  }
}
