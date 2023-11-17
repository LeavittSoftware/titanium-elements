/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/button/text-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';

import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';
import { LeavittPersonGroupSelect } from '@leavittsoftware/web/leavitt/person-group-select/person-group-select';

/* playground-fold */
@customElement('leavitt-person-group-select-playground')
export class LeavittPersonGroupSelectPlaygroundElement extends LitElement {
  @state() private accessor apiService: ApiService;
  @queryAll('leavitt-person-group-select)') protected accessor inputs!: NodeListOf<LeavittPersonGroupSelect>;
  @query('leavitt-person-group-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonGroupSelect;

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
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
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-person-group-select label="default" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select
          label="pre-selected"
          .selected=${{
            Name: 'LGE Programmer Basic Access',
            Id: 22,
            type: 'PeopleGroup',
          }}
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select
          label="disabled pre-selected"
          .selected=${{
            Name: 'Aaron Drabeck',
            ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            Id: 11056,
            type: 'Person',
          }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-group-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div>
        <leavitt-person-group-select methods-demo required .apiService=${this.apiService}></leavitt-person-group-select>
        <section buttons>
          <md-text-button @click=${() => this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>
    `;
  }
}
