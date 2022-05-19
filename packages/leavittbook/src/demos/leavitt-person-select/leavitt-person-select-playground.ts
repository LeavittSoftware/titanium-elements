/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-select';
import { LeavittPersonSelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-select';

/* playground-fold */
@customElement('leavitt-person-select-playground')
export class LeavittPersonSelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @query('leavitt-person-select[methods]') private methodsPersonSelect!: LeavittPersonSelectElement;

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

      leavitt-person-select {
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

  render() {
    /* playground-fold-end */
    return html`
      <user-manager disableAutoload></user-manager>
      <h1>Default</h1>
      <p>Default person select</p>
      <div>
        <leavitt-person-select label="default" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="helper" helper="helper text" .apiService=${this.apiService}></leavitt-person-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-select methods .apiService=${this.apiService}></leavitt-person-select>
        <mwc-button
          @click=${() => {
            this.methodsPersonSelect.reset();
          }}
          label="Reset"
        ></mwc-button>
        <mwc-button
          @click=${() => {
            this.methodsPersonSelect.focus();
          }}
          label="Focus"
        ></mwc-button>
      </div>
    `;
  }
}
