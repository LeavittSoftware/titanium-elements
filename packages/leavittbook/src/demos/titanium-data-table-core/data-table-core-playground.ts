import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';

/* playground-fold */
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';

import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

import { TitaniumDataTableCore, TitaniumDataTableCoreMetaData, TitaniumDataTableCoreSortItem } from '@leavittsoftware/web/titanium/data-table/data-table-core';

/* playground-fold-end */

/* playground-fold */
type Car = { Id: number; Name: string; Appearance: 'Plaid' | 'Ugly' | 'Slick'; DragCoefficient: number };
type ItemType = Partial<Car>;

const allTeslas: Array<Car> = [
  { Id: 1, Name: 'Model 3', Appearance: 'Slick', DragCoefficient: 0.23 },
  { Id: 2, Name: 'Model X', Appearance: 'Slick', DragCoefficient: 0.1 },
  { Id: 3, Name: 'Model Y', Appearance: 'Slick', DragCoefficient: 0.4 },
  { Id: 4, Name: 'Model S', Appearance: 'Slick', DragCoefficient: 0.2 },
  { Id: 5, Name: 'Cybertruck', Appearance: 'Ugly', DragCoefficient: 0.3 },
  { Id: 6, Name: 'Tesla Semi', Appearance: 'Ugly', DragCoefficient: 0.3 },
  { Id: 7, Name: 'Model X Plaid', Appearance: 'Plaid', DragCoefficient: 0.1 },
  { Id: 8, Name: 'Model S Plaid', Appearance: 'Plaid', DragCoefficient: 0.1 },
  { Id: 9, Name: 'Model S Plaid+', Appearance: 'Plaid', DragCoefficient: 0.1 },
  { Id: 10, Name: 'Gen. 2 Roadster', Appearance: 'Slick', DragCoefficient: 0.23 },
];

@customElement('data-table-core-playground')
export class DataTableCorePlayground extends LitElement {
  @state() private accessor sort: TitaniumDataTableCoreSortItem[] = [
    { key: 'Appearance', direction: 'asc' },
    { key: 'Name', direction: 'asc' },
  ];
  @state() private accessor items: Array<ItemType> = this.sortItems(allTeslas, this.sort);
  @state() private accessor selected: Array<ItemType> = [];

  /**
   * Sorts items based on multiple sort criteria
   * @param items Array of items to sort
   * @param sortCriteria Array of sort criteria
   * @returns Sorted array of items
   */
  private sortItems(items: Array<ItemType>, sortCriteria: TitaniumDataTableCoreSortItem[]): Array<ItemType> {
    return [...items].sort((a, b) => {
      // Iterate through all sort criteria
      for (const sortItem of sortCriteria || []) {
        const aValue = a[sortItem.key];
        const bValue = b[sortItem.key];

        // Skip if either value is null/undefined
        if (aValue == null && bValue == null) continue;
        if (aValue == null) return sortItem.direction === 'asc' ? 1 : -1;
        if (bValue == null) return sortItem.direction === 'asc' ? -1 : 1;

        let comparison = 0;

        // Handle string comparison
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          comparison = aValue.localeCompare(bValue);
        } else {
          // Handle numeric comparison
          comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        }

        // Apply sort direction
        if (sortItem.direction === 'desc') {
          comparison = -comparison;
        }

        // If values are different, return the comparison result
        // If they're equal, continue to the next sort criteria
        if (comparison !== 0) {
          return comparison;
        }
      }

      // If all sort criteria are equal, maintain original order
      return 0;
    });
  }

  @state() private accessor tableMetaData: TitaniumDataTableCoreMetaData<ItemType> = {
    uniqueKey: (item) => item.Id?.toString() ?? '',
    itemLinkUrl: (item) => `/titanium-data-table-core#edit-${item.Id}`,
    itemMetaData: [
      {
        key: 'Name',
        friendlyName: 'Name',
        render: (item) => html`${item.Name}`,
        width: '450px',
      },
      {
        key: 'Appearance',
        friendlyName: 'Appearance',
        sortExpression: 'Appearance',
        render: (item) => html`${item.Appearance}`,
        width: '250px',
      },
      {
        key: 'DragCoefficient',
        friendlyName: 'Drag Coefficient',
        sortExpression: 'DragCoefficient',
        render: (item) => html`${item.DragCoefficient}%`,
        width: '250px',
      },
    ],
  };

  static styles = [
    h1,
    h2,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        overflow-x: auto;
        margin: 24px 0;
        resize: horizontal;
        max-width: 1200px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Full working example</h1>
      <p>Table with items and method controls - supports multi-column sorting</p>
      <main>
        <titanium-data-table-action-bar slot="footer" .selected=${this.selected}>
          <md-filled-tonal-button slot="add-button" @click=${() => alert('add dialog')}>
            <md-icon slot="icon">add</md-icon>
            <span>Add tesla</span>
          </md-filled-tonal-button>

          <md-filled-button
            slot="selected-actions"
            ?disabled=${this.selected?.length > 1}
            @click=${() => {
              alert('edit dialog');
              this.selected = [];
            }}
          >
            <md-icon slot="icon">edit</md-icon>
            <span>Edit</span>
          </md-filled-button>

          <md-filled-button slot="selected-actions" ?disabled=${this.selected?.length > 1} @click=${() => alert('delete dialog')}>
            <md-icon slot="icon">delete</md-icon>
            <span>Delete (${this.selected.length})</span>
          </md-filled-button>
        </titanium-data-table-action-bar>
        <titanium-data-table-core
          selection-mode="single"
          sticky-header
          @selected-changed=${(e: DOMEvent<TitaniumDataTableCore<ItemType>>) => {
            this.selected = [...e.target.selected];
          }}
          @sort-changed=${(e: DOMEvent<TitaniumDataTableCore<ItemType>>) => {
            this.sort = e.target.sort;
            this.items = this.sortItems(this.items, this.sort);
            this.requestUpdate('items');
          }}
          .items=${this.items}
          .tableMetaData=${this.tableMetaData}
          .sort=${this.sort}
          .selected=${this.selected}
        >
        </titanium-data-table-core>
      </main>
    `;
  }
}
