import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/divider/divider';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import UserManager from '../services/user-manager-service';
import StoryStyles from '../styles/story-styles';
import { siteSearchTextFieldContext } from '../contexts/site-search-text-field-context';
let LeavittEmailHistoryViewerDemo = class LeavittEmailHistoryViewerDemo extends ThemePreference(LitElement) {
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
        this.apiService = new ApiService(UserManager);
        this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
        this.apiService.addHeader('X-LGAppName', 'EducationAdminV2');
    }
    static { this.styles = [
        StoryStyles,
        css `
      div[row] {
        display: grid;
        gap: 12px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt email history viewer" level1Href="/leavitt-email-history-viewer" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Email History Viewer Filled" className="LeavittEmailHistoryViewerFilled"></story-header>

            <div>
              <h1>Filled</h1>
              <div row>
                <leavitt-email-history-viewer-filled
                  isActive
                  .siteSearchTextFieldContext=${siteSearchTextFieldContext}
                  .apiService=${this.apiService}
                  .path=${'/leavitt-email-history-viewer'}
                ></leavitt-email-history-viewer-filled>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer-filled"></api-docs>

            <md-divider></md-divider>
            <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>

            <div>
              <h1>Outlined</h1>
              <div row>
                <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${'/leavitt-email-history-viewer'}></leavitt-email-history-viewer>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], LeavittEmailHistoryViewerDemo.prototype, "apiService", null);
__decorate([
    query('leavitt-email-history-viewer')
], LeavittEmailHistoryViewerDemo.prototype, "demo1", null);
__decorate([
    query('leavitt-email-history-viewer-filled')
], LeavittEmailHistoryViewerDemo.prototype, "demo2", null);
LeavittEmailHistoryViewerDemo = __decorate([
    customElement('leavitt-email-history-viewer-demo')
], LeavittEmailHistoryViewerDemo);
export { LeavittEmailHistoryViewerDemo };
//# sourceMappingURL=leavitt-email-history-viewer-demo.js.map