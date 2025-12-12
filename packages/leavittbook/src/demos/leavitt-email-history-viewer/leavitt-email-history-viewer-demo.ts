import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-email-history-viewer-playground';
import { GetAuthZeroLgUserManager } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-user-manager';

@customElement('leavitt-email-history-viewer-demo')
export class LeavittEmailHistoryViewerDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = GetAuthZeroLgUserManager();
    await userManager?.authenticate();
    this.refreshToken = userManager?.refreshToken ?? null;
  }

  render() {
    return html`
      <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>
      ${this.refreshToken
        ? html`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-email-history-viewer/project.json"
          >
            <leavitt-email-history-viewer-playground></leavitt-email-history-viewer-playground>
          </smart-demo>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
    `;
  }
}
