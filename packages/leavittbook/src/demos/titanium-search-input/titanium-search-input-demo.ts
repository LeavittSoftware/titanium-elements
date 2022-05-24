import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputItemDemoElement extends LitElement {
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
      <story-header name="Titanium Search Input" packageName="titanium-search-input" className="TitaniumSearchInputItemElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-search-input/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `;
  }
}
