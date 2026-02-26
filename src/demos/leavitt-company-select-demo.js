import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
import '@leavittsoftware/web/leavitt/company-select/company-select';
import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { getCompanyMarkUrl } from '@leavittsoftware/web/titanium/helpers/get-company-mark-url';
import { ThemePreference } from '@leavittsoftware/web/leavitt/theme/theme-preference';
import api3UserService from '../services/api3-user-service';
import StoryStyles from '../styles/story-styles';
let LeavittCompanySelectDemo = class LeavittCompanySelectDemo extends ThemePreference(LitElement) {
    #disableMenuOpenOnFocus_accessor_storage = false;
    get disableMenuOpenOnFocus() { return this.#disableMenuOpenOnFocus_accessor_storage; }
    set disableMenuOpenOnFocus(value) { this.#disableMenuOpenOnFocus_accessor_storage = value; }
    #methodsSelect_accessor_storage;
    get methodsSelect() { return this.#methodsSelect_accessor_storage; }
    set methodsSelect(value) { this.#methodsSelect_accessor_storage = value; }
    static { this.styles = [StoryStyles]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt company select" level1Href="/leavitt-company-select" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Company Select" className="LeavittCompanySelect"></story-header>

            <div>
              <h1>Filled</h1>
              <item-row>
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
              </item-row>
            </div>

            <div>
              <h1>Methods</h1>
              <leavitt-company-select
                @selected=${(e) => console.log('selected change 1', e.target.selected)}
                style="width: 400px;"
                methods-demo
                required
                ?disable-menu-open-on-focus=${this.disableMenuOpenOnFocus}
                .apiService=${api3UserService}
              ></leavitt-company-select>
              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reset()}>reset()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.focus()}>focus()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reportValidity()}>reportValidity()</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => (this.methodsSelect.required = !this.methodsSelect.required)}>Toggle required</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => (this.disableMenuOpenOnFocus = !this.disableMenuOpenOnFocus)}
                  >Toggle auto open (${this.disableMenuOpenOnFocus ? 'on' : 'off'})
                </md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.methodsSelect.reloadCompanies()}>reloadCompanies()</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Default</h1>
              <item-row>
                <leavitt-company-select disableAutoLoad label="default" .apiService=${api3UserService}></leavitt-company-select>
                <leavitt-company-select disableAutoLoad label="shaped" shaped .apiService=${api3UserService}></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="pre-selected"
                  .selected=${{ Id: 57, Name: 'Leavitt Group Enterprises' }}
                  .apiService=${api3UserService}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="disabled pre-selected"
                  .selected=${{
            Id: 57,
            Name: 'Leavitt Group Enterprises',
        }}
                  disabled
                  .apiService=${api3UserService}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="placeholder"
                  placeholder="placeholder text"
                  .apiService=${api3UserService}
                ></leavitt-company-select>
                <leavitt-company-select
                  disableAutoLoad
                  label="required"
                  required
                  validationMessage="required"
                  .apiService=${api3UserService}
                ></leavitt-company-select>
              </item-row>
            </div>

            <div>
              <h1>Custom menu item template</h1>
              <leavitt-company-select
                .renderMenuItemContentTemplate=${(company) => html `<md-menu-item .item=${company}>
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

            <api-docs src="./custom-elements.json" selected="leavitt-company-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], LeavittCompanySelectDemo.prototype, "disableMenuOpenOnFocus", null);
__decorate([
    query('leavitt-company-select[methods-demo]')
], LeavittCompanySelectDemo.prototype, "methodsSelect", null);
LeavittCompanySelectDemo = __decorate([
    customElement('leavitt-company-select-demo')
], LeavittCompanySelectDemo);
export { LeavittCompanySelectDemo };
//# sourceMappingURL=leavitt-company-select-demo.js.map