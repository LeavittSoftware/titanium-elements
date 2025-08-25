import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-confirmation-dialog-playground';

import '@api-viewer/docs';

@customElement('titanium-confirmation-dialog-demo')
export class TitaniumConfirmationDialogDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium confirmation dialog" className="TitaniumConfirmationDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirmation-dialog/project.json"
        ><titanium-confirmation-dialog-playground></titanium-confirmation-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirmation-dialog"></api-docs>
    `;
  }
}
