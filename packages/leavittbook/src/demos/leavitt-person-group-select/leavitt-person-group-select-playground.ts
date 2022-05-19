/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-group-select';
import { LeavittPersonGroupSelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-group-select';

/* playground-fold */
@customElement('leavitt-person-group-select-playground')
export class LeavittPersonGroupSelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  //@queryAll('leavitt-date-range:not([layout-demo])') private inputs!: NodeListOf<LeavittPersonGroupSelectElement>;
  @query('leavitt-person-group-select[methods]') private methodsSelect!: LeavittPersonGroupSelectElement;

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

      leavitt-person-group-select {
        margin: 8px;
      }
    `,
  ];

  constructor() {
    super();
    this.apiService = new ApiService(new AuthenticatedTokenProvider());
    this.apiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
    this.apiService.addHeader('X-LGAppName', 'Testing');
  }

  // async firstUpdated() {
  //   //Fix MWC floating label problem
  //   requestAnimationFrame(() => {
  //     Array.from(this.inputs).forEach(async o => {
  //       o.textfield.layout();
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
        <leavitt-person-group-select label="default" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="shallow" shallow .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select
          label="pre-selected"
          .selected=${{
            Name: 'LGE Programmer Basic Access',
            type: 'PeopleGroup',
          }}
          .apiService=${this.apiService}
        ></leavitt-person-group-select>
        <leavitt-person-group-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-group-select>
        <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${this.apiService}></leavitt-person-group-select>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-group-select methods .apiService=${this.apiService}></leavitt-person-group-select>
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
    `;
  }
}
