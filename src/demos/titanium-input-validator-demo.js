import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/iconbutton/outlined-icon-button';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/input-validator/filled-input-validator';
import '@leavittsoftware/web/titanium/input-validator/outlined-input-validator';
import { css, html, LitElement } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import StoryStyles from '../styles/story-styles';
let TitaniumInputValidatorDemo = class TitaniumInputValidatorDemo extends LitElement {
    #filledIconSelected_accessor_storage = '';
    get filledIconSelected() { return this.#filledIconSelected_accessor_storage; }
    set filledIconSelected(value) { this.#filledIconSelected_accessor_storage = value; }
    #outlinedIconSelected_accessor_storage = '';
    get outlinedIconSelected() { return this.#outlinedIconSelected_accessor_storage; }
    set outlinedIconSelected(value) { this.#outlinedIconSelected_accessor_storage = value; }
    #filledValidators_accessor_storage;
    get filledValidators() { return this.#filledValidators_accessor_storage; }
    set filledValidators(value) { this.#filledValidators_accessor_storage = value; }
    #outlinedValidators_accessor_storage;
    get outlinedValidators() { return this.#outlinedValidators_accessor_storage; }
    set outlinedValidators(value) { this.#outlinedValidators_accessor_storage = value; }
    static { this.styles = [
        StoryStyles,
        css `
      md-divider {
        margin-bottom: 48px;
      }

      button-container {
        padding: 12px;
        display: flex;
        gap: 12px;
      }

      titanium-filled-input-validator,
      titanium-outlined-input-validator {
        width: 299px;
      }

      titanium-filled-input-validator {
        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;

        button-container {
          margin-top: 12px;
        }
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium input validator" level1Href="/titanium-input-validator" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium filled input validator" className="TitaniumFilledInputValidator"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p>
                <kbd>titanium-input-validator</kbd> is deprecated. Use <kbd>titanium-outlined-input-validator</kbd> or
                <kbd>titanium-filled-input-validator</kbd> instead.
              </p>
            </deprecation-notice>
            <div>
              <h1>Filled</h1>
              <titanium-filled-input-validator
                required
                label="Bunnies"
                .evaluator=${() => this.filledIconSelected === 'cruelty_free'}
                .errorText=${'Bunny is not selected'}
              >
                <button-container>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.filledIconSelected = 'cruelty_free')}
                    toggle
                    ?selected=${this.filledIconSelected === 'cruelty_free'}
                  >
                    <md-icon>cruelty_free</md-icon>
                  </md-outlined-icon-button>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.filledIconSelected = 'pets')}
                    toggle
                    ?selected=${this.filledIconSelected === 'pets'}
                  >
                    <md-icon>pets</md-icon>
                  </md-outlined-icon-button>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.filledIconSelected = 'person')}
                    toggle
                    ?selected=${this.filledIconSelected === 'person'}
                  >
                    <md-icon>person</md-icon>
                  </md-outlined-icon-button>
                </button-container>
              </titanium-filled-input-validator>
              <section buttons>
                <md-filled-tonal-button @click=${() => Array.from(this.filledValidators).forEach((v) => v.reportValidity())}
                  >Report Validity</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => this.dispatchEvent(new ShowSnackbarEvent(`Check Validity is ${Array.from(this.filledValidators).map((v) => v.checkValidity())}`))}
                >
                  Check Validity</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => Array.from(this.filledValidators).forEach((v) => v.reset())}> Reset</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-input-validator"></api-docs>
            <md-divider></md-divider>
            <story-header name="Titanium outlined input validator" className="TitaniumOutlinedInputValidator"></story-header>

            <div>
              <h1>Outlined</h1>
              <titanium-outlined-input-validator
                required
                label="Bunnies"
                .evaluator=${() => this.outlinedIconSelected === 'cruelty_free'}
                .errorText=${'Bunny is not selected'}
              >
                <button-container>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.outlinedIconSelected = 'cruelty_free')}
                    toggle
                    ?selected=${this.outlinedIconSelected === 'cruelty_free'}
                  >
                    <md-icon>cruelty_free</md-icon>
                  </md-outlined-icon-button>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.outlinedIconSelected = 'pets')}
                    toggle
                    ?selected=${this.outlinedIconSelected === 'pets'}
                  >
                    <md-icon>pets</md-icon>
                  </md-outlined-icon-button>
                  <md-outlined-icon-button
                    type="button"
                    @click=${() => (this.outlinedIconSelected = 'person')}
                    toggle
                    ?selected=${this.outlinedIconSelected === 'person'}
                  >
                    <md-icon>person</md-icon>
                  </md-outlined-icon-button>
                </button-container>
              </titanium-outlined-input-validator>
              <section buttons>
                <md-filled-tonal-button @click=${() => Array.from(this.outlinedValidators).forEach((v) => v.reportValidity())}
                  >Report Validity</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => this.dispatchEvent(new ShowSnackbarEvent(`Check Validity is ${Array.from(this.outlinedValidators).map((v) => v.checkValidity())}`))}
                >
                  Check Validity</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${() => Array.from(this.outlinedValidators).forEach((v) => v.reset())}> Reset</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-outlined-input-validator"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], TitaniumInputValidatorDemo.prototype, "filledIconSelected", null);
__decorate([
    state()
], TitaniumInputValidatorDemo.prototype, "outlinedIconSelected", null);
__decorate([
    queryAll('titanium-filled-input-validator')
], TitaniumInputValidatorDemo.prototype, "filledValidators", null);
__decorate([
    queryAll('titanium-outlined-input-validator')
], TitaniumInputValidatorDemo.prototype, "outlinedValidators", null);
TitaniumInputValidatorDemo = __decorate([
    customElement('titanium-input-validator-demo')
], TitaniumInputValidatorDemo);
export { TitaniumInputValidatorDemo };
//# sourceMappingURL=titanium-input-validator-demo.js.map