import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/file-explorer/file-explorer';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
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

  static styles = [
    StoryStyles,
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Leavitt File Explorer" className="LeavittFileExplorer"></story-header>
      <h1>File Explorer</h1>
      <p>File explorer component with API integration</p>
      <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      <titanium-snackbar-stack></titanium-snackbar-stack>

      <api-docs src="./custom-elements.json" selected="leavitt-file-explorer"></api-docs>
    `;
  }
}
