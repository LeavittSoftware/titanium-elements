import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-error-page-demo')
export class TitaniumErrorDemoElement extends LitElement {
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
      <story-header name="Titanium error page" packageName="titanium-error-page" tagName="titanium-error-page" klass="TitaniumErrorPageElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-error-page/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-error-page"></api-docs>
    `;
  }
}
