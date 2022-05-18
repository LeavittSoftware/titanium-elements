import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-chip-demo')
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
      <story-header name="Titanium chip" packageName="titanium-chip" className="TitaniumChipElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-chip/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
  }
}
