import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-data-table-item-playground';

@customElement('titanium-data-table-item-demo')
export class TitaniumDataTableItemDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium data table item" className="TitaniumDataTableItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-item/project.json"
        ><titanium-data-table-item-playground></titanium-data-table-item-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `;
  }
}
