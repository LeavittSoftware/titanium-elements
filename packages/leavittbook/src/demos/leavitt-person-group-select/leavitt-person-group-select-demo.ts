import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-person-group-select-playground';
import { GetAuthZeroLgUserManager } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-user-manager';

@customElement('leavitt-person-group-select-demo')
export class LeavittPersonGroupSelectDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = GetAuthZeroLgUserManager();
    await userManager?.authenticate();
    this.refreshToken = userManager?.refreshToken ?? null;
  }

  render() {
    return html`
      <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>
      ${this.refreshToken
        ? html`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-person-group-select/project.json"
            ><leavitt-person-group-select-playground></leavitt-person-group-select-playground>
          </smart-demo>`
        : nothing}
      <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
    `;
  }
}
