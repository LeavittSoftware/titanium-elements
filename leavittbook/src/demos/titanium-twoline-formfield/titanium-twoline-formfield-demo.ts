import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-twoline-formfield-playground';

@customElement('titanium-twoline-formfield-demo')
export class TitaniumTwoLineFormFieldDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium twoline formfield" packageName="titanium-twoline-formfield" className="TitaniumTwoLineFormFieldElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-twoline-formfield/project.json"
        ><titanium-twoline-formfield-playground></titanium-twoline-formfield-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-twoline-formfield"></api-docs>
    `;
  }
}
