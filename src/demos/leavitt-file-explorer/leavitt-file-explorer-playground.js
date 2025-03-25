import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';
/* playground-fold-end */
import '@leavittsoftware/web/leavitt/file-explorer/file-explorer';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';
/* playground-fold */
let LeavittPersonCompanySelectPlayground = class LeavittPersonCompanySelectPlayground extends LitElement {
    static { this.styles = [
        h1,
        p,
        css `
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }
    `,
    ]; }
    constructor() {
        super();
        this.fileExplorerApiService = new ApiService(new AuthenticatedTokenProvider());
        this.fileExplorerApiService.baseUrl = 'https://devapi3.leavitt.com/';
        this.fileExplorerApiService.addHeader('X-LGAppName', 'FileExplorer');
    }
    render() {
        /* playground-fold-end */
        return html `
      <user-manager></user-manager>
      <leavitt-file-explorer file-explorer-id="1" .apiService=${this.fileExplorerApiService}></leavitt-file-explorer>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
    }
};
__decorate([
    state()
], LeavittPersonCompanySelectPlayground.prototype, "fileExplorerApiService", void 0);
LeavittPersonCompanySelectPlayground = __decorate([
    customElement('leavitt-file-explorer-playground')
], LeavittPersonCompanySelectPlayground);
export { LeavittPersonCompanySelectPlayground };
//# sourceMappingURL=leavitt-file-explorer-playground.js.map