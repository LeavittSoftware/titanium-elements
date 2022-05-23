import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-shadow-text-demo')
export class TitaniumShadowTextDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 500px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Shadow Text" packageName="titanium-shadow-text" className="TitaniumShadowTextElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-shadow-text/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-shadow-text"></api-docs>
    `;
  }
}
