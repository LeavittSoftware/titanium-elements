import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-data-table';
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

import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import '@material/mwc-icon';

import { getSearchTokens } from '@leavittsoftware/titanium-helpers/lib/titanium-search-token';
import { TitaniumDataTableElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table.js';
import { Debouncer } from '@leavittsoftware/titanium-helpers';
import { Menu } from '@material/mwc-menu';
import { ActionDetail } from '@material/mwc-list/mwc-list-foundation';
import { repeat } from 'lit/directives/repeat.js';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';
import { TitaniumSearchInput } from '@leavittsoftware/titanium-search-input';
import { FilterKeys, DataTableDemoFilterModalElement } from './data-table-demo-filter-modal';
import './data-table-demo-filter-modal';
import { FilterController } from '@leavittsoftware/titanium-data-table/lib/filter-controller';

type Car = { Name: string; Appearance: 'plaid' | 'ugly' | 'slick' };

const allTeslas: Array<Car> = [
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

@customElement('titanium-data-table-demo')
export class TitaniumDataTableDemoElement extends LitElement {
  @state() private allItems: Array<Partial<Car>> = [];
  @state() private items: Array<Partial<Car>> = [];
  @state() private draggableItems: Array<Partial<Car>> = [];
  @state() private selected: Array<Partial<Car>> = [];
  @state() private searchTerm: string = '';
  @state() private resultTotal: number = 0;
  @state() private sortDirection: '' | 'asc' | 'desc' = 'asc';
  @state() private sortBy: string = 'Name';
  @state() private filterController: FilterController<FilterKeys>;

  @state() private singleSelect: boolean = false;
  @state() private disableSelect: boolean = false;
  @state() private disablePaging: boolean = false;

  @query('titanium-data-table[full-story]') private dataTable!: TitaniumDataTableElement;
  @query('data-table-demo-filter-modal') private filterModal!: DataTableDemoFilterModalElement;

  constructor() {
    super();
    this.filterController = new FilterController();
    this.filterController.setFilter('Appearance', val => `BasketId eq ${val}`);

    this.filterController.onFilterValueChanged = () => {
      this.dataTable.resetPage();
      this.#reload();
    };
  }

  firstUpdated() {
    this.#reset();
    this.items = this.allItems.slice(0);
    this.draggableItems = this.allItems.slice(0);
    this.filterController.loadFromQueryString();
  }

  #reload() {
    this.getItemsAsync(this.searchTerm);
  }

  #reset() {
    this.allItems = allTeslas.map(o => ({ Name: o.Name, Appearance: o.Appearance })).slice(0, 3);
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
    h3,
    h5,
    p,
    StoryStyles,
    css`
      mwc-button,
      mwc-formfield {
        margin: 4px;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <titanium-data-table></titanium-data-table>
      </div>
    `;
  }

  #propsStory() {
    return html`
      <div>
        <h1>Prop examples</h1>
        <p>Table with header, pagesSize, count, searchTerm</p>
        <titanium-data-table header="My Header" .pageSizes=${[1, 2, 3, 4]} .count=${3} searchTerm="www.google.com"></titanium-data-table>
      </div>
    `;
  }

  #fullStory() {
    return html`
      <div>
        <h1>Full working example</h1>
        <p>Table with items and method controls</p>
        <titanium-data-table
          full-story
          header="Tesla Motors"
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

  #draggableStory() {
    return html`
      <div>
        <h1>Draggable</h1>
        <p>Table with draggable items</p>
        <titanium-data-table
          header="Draggable"
          .items=${this.draggableItems}
          @titanium-data-table-items-reorder=${async () => {
            this.draggableItems = this.draggableItems;
            await this.requestUpdate('draggableItems');
          }}
        >
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
            this.draggableItems ?? [],
            item => item.Name,
            item => html`
              <titanium-data-table-item enable-dragging .item=${item} slot="items">
                <row-item large ellipsis title=${item.Name ?? ''}>${item.Name ?? '-'}</row-item>
                <row-item title=${item.Appearance ?? ''}>${item.Appearance ?? '-'}</row-item>
              </titanium-data-table-item>
            `
          )}
        </titanium-data-table>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium data table" tagName="titanium-data-table" klass="TitaniumDataTableElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#propsStory()}
        <code-block .snippet=${this.#propsStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#fullStory()}
        <code-block .snippet=${this.#fullStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#draggableStory()}
        <code-block .snippet=${this.#draggableStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `;
  }
}
