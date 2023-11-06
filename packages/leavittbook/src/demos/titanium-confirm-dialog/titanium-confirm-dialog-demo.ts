import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';
import '../../shared/smart-demo';
import './titanium-confirm-dialog-playground';

import '@api-viewer/docs';

@customElement('titanium-confirm-dialog-demo')
export class TitaniumConfirmDialogDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium confirm dialog" packageName="titanium-confirm-dialog" className="TitaniumConfirmDialog"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-confirm-dialog/project.json"
        ><titanium-confirm-dialog-playground></titanium-confirm-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-confirm-dialog"></api-docs>
    `;
  }
}
