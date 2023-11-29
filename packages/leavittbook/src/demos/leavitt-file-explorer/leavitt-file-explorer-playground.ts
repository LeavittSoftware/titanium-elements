/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/snackbar/snackbar';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/file-explorer/file-explorer';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';

/* playground-fold */
@customElement('leavitt-file-explorer-playground')
export class LeavittPersonCompanySelectPlayground extends LitElement {
  @state() fileExplorerApiService: ApiService;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
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
      <user-manager></user-manager>
      <h1>Default</h1>
      <p></p>
      <div>
        <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
