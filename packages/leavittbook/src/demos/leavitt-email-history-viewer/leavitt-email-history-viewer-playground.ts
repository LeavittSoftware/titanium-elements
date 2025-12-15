/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';

import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import LeavittEmailHistoryViewer from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';

import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import LeavittEmailHistoryViewerFilled from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';
import UserManager from '../../services/user-manager-service';

/* playground-fold */
@customElement('leavitt-email-history-viewer-playground')
export class LeavittEmailHistoryViewerPlayground extends ThemePreference(LitElement) {
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
    h1,
    p,
    css`
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
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Filled</h1>
      <main row>
        <leavitt-email-history-viewer-filled
          isActive
          .apiService=${this.apiService}
          .path=${'/leavitt-email-history-viewer'}
        ></leavitt-email-history-viewer-filled>
      </main>

      <h1>Outlined</h1>
      <main row>
        <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${'/leavitt-email-history-viewer'}></leavitt-email-history-viewer>
      </main>
    `;
  }
}
