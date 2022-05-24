import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-card-demo')
export class TitaniumChipDemoElement extends LitElement {
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
      <story-header name="Titanium card" packageName="titanium-card" className="TitaniumCardElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-card/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-card"></api-docs>
    `;
  }
}
