import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/web/leavitt/user-manager/user-manager';

import StoryStyles from '../../styles/story-styles';

import '@api-viewer/docs';

import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-file-explorer-playground';

@customElement('leavitt-file-explorer-demo')
export class LeavittUserFileExplorerDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = await GetUserManagerInstance();
    await userManager.authenticateAsync();
    this.refreshToken = window.localStorage.getItem('LG-AUTH-RT');
  }

  render() {
    return html`
      <story-header name="Leavitt file explorer" className="LeavittUserFileExplorer"></story-header>
      ${this.refreshToken
        ? html`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-file-explorer/project.json"
          >
            <leavitt-file-explorer-playground></leavitt-file-explorer-playground>
          </smart-demo>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
    `;
  }
}
