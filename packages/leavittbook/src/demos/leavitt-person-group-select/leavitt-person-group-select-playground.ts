/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';
import '@leavittsoftware/user-manager';
import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';

/* playground-fold-end */
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-group-select';
import { LeavittPersonGroupSelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-group-select';

/* playground-fold */
@customElement('leavitt-person-group-select-playground')
export class LeavittPersonGroupSelectPlaygroundElement extends LitElement {
  @state() apiService: ApiService;
  @queryAll('leavitt-person-group-select)') protected inputs!: NodeListOf<LeavittPersonGroupSelectElement>;
  @query('leavitt-person-group-select[methods-demo]') protected methodsSelect!: LeavittPersonGroupSelectElement;

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
      <p>Examples using required,shaped,shallow,preselected, and disabled</p>
      <div>
        <leavitt-person-group-select label="default" .apiService=${this.apiService}></leavitt-person-group-select>
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
        <leavitt-person-group-select
          label="disabled pre-selected"
          .selected=${{
            Name: 'LGE Programmer Basic Access',
            type: 'PeopleGroup',
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
    `;
  }
}
