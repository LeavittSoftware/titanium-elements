import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-input-validator-playground';

@customElement('titanium-input-validator-demo')
export class TitaniumInputValidatorDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Input Validator" className="TitaniumInputValidator"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-input-validator/project.json"
        ><titanium-input-validator-playground></titanium-input-validator-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-input-validator"></api-docs>
    `;
  }
}
