import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-color-input-playground';

@customElement('titanium-color-input-demo')
export class TitaniumColorInputDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium color input" packageName="titanium-color-input" className="TitaniumColorInputElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-color-input/project.json"
        ><titanium-color-input-playground></titanium-color-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-color-input"></api-docs>
    `;
  }
}
