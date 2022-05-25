import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-icon-playground';

@customElement('titanium-icon-demo')
export class TitaniumIconDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium icon" packageName="titanium-icon" className="TitaniumIconElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-icon/project.json"
        ><titanium-icon-playground></titanium-icon-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-icon"></api-docs>
    `;
  }
}
