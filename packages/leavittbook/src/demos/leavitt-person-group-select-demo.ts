import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/person-group-select/person-group-select';

import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { LeavittPersonGroupSelect } from '@leavittsoftware/web/leavitt/person-group-select/person-group-select';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service';

@customElement('leavitt-person-group-select-demo')
export class LeavittPersonGroupSelectDemo extends LitElement {
  @query('leavitt-person-group-select[methods-demo]') protected accessor methodsSelect!: LeavittPersonGroupSelect;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt person/group select" level1Href="/leavitt-person-group-select" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Person/Group Select" className="LeavittPersonGroupSelect"></story-header>

            <div>
              <h1>Default</h1>
              <item-row>
                <leavitt-person-group-select label="default" .apiService=${api3UserService}></leavitt-person-group-select>
                <leavitt-person-group-select label="shaped" shaped .apiService=${api3UserService}></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="pre-selected"
                  .selected=${{
                    Name: 'LGE Programmer Basic Access',
                    Id: 22,
                    type: 'PeopleGroup',
                  } as never}
                  .apiService=${api3UserService}
                ></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="disabled pre-selected"
                  .selected=${{
                    Name: 'Aaron Drabeck',
                    ProfilePictureCdnFileName: 'zP6DJ9lM6HmkTAaku8ZIzQQdUBHYrX5pCCANvFxtpnagBhJPp7CGXOl-16xe',
                    Id: 11056,
                    type: 'Person',
                  } as never}
                  disabled
                  .apiService=${api3UserService}
                ></leavitt-person-group-select>
                <leavitt-person-group-select label="placeholder" placeholder="placeholder text" .apiService=${api3UserService}></leavitt-person-group-select>
                <leavitt-person-group-select
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${api3UserService}
                ></leavitt-person-group-select>
              </item-row>
            </div>

            <div>
              <h1>Methods</h1>
              <item-row>
                <leavitt-person-group-select methods-demo required .apiService=${api3UserService}></leavitt-person-group-select>
              </item-row>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-person-group-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
