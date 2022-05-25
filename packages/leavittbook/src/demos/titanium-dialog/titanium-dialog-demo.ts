import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-dialog-playground';

@customElement('titanium-dialog-demo')
export class TitaniumDialogDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Dialog" packageName="titanium-dialog" className="TitaniumDialogElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-dialog/project.json"
        ><titanium-dialog-playground></titanium-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-dialog"></api-docs>
    `;
  }
}
