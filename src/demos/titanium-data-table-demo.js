import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/data-table-item';
import '@leavittsoftware/web/titanium/data-table/data-table-header';
import '@leavittsoftware/web/titanium/search-input/search-input';
import '@material/web/dialog/dialog';
import '@material/web/button/outlined-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';
import '@material/web/switch/switch';
import '@material/web/chips/input-chip';
import '@material/web/button/text-button';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/data-table/data-table';
import { Debouncer, getSearchTokens } from '@leavittsoftware/web/titanium/helpers/helpers';
import { FilterController } from '@leavittsoftware/web/titanium/data-table/filter-controller';
import { repeat } from 'lit/directives/repeat.js';
import StoryStyles from '../styles/story-styles';
const allTeslas = [
    { Name: 'Model 3', Appearance: 'Slick' },
    { Name: 'Model X', Appearance: 'Slick' },
    { Name: 'Model Y', Appearance: 'Slick' },
    { Name: 'Model S', Appearance: 'Slick' },
    { Name: 'Cybertruck', Appearance: 'Ugly' },
    { Name: 'Tesla Semi', Appearance: 'Ugly' },
    { Name: 'Model X Plaid', Appearance: 'Plaid' },
    { Name: 'Model S Plaid', Appearance: 'Plaid' },
    { Name: 'Model S Plaid+', Appearance: 'Plaid' },
    { Name: 'Gen. 2 Roadster', Appearance: 'Slick' },
];
let TitaniumDataTableDemo = class TitaniumDataTableDemo extends LitElement {
    #allItems_accessor_storage = [];
    get allItems() { return this.#allItems_accessor_storage; }
    set allItems(value) { this.#allItems_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #selected_accessor_storage = [];
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #resultTotal_accessor_storage = 0;
    get resultTotal() { return this.#resultTotal_accessor_storage; }
    set resultTotal(value) { this.#resultTotal_accessor_storage = value; }
    #sortDirection_accessor_storage = 'asc';
    get sortDirection() { return this.#sortDirection_accessor_storage; }
    set sortDirection(value) { this.#sortDirection_accessor_storage = value; }
    #sortBy_accessor_storage = 'Name';
    get sortBy() { return this.#sortBy_accessor_storage; }
    set sortBy(value) { this.#sortBy_accessor_storage = value; }
    #filterController_accessor_storage;
    get filterController() { return this.#filterController_accessor_storage; }
    set filterController(value) { this.#filterController_accessor_storage = value; }
    #singleSelect_accessor_storage = false;
    get singleSelect() { return this.#singleSelect_accessor_storage; }
    set singleSelect(value) { this.#singleSelect_accessor_storage = value; }
    #disableSelect_accessor_storage = false;
    get disableSelect() { return this.#disableSelect_accessor_storage; }
    set disableSelect(value) { this.#disableSelect_accessor_storage = value; }
    #disablePaging_accessor_storage = false;
    get disablePaging() { return this.#disablePaging_accessor_storage; }
    set disablePaging(value) { this.#disablePaging_accessor_storage = value; }
    #draggableItems_accessor_storage = [];
    get draggableItems() { return this.#draggableItems_accessor_storage; }
    set draggableItems(value) { this.#draggableItems_accessor_storage = value; }
    #dataTable_accessor_storage;
    get dataTable() { return this.#dataTable_accessor_storage; }
    set dataTable(value) { this.#dataTable_accessor_storage = value; }
    #filterModal_accessor_storage;
    get filterModal() { return this.#filterModal_accessor_storage; }
    set filterModal(value) { this.#filterModal_accessor_storage = value; }
    constructor() {
        super();
        this.filterController = new FilterController('/titanium-data-table');
        this.filterController.setFilter('Appearance', (val) => `BasketId eq ${val}`);
        this.filterController.subscribeToFilterChange(async () => {
            if (this.dataTable) {
                this.dataTable?.resetPage();
                this.#reload();
            }
        });
        this.filterController.loadFromQueryString();
    }
    firstUpdated() {
        this.#reset();
        this.items = this.allItems.slice(0);
        this.draggableItems = [
            { Name: 'Model 3', Appearance: 'Slick' },
            { Name: 'Model X', Appearance: 'Slick' },
            { Name: 'Model Y', Appearance: 'Slick' },
            { Name: 'Model S', Appearance: 'Slick' },
            { Name: 'Cybertruck', Appearance: 'Ugly' },
            { Name: 'Tesla Semi', Appearance: 'Ugly' },
            { Name: 'Model X Plaid', Appearance: 'Plaid' },
            { Name: 'Model S Plaid', Appearance: 'Plaid' },
            { Name: 'Model S Plaid+', Appearance: 'Plaid' },
            { Name: 'Gen. 2 Roadster', Appearance: 'Slick' },
        ];
    }
    #reload() {
        this.getItemsAsync(this.searchTerm);
    }
    #reset() {
        this.allItems = allTeslas.map((o) => ({ Name: o.Name, Appearance: o.Appearance }));
        this.#reload();
    }
    #onSortDirectionChange(e) {
        this.sortDirection = e.detail;
        this.dataTable.resetPage();
        this.#reload();
    }
    #onSortByChange(e) {
        this.sortBy = e.detail;
        this.dataTable.resetPage();
        this.#reload();
    }
    #doSearchDebouncer = new Debouncer((searchTerm) => this.getItemsAsync(searchTerm));
    async getItemsAsync(searchTerm) {
        const searchTokens = getSearchTokens(searchTerm);
        const take = await this.dataTable.getTake();
        const page = await this.dataTable.getPage();
        const sortDirection = this.sortDirection === 'asc' ? 1 : -1;
        let filterItems = this.allItems.filter((o) => searchTokens.every((st) => o.Name?.trim().toLowerCase()?.includes(st.trim().toLowerCase())));
        const appearanceValue = this.filterController.getValue('Appearance');
        if (appearanceValue) {
            filterItems = filterItems.filter((o) => o.Appearance === appearanceValue);
        }
        this.items = filterItems
            .slice(0)
            .sort((a, b) => (a[this.sortBy] === b[this.sortBy] ? 0 : (a[this.sortBy] ?? '') < (b[this.sortBy] ?? '') ? sortDirection : -sortDirection))
            .slice(take * page, take * page + take);
        this.resultTotal = filterItems.length;
    }
    static { this.styles = [
        StoryStyles,
        css `
      titanium-data-table {
        margin: 24px 0 36px 0;
        --titanium-page-control-select-width: 108px;
      }

      knob-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
        margin-top: 12px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table" level1Href="/titanium-data-table" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-data-table</kbd> is deprecated. Use <kbd>titanium-data-table-core</kbd> instead (shown in separate demo).</p>
            </deprecation-notice>
            <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>

            <div>
              <h1>Full working example</h1>
              <p>Table with items and method controls</p>

              <titanium-data-table
                header="Tesla Motors"
                .pageSizes=${[3, 5, 10, 15, 100, 20000]}
                @selected-changed=${(e) => {
            this.selected = [...e.detail];
        }}
                @paging-changed=${() => {
            this.#reload();
        }}
                narrow-max-width="800"
                .count=${this.resultTotal}
                .items=${this.items}
                .searchTerm=${this.searchTerm}
                ?single-select=${this.singleSelect}
                ?disable-select=${this.disableSelect}
                ?disable-paging=${this.disablePaging}
              >
                <titanium-search-input
                  slot="search-button"
                  placeholder="Search"
                  .value=${this.searchTerm}
                  @input=${(e) => {
            this.searchTerm = e.target.value;
            this.dataTable.resetPage();
            this.#doSearchDebouncer.debounce(this.searchTerm);
        }}
                ></titanium-search-input>

                <md-icon-button
                  id="menu-anchor"
                  aria-haspopup="true"
                  aria-controls="menu"
                  aria-expanded="false"
                  @click=${(e) => {
            const root = e.target.getRootNode();
            const menu = root.querySelector('#menu');
            menu.open = !menu.open;
        }}
                >
                  <md-icon>more_vert</md-icon>
                </md-icon-button>

                <md-menu
                  id="menu"
                  anchor="menu-anchor"
                  @close-menu=${(e) => {
            e.detail.itemPath?.[0]?.action?.();
        }}
                >
                  <md-menu-item headline="Reload list (reset)" .action=${() => this.#reset()}>
                    <md-icon refresh slot="start">refresh</md-icon>
                    Refresh
                  </md-menu-item>
                </md-menu>

                <md-filled-tonal-button
                  slot="add-button"
                  @click=${() => {
            const car = allTeslas[this.allItems.length % allTeslas.length];
            const newItem = { Name: car.Name, Appearance: car.Appearance };
            this.allItems.push(newItem);
            this.#reload();
        }}
                >
                  <md-icon slot="icon">add</md-icon>
                  Add item
                </md-filled-tonal-button>

                <data-table-demo-filter-modal slot="filters" .filterController=${this.filterController}></data-table-demo-filter-modal>

                <md-icon-button
                  slot="filter-button"
                  @click=${async () => {
            this.filterModal.open();
        }}
                >
                  <md-icon>filter_list</md-icon>
                </md-icon-button>

                <md-icon-button
                  slot="selected-actions"
                  ?disabled=${this.selected?.length > 1}
                  @click=${() => {
            this.allItems = this.allItems.filter((f) => !this.selected.includes(f));
            this.resultTotal = this.resultTotal - this.selected.length;
            this.#reload();
        }}
                >
                  <md-icon>delete</md-icon>
                </md-icon-button>

                <titanium-data-table-header
                  slot="table-headers"
                  large
                  column-name="Name"
                  title="Name"
                  @sort-by-changed=${this.#onSortByChange}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#onSortDirectionChange}
                ></titanium-data-table-header>

                <titanium-data-table-header
                  slot="table-headers"
                  column-name="Appearance"
                  title="Appearance"
                  width="130px"
                  @sort-by-changed=${this.#onSortByChange}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#onSortDirectionChange}
                ></titanium-data-table-header>

                <titanium-data-table-header
                  slot="table-headers"
                  column-name="Appearance"
                  title="Appearance"
                  width="130px"
                  @sort-by-changed=${this.#onSortByChange}
                  .sortBy=${this.sortBy}
                  .sortDirection=${this.sortDirection}
                  @sort-direction-changed=${this.#onSortDirectionChange}
                ></titanium-data-table-header>

                ${repeat(this.items ?? [], (item) => item.Name, (item) => html `
                    <titanium-data-table-item
                      ?disable-select=${this.disableSelect}
                      @titanium-data-table-item-navigate=${() => {
            this.dataTable.clearSelection();
        }}
                      .item=${item}
                      slot="items"
                    >
                      <row-item large ellipsis title=${item.Name ?? ''}>${item.Name ?? '-'}</row-item>
                      <row-item width="130px" title=${item.Appearance ?? ''}>${item.Appearance ?? '-'}</row-item>
                      <row-item width="130px" title=${item.Appearance ?? ''}>${item.Appearance ?? '-'}</row-item>
                    </titanium-data-table-item>
                  `)}
              </titanium-data-table>

              <h2>Knobs</h2>
              <knob-container>
                <md-switch
                  id="singleSelectSwitch"
                  .selected=${this.singleSelect}
                  @click=${() => {
            this.dataTable.clearSelection();
            this.singleSelect = !this.singleSelect;
        }}
                ></md-switch>
                <label for="singleSelectSwitch">Single Select</label>

                <md-switch
                  id="disableSelectSwitch"
                  .selected=${this.disableSelect}
                  @click=${() => {
            this.dataTable.clearSelection();
            this.disableSelect = !this.disableSelect;
        }}
                ></md-switch>
                <label for="disableSelectSwitch">Disable Select</label>

                <md-switch
                  id="disablePagingSwitch"
                  .selected=${this.disablePaging}
                  @click=${() => {
            this.disablePaging = !this.disablePaging;
        }}
                ></md-switch>
                <label for="disablePagingSwitch">Disable Paging</label>

                <md-filled-tonal-button raised @click=${() => this.dataTable.resetPage()}>Reset page</md-filled-tonal-button>
                <md-filled-tonal-button raised @click=${() => this.dataTable.clearSelection()}>Clear selection</md-filled-tonal-button>
              </knob-container>
            </div>

            <div>
              <h1>Draggable</h1>
              <p>Table with draggable items</p>
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

            <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "allItems", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "items", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "selected", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "searchTerm", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "resultTotal", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "sortDirection", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "sortBy", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "filterController", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "singleSelect", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "disableSelect", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "disablePaging", null);
__decorate([
    state()
], TitaniumDataTableDemo.prototype, "draggableItems", null);
__decorate([
    query('titanium-data-table')
], TitaniumDataTableDemo.prototype, "dataTable", null);
__decorate([
    query('data-table-demo-filter-modal')
], TitaniumDataTableDemo.prototype, "filterModal", null);
TitaniumDataTableDemo = __decorate([
    customElement('titanium-data-table-demo')
], TitaniumDataTableDemo);
export { TitaniumDataTableDemo };
let DataTableDemoFilterModal = class DataTableDemoFilterModal extends LitElement {
    #filterController_accessor_storage;
    get filterController() { return this.#filterController_accessor_storage; }
    set filterController(value) { this.#filterController_accessor_storage = value; }
    #appearance_accessor_storage;
    get appearance() { return this.#appearance_accessor_storage; }
    set appearance(value) { this.#appearance_accessor_storage = value; }
    #dialog_accessor_storage;
    get dialog() { return this.#dialog_accessor_storage; }
    set dialog(value) { this.#dialog_accessor_storage = value; }
    async firstUpdated() {
        this.filterController.subscribeToFilterChange(async () => {
            this.requestUpdate('filterController');
        });
    }
    async open() {
        this.dialog.show();
    }
    #preventDialogOverflow() {
        const dialog = this.dialog.shadowRoot?.querySelector('dialog');
        const container = dialog?.querySelector('.container');
        const scroller = container?.querySelector('.scroller');
        if (scroller) {
            scroller.style.overflow = 'initial';
        }
        if (container) {
            container.style.overflow = 'initial';
        }
    }
    #restoreDialogOverflow() {
        const dialog = this.dialog.shadowRoot?.querySelector('dialog');
        const container = dialog?.querySelector('.container');
        const scroller = container?.querySelector('.scroller');
        if (scroller) {
            scroller.style.overflow = '';
        }
        if (container) {
            container.style.overflow = '';
        }
    }
    static { this.styles = [
        css `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      md-dialog {
        width: 100%;
      }

      md-dialog form {
        container-type: inline-size;
      }

      md-outlined-select {
        width: 100%;
      }

      [hidden] {
        display: none !important;
      }
    `,
    ]; }
    render() {
        return html `
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue('Appearance')}
        label=${this.filterController.getValue('Appearance') ?? ''}
        @remove=${(e) => {
            e.preventDefault();
            this.filterController.setValue('Appearance', null);
            this.requestUpdate('filterController');
        }}
      >
        <md-icon slot="icon">conditions</md-icon>
      </md-input-chip>

      <md-dialog type="alert">
        <div slot="headline">Filter items by</div>
        <form slot="content" method="dialog">
          <md-outlined-select
            @opening=${() => this.#preventDialogOverflow()}
            @closing=${() => this.#restoreDialogOverflow()}
            label="Appearance"
            hasLeadingIcon
            .value=${this.filterController.getValue('Appearance') ?? ''}
            @request-selection=${(e) => {
            this.appearance = e.target.value;
        }}
          >
            <md-icon slot="leading-icon">conditions</md-icon>

            <md-select-option ?selected=${this.filterController.getValue('Appearance') === 'Ugly'} value="Ugly">
              <div slot="headline">Ugly</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${this.filterController.getValue('Appearance') === 'Plaid'} value="Plaid">
              <div slot="headline">Plaid</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${this.filterController.getValue('Appearance') === 'Slick'} value="Slick">
              <div slot="headline">Slick</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
          </md-outlined-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close('cancel')}> Close </md-text-button>
          <md-filled-tonal-button
            @click=${() => {
            this.filterController.setValue('Appearance', this.appearance || null);
            this.requestUpdate('filterController');
            this.dialog.close();
        }}
            >Apply</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `;
    }
};
__decorate([
    state()
], DataTableDemoFilterModal.prototype, "filterController", null);
__decorate([
    state()
], DataTableDemoFilterModal.prototype, "appearance", null);
__decorate([
    query('md-dialog')
], DataTableDemoFilterModal.prototype, "dialog", null);
DataTableDemoFilterModal = __decorate([
    customElement('data-table-demo-filter-modal')
], DataTableDemoFilterModal);
export { DataTableDemoFilterModal };
//# sourceMappingURL=titanium-data-table-demo.js.map