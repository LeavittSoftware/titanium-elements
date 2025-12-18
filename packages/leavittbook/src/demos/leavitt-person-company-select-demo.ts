import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
import { LeavittPersonCompanySelect } from '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
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

  render() {
    return html`
      <story-header name="Leavitt Person Company Select" className="LeavittPersonCompanySelect"></story-header>
      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-company-select required methods-demo .apiService=${this.apiService}></leavitt-person-company-select>
        <section buttons>
          <md-text-button @click=${() => this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>

      <h1>Attributes</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
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
        <leavitt-person-company-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-company-select>
      </div>

      <titanium-snackbar-stack></titanium-snackbar-stack>

      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `;
  }
}
