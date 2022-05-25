import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './confirm-dialog-playground';

@customElement('confirm-dialog-demo')
export class ConfirmDialogDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Confirm Dialog" packageName="titanium-dialog" className="ConfirmDialogElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/confirm-dialog/project.json">
        <confirm-dialog-playground></confirm-dialog-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="confirm-dialog"></api-docs>
    `;
  }
}
