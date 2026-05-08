import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/person-company-select/person-company-select';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { LeavittPersonCompanySelect } from '@leavittsoftware/web/leavitt/person-company-select/person-company-select';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service';

@customElement('leavitt-person-company-select-demo')
export class LeavittPersonCompanySelectDemo extends LitElement {
  @query('leavitt-person-company-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonCompanySelect;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person company select" level1Href="/leavitt-person-company-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person Company Select" className="LeavittPersonCompanySelect"></story-header>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-company-select required methods-demo .apiService=${api3UserService}></leavitt-person-company-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Attributes</h1>
              <item-row>
                <leavitt-person-company-select label="default" .apiService=${api3UserService}></leavitt-person-company-select>
                <leavitt-person-company-select label="shaped" shaped .apiService=${api3UserService}></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="pre-selected"
                  .selected=${{
                    Name: 'Leavitt Group Enterprises',
                    type: 'Company',
                  } as never}
                  .apiService=${api3UserService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="disabled pre-selected"
                  .selected=${{
                    FullName: 'Aaron Drabeck',
                    Id: 11056,
                    type: 'Person',
                    ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
                  } as never}
                  disabled
                  .apiService=${api3UserService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${api3UserService}
                ></leavitt-person-company-select>
                <leavitt-person-company-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${api3UserService}
                ></leavitt-person-company-select>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <titanium-snackbar-stack></titanium-snackbar-stack>
    `;
  }
}
