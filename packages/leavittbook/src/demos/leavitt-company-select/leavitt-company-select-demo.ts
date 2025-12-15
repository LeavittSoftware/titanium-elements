import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-company-select-playground';

@customElement('leavitt-company-select-demo')
export class LeavittCompanySelectDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>
      <leavitt-company-select-playground></leavitt-company-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
    `;
  }
}
