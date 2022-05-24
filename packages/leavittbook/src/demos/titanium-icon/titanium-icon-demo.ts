import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-icon-demo')
export class TitaniumIconDemoElement extends LitElement {
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
      <story-header name="Titanium icon" packageName="titanium-icon" className="TitaniumIconElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-icon/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-icon"></api-docs>
    `;
  }
}
