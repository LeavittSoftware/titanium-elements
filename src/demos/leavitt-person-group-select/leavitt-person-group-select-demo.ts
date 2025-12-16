import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-group-select-playground';
@customElement('leavitt-person-group-select-demo')
export class LeavittPersonGroupSelectDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>
      <leavitt-person-group-select-playground></leavitt-person-group-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
    `;
  }
}
