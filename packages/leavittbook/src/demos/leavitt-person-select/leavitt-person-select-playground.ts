/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';

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
  @queryAll('leavitt-person-select') protected inputs!: NodeListOf<LeavittPersonSelectElement>;
  @query('leavitt-person-select[methods-demo]') protected methodsPersonSelect!: LeavittPersonSelectElement;

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = 'https://devapi3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
  }

  async firstUpdated() {
    // Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(o => {
        //TODO: add method to input
        o.layout();
      });
    });
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
      <p>Default person select</p>
      <div>
        <leavitt-person-select label="default" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="default" .selected=${{ Id: 11056, FullName: 'Aaron Drabeck' }} .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="helper" helper="helper text" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-select required methods-demo .apiService=${this.apiService}></leavitt-person-select>
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
      </div>
    `;
  }
}
