import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/outlined-button';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/youtube-input/youtube-input';
/* playground-fold */
let TitaniumYoutubeInputPlayground = class TitaniumYoutubeInputPlayground extends LitElement {
    #inputs_accessor_storage;
    get inputs() { return this.#inputs_accessor_storage; }
    set inputs(value) { this.#inputs_accessor_storage = value; }
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
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Default</h1>
      <div>
        <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
      </div>

      <h1>Methods</h1>
      <div>
        <titanium-youtube-input required label="Video" @input=${(e) => console.log(e.target.value)}></titanium-youtube-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </div>
    `;
    }
};
__decorate([
    queryAll('titanium-youtube-input')
], TitaniumYoutubeInputPlayground.prototype, "inputs", null);
__decorate([
    query('titanium-youtube-input[required]')
], TitaniumYoutubeInputPlayground.prototype, "requiredInput", null);
TitaniumYoutubeInputPlayground = __decorate([
    customElement('titanium-youtube-input-playground')
], TitaniumYoutubeInputPlayground);
export { TitaniumYoutubeInputPlayground };
//# sourceMappingURL=titanium-youtube-input-playground.js.map