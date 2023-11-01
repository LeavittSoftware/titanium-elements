import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-access-denied-page-playground';

@customElement('titanium-access-denied-page-demo')
export class TitaniumAccessDeniedDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium access denied page" packageName="titanium-access-denied-page" className="TitaniumAccessDeniedPageElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-access-denied-page/project.json"
        ><titanium-access-denied-page-playground></titanium-access-denied-page-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-access-denied-page"></api-docs>
    `;
  }
}
