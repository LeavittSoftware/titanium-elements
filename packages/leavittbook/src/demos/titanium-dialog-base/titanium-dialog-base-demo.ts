import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-dialog-base-demo')
export class TitaniumDialogDemoElement extends LitElement {
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
      <story-header name="Titanium Dialog Base" packageName="titanium-dialog" className="TitaniumDialogBaseElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-dialog-base/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-dialog-base"></api-docs>
    `;
  }
}