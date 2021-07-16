import { __decorate } from "tslib";
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-search-input';
import '@leavittsoftware/titanium-chip';
import { css, customElement, html, LitElement, state } from 'lit-element';
let DataTableDemo = class DataTableDemo extends LitElement {
    constructor() {
        super(...arguments);
        this.page = 0;
        this.resultTotal = 0;
        this.searchTerm = '';
        this.cars = [
            { name: 'Model 2', miles: '170 miles', price: '$35,315', metadata: '', withSlot: true },
            { name: 'Cyber Truck', miles: '512 miles', price: '$65,315', metadata: '' },
            { name: 'Model S', miles: '512 miles', price: '$84,315', metadata: '' },
            { name: 'Model 3', miles: '310 miles', price: '$33,315', metadata: '' },
            { name: 'Model X', miles: '328 miles', price: '$93,815', metadata: '' },
            {
                name: 'Model Y',
                miles: '300 miles',
                price: '$43,700',
                metadata: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            },
        ];
        this.selected = [];
    }
    // @query('titanium-data-table') private dataTable!: TitaniumDataTableElement;
    _reload() {
        console.log('todo');
    }
    render() {
        var _a, _b;
        return html `
      <titanium-data-table
        @titanium-data-table-item-drop=${() => this.requestUpdate('cars')}
        single-select
        header="Tesla Motors Draggable Demo"
        @selected-changed=${(e) => {
            this.selected = [...e.detail];
        }}
        @page-changed=${(e) => {
            this.page = e.detail;
            this._reload();
        }}
        @take-changed=${() => {
            this.page = 0;
            this._reload();
        }}
        .count=${this.resultTotal}
        .page=${this.page}
        .items=${this.cars}
        .searchTerm=${this.searchTerm}
      >
        <div slot="table-actions" style="position: relative;">
          <mwc-icon-button table-action-button id="button" icon="more_vert" label="Open Menu"></mwc-icon-button>
          <mwc-menu
            table-action-menu
            .anchor=${(_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('mwc-icon-button[table-action-button]')) !== null && _b !== void 0 ? _b : null}
            corner="BOTTOM_END"
            menuCorner="END"
          >
            <mwc-list-item graphic="icon">
              <span>Reload list</span>
              <mwc-icon slot="graphic">refresh</mwc-icon>
            </mwc-list-item>
          </mwc-menu>
        </div>

        <mwc-icon-button
          slot="selected-actions"
          title="View crash report details"
          @click=${() => {
            const item = this.selected[0];
            if (!item) {
                return;
            }
            // this.dataTable.clearSelection();
        }}
          icon="visibility"
          ?hidden=${this.selected.length != 1}
        ></mwc-icon-button>

        <titanium-search-input
          title="Search crash reports"
          slot="search-button"
          placeholder="Search"
          .value=${this.searchTerm}
          @value-changed=${(e) => {
            this.searchTerm = e.detail;
            this.page = 0;
            this.cars = [];
        }}
        ></titanium-search-input>

        <mwc-icon-button slot="filter-button" title="Filter" icon="filter_list"></mwc-icon-button>

        <titanium-chip closeable slot="filters" label="Start"></titanium-chip>
        <titanium-chip closeable slot="filters" label="End "></titanium-chip>

        <titanium-data-table-header slot="table-headers" title="Model" large no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Range" desktop no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Metadata" right desktop no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Price" right width="100px" desktop no-sort></titanium-data-table-header>

        ${this.cars.map(item => {
            var _a, _b, _c;
            return html `
            <titanium-data-table-item
              .item=${item}
              slot="items"
              enable-dragging
              @titanium-data-table-item-navigate=${() => {
                // this.dataTable.clearSelection();
            }}
            >
              <row-item ellipsis title=${(_a = item.name) !== null && _a !== void 0 ? _a : ''} large>${item.name}</row-item>
              <row-item desktop>${(_b = item.miles) !== null && _b !== void 0 ? _b : '-'}</row-item>
              <row-item desktop>${(_c = item.metadata) !== null && _c !== void 0 ? _c : '-'}</row-item>
              <row-item desktop width="100px" right>${item.price}</row-item>
              ${item.withSlot
                ? html ` <div slot="item-footer" style="padding: 24px">
                    <img style="height:40px;" src="https://www.carlogos.org/car-logos/tesla-model-3-logo-2500x300.png" />
                  </div>`
                : ''}
            </titanium-data-table-item>
          `;
        })}
      </titanium-data-table>
    `;
    }
};
DataTableDemo.styles = [
    css `
      :host {
        display: block;
        margin: 16px 0;
      }
    `,
];
__decorate([
    state()
], DataTableDemo.prototype, "page", void 0);
__decorate([
    state()
], DataTableDemo.prototype, "resultTotal", void 0);
__decorate([
    state()
], DataTableDemo.prototype, "searchTerm", void 0);
__decorate([
    state()
], DataTableDemo.prototype, "cars", void 0);
__decorate([
    state()
], DataTableDemo.prototype, "selected", void 0);
DataTableDemo = __decorate([
    customElement('data-table-demo')
], DataTableDemo);
export default DataTableDemo;
//# sourceMappingURL=data-table-demo.js.map