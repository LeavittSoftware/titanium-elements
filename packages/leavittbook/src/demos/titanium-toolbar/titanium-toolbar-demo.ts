import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-toolbar-playground';

@customElement('titanium-toolbar-demo')
export class TitaniumToolbarDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium toolbar" packageName="titanium-toolbar" tagName="titanium-toolbar" className="TitaniumToolbarElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-toolbar/project.json"
        ><titanium-toolbar-playground></titanium-toolbar-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-toolbar"></api-docs>
    `;
  }
}
