import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-styles-playground';

@customElement('titanium-styles-demo')
export class TitaniumStylesDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium styles"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-styles/project.json"
        ><titanium-styles-playground></titanium-styles-playground>
      </smart-demo>
    `;
  }
}
