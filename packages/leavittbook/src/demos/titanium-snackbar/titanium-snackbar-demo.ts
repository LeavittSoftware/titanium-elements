import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-snackbar-playground';

@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Snackbar" className="TitaniumSnackbar"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-snackbar/project.json"
        ><titanium-snackbar-playground></titanium-snackbar-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-snackbar"></api-docs>
    `;
  }
}
