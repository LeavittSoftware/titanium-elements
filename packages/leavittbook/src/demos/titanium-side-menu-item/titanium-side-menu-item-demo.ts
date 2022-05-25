import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-side-menu-item-playground';

@customElement('titanium-side-menu-item-demo')
export class TitaniumSideMenuItemDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Side Menu Item" packageName="titanium-side-menu" className="TitaniumSideMenuItemElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-side-menu-item/project.json"
        ><titanium-side-menu-item-playground></titanium-side-menu-item-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-side-menu-item"></api-docs>
    `;
  }
}
