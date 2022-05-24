import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-snackbar-demo')
export class TitaniumSnackbarDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 700px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Snackbar" packageName="titanium-snackbar" className="TitaniumSnackbarElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-snackbar/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-snackbar"></api-docs>
    `;
  }
}
