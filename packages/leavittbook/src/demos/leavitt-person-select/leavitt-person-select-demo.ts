import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-select-playground';
import UserManager from '../../services/user-manager-service';

@customElement('leavitt-person-select-demo')
export class LeavittPersonSelectDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    await UserManager.authenticate();
    this.refreshToken = UserManager.refreshToken ?? null;
  }

  render() {
    return html`
      <story-header name="Leavitt Person Select" className="LeavittPersonSelect"></story-header>
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
