import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-data-table-header-demo')
export class TitaniumDataTableHeaderDemoElement extends LitElement {
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
      <story-header name="Titanium data table header" packageName="titanium-data-table" className="TitaniumDataTableHeaderElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-data-table-header/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
  }
}
