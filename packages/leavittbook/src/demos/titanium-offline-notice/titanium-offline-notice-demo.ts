import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-offline-notice-demo')
export class TitaniumOfflineNoticeDemoElement extends LitElement {
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
      <story-header name="Titanium offline notice" packageName="titanium-offline-notice" className="TitaniumOfflineNoticeElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-offline-notice/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-offline-notice"></api-docs>
    `;
  }
}
