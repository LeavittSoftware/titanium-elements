import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/button/outlined-button';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
dayjs.extend(duration);
/* playground-fold-end */
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
/* playground-fold */
let TitaniumDurationInputPlayground = class TitaniumDurationInputPlayground extends LitElement {
    #duration_accessor_storage = dayjs.duration(14400);
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    #filledDuration_accessor_storage = dayjs.duration(14400);
    get filledDuration() { return this.#filledDuration_accessor_storage; }
    set filledDuration(value) { this.#filledDuration_accessor_storage = value; }
    #outlinedDuration_accessor_storage = dayjs.duration(14400);
    get outlinedDuration() { return this.#outlinedDuration_accessor_storage; }
    set outlinedDuration(value) { this.#outlinedDuration_accessor_storage = value; }
    #input_accessor_storage;
    get input() { return this.#input_accessor_storage; }
    set input(value) { this.#input_accessor_storage = value; }
    #filledInput_accessor_storage;
    get filledInput() { return this.#filledInput_accessor_storage; }
    set filledInput(value) { this.#filledInput_accessor_storage = value; }
    #outlinedInput_accessor_storage;
    get outlinedInput() { return this.#outlinedInput_accessor_storage; }
    set outlinedInput(value) { this.#outlinedInput_accessor_storage = value; }
    static { this.styles = [
        h1,
        p,
        css `
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

      p {
        margin-top: 24px;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Titanium duration input (deprecated)</h1>
      <div>
        <titanium-duration-input
          .duration=${this.duration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event) => {
            this.duration = event.target.duration;
        }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html `${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.input.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.input.required = !this.input.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.input.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Outlined duration input</h1>
      <div>
        <titanium-outlined-duration-input
          .duration=${this.outlinedDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event) => {
            this.outlinedDuration = event.target.duration;
        }}
        ></titanium-outlined-duration-input>
        <p>Duration is: ${this.outlinedDuration ? html `${this.outlinedDuration.asSeconds()} seconds` : String(this.outlinedDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.outlinedInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.outlinedInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.outlinedInput.required = !this.outlinedInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.outlinedInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Filled duration input</h1>
      <div>
        <titanium-filled-duration-input
          .duration=${this.filledDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event) => {
            this.filledDuration = event.target.duration;
        }}
        ></titanium-filled-duration-input>
        <p>Duration is: ${this.filledDuration ? html `${this.filledDuration.asSeconds()} seconds` : String(this.filledDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.filledInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.filledInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.filledInput.required = !this.filledInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.filledInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>
    `;
    }
};
__decorate([
    state()
], TitaniumDurationInputPlayground.prototype, "duration", null);
__decorate([
    state()
], TitaniumDurationInputPlayground.prototype, "filledDuration", null);
__decorate([
    state()
], TitaniumDurationInputPlayground.prototype, "outlinedDuration", null);
__decorate([
    query('titanium-duration-input')
], TitaniumDurationInputPlayground.prototype, "input", null);
__decorate([
    query('titanium-filled-duration-input')
], TitaniumDurationInputPlayground.prototype, "filledInput", null);
__decorate([
    query('titanium-outlined-duration-input')
], TitaniumDurationInputPlayground.prototype, "outlinedInput", null);
TitaniumDurationInputPlayground = __decorate([
    customElement('titanium-duration-input-playground')
], TitaniumDurationInputPlayground);
export { TitaniumDurationInputPlayground };
//# sourceMappingURL=titanium-duration-input-playground.js.map