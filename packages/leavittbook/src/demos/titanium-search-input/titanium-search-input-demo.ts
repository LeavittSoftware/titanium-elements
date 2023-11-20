import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './titanium-search-input-playground';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputItemDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Titanium Search Input" className="TitaniumSearchInputItem"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-search-input/project.json"
        ><titanium-search-input-playground></titanium-search-input-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `;
  }
}
