import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/divider/divider';
import '@material/web/button/filled-tonal-button';
import '@material/web/divider/divider';
import '@api-viewer/docs';

import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import { heroStyles } from '../styles/hero-styles';

import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import LeavittEmailHistoryViewer from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import LeavittEmailHistoryViewerFilled from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import UserManager from '../services/user-manager-service';

import StoryStyles from '../styles/story-styles';

@customElement('leavitt-email-history-viewer-demo')
export class LeavittEmailHistoryViewerDemo extends ThemePreference(LitElement) {
  @state() private accessor apiService: ApiService;
  @query('leavitt-email-history-viewer') protected accessor demo1!: LeavittEmailHistoryViewer;
  @query('leavitt-email-history-viewer-filled') protected accessor demo2!: LeavittEmailHistoryViewerFilled;

  constructor() {
    super();
    this.apiService = new ApiService(UserManager);
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'EducationAdminV2');
  }

  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      div[row] {
        display: grid;
        gap: 12px;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
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
}
