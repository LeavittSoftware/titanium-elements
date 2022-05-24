import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-select-demo')
export class TitaniumSelectElement extends LitElement {
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
      <story-header
        name="Titanium Select"
        packageName="titanium-select"
        className="TitaniumSelectElement"
        deprecatedReason="No longer supported"
      ></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-select/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-select"></api-docs>
    `;
  }
}
