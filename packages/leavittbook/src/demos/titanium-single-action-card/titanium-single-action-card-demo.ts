import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-single-action-card-demo')
export class TitaniumSingleActionCardDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 400px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium single action card" packageName="titanium-card" className="TitaniumSingleActionCardElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-single-action-card/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-single-action-card"></api-docs>
    `;
  }
}
