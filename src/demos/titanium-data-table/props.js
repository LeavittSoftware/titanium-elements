import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/data-table/data-table';
/* playground-fold */
let DraggablePlayground = class DraggablePlayground extends LitElement {
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
        margin: 24px 0 36px 0;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Props and slots examples</h1>
      <p>Table with header, pagesSize, count, searchTerm, disable-select and slots</p>
      <div>
        <titanium-data-table header="My Header" disable-select .pageSizes=${[1, 2, 3, 4]} .count=${3} searchTerm="www.google.com">
          <span slot="footer-buttons" style="background-color: aliceblue">Footer buttons slot</span>
          <span slot="filters" style="background-color: aliceblue">Filters slot</span>
          <span slot="filter-button" style="background-color: aliceblue">Filter button slot</span>
          <span slot="search-button" style="background-color: aliceblue">Search button slot</span>
          <span slot="table-headers" style="background-color: aliceblue">Headers slot</span>
          <span slot="table-actions" style="background-color: aliceblue">Table action slot</span>
          <span slot="items" style="background-color: aliceblue">Items slot</span>
        </titanium-data-table>
      </div>
    `;
    }
};
DraggablePlayground = __decorate([
    customElement('props-playground')
], DraggablePlayground);
export { DraggablePlayground };
//# sourceMappingURL=props.js.map