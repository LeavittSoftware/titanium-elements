import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-toolbar-demo')
export class TitaniumToolbarDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 400px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium toolbar" packageName="titanium-toolbar" tagName="titanium-toolbar" klass="TitaniumToolbarElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-toolbar/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-toolbar"></api-docs>
    `;
  }
}
