import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-page-control-demo')
export class TitaniumPageControlDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 500px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Page Control" packageName="titanium-data-table" className="TitaniumPageControlElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-page-control/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `;
  }
}
