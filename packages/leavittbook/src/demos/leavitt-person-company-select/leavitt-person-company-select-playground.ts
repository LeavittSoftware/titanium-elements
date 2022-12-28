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
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';
import { LeavittPersonCompanySelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';

/* playground-fold */
@customElement('leavitt-person-company-select-playground')
export class LeavittPersonCompanySelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @queryAll('leavitt-person-company-select') protected inputs!: NodeListOf<LeavittPersonCompanySelectElement>;
  @query('leavitt-person-company-select[methods-demo]') protected methodsSelect!: LeavittPersonCompanySelectElement;

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
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

  async firstUpdated() {
    // Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(o => {
        o.layout();
      });
    });
  }

  render() {
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Examples using required,shaped,shallow,preselected, and disabled</p>
      <div>
        <leavitt-person-company-select label="default" .apiService=${this.apiService}></leavitt-person-company-select>
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
        <leavitt-person-company-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-company-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-company-select required methods-demo .apiService=${this.apiService}></leavitt-person-company-select>
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
        </section>
      </div>
      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
