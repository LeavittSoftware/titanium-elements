import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/icon/icon';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import StoryStyles from '../styles/story-styles';
dayjs.extend(duration);
let TitaniumDurationInputDemo = class TitaniumDurationInputDemo extends LitElement {
    #filledDuration_accessor_storage = dayjs.duration(14400);
    get filledDuration() { return this.#filledDuration_accessor_storage; }
    set filledDuration(value) { this.#filledDuration_accessor_storage = value; }
    #outlinedDuration_accessor_storage = dayjs.duration(14400);
    get outlinedDuration() { return this.#outlinedDuration_accessor_storage; }
    set outlinedDuration(value) { this.#outlinedDuration_accessor_storage = value; }
    #filledInput_accessor_storage;
    get filledInput() { return this.#filledInput_accessor_storage; }
    set filledInput(value) { this.#filledInput_accessor_storage = value; }
    #outlinedInput_accessor_storage;
    get outlinedInput() { return this.#outlinedInput_accessor_storage; }
    set outlinedInput(value) { this.#outlinedInput_accessor_storage = value; }
    static { this.styles = [
        StoryStyles,
        css `
      titanium-filled-duration-input,
      titanium-outlined-duration-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium duration input" level1Href="/titanium-duration-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p>
                <kbd>titanium-duration-input</kbd> is deprecated. Use <kbd>titanium-filled-duration-input</kbd> or
                <kbd>titanium-outlined-duration-input</kbd> instead (shown below).
              </p>
            </deprecation-notice>
            <story-header name="Titanium filled duration input" className="TitaniumFilledDurationInput"></story-header>

            <div>
              <h1>Filled duration input</h1>

              <titanium-filled-duration-input
                required
                label="Filled Duration"
                .duration=${this.filledDuration}
                @change=${(e) => {
            this.filledDuration = e.target.duration;
        }}
              ></titanium-filled-duration-input>
              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
            this.filledInput.reset();
        }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.filledInput.focus();
        }}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.filledInput.reportValidity();
        }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>

            <md-divider></md-divider>

            <story-header name="Titanium outlined duration input" className="TitaniumOutlinedDurationInput"></story-header>

            <div>
              <h1>Outlined duration input</h1>

              <titanium-outlined-duration-input
                required
                label="Outlined Duration"
                .duration=${this.outlinedDuration}
                @change=${(e) => {
            this.outlinedDuration = e.target.duration;
        }}
              ></titanium-outlined-duration-input>

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
            this.outlinedInput.reset();
        }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.outlinedInput.focus();
        }}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
            this.outlinedInput.reportValidity();
        }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With different durations</h1>
              <titanium-outlined-duration-input label="1 hour" .duration=${dayjs.duration(3600)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="30 minutes" .duration=${dayjs.duration(1800)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="2 hours 30 min" .duration=${dayjs.duration(9000)}></titanium-outlined-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-outlined-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], TitaniumDurationInputDemo.prototype, "filledDuration", null);
__decorate([
    state()
], TitaniumDurationInputDemo.prototype, "outlinedDuration", null);
__decorate([
    query('titanium-filled-duration-input')
], TitaniumDurationInputDemo.prototype, "filledInput", null);
__decorate([
    query('titanium-outlined-duration-input')
], TitaniumDurationInputDemo.prototype, "outlinedInput", null);
TitaniumDurationInputDemo = __decorate([
    customElement('titanium-duration-input-demo')
], TitaniumDurationInputDemo);
export { TitaniumDurationInputDemo };
//# sourceMappingURL=titanium-duration-input-demo.js.map