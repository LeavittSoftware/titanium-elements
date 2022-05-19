import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { GetUserManagerInstance } from '@leavittsoftware/user-manager';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import 'playground-elements/playground-ide';

@customElement('leavitt-file-explorer-demo')
export class LeavittFileExplorerDemoElement extends LitElement {
  @state() refreshToken: string | null = null;

  static styles = [
    StoryStyles,
    css`
      playground-ide {
        height: 1500px;
      }
    `,
  ];

  async firstUpdated() {
    const userManager = await GetUserManagerInstance();
    await userManager.authenticateAsync();
    this.refreshToken = window.localStorage.getItem('LG-AUTH-RT');
  }

  render() {
    return html`
      <story-header name="Leavitt File Explorer" packageName="leavitt-file-explorer" className="LeavittFileExplorerElement"></story-header>
      ${this.refreshToken
        ? html`<playground-ide
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-file-explorer/project.json"
          >
          </playground-ide>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
    `;
  }
}
