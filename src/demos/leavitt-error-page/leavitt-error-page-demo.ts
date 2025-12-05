import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-error-page-playground';

@customElement('leavitt-error-page-demo')
export class LeavittErrorPageDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt error page" className="LeavittErrorPage"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/leavitt-error-page/project.json"
        ><leavitt-error-page-playground></leavitt-error-page-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="leavitt-error-page"></api-docs>
    `;
  }
}

