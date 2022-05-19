/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import '@leavittsoftware/titanium-snackbar';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';
import { LeavittPersonCompanySelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';

/* playground-fold */
@customElement('leavitt-person-company-select-playground')
export class LeavittPersonCompanySelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  //@queryAll('leavitt-date-range:not([layout-demo])') private inputs!: NodeListOf<LeavittPersonGroupSelectElement>;
  @query('leavitt-person-company-select[methods]') private methodsSelect!: LeavittPersonCompanySelectElement;

  static styles = [
    h1,
    p,
    css`
      div {
        margin: 24px 0 36px 0;
      }

      div[row] {
        display: flex;
        align-items: center;
      }

      leavitt-person-company-select {
        margin: 8px;
      }
    `,
  ];

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
  }

  // async firstUpdated() {
  //   //Fix MWC floating label problem
  //   requestAnimationFrame(() => {
  //     Array.from(this.inputs).forEach(async o => {
  //       o.?layout();
  //     });
  //   });
  // }

  render() {
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Examples using required,shaped,shallow,preselected, and disabled</p>
      <div>
        <leavitt-person-company-select label="default" .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select label="shallow" shallow .apiService=${this.apiService}></leavitt-person-company-select>
        <leavitt-person-company-select
          label="pre-selected"
          .selected=${{
            Name: 'Leavitt Group Enterprises',
            type: 'CustomEntity' as const,
          }}
          .apiService=${this.apiService}
        ></leavitt-person-company-select>
        <leavitt-person-company-select
          label="disabled pre-selected"
          .selected=${{
            Name: 'Leavitt Group Enterprises',
            type: 'CustomEntity' as const,
          }}
          disabled
          .apiService=${this.apiService}
        ></leavitt-person-company-select>
        <leavitt-person-company-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-company-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-company-select methods .apiService=${this.apiService}></leavitt-person-company-select>
        <mwc-button
          @click=${() => {
            this.methodsSelect.reset();
          }}
          label="Reset"
        ></mwc-button>
        <mwc-button
          @click=${() => {
            this.methodsSelect.focus();
          }}
          label="Focus"
        ></mwc-button>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
