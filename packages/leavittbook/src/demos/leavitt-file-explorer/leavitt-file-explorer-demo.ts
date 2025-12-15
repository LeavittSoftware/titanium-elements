import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';

import '../../shared/story-header';
import '../../shared/smart-demo';
import './leavitt-file-explorer-playground';
import UserManager from '../../services/user-manager-service';

@customElement('leavitt-file-explorer-demo')
export class LeavittUserFileExplorerDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    await UserManager.authenticate();
    this.refreshToken = UserManager.refreshToken ?? null;
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
    `;
  }
}
