import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import '@leavittsoftware/web/leavitt/person-company-select/person-company-select';

import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { LeavittPersonCompanySelect } from '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
import { heroStyles } from '../styles/hero-styles';

import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import UserManager from '../services/user-manager-service';

import StoryStyles from '../styles/story-styles';

@customElement('leavitt-person-company-select-demo')
export class LeavittPersonCompanySelectDemo extends LitElement {
  @state() private accessor apiService: ApiService;
  @queryAll('leavitt-person-company-select') protected accessor inputs!: NodeListOf<LeavittPersonCompanySelect>;
  @query('leavitt-person-company-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonCompanySelect;

  constructor() {
    super();
    this.apiService = new ApiService(UserManager);
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
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

      h1 {
        margin-bottom: 12px;
      }

      item-row {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person company select" level1Href="/leavitt-person-company-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Company Select" className="LeavittPersonCompanySelect"></story-header>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-company-select required methods-demo .apiService=${this.apiService}></leavitt-person-company-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Attributes</h1>
              <item-row>
                <leavitt-person-company-select label="default" .apiService=${this.apiService}></leavitt-person-company-select>
                <leavitt-person-company-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="pre-selected"
                  .selected=${{
                    Name: 'Leavitt Group Enterprises',
                    type: 'Company',
                  } as never}
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="disabled pre-selected"
                  .selected=${{
                    FullName: 'Aaron Drabeck',
                    Id: 11056,
                    type: 'Person',
                    ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
                  } as never}
                  disabled
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${this.apiService}
                ></leavitt-person-company-select>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
