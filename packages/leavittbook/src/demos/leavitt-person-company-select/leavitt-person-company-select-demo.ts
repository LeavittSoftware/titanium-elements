import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-company-select-playground';

@customElement('leavitt-person-company-select-demo')
export class LeavittPersonCompanySelectDemo extends LitElement {
  static styles = [StoryStyles, css``];

  render() {
    return html`
      <story-header name="Leavitt Person/Company Select" className="LeavittPersonCompanySelect"></story-header>
      <leavitt-person-company-select-playground></leavitt-person-company-select-playground>
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `;
  }
}
