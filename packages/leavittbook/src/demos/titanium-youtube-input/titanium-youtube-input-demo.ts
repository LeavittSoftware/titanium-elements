import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-youtube-input-demo')
export class TitaniumYoutubeInputDemoElement extends LitElement {
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
      <story-header name="Titanium Youtube Input" packageName="titanium-youtube-input" className="TitaniumYoutubeInputElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-youtube-input/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
    `;
  }
}
