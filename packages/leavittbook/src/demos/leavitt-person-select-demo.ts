import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@leavittsoftware/web/leavitt/person-select/person-select';

import { html, LitElement, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { LeavittPersonSelect } from '@leavittsoftware/web/leavitt/person-select/person-select';
import { Person } from '@leavittsoftware/lg-core-typescript';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service';
import { AuthIdentityController } from '../services/auth-identity-controller';

@customElement('leavitt-person-select-demo')
export class LeavittPersonSelectDemo extends LitElement {
  @query('leavitt-person-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonSelect;

  #auth = new AuthIdentityController(this);

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person select" level1Href="/leavitt-person-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Select" className="LeavittPersonSelect" requires-auth></story-header>

            ${this.#auth.identity
              ? html`
            <div>
              <h1>Methods</h1>
              <leavitt-person-select required methods-demo .apiService=${api3UserService}></leavitt-person-select>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Pre-load people - match input width</h1>
              <leavitt-person-select
                match-input-width
                shaped
                large
                label=""
                .odataParts=${[
                  'top=15',
                  "filter=contains(LastName, 'Leavitt')",
                  'orderby=FullName',
                  'select=FullName,CompanyName,Id,ProfilePictureCdnFileName',
                  'count=true',
                ]}
                enable-people-preloading
                .apiService=${api3UserService}
              ></leavitt-person-select>
            </div>

            <div>
              <h1>Local searching</h1>
              <leavitt-person-select
                large
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

            <div>
              <h1>Custom menu item template</h1>
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

            <div>
              <h1>Attributes</h1>
              <item-row>
                <leavitt-person-select label="default" .apiService=${api3UserService}></leavitt-person-select>

                <leavitt-person-select
                  label="prefilled"
                  .selected=${
                    {
                      Id: 11056,
                      FullName: 'Aaron D.',
                      CompanyName: 'Leavitt Software Solutions',
                      ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
                    } as never
                  }
                  .apiService=${api3UserService}
                ></leavitt-person-select>

                <leavitt-person-select label="shaped" shaped .apiService=${api3UserService}></leavitt-person-select>
                <leavitt-person-select label="placeholder" placeholder="My placeholder" .apiService=${api3UserService}></leavitt-person-select>
                <leavitt-person-select label="Supporting text" supportingText="supporting text" .apiService=${api3UserService}></leavitt-person-select>
                <leavitt-person-select label="required" required validationMessage="required" .apiService=${api3UserService}></leavitt-person-select>
                <leavitt-person-select label="disabled" disabled .apiService=${api3UserService}></leavitt-person-select>
                <leavitt-person-select label="Suffix text" suffixText="Admin" .apiService=${api3UserService}></leavitt-person-select>
              </item-row>
            </div>

            </div>
              `
              : nothing}

            <api-docs src="./custom-elements.json" selected="leavitt-person-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
