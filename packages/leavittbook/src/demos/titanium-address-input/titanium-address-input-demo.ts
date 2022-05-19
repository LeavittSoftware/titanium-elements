import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-address-input-demo')
export class TitaniumAddressInputDemoElement extends LitElement {
  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 1300px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium Address Input" packageName="titanium-address-input" className="TitaniumAddressInputElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-address-input/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `;
  }
}
