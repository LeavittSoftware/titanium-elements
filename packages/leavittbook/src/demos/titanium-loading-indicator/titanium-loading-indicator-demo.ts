import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-loading-indicator-demo')
export class TitaniumLoadingIndicatorDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 400px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium loading indicator" packageName="titanium-loading-indicator" className="TitaniumLoadingIndicatorButton"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-loading-indicator/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-loading-indicator"></api-docs>
    `;
  }
}
