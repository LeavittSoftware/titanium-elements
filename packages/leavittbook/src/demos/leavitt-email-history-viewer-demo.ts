import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import { TitaniumSiteSearchTextFieldController } from '@leavittsoftware/web/titanium/site-search-text-field-controller/site-search-text-field-controller';
import LeavittEmailHistoryViewerFilled from '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled';

import StoryStyles from '../styles/story-styles';
import { siteSearchTextFieldContext } from '../contexts/site-search-text-field-context';
import api3UserService from '../services/api3-user-service';
import { AuthIdentityController } from '../services/auth-identity-controller';

@customElement('leavitt-email-history-viewer-demo')
export class LeavittEmailHistoryViewerDemo extends ThemePreference(LitElement) {
  /** Always active while mounted — leavittbook removes inactive demos from the DOM. */
  isActive = true;

  @query('leavitt-email-history-viewer-filled') private accessor viewer!: LeavittEmailHistoryViewerFilled;

  #auth = new AuthIdentityController(this);

  get searchController(): TitaniumSiteSearchTextFieldController | null {
    return this.viewer?.searchController ?? null;
  }

  connectedCallback() {
    super.connectedCallback();
    api3UserService.addHeader('X-LGAppName', 'EducationAdminV2');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (api3UserService.headers['X-LGAppName'] === 'EducationAdminV2') {
      api3UserService.addHeader('X-LGAppName', 'Testing');
    }
  }
  static styles = [
    StoryStyles,
    css`
      div[row] {
        display: grid;
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
            <story-header name="Leavitt Email History Viewer Filled" className="LeavittEmailHistoryViewerFilled" requires-auth></story-header>

            ${this.#auth.identity
              ? html`
                  <div>
                    <div row>
                      <leavitt-email-history-viewer-filled
                        isActive
                        .siteSearchTextFieldContext=${siteSearchTextFieldContext}
                        .apiService=${api3UserService}
                        .path=${'/leavitt-email-history-viewer'}
                      ></leavitt-email-history-viewer-filled>
                    </div>
                  </div>
                `
              : nothing}

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer-filled"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
