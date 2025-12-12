import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import StoryStyles from '../../styles/story-styles';
import '../../shared/story-header';

import '@api-viewer/docs';
import '../../shared/smart-demo';
import './leavitt-company-select-playground';
import { GetAuthZeroLgUserManager } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-user-manager';

@customElement('leavitt-company-select-demo')
export class LeavittCompanySelectDemo extends LitElement {
  @state() private accessor refreshToken: string | null = null;

  static styles = [StoryStyles, css``];

  async firstUpdated() {
    const userManager = GetAuthZeroLgUserManager();
    await userManager?.authenticate();
    this.refreshToken = userManager?.refreshToken ?? null;
  }

  render() {
    return html`
      <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>
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
