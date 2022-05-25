import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-offline-notice-playground';

@customElement('titanium-offline-notice-demo')
export class TitaniumOfflineNoticeDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium offline notice" packageName="titanium-offline-notice" className="TitaniumOfflineNoticeElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-offline-notice/project.json"
        ><titanium-offline-notice-playground></titanium-offline-notice-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-offline-notice"></api-docs>
    `;
  }
}
