import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-styles-demo')
export class TitaniumStylesDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 500px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium styles" packageName="titanium-styles"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-styles/project.json"> </playground-ide>
    `;
  }
}
