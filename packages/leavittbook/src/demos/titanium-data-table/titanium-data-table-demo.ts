import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-data-table-demo')
export class TitaniumDataTableDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 2300px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium data table" packageName="titanium-data-table" className="TitaniumDataTableElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-data-table/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `;
  }
}
