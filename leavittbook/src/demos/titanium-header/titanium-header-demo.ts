import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-header-playground';

@customElement('titanium-header-demo')
export class TitaniumHeaderItemDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Header" packageName="titanium-header" className="TitaniumHeaderItemElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-header/project.json"
        ><titanium-header-playground></titanium-header-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
    `;
  }
}
