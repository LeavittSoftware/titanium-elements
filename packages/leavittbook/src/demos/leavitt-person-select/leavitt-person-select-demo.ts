import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-select-playground';

@customElement('leavitt-person-select-demo')
export class LeavittPersonSelectDemoElement extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = await GetUserManagerInstance();
    await userManager.authenticateAsync();
    this.refreshToken = window.localStorage.getItem('LG-AUTH-RT');
  }

  render() {
    return html`
      <story-header name="Leavitt Person Select" packageName="leavitt-elements" className="LeavittPersonSelectElement"></story-header>
      ${this.refreshToken
        ? html`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-select/project.json"
            ><leavitt-person-select-playground></leavitt-person-select-playground>
          </smart-demo>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
    `;
  }
}
