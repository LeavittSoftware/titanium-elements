import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-toggle-button-demo')
export class TitaniumToggleButtonDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 900px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium toggle button" packageName="titanium-button" className="TitaniumToggleButtonElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-toggle-button/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-toggle-button"></api-docs>
    `;
  }
}
