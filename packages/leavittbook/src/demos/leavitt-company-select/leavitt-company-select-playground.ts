/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import '@leavittsoftware/titanium-snackbar';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-company-select';
import { LeavittCompanyElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-company-select';

/* playground-fold */
@customElement('leavitt-company-select-playground')
export class LeavittPersonCompanySelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @query('leavitt-company-select[methods-demo]') protected methodsSelect!: LeavittCompanyElement;
  @query('leavitt-company-select[duplicate-api-calls]') protected duplicateAPICallsSelect!: LeavittCompanyElement;
  @queryAll('leavitt-company-select') protected inputs!: NodeListOf<LeavittCompanyElement>;

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
  }

  async firstUpdated() {
    //Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(async o => {
        o.layout();
      });
    });

    this.duplicateAPICallsSelect.reloadCompanies();
  }

  static styles = [
    h1,
    p,
    button,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
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
      <p>Examples using required,shaped,shallow,preselected, and disabled</p>
      <div style="background-color: #eee ">
        <leavitt-company-select label="default" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select label="shaped" shaped .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select label="shallow" shallow .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select
          label="pre-selected"
          .selected=${{ Id: 57, Name: 'Leavitt Group Enterprises' }}
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select
          label="disabled pre-selected"
          .selected=${{
            Id: 57,
            Name: 'Leavitt Group Enterprises',
          }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-company-select>
        <leavitt-company-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-company-select>
        <leavitt-company-select
          duplicate-api-calls
          label="Duplicate api calls"
          helperPersistent
          helper="Check the console to view the warning"
          .apiService=${this.apiService}
        ></leavitt-company-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div>
        <leavitt-company-select methods-demo required .apiService=${this.apiService}></leavitt-company-select>
        <section buttons>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsSelect.reset();
            }}
            label="reset()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsSelect.focus();
            }}
            label="focus()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsSelect.reportValidity();
            }}
            label="reportValidity()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsSelect.layout();
            }}
            label="layout()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsSelect.reloadCompanies();
            }}
            label="reloadCompanies()"
          ></mwc-button>
        </section>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
