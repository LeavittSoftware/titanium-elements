import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-twoline-formfield-demo')
export class TitaniumTwoLineFormFieldDemoElement extends LitElement {
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
      <story-header name="Titanium twoline formfield" packageName="titanium-twoline-formfield" className="TitaniumTwoLineFormFieldElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-twoline-formfield/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-twoline-formfield"></api-docs>
    `;
  }
}
