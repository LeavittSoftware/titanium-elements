import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('confirm-dialog-demo')
export class ConfirmDialogDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 600px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Confirm Dialog" packageName="titanium-dialog" tagName="confirm-dialog" klass="ConfirmDialogElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/confirm-dialog/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="confirm-dialog"></api-docs>
    `;
  }
}
