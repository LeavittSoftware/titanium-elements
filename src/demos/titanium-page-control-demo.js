import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/page-control';
import '@material/web/chips/suggestion-chip';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import StoryStyles from '../styles/story-styles';
let TitaniumPageControlDemo = class TitaniumPageControlDemo extends LitElement {
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
        StoryStyles,
        css `
      suggestion-chip-group {
        display: flex;
        flex-wrap: wrap;
        margin: 24px 0;
        gap: 12px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium page control" level1Href="/titanium-page-control" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium page control" className="TitaniumPageControl"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic page control with local storage</p>
              <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled page control</p>
              <titanium-page-control disabled></titanium-page-control>
            </div>

            <div>
              <h1>Filled</h1>
              <p>Filled page control variant</p>
              <titanium-page-control filled></titanium-page-control>
            </div>

            <div>
              <h1>Full example</h1>
              <p>Complete page control with data pagination</p>
              <suggestion-chip-group>
                ${this.filteredData?.map((item) => html ` <md-suggestion-chip label="${item?.name} #${item?.id}"></md-suggestion-chip> `)}
              </suggestion-chip-group>
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

            <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    query('titanium-page-control[main]')
], TitaniumPageControlDemo.prototype, "pageControl", null);
__decorate([
    state()
], TitaniumPageControlDemo.prototype, "count", null);
__decorate([
    state()
], TitaniumPageControlDemo.prototype, "data", null);
__decorate([
    state()
], TitaniumPageControlDemo.prototype, "filteredData", null);
TitaniumPageControlDemo = __decorate([
    customElement('titanium-page-control-demo')
], TitaniumPageControlDemo);
export { TitaniumPageControlDemo };
//# sourceMappingURL=titanium-page-control-demo.js.map