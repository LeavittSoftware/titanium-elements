import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/iconbutton/icon-button';

/* playground-fold */
import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';

import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

import { TitaniumDataTableCore, TitaniumDataTableCoreMetaData, TitaniumDataTableCoreSortItem } from '@leavittsoftware/web/titanium/data-table/data-table-core';
import { niceBadgeStyles } from '@leavittsoftware/web/titanium/styles/nice-badge';
import { delay } from '@leavittsoftware/web/titanium/helpers/delay';

/* playground-fold-end */

/* playground-fold */
type Car = {
  Id: number;
  Name: string;
  Appearance: 'Plaid' | 'Ugly' | 'Slick';
  DragCoefficient: number;
  Year: number;
  Color: string;
  MaxSpeed: number;
  IsElectric: boolean;
};
type ItemType = Partial<Car>;

const allTeslas: Array<Car> = [
  { Id: 1, Name: 'Model 3', Appearance: 'Slick', DragCoefficient: 0.23, Year: 2017, Color: 'Red', MaxSpeed: 150, IsElectric: true },
  { Id: 2, Name: 'Model X', Appearance: 'Slick', DragCoefficient: 0.1, Year: 2018, Color: 'Blue', MaxSpeed: 120, IsElectric: true },
  { Id: 3, Name: 'Model Y', Appearance: 'Slick', DragCoefficient: 0.4, Year: 2020, Color: 'Blue', MaxSpeed: 110, IsElectric: true },
  { Id: 4, Name: 'Model S', Appearance: 'Slick', DragCoefficient: 0.2, Year: 2009, Color: 'Green', MaxSpeed: 150, IsElectric: true },
  { Id: 5, Name: 'Cybertruck', Appearance: 'Ugly', DragCoefficient: 0.3, Year: 2024, Color: 'Yellow', MaxSpeed: 100, IsElectric: true },
  { Id: 6, Name: 'Tesla Semi', Appearance: 'Ugly', DragCoefficient: 0.3, Year: 2022, Color: 'Green', MaxSpeed: 100, IsElectric: true },
  { Id: 7, Name: 'Model X Plaid', Appearance: 'Plaid', DragCoefficient: 0.1, Year: 2024, Color: 'Red', MaxSpeed: 180, IsElectric: true },
  { Id: 8, Name: 'Model S Plaid', Appearance: 'Plaid', DragCoefficient: 0.1, Year: 2020, Color: 'Yellow', MaxSpeed: 130, IsElectric: true },
  { Id: 9, Name: 'Model S Plaid+', Appearance: 'Plaid', DragCoefficient: 0.1, Year: 2022, Color: 'Red', MaxSpeed: 130, IsElectric: true },
  { Id: 10, Name: 'Gen. 2 Roadster', Appearance: 'Slick', DragCoefficient: 0.23, Year: 2025, Color: 'Red', MaxSpeed: 150, IsElectric: true },
];

@customElement('data-table-core-playground')
export class DataTableCorePlayground extends LitElement {
  @state() private accessor sort: TitaniumDataTableCoreSortItem[] = [];
  @state() private accessor items: Array<ItemType> = this.sortItems(allTeslas, this.sort);
  @state() private accessor selected: Array<ItemType> = [];
  @query('titanium-data-table-core') private accessor tableCore: TitaniumDataTableCore<ItemType>;

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
        defaultSort: {
          direction: 'asc',
          position: 2,
        },
      },
      {
        key: 'Appearance',
        friendlyName: 'Appearance',
        sortExpression: 'Appearance',
        render: (item) => html`${item.Appearance}`,
        width: '250px',
        defaultSort: {
          direction: 'desc',
          position: 1,
        },
      },
      {
        key: 'DragCoefficient',
        friendlyName: 'Drag Coefficient',
        sortExpression: 'DragCoefficient',
        render: (item) => html`${item.DragCoefficient}%`,
        width: '250px',
      },
      {
        key: 'Year',
        friendlyName: 'Year',
        sortExpression: 'Year',
        render: (item) => html`${item.Year}`,
        width: '250px',
        hideByDefault: true,
        disableSort: true,
      },
      {
        key: 'Color',
        friendlyName: 'Color',
        render: (item) => html`${item.Color}`,
        width: '250px',
        hideByDefault: true,
      },
      {
        key: 'MaxSpeed',
        render: (item) => html`${item.MaxSpeed} mph`,
        width: '250px',
      },
      {
        key: 'IsElectric',
        friendlyName: 'Is Electric',
        render: (item) => html`${item.IsElectric ? 'Yes' : 'No'}`,
        width: '250px',
        hideByDefault: true,
      },
    ],
  };

  static styles = [
    h1,
    h2,
    niceBadgeStyles,
    p,
    css`
      :host {
        display: grid;
      }

      md-icon-button[table-settings] {
        position: relative;
      }

      main {
        overflow-x: auto;
        margin: 24px 0;
        resize: horizontal;
        max-width: 1200px;
      }

      md-filled-tonal-button {
        margin-right: 12px;
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
          selection-mode="multi"
          local-storage-key="test-dtc-pref-tesla-demo"
          sticky-header
          @selected-changed=${(e: DOMEvent<TitaniumDataTableCore<ItemType>>) => (this.selected = [...e.target.selected])}
          @sort-changed=${async (e: DOMEvent<TitaniumDataTableCore<ItemType>>) => {
            this.sort = e.target.sort;
            const _delay = delay(300);
            this.tableCore.loadWhile(_delay);
            await _delay;
            this.items = this.sortItems(this.items, this.sort);

            this.requestUpdate('items');
          }}
          .items=${this.items}
          .tableMetaData=${this.tableMetaData}
          .selected=${this.selected}
        >
        </titanium-data-table-core>
      </main>
    `;
  }
}
