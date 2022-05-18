import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-access-denied-page-demo')
export class TitaniumAccessDeniedDemoElement extends LitElement {
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
      <story-header name="Titanium access denied page" packageName="titanium-access-denied-page" className="TitaniumAccessDeniedPageElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-access-denied-page/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-access-denied-page"></api-docs>
    `;
  }
}
