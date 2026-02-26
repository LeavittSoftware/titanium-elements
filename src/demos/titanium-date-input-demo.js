import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/button/filled-tonal-button';
import '@material/web/textfield/outlined-text-field';
import '@material/web/textfield/filled-text-field';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/date-input/date-input';
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import StoryStyles from '../styles/story-styles';
let TitaniumDateInputDemo = class TitaniumDateInputDemo extends LitElement {
    #input_accessor_storage;
    get input() { return this.#input_accessor_storage; }
    set input(value) { this.#input_accessor_storage = value; }
    #filledInput_accessor_storage;
    get filledInput() { return this.#filledInput_accessor_storage; }
    set filledInput(value) { this.#filledInput_accessor_storage = value; }
    static { this.styles = [
        StoryStyles,
        css `
      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      titanium-date-input,
      h1 {
        margin-bottom: 12px;
      }

      two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium date input" level1Href="/titanium-date-input" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium date input" className="TitaniumDateInput"></story-header>

            <div>
              <h1>Basic date input</h1>

              <two-column>
                <titanium-date-input
                  required
                  label="Date"
                  @change=${(e) => console.log('change', e.target.value)}
                ></titanium-date-input>
                <titanium-date-input
                  required
                  filled
                  label="Filled"
                  @change=${(e) => console.log('change', e.target.value)}
                ></titanium-date-input>
              </two-column>

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
            this.input.reset();
            this.filledInput.reset();
        }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.input.reportValidity();
            this.filledInput.reportValidity();
        }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With pre-filled value</h1>
              <titanium-date-input label="Pre-filled" .value=${'2023-12-18'}></titanium-date-input>
            </div>

            <div>
              <h1>Disabled and required</h1>
              <two-column>
                <titanium-date-input disabled label="Disabled" .value=${'2023-12-18'}></titanium-date-input>
                <titanium-date-input required label="Required"></titanium-date-input>
              </two-column>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    query('titanium-date-input')
], TitaniumDateInputDemo.prototype, "input", null);
__decorate([
    query('titanium-date-input[filled]')
], TitaniumDateInputDemo.prototype, "filledInput", null);
TitaniumDateInputDemo = __decorate([
    customElement('titanium-date-input-demo')
], TitaniumDateInputDemo);
export { TitaniumDateInputDemo };
//# sourceMappingURL=titanium-date-input-demo.js.map