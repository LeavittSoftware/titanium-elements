import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '../../../../leavitt/user-manager/user-manager';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-company-select-playground';

@customElement('leavitt-company-select-demo')
export class LeavittCompanySelectDemoElement extends LitElement {
  @state() refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = await GetUserManagerInstance();
    await userManager.authenticateAsync();
    this.refreshToken = window.localStorage.getItem('LG-AUTH-RT');
  }

  render() {
    return html`
      <story-header name="Leavitt Company Select" packageName="leavitt-elements" className="LeavittCompanySelectElement"></story-header>
      ${this.refreshToken
        ? html`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-company-select/project.json"
          >
            <leavitt-company-select-playground></leavitt-company-select-playground>
          </smart-demo>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
    `;
  }
}
