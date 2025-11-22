import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';
/* playground-fold-end */
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
/* playground-fold */
let LeavittEmailHistoryViewerPlayground = class LeavittEmailHistoryViewerPlayground extends ThemePreference(LitElement) {
    #apiService_accessor_storage;
    get apiService() { return this.#apiService_accessor_storage; }
    set apiService(value) { this.#apiService_accessor_storage = value; }
    #demo1_accessor_storage;
    get demo1() { return this.#demo1_accessor_storage; }
    set demo1(value) { this.#demo1_accessor_storage = value; }
    #demo2_accessor_storage;
    get demo2() { return this.#demo2_accessor_storage; }
    set demo2(value) { this.#demo2_accessor_storage = value; }
    constructor() {
        super();
        this.apiService = new ApiService(new AuthenticatedTokenProvider());
        this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
        this.apiService.addHeader('X-LGAppName', 'EducationAdminV2');
    }
    static { this.styles = [
        h1,
        p,
        css `
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      main {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: grid;
        gap: 12px;
        margin: 24px 0 36px 0;

        section[buttons] {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <user-manager disableAutoload></user-manager>
    
      <h1>Filled</h1>
      <main row>
       <leavitt-email-history-viewer-filled isActive .apiService=${this.apiService} .path=${'/leavitt-email-history-viewer'}></leavitt-email-history-viewer-filled>
      </main>

      <h1>Outlined</h1>
      <main row>
        <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${'/leavitt-email-history-viewer'}></leavitt-email-history-viewer>
      </main>
    `;
    }
};
__decorate([
    state()
], LeavittEmailHistoryViewerPlayground.prototype, "apiService", null);
__decorate([
    query('leavitt-email-history-viewer')
], LeavittEmailHistoryViewerPlayground.prototype, "demo1", null);
__decorate([
    query('leavitt-email-history-viewer-filled')
], LeavittEmailHistoryViewerPlayground.prototype, "demo2", null);
LeavittEmailHistoryViewerPlayground = __decorate([
    customElement('leavitt-email-history-viewer-playground')
], LeavittEmailHistoryViewerPlayground);
export { LeavittEmailHistoryViewerPlayground };
//# sourceMappingURL=leavitt-email-history-viewer-playground.js.map