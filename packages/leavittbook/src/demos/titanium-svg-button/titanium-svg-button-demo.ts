import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-svg-button-demo')
export class TitaniumSVGButtonDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 600px;
      }
    `,
  ];

  render() {
    return html`
      <story-header
        name="Titanium SVG button"
        deprecatedReason="use mwc-icon-button"
        packageName="titanium-svg-button"
        className="TitaniumSvgButton"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-svg-button/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-svg-button"></api-docs>
    `;
  }
}
