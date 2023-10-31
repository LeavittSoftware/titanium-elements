/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

import '@material/web/button/outlined-button';
import '@leavittsoftware/user-manager';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-select';
import { LeavittPersonSelect } from '@leavittsoftware/leavitt-elements';
import { Person } from '@leavittsoftware/lg-core-typescript';

/* playground-fold */
@customElement('leavitt-person-select-playground')
export class LeavittPersonSelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @queryAll('leavitt-person-select') protected inputs!: NodeListOf<LeavittPersonSelect>;
  @query('leavitt-person-select[methods-demo]') protected methodsPersonSelect!: LeavittPersonSelect;

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
      <h1>Demo</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-select required methods-demo .apiService=${this.apiService}></leavitt-person-select>
        <section buttons>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.reset();
            }}
            label="reset()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.focus();
            }}
            label="focus()"
          ></mwc-button>
          <mwc-button
            lowercase
            outlined
            @click=${() => {
              this.methodsPersonSelect.reportValidity();
            }}
            label="reportValidity()"
          ></mwc-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Default person select</p>
      <div>
        <leavitt-person-select label="default" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select
          label="default"
          .selected=${{
            Id: 11056,
            FullName: 'Aaron Drabeck',
            CompanyName: 'Leavitt Software Solutions',
            ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
          } satisfies Partial<Person>}
          .apiService=${this.apiService}
        ></leavitt-person-select>
        <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="helper" helper="helper text" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-select>
      </div>
    `;
  }
}
