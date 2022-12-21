import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-search-input';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-select';
import '@material/mwc-dialog';
import '@leavittsoftware/titanium-chip';
import '@material/mwc-icon';
import '@leavittsoftware/titanium-data-table';

/* playground-fold */
import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/titanium-styles';

import { ActionDetail } from '@material/mwc-list/mwc-list-foundation';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';
import { Debouncer } from '@leavittsoftware/titanium-helpers';
import { Dialog } from '@material/mwc-dialog';
import { FilterController } from '@leavittsoftware/titanium-data-table/lib/filter-controller';
import { Menu } from '@material/mwc-menu';
import { Select } from '@material/mwc-select';
import { TitaniumDataTableElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table.js';
import { TitaniumSearchInput } from '@leavittsoftware/titanium-search-input';
import { getSearchTokens } from '@leavittsoftware/titanium-helpers/lib/titanium-search-token';
import { repeat } from 'lit/directives/repeat.js';

/* playground-fold-end */

/* playground-fold */
type FilterKeys = 'Appearance';
type Car = { Name: string; Appearance: 'Plaid' | 'Ugly' | 'Slick' };

const allTeslas: Array<Car> = [
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

@customElement('titanium-data-table-full-playground')
export class TitaniumDataTableFullPlayground extends LitElement {
  @state() private allItems: Array<Partial<Car>> = [];
  @state() private items: Array<Partial<Car>> = [];
  @state() private selected: Array<Partial<Car>> = [];
  @state() private searchTerm: string = '';
  @state() private resultTotal: number = 0;
  @state() private sortDirection: '' | 'asc' | 'desc' = 'asc';
  @state() private sortBy: string = 'Name';
  @state() private filterController: FilterController<FilterKeys>;

  @state() private singleSelect: boolean = false;
  @state() private disableSelect: boolean = false;
  @state() private disablePaging: boolean = false;

  @query('titanium-data-table') private dataTable!: TitaniumDataTableElement;
  @query('data-table-demo-filter-modal') private filterModal!: DataTableDemoFilterModalElement;

  constructor() {
    super();
    this.filterController = new FilterController('/titanium-data-table');
    this.filterController.setFilter('Appearance', val => `BasketId eq ${val}`);

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
  }

  #reload() {
    this.getItemsAsync(this.searchTerm);
  }

  #reset() {
    this.allItems = allTeslas.map(o => ({ Name: o.Name, Appearance: o.Appearance }));
    this.#reload();
  }

  #onSortDirectionChange(e: CustomEvent<'' | 'asc' | 'desc'>) {
    this.sortDirection = e.detail;
    this.dataTable.resetPage();
    this.#reload();
  }

  #onSortByChange(e: CustomEvent<string>) {
    this.sortBy = e.detail;
    this.dataTable.resetPage();
    this.#reload();
  }

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.getItemsAsync(searchTerm));

  async getItemsAsync(searchTerm: string) {
    const searchTokens = getSearchTokens(searchTerm);

    const take = await this.dataTable.getTake();
    const page = await this.dataTable.getPage();
    const sortDirection = this.sortDirection === 'asc' ? 1 : -1;

    let filterItems = this.allItems.filter(o => searchTokens.every(st => o.Name?.trim().toLowerCase()?.includes(st.trim().toLowerCase())));

    const appearanceValue = this.filterController.getValue('Appearance');
    if (appearanceValue) {
      filterItems = filterItems.filter(o => o.Appearance === appearanceValue);
    }

    this.items = filterItems
      .slice(0)
      .sort((a, b) => (a[this.sortBy] === b[this.sortBy] ? 0 : (a[this.sortBy] ?? '') < (b[this.sortBy] ?? '') ? sortDirection : -sortDirection))
      .slice(take * page, take * page + take);

    this.resultTotal = filterItems.length;
  }

  static styles = [
    h1,
    h2,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      titanium-data-table {
        margin: 24px 0 36px 0;
      }

      mwc-button,
      mwc-formfield {
        margin: 4px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Full working example</h1>
      <p>Table with items and method controls</p>

      <titanium-data-table
        header="Tesla Motors"
        .pageSizes=${[3, 5, 10, 15, 100]}
        @selected-changed=${(e: CustomEvent<Array<Partial<{ Name: string }>>>) => {
          this.selected = [...e.detail];
        }}
        @paging-changed=${() => {
          this.#reload();
        }}
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
          @value-changed=${(event: DOMEvent<TitaniumSearchInput>) => {
            this.searchTerm = event.target.value;
            this.dataTable.resetPage();
            this.#doSearchDebouncer.debounce(this.searchTerm);
          }}
        ></titanium-search-input>

        <div slot="table-actions" style="position: relative;">
          <mwc-icon-button
            table-action-button
            @click=${() => this.shadowRoot?.querySelector<Menu>('mwc-menu[table-action-menu]')?.show()}
            id="button"
            icon="more_vert"
            label="Open Menu"
          ></mwc-icon-button>
          <mwc-menu
            table-action-menu
            .anchor=${this.shadowRoot?.querySelector<HTMLElement>('mwc-icon-button[table-action-button]') ?? null}
            corner="BOTTOM_END"
            menuCorner="END"
            @action=${(e: CustomEvent<ActionDetail>) => {
              switch (e.detail.index) {
                case 0:
                  this.#reset();
                  break;
              }
            }}
          >
            <mwc-list-item graphic="icon">
              <span>Reload list (reset)</span>
              <mwc-icon slot="graphic">refresh</mwc-icon>
            </mwc-list-item>
          </mwc-menu>
        </div>

        <mwc-button
          slot="add-button"
          outlined
          icon="add"
          label="Add item"
          @click=${() => {
            const car = allTeslas[this.allItems.length % allTeslas.length];
            const newItem: Partial<Car> = { Name: car.Name, Appearance: car.Appearance };
            this.allItems.push(newItem);
            this.#reload();
          }}
        ></mwc-button>

        <data-table-demo-filter-modal slot="filters" .filterController=${this.filterController}></data-table-demo-filter-modal>

        <mwc-icon-button
          slot="filter-button"
          @click=${async () => {
            this.filterModal.open();
          }}
          title="Apply filters"
          icon="filter_list"
        ></mwc-icon-button>

        <mwc-icon-button
          slot="selected-actions"
          delete
          title=${`Delete the selected item${this.selected.length > 1 ? 's' : ''}`}
          @click=${() => {
            this.allItems = this.allItems.filter(f => !this.selected.includes(f));
            this.resultTotal = this.resultTotal - this.selected.length;
            this.#reload();
          }}
          icon="delete"
        ></mwc-icon-button>

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
          @sort-by-changed=${this.#onSortByChange}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#onSortDirectionChange}
        ></titanium-data-table-header>

        ${repeat(
          this.items ?? [],
          item => item.Name,
          item => html`
            <titanium-data-table-item
              ?disable-select=${this.disableSelect}
              @titanium-data-table-item-navigate=${() => {
                //todo
                this.dataTable.clearSelection();
              }}
              .item=${item}
              slot="items"
            >
              <row-item large ellipsis title=${item.Name ?? ''}>${item.Name ?? '-'}</row-item>
              <row-item title=${item.Appearance ?? ''}>${item.Appearance ?? '-'}</row-item>
            </titanium-data-table-item>
          `
        )}
      </titanium-data-table>

      <div>
        <h2>Knobs</h2>
        <mwc-formfield label="Single Select">
          <mwc-switch
            .selected=${this.singleSelect}
            @click=${() => {
              this.dataTable.clearSelection();
              this.singleSelect = !this.singleSelect;
            }}
          ></mwc-switch>
        </mwc-formfield>
        <mwc-formfield label="Disable Select">
          <mwc-switch
            .selected=${this.disableSelect}
            @click=${() => {
              this.dataTable.clearSelection();
              this.disableSelect = !this.disableSelect;
            }}
          ></mwc-switch>
        </mwc-formfield>
        <mwc-formfield label="Disable Paging">
          <mwc-switch
            .selected=${this.disablePaging}
            @click=${() => {
              this.disablePaging = !this.disablePaging;
            }}
          ></mwc-switch>
        </mwc-formfield>
        <mwc-button
          raised
          @click=${() => {
            this.dataTable.resetPage();
          }}
          >reset Page</mwc-button
        >
        <mwc-button
          raised
          @click=${() => {
            this.dataTable.clearSelection();
          }}
          >clear Selection</mwc-button
        >
      </div>
    `;
  }
}

@customElement('data-table-demo-filter-modal')
export class DataTableDemoFilterModalElement extends LitElement {
  @state() private filterController: FilterController<FilterKeys>;
  @state() private appearance: string;

  @query('mwc-dialog') private dialog!: Dialog;

  async firstUpdated() {
    this.filterController.subscribeToFilterChange(async () => {
      this.requestUpdate('filterController');
    });
  }

  public async open() {
    this.dialog.show();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        color: var(--app-text-color, #5f6368);
      }

      mwc-dialog {
        --mdc-dialog-min-width: 450px;
      }

      @media (max-width: 600px) {
        mwc-dialog {
          --mdc-dialog-min-width: inherit;
        }
      }

      mwc-select {
        --mdc-menu-min-width: calc(var(--mdc-dialog-min-width) - 50px);
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <titanium-chip
        ?hidden=${!this.filterController.getValue('Appearance')}
        label="${this.filterController.getValue('Appearance') ?? ''}"
        closeable
        @titanium-chip-close=${() => {
          this.filterController.setValue('Appearance', null);
          this.requestUpdate('filterController');
        }}
      ></titanium-chip>

      <mwc-dialog heading="Filter items by">
        <main>
          <form>
            <mwc-select
              fixedMenuPosition
              .value=${this.filterController.getValue('Appearance') ?? ''}
              @selected=${(e: DOMEvent<Select>) => {
                this.appearance = e.target.value;
              }}
              label="Appearance"
              outlined
            >
              <mwc-list-item></mwc-list-item>
              <mwc-list-item value="Ugly" ?selected=${this.filterController.getValue('Appearance') === 'Ugly'}>ugly</mwc-list-item>
              <mwc-list-item value="Plaid" ?selected=${this.filterController.getValue('Appearance') === 'Plaid'}>plaid</mwc-list-item>
              <mwc-list-item value="Slick" ?selected=${this.filterController.getValue('Appearance') === 'Slick'}>slick</mwc-list-item>
            </mwc-select>
          </form>
        </main>
        <mwc-button slot="secondaryAction" label="Close" @click=${() => this.dialog.close()}></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="Apply"
          @click=${() => {
            this.filterController.setValue('Appearance', this.appearance || null);
            this.requestUpdate('filterController');
            this.dialog.close();
          }}
        ></mwc-button>
      </mwc-dialog>
    `;
  }
}
