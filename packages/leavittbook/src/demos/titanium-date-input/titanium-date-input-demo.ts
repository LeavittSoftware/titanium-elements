import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-date-input-playground';

@customElement('titanium-date-input-demo')
export class TitaniumDateInputItemDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Date Input" className="TitaniumDateInput"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-input/project.json"
        ><titanium-date-input-playground></titanium-date-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `;
  }
}
