import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('leavitt-date-range-demo')
export class LeavittDateRangeDemoElement extends LitElement {
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
      <story-header name="Date Range" packageName="leavitt-elements" tagName="leavitt-date-range" klass="LeavittDateRangeElement"></story-header>
      <playground-ide line-numbers resizable project-src="../src/demos/leavitt-date-range/project.json"> </playground-ide>
      <api-docs src="./custom-elements.json" selected="leavitt-date-range"></api-docs>
    `;
  }
}
