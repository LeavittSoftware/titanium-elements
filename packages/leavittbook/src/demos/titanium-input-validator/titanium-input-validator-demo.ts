import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-input-validator-demo')
export class TitaniumInputValidatorDemoElement extends LitElement {
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
      <story-header name="Titanium Input Validator" packageName="titanium-input-validator" className="TitaniumInputValidatorElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-input-validator/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-input-validator"></api-docs>
    `;
  }
}