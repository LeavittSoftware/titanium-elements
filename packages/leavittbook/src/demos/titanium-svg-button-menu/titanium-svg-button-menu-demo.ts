import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-svg-button-menu-demo')
export class TitaniumSVGButtonMenuDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 550px;
      }
    `,
  ];

  render() {
    return html`
      <story-header
        name="Titanium SVG button"
        deprecatedReason="use mwc-menu"
        packageName="titanium-svg-button"
        className="TitaniumSvgButtonMenuElement"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-svg-button-menu/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-svg-button-menu"></api-docs>
    `;
  }
}
