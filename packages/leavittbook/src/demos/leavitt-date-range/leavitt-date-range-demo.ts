import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-date-range-playground';

@customElement('leavitt-date-range-demo')
export class LeavittDateRangeDemoElement extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Date Range" packageName="leavitt-elements" className="LeavittDateRangeElement"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/leavitt-date-range/project.json"
        ><leavitt-date-range-playground></leavitt-date-range-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="leavitt-date-range"></api-docs>
    `;
  }
}
