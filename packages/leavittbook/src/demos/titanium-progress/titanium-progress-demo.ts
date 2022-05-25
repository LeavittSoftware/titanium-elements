import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-progress-playground';

@customElement('titanium-progress-demo')
export class TitaniumProgressDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium progress"
        deprecatedReason="use mwc-linear-progress"
        packageName="titanium-progress"
        className="TitaniumProgressElement"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-progress/project.json"
        ><titanium-progress-playground></titanium-progress-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-progress"></api-docs>
    `;
  }
}
