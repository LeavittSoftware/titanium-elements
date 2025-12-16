import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';

import '@api-viewer/docs';

import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-user-feedback-playground';

@customElement('leavitt-user-feedback-demo')
export class LeavittUserFeedbackDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt user feedback" className="LeavittUserFeedback"></story-header>
      <leavitt-user-feedback-playground></leavitt-user-feedback-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
    `;
  }
}
