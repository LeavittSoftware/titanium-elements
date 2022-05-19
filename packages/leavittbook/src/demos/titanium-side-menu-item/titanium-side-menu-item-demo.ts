import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-side-menu-item-demo')
export class TitaniumSideMenuItemDemoElement extends LitElement {
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
      <story-header name="Titanium Side Menu Item" packageName="titanium-side-menu" className="TitaniumSideMenuItemElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-side-menu-item/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-side-menu-item"></api-docs>
    `;
  }
}
