import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/card/card';
import '@material/web/button/outlined-button';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/search-input/search-input';
/* playground-fold */
let TitaniumSearchInputItemPlayground = class TitaniumSearchInputItemPlayground extends LitElement {
    #methodFocus_accessor_storage;
    get methodFocus() { return this.#methodFocus_accessor_storage; }
    set methodFocus(value) { this.#methodFocus_accessor_storage = value; }
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
        <titanium-search-input @input=${(e) => console.log(e.target.value)}></titanium-search-input>
      </div>

      <h1>Disabled</h1>
      <div>
        <titanium-search-input disabled></titanium-search-input>
      </div>

      <h1>Placeholder text</h1>
      <div>
        <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
      </div>

      <h1>Collapse Prevented</h1>
      <div>
        <titanium-search-input prevent-collapse></titanium-search-input>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <titanium-card>
        <div>
          <titanium-search-input method-focused></titanium-search-input>
          <section buttons>
            <md-outlined-button @click=${() => this.methodFocus.focus()}>Focus</md-outlined-button>
          </section>
        </div>
      </titanium-card>
    `;
    }
};
__decorate([
    query('titanium-search-input[method-focused]')
], TitaniumSearchInputItemPlayground.prototype, "methodFocus", null);
TitaniumSearchInputItemPlayground = __decorate([
    customElement('titanium-search-input-playground')
], TitaniumSearchInputItemPlayground);
export { TitaniumSearchInputItemPlayground };
//# sourceMappingURL=titanium-search-input-playground.js.map