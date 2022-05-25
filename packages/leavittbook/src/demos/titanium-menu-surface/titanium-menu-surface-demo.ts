import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-menu-surface-playground';

@customElement('titanium-menu-surface-demo')
export class TitaniumMenuSurfaceDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header
        name="Titanium menu surface"
        deprecatedReason="use mwc-menu"
        packageName="titanium-popup-surface"
        className="TitaniumMenuSurfaceElement"
      ></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-menu-surface/project.json"
        ><titanium-menu-surface-playground></titanium-menu-surface-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-menu-surface"></api-docs>
    `;
  }
}
