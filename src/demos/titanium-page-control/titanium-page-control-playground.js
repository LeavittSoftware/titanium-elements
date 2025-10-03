import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/data-table/page-control';
import '@material/web/chips/suggestion-chip';
/* playground-fold */
let TitaniumPageControlPlayground = class TitaniumPageControlPlayground extends LitElement {
    #pageControl_accessor_storage;
    get pageControl() { return this.#pageControl_accessor_storage; }
    set pageControl(value) { this.#pageControl_accessor_storage = value; }
    #count_accessor_storage = 25;
    get count() { return this.#count_accessor_storage; }
    set count(value) { this.#count_accessor_storage = value; }
    #data_accessor_storage;
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #filteredData_accessor_storage;
    get filteredData() { return this.#filteredData_accessor_storage; }
    set filteredData(value) { this.#filteredData_accessor_storage = value; }
    firstUpdated() {
        this.data = Array(25)
            .fill(null)
            .map((_, idx) => ({
            id: idx + 1,
            name: 'Bob',
        }));
        this.#reload();
    }
    #reload() {
        const start = this.pageControl.take * this.pageControl.page;
        this.filteredData = this.data.slice(start, start + this.pageControl.take);
    }
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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <div>
        <h1>Default</h1>
        <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
      </div>

      <div>
        <h1>Disabled</h1>
        <titanium-page-control disabled></titanium-page-control>
      </div>

      <div>
        <h1>Filled</h1>
        <titanium-page-control filled></titanium-page-control>
      </div>

      <div>
        <h1>Full example</h1>
        ${this.filteredData?.map((item) => html ` <md-suggestion-chip label="${item?.name} #${item?.id}"></md-suggestion-chip> `)}
        <titanium-page-control
          main
          .pageSizes=${[2, 4, 6, 8]}
          .count=${this.count}
          localStorageKey="demoPageTake2"
          @action=${() => {
            this.#reload();
        }}
        ></titanium-page-control>
      </div>
    `;
    }
};
__decorate([
    query('titanium-page-control[main]')
], TitaniumPageControlPlayground.prototype, "pageControl", null);
__decorate([
    state()
], TitaniumPageControlPlayground.prototype, "count", null);
__decorate([
    state()
], TitaniumPageControlPlayground.prototype, "data", null);
__decorate([
    state()
], TitaniumPageControlPlayground.prototype, "filteredData", null);
TitaniumPageControlPlayground = __decorate([
    customElement('titanium-page-control-playground')
], TitaniumPageControlPlayground);
export { TitaniumPageControlPlayground };
//# sourceMappingURL=titanium-page-control-playground.js.map