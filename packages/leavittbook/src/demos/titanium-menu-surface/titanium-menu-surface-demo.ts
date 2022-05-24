import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-menu-surface-demo')
export class TitaniumMenuSurfaceDemoElement extends LitElement {
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
        name="Titanium menu surface"
        deprecatedReason="use mwc-menu"
        packageName="titanium-popup-surface"
        className="TitaniumMenuSurfaceElement"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-menu-surface/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-menu-surface"></api-docs>
    `;
  }
}
