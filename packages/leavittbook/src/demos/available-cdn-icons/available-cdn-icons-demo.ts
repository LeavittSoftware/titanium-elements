import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('available-cdn-icons-demo')
export class AvailableCdnIconsDemoElement extends LitElement {
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
      <story-header name="Available CDN icons"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/available-cdn-icons/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="available-cdn-icons"></api-docs>
    `;
  }
}
