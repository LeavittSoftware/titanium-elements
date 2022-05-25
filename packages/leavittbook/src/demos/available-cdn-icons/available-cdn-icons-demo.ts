import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './available-cdn-icons-playground';

@customElement('available-cdn-icons-demo')
export class AvailableCdnIconsDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Available CDN icons"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/available-cdn-icons/project.json"
        ><available-cdn-icons-playground></available-cdn-icons-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="available-cdn-icons"></api-docs>
    `;
  }
}
