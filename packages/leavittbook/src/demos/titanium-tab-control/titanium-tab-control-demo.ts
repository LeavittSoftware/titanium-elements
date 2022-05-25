import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-tab-control-playground';

@customElement('titanium-tab-control-demo')
export class TitaniumTabControlDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium tab control" packageName="titanium-tab-control" className="TitaniumTabControlElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-tab-control/project.json"
        ><titanium-tab-control-playground></titanium-tab-control-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-tab-control"></api-docs>
    `;
  }
}
