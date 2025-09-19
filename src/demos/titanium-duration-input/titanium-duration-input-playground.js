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
import '@leavittsoftware/web/titanium/duration-input/duration-input';
/* playground-fold */
let TitaniumDurationInputPlayground = class TitaniumDurationInputPlayground extends LitElement {
    #duration_accessor_storage = dayjs.duration(14400);
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    #requiredInput_accessor_storage;
    get requiredInput() { return this.#requiredInput_accessor_storage; }
    set requiredInput(value) { this.#requiredInput_accessor_storage = value; }
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
      <h1>Default</h1>
      <div>
        <titanium-duration-input
          label="Duration"
          helperPersistent
          .duration=${this.duration}
          outlined
          @duration-change=${(event) => {
            this.duration = event.target.duration;
        }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html `${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
      </div>

      <h1>Demo</h1>
      <div>
        <titanium-duration-input demo required validationMessage="This duration is required" label="Duration" helperPersistent outlined
          ><md-icon slot="leading-icon"> timer </md-icon>
          <md-icon slot="trailing-icon"> timer </md-icon>
        </titanium-duration-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.requiredInput.required = !this.requiredInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.requiredInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>
    `;
    }
};
__decorate([
    state()
], TitaniumDurationInputPlayground.prototype, "duration", null);
__decorate([
    query('titanium-duration-input[demo]')
], TitaniumDurationInputPlayground.prototype, "requiredInput", null);
TitaniumDurationInputPlayground = __decorate([
    customElement('titanium-duration-input-playground')
], TitaniumDurationInputPlayground);
export { TitaniumDurationInputPlayground };
//# sourceMappingURL=titanium-duration-input-playground.js.map