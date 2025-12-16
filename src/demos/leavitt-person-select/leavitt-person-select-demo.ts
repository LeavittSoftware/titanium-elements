import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-select-playground';

@customElement('leavitt-person-select-demo')
export class LeavittPersonSelectDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
      <leavitt-person-select-playground></leavitt-person-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `;
  }
}
