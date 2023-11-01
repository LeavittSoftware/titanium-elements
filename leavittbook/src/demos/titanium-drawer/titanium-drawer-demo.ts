import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-drawer-playground';

@customElement('titanium-drawer-demo')
export class TitaniumDrawerDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Drawer" packageName="titanium-drawer" className="TitaniumDrawer"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-drawer/project.json"
        ><titanium-drawer-playground></titanium-drawer-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-drawer"></api-docs>
    `;
  }
}
