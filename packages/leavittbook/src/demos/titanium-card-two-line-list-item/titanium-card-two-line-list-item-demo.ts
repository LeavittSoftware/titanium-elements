import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-card-two-line-list-item-demo')
export class TitaniumCardTwoLineListDemoElement extends LitElement {
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
      <story-header name="Titanium card two line list item" packageName="titanium-card" className="TitaniumCardTwoLineListItemElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-card-two-line-list-item/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-card-two-line-list-item"></api-docs>
    `;
  }
}
