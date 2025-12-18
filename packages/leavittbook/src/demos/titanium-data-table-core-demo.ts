import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/iconbutton/icon-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { TitaniumDataTableCore, TitaniumDataTableCoreMetaData, TitaniumDataTableCoreSortItem } from '@leavittsoftware/web/titanium/data-table/data-table-core';
import { niceBadgeStyles } from '@leavittsoftware/web/titanium/styles/nice-badge';
import { delay } from '@leavittsoftware/web/titanium/helpers/delay';
import StoryStyles from '../styles/story-styles';

type Car = {
  Id: number;
  Name: string;
  Appearance: 'Plaid' | 'Ugly' | 'Slick';
  DragCoefficient: number;
  Year: number;
  Color: string;
  MaxSpeed: number;
  IsElectric: boolean;
  Owner: { Id: number; FullName: string };
  Sequence: number;
  Trim: string;
};
type ItemType = Partial<Car>;

const allTeslas: Array<Car> = [
  {
    Id: 1,
    Name: 'Model 3',
    Appearance: 'Slick',
    DragCoefficient: 0.23,
    Year: 2017,
    Color: 'Red',
    MaxSpeed: 150,
    IsElectric: true,
    Owner: { Id: 1, FullName: 'John Doe' },
    Trim: 'RWD',
    Sequence: 1,
  },
  {
    Id: 2,
    Name: 'Model X',
    Appearance: 'Slick',
    DragCoefficient: 0.24,
    Year: 2015,
    Color: 'Blue',
    MaxSpeed: 140,
    IsElectric: true,
    Owner: { Id: 2, FullName: 'Jane Smith' },
    Trim: 'AWD',
    Sequence: 2,
  },
  {
    Id: 3,
    Name: 'Model S',
    Appearance: 'Slick',
    DragCoefficient: 0.21,
    Year: 2012,
    Color: 'Black',
    MaxSpeed: 140,
    IsElectric: true,
    Owner: { Id: 3, FullName: 'Bob Johnson' },
    Trim: 'Plaid',
    Sequence: 3,
  },
];

@customElement('titanium-data-table-core-demo')
export class TitaniumDataTableCoreDemo extends LitElement {
  @state() protected accessor items: Array<ItemType> = allTeslas.slice(0, 3);
  @state() protected accessor selected: Array<ItemType> = [];
  @state() protected accessor metaData: TitaniumDataTableCoreMetaData;
  @state() protected accessor loading: boolean = false;

  @query('titanium-data-table-core') protected accessor table!: TitaniumDataTableCore;

  constructor() {
    super();
    this.metaData = {
      page: 0,
      pageSize: 10,
      totalCount: allTeslas.length,
      sortBy: 'Name',
      sortDirection: 'asc',
      searchTerm: '',
    };
  }

  async #loadItems() {
    this.loading = true;
    await delay(500); // Simulate API delay

    let filteredItems = allTeslas.slice();

    // Apply search
    if (this.metaData.searchTerm) {
      const searchTerm = this.metaData.searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(
        (item) =>
          item.Name?.toLowerCase().includes(searchTerm) ||
          item.Appearance?.toLowerCase().includes(searchTerm) ||
          item.Color?.toLowerCase().includes(searchTerm)
      );
    }

    // Apply sorting
    filteredItems.sort((a, b) => {
      const aVal = a[this.metaData.sortBy] ?? '';
      const bVal = b[this.metaData.sortBy] ?? '';
      const direction = this.metaData.sortDirection === 'asc' ? 1 : -1;

      if (aVal < bVal) return -1 * direction;
      if (aVal > bVal) return 1 * direction;
      return 0;
    });

    // Apply pagination
    const startIndex = this.metaData.page * this.metaData.pageSize;
    const endIndex = startIndex + this.metaData.pageSize;
    this.items = filteredItems.slice(startIndex, endIndex);
    this.metaData.totalCount = filteredItems.length;

    this.loading = false;
  }

  #onMetaDataChanged(e: CustomEvent<TitaniumDataTableCoreMetaData>) {
    this.metaData = { ...e.detail };
    this.#loadItems();
  }

  static styles = [
    StoryStyles,
    h1,
    h2,
    p,
    niceBadgeStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-data-table-core {
        margin: 24px 0 36px 0;
      }

      [data-row] {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        gap: 16px;
        padding: 12px 24px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        align-items: center;
      }

      [data-row]:hover {
        background-color: var(--md-sys-color-surface-variant);
      }

      [data-row][selected] {
        background-color: var(--md-sys-color-secondary-container);
      }

      nice-badge {
        font-size: 12px;
        padding: 4px 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium data table core" className="TitaniumDataTableCore"></story-header>
      <h1>Basic data table core</h1>
      <p>Data table core component with sorting, searching, and pagination</p>

      <titanium-data-table-core
        .metaData=${this.metaData}
        .items=${this.items}
        .selected=${this.selected}
        ?loading=${this.loading}
        @meta-data-changed=${this.#onMetaDataChanged}
        @selected-changed=${(e: CustomEvent<Array<ItemType>>) => {
          this.selected = [...e.detail];
        }}
      >
        <titanium-data-table-action-bar slot="action-bar">
          <md-filled-tonal-button
            slot="actions"
            @click=${() => {
              this.table.clearSelection();
            }}
          >
            Clear Selection
          </md-filled-tonal-button>
        </titanium-data-table-action-bar>

        <div data-row slot="headers">
          <div>Name</div>
          <div>Appearance</div>
          <div>Year</div>
          <div>Color</div>
          <div class="actions">Actions</div>
        </div>

        ${this.items.map(
          (item) => html`
            <div data-row ?selected=${this.selected.includes(item)} .item=${item} slot="items">
              <div>${item.Name}</div>
              <nice-badge>${item.Appearance}</nice-badge>
              <div>${item.Year}</div>
              <div>${item.Color}</div>
              <div class="actions">
                <md-icon-button
                  @click=${(e: DOMEvent) => {
                    e.stopPropagation();
                    this.table.selectItem(item);
                  }}
                >
                  <md-icon>check</md-icon>
                </md-icon-button>
              </div>
            </div>
          `
        )}
      </titanium-data-table-core>

      <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
    `;
  }
}
