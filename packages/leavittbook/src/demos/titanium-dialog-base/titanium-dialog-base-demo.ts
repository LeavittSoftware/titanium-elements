import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-dialog-base-playground';

@customElement('titanium-dialog-base-demo')
export class TitaniumDialogDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Dialog Base" packageName="titanium-dialog" className="TitaniumDialogBaseElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-dialog-base/project.json"
        ><titanium-dialog-base-playground></titanium-dialog-base-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-dialog-base"></api-docs>
    `;
  }
}
