import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-data-table-header-playground';

@customElement('titanium-data-table-header-demo')
export class TitaniumDataTableHeaderDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium data table header" className="TitaniumDataTableHeader"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-header/project.json"
        ><titanium-data-table-header-playground></titanium-data-table-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-header"></api-docs>
    `;
  }
}
