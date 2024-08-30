import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-stepper-playground';

import '@api-viewer/docs';

@customElement('titanium-stepper-demo')
export class TitaniumStepperDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Stepper" className="TitaniumStepper"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-stepper/project.json"
        ><titanium-stepper-playground></titanium-stepper-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-stepper"></api-docs>
    `;
  }
}
