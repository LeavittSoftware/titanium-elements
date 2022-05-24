import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('titanium-tab-control-demo')
export class TitaniumTabControlDemoElement extends LitElement {
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
      <story-header name="Titanium tab control" packageName="titanium-tab-control" className="TitaniumTabControlElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/titanium-tab-control/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="titanium-tab-control"></api-docs>
    `;
  }
}
