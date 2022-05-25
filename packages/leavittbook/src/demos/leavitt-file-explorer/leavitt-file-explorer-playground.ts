/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-file-explorer';
import { LeavittFileExplorerElement } from '@leavittsoftware/leavitt-file-explorer';

/* playground-fold */
@customElement('leavitt-file-explorer-playground')
export class LeavittFileExplorerPlaygroundElement extends LitElement {
  @state() fileExplorerApiService: ApiService;
  @query('leavitt-file-explorer[reload]') private reloadFileExplorer!: LeavittFileExplorerElement;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        margin: 24px 0 36px 0;
      }
    `,
  ];

  constructor() {
    super();
    this.fileExplorerApiService = new ApiService(new AuthenticatedTokenProvider());
    this.fileExplorerApiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.fileExplorerApiService.addHeader('X-LGAppName', 'FileExplorer');
  }

  render() {
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Default file explorer</p>
      <div>
        <leavitt-file-explorer file-explorer-id="1" folder-id="1635" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      </div>

      <h1>Restricted</h1>
      <p>Restricted navigation up</p>
      <div>
        <leavitt-file-explorer file-explorer-id="1" folder-id="1637" prevent-navigation-up .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      </div>

      <h1>Reload</h1>
      <p>Reload file explorer</p>
      <div>
        <leavitt-file-explorer
          reload
          file-explorer-id="1"
          folder-id="1637"
          prevent-navigation-up
          .apiService=${this.fileExplorerApiService}
        ></leavitt-file-explorer>
        <mwc-button
          @click=${() => {
            this.reloadFileExplorer.reload();
          }}
          label="Reload"
        ></mwc-button>
      </div>
    `;
  }
}
