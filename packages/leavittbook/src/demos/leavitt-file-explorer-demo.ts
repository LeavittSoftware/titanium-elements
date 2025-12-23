import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
import '@leavittsoftware/web/leavitt/file-explorer/file-explorer';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import UserManager from '../services/user-manager-service';

import StoryStyles from '../styles/story-styles';

@customElement('leavitt-file-explorer-demo')
export class LeavittFileExplorerDemo extends LitElement {
  @state() private accessor fileExplorerApiService: ApiService;

  constructor() {
    super();
    this.fileExplorerApiService = new ApiService(UserManager);
    this.fileExplorerApiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.fileExplorerApiService.addHeader('X-LGAppName', 'FileExplorer');
  }

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt file explorer" level1Href="/leavitt-file-explorer" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt File Explorer" className="LeavittFileExplorer"></story-header>

            <div>
              <h1>File Explorer</h1>
              <p>File explorer component with API integration</p>
              <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
