import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-card-list-item-demo')
export class TitaniumCardListItemDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 600px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Card List Item" packageName="titanium-card" className="TitaniumCardListItemElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-card-list-item/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-card-list-item"></api-docs>
    `;
  }
}
