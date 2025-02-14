import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
import { repeat } from 'lit/directives/repeat.js';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/data-table/data-table';
let DraggablePlayground = class DraggablePlayground extends LitElement {
    #draggableItems_accessor_storage = [];
    get draggableItems() { return this.#draggableItems_accessor_storage; }
    set draggableItems(value) { this.#draggableItems_accessor_storage = value; }
    firstUpdated() {
        this.draggableItems = [
            { Name: 'Model 3', Appearance: 'slick' },
            { Name: 'Model X', Appearance: 'slick' },
            { Name: 'Model Y', Appearance: 'slick' },
            { Name: 'Model S', Appearance: 'slick' },
            { Name: 'Cybertruck', Appearance: 'ugly' },
            { Name: 'Tesla Semi', Appearance: 'ugly' },
            { Name: 'Model X Plaid', Appearance: 'plaid' },
            { Name: 'Model S Plaid', Appearance: 'plaid' },
            { Name: 'Model S Plaid+', Appearance: 'plaid' },
            { Name: 'Gen. 2 Roadster', Appearance: 'slick' },
        ];
    }
    static { this.styles = [
        h1,
        h2,
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

      h2 {
        margin-top: 24px;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Draggable</h1>
      <p>Table with draggable items</p>
      <div>
        <titanium-data-table
          header="Draggable"
          .items=${this.draggableItems}
          @titanium-data-table-items-reorder=${async () => {
            this.draggableItems = structuredClone(this.draggableItems);
            await this.requestUpdate('draggableItems');
        }}
        >
          <titanium-data-table-header slot="table-headers" large column-name="Name" no-sort title="Name"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" column-name="Appearance" no-sort title="Appearance"></titanium-data-table-header>
          <titanium-data-table-header right slot="table-headers" column-name="Link" no-sort title="Link"></titanium-data-table-header>

          ${repeat(this.draggableItems ?? [], (item) => item.Name, (item) => html `
              <titanium-data-table-item enable-dragging .item=${item} slot="items">
                <row-item large ellipsis title=${item.Name ?? ''}>${item.Name ?? '-'}</row-item>
                <row-item title=${item.Appearance ?? ''}>${item.Appearance ?? '-'}</row-item>
                <row-item right><a href="#">Learn More</a></row-item>
              </titanium-data-table-item>
            `)}
        </titanium-data-table>
        <h2>Results</h2>
        <p>${this.draggableItems.map((o) => o.Name).join(',')}</p>
      </div>
    `;
    }
};
__decorate([
    state()
], DraggablePlayground.prototype, "draggableItems", null);
DraggablePlayground = __decorate([
    customElement('draggable-playground')
], DraggablePlayground);
export { DraggablePlayground };
//# sourceMappingURL=draggable.js.map