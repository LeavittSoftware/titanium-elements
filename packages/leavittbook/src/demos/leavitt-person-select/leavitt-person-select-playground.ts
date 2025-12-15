/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@material/web/button/text-button';

import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/person-select/person-select';
import { LeavittPersonSelect } from '@leavittsoftware/web/leavitt/person-select/person-select';
import { Person } from '@leavittsoftware/lg-core-typescript';
import UserManager from '../../services/user-manager-service';

/* playground-fold */
@customElement('leavitt-person-select-playground')
export class LeavittPersonSelectPlayground extends LitElement {
  @state() private accessor apiService: ApiService;
  @queryAll('leavitt-person-select') protected accessor inputs!: NodeListOf<LeavittPersonSelect>;
  @query('leavitt-person-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonSelect;

  constructor() {
    super();
    this.apiService = new ApiService(UserManager);
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
      <h1>Demo</h1>
      <p>Demonstrates public methods</p>
      <div row>
        <leavitt-person-select required methods-demo .apiService=${this.apiService}></leavitt-person-select>
        <section buttons>
          <md-text-button @click=${() => this.methodsSelect.reset()}>reset()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.focus()}>focus()</md-text-button>
          <md-text-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-text-button>
        </section>
      </div>

      <h1>Pre-load people</h1>
      <div row>
        <leavitt-person-select
          .odataParts=${[
            'top=15',
            "filter=contains(LastName, 'Leavitt')",
            'orderby=FullName',
            'select=FullName,CompanyName,Id,ProfilePictureCdnFileName',
            'count=true',
          ]}
          enable-people-preloading
          .apiService=${this.apiService}
        ></leavitt-person-select>
      </div>

      <h1>Local searching</h1>
      <div row>
        <leavitt-person-select
          search-type="local"
          .people=${[
            {
              Id: 1,
              FullName: 'Taylor Swift',
              CompanyName: 'Leavitt Software Solutions',
              ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            },
            {
              Id: 2,
              FullName: 'Jack Black',
              CompanyName: 'Leavitt Software Solutions',
              ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            },
          ]}
        ></leavitt-person-select>
      </div>

      <h1>Custom menu item template</h1>
      <div row>
        <leavitt-person-select
          search-type="local"
          .renderMenuItemContentTemplate=${(person: Partial<Person & { Status: string }>) =>
            html` <md-menu-item .item=${person}>
              <profile-picture slot="start" .fileName=${person?.ProfilePictureCdnFileName ?? null} shape="circle" size="40"></profile-picture>
              <span slot="headline">${person.FullName}</span>
              <span slot="supporting-text">${person.CompanyName}</span>
              <span slot="overline">${person.Status}</span>
            </md-menu-item>`}
          .people=${[
            {
              Id: 1,
              FullName: 'Taylor Swift',
              Status: 'Admin',
              CompanyName: 'Leavitt Software Solutions',
              ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            },
            {
              Id: 2,
              'disable-item': true,
              FullName: 'Jack Black',
              Status: 'User',
              CompanyName: 'Leavitt Software Solutions',
              ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
            },
          ]}
        ></leavitt-person-select>
      </div>

      <h1>Attributes</h1>
      <p>Default person select</p>
      <div>
        <leavitt-person-select label="default" .apiService=${this.apiService}></leavitt-person-select>

        <leavitt-person-select
          label="prefilled"
          .selected=${{
            Id: 11056,
            FullName: 'Aaron D.',
            CompanyName: 'Leavitt Software Solutions',
            ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
          } as never}
          .apiService=${this.apiService}
        ></leavitt-person-select>

        <leavitt-person-select label="shaped" shaped .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="Supporting text" supportingText="supporting text" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="required" required validationMessage="required" .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="disabled" disabled .apiService=${this.apiService}></leavitt-person-select>
        <leavitt-person-select label="Suffix text" suffixText="Admin" .apiService=${this.apiService}></leavitt-person-select>
      </div>
    `;
  }
}
