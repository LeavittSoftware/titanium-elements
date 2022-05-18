import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('mwc-datefield-demo')
export class DatefieldDemoElement extends LitElement {
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
      <story-header name="datefield" packageName="leavitt-elements" tagName="mwc-datefield" klass="DateField"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/mwc-datefield/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="mwc-datefield"></api-docs>
    `;
  }
}
