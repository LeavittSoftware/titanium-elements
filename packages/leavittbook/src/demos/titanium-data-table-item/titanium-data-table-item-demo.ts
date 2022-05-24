import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-data-table-item-demo')
export class TitaniumDataTableItemDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 800px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium data table item" packageName="titanium-data-table" className="TitaniumDataTableItemElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-data-table-item/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-item"></api-docs>
    `;
  }
}
