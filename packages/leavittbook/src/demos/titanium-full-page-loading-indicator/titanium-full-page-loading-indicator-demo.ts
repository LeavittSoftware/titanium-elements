import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-full-page-loading-indicator-demo')
export class TitaniumFullPageLoadingIndicatorDemoElement extends LitElement {
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
      <story-header
        name="Titanium full page loading indicator"
        packageName="titanium-loading-indicator"
        className="TitaniumFullPageLoadingIndicatorElement"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-full-page-loading-indicator/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
    `;
  }
}
