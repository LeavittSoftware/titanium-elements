import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-card-list-item-playground';

@customElement('titanium-card-list-item-demo')
export class TitaniumCardListItemDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Card List Item" packageName="titanium-card" className="TitaniumCardListItemElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-card-list-item/project.json"
        ><titanium-card-list-item-playground></titanium-card-list-item-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-card-list-item"></api-docs>
    `;
  }
}
