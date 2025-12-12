/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/company-select/company-select';
import { LeavittCompanySelect } from '@leavittsoftware/web/leavitt/company-select/company-select';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { Company } from '@leavittsoftware/lg-core-typescript';
import { getCompanyMarkUrl } from '@leavittsoftware/web/titanium/helpers/get-company-mark-url';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import api3UserService from '../../services/api3-user-service';

/* playground-fold */
@customElement('leavitt-company-select-playground')
export class LeavittPersonCompanySelectPlayground extends ThemePreference(LitElement) {
  @state() private accessor disableMenuOpenOnFocus: boolean = false;
  @query('leavitt-company-select[methods-demo]') protected accessor methodsSelect!: LeavittCompanySelect;
  @queryAll('leavitt-company-select') protected accessor inputs!: NodeListOf<LeavittCompanySelect>;

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

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-company-select
          @selected=${(e: DOMEvent<LeavittCompanySelect>) => console.log('selected change 1', e.target.selected)}
          style="width: 400px;"
          methods-demo
          required
          ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
          .apiService=${api3UserService}
        ></leavitt-company-select>
        <section buttons>
          <md-outlined-button @click=${() => this.methodsSelect.reset()}>reset()</md-outlined-button>
          <md-outlined-button @click=${() => this.methodsSelect.focus()}>focus()</md-outlined-button>
          <md-outlined-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${() => (this.methodsSelect.required = !this.methodsSelect.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => (this.disableMenuOpenOnFocus = !this.disableMenuOpenOnFocus)}
            >Toggle auto open (${this.disableMenuOpenOnFocus ? 'on' : 'off'})</md-outlined-button
          >

          <md-outlined-button @click=${() => this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-outlined-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using required,shaped,preselected, and disabled</p>
      <div>
        <leavitt-company-select disableAutoLoad label="default" .apiService=${api3UserService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${api3UserService}></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="pre-selected"
          .selected=${{ Id: 57, Name: 'Leavitt Group Enterprises' } as never}
          .apiService=${api3UserService}
        ></leavitt-company-select>
        <leavitt-company-select
          disableAutoLoad
          label="disabled pre-selected"
          .selected=${{
            Id: 57,
            Name: 'Leavitt Group Enterprises',
          } as never}
          disabled
          .apiService=${api3UserService}
        ></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="placeholder" placeholder="placeholder text" .apiService=${api3UserService}></leavitt-company-select>
        <leavitt-company-select disableAutoLoad label="required" required validationMessage="required" .apiService=${api3UserService}></leavitt-company-select>
      </div>

      <h1>Custom menu item template</h1>
      <div>
        <leavitt-company-select
          .renderMenuItemContentTemplate=${(company: Partial<Company>) =>
            html`<md-menu-item .item=${company}>
              <slot name="trailing-icon" slot="trailing-icon"></slot>
              <span slot="headline">${company.Name}</span>
              <span slot="supporting-text">${company.ShortName || '-'}</span>
              <img
                loading="lazy"
                style="max-width: 100px;width:100%;background:white;border-radius:8px"
                slot="start"
                src=${getCompanyMarkUrl(company, this.themePreference)}
              />
            </md-menu-item>`}
          .apiService=${api3UserService}
        ></leavitt-company-select>
      </div>

      <h1>Filled</h1>
      <p>Demonstrates filled company select</p>
      <div row>
        <leavitt-company-select
          style="width: 400px;"
          filled
          required
          ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
          .apiService=${api3UserService}
        ></leavitt-company-select>

        <leavitt-company-select
          style="width: 400px;"
          shaped
          filled
          required
          ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
          .apiService=${api3UserService}
        ></leavitt-company-select>
      </div>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
