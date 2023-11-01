/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '../../../../packages/titanium/styles/styles';

import '../../../../packages/leavitt/user-manager/user-manager';
import '@material/web/button/text-button';

import ApiService from '../../../../packages/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '../../../../packages/leavitt/api-service/authenticated-token-provider';

/* playground-fold-end */
import '../../../../packages/leavitt/company-select/company-select';
import { LeavittCompanySelect } from '../../../../packages/leavitt/company-select/company-select';

/* playground-fold */
@customElement('leavitt-company-select-playground')
export class LeavittPersonCompanySelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @query('leavitt-company-select[methods-demo]') protected methodsSelect!: LeavittCompanySelect;
  @queryAll('leavitt-company-select') protected inputs!: NodeListOf<LeavittCompanySelect>;

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
        --mdc-icon-font: 'Material Icons Outlined';
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
      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-company-select
          .selected=${{ Id: 20248, Name: 'Software' }}
          style="width: 400px;"
          methods-demo
          required
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <section buttons>
          <md-text-button @click=${() => this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-text-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using required,shaped,shallow,preselected, and disabled</p>
      <div>
        <leavitt-company-select disableAutoLoad label="default" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="shallow" shallow .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="pre-selected"
          .selected=${{ Id: 57, Name: 'Leavitt Group Enterprises' }}
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="disabled pre-selected"
          .selected=${{
            Id: 57,
            Name: 'Leavitt Group Enterprises',
          }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-company-select>
      </div>

      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
