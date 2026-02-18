import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
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
    DragCoefficient: 0.1,
    Year: 2018,
    Color: 'Blue',
    MaxSpeed: 120,
    IsElectric: true,
    Owner: { Id: 1, FullName: 'Jane Doe' },
    Sequence: 2,
    Trim: 'Long Range',
  },
  {
    Id: 3,
    Name: 'Model Y',
    Appearance: 'Slick',
    DragCoefficient: 0.4,
    Year: 2020,
    Color: 'Blue',
    MaxSpeed: 110,
    IsElectric: true,
    Owner: { Id: 2, FullName: 'Jim Doe' },
    Sequence: 3,
    Trim: 'Long Range',
  },
  {
    Id: 4,
    Name: 'Model S',
    Appearance: 'Slick',
    DragCoefficient: 0.2,
    Year: 2009,
    Color: 'Green',
    MaxSpeed: 150,
    IsElectric: true,
    Owner: { Id: 3, FullName: 'Joe Doe' },
    Sequence: 4,
    Trim: 'AWD',
  },
  {
    Id: 5,
    Name: 'Cybertruck',
    Appearance: 'Ugly',
    DragCoefficient: 0.3,
    Year: 2024,
    Color: 'Yellow',
    MaxSpeed: 100,
    IsElectric: true,
    Owner: { Id: 4, FullName: 'Jill Doe' },
    Sequence: 5,
    Trim: 'Cyberbeast',
  },
  {
    Id: 6,
    Name: 'Tesla Semi',
    Appearance: 'Ugly',
    DragCoefficient: 0.3,
    Year: 2022,
    Color: 'Green',
    MaxSpeed: 100,
    IsElectric: true,
    Owner: { Id: 5, FullName: 'Jill Doe' },
    Sequence: 6,
    Trim: 'AWD',
  },
  {
    Id: 7,
    Name: 'Model X',
    Appearance: 'Plaid',
    DragCoefficient: 0.1,
    Year: 2024,
    Color: 'Red',
    MaxSpeed: 180,
    IsElectric: true,
    Owner: { Id: 6, FullName: 'Jack Doe' },
    Sequence: 7,
    Trim: 'AWD',
  },
  {
    Id: 8,
    Name: 'Model S',
    Appearance: 'Plaid',
    DragCoefficient: 0.1,
    Year: 2020,
    Color: 'Yellow',
    MaxSpeed: 130,
    IsElectric: true,
    Owner: { Id: 7, FullName: 'Jill Doe' },
    Sequence: 8,
    Trim: 'Plaid',
  },
  {
    Id: 9,
    Name: 'Model S',
    Appearance: 'Plaid',
    DragCoefficient: 0.1,
    Year: 2022,
    Color: 'Red',
    MaxSpeed: 130,
    IsElectric: true,
    Owner: { Id: 8, FullName: 'Jill Doe' },
    Sequence: 9,
    Trim: 'Plaid+',
  },
  {
    Id: 10,
    Name: 'Gen. 2 Roadster',
    Appearance: 'Slick',
    DragCoefficient: 0.23,
    Year: 2025,
    Color: 'Red',
    MaxSpeed: 150,
    IsElectric: true,
    Owner: { Id: 9, FullName: 'Jill Doe' },
    Sequence: 10,
    Trim: 'RWN',
  },
];

@customElement('titanium-data-table-core-demo')
export class TitaniumDataTableCoreDemo extends LitElement {
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
    // itemLinkUrl: (item) => `/titanium-data-table-core#edit-${item.Id}`,
    itemClickHandler: (item) => alert(`item click ${item.Name}`),
    itemMetaData: [
      {
        key: 'Name',
        friendlyName: 'Name',
        render: (item) =>
          html`<image-row>
            <img src="https://picsum.photos/24" />
            <div>${item.Name}</div>
            <div supporting-text>${item.Trim}</div>
          </image-row>`,
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
        key: 'Owner',
        friendlyName: 'Owner',
        render: (item) =>
          html`<two-line
            ><div>${item.Owner?.FullName}</div>
            <div supporting-text>(${item.Owner?.Id})</div></two-line
          >`,
        csvValue: (item) => item.Owner?.FullName ?? '',
        width: '250px',
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
        friendlyName: 'Max Speed',
      },
      {
        key: 'IsElectric',
        friendlyName: 'Is Electric',
        render: (item) => html`${item.IsElectric ? 'Yes' : 'No'}`,
        width: '250px',
        hideByDefault: true,
      },
    ],
    maxCustomSortColumns: 6,
    reorderConfig: {
      sortPropertyKey: 'Sequence',
      reorderItemDisplayKey: 'Name',
    },
  };

  static styles = [
    StoryStyles,
    niceBadgeStyles,
    css`
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
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium data table core" level1Href="/titanium-data-table-core" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium data table core" className="TitaniumDataTableCore"></story-header>

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
                .supplementalItemStyles=${css`
                  img {
                    border-radius: 50%;
                  }
                `}
                @selected-changed=${(e: DOMEvent<TitaniumDataTableCore<ItemType>>) => (this.selected = [...e.target.selected])}
                @sort-changed=${async (e: DOMEvent<TitaniumDataTableCore<ItemType>>) => {
                  this.sort = e.target.sort;
                  const _delay = delay(300);
                  this.tableCore.loadWhile(_delay);
                  await _delay;
                  this.items = this.sortItems(this.items, this.sort);

                  this.requestUpdate('items');
                }}
                @reorder-save-request=${async (e: CustomEvent<{ resolve: () => void; reject: (reason: any) => void; items: Array<ItemType> }>) => {
                  console.log('reorder-save-request..simulating API delay', e.detail.items);
                  await delay(1300);
                  e.detail.resolve();
                }}
                .items=${this.items}
                .tableMetaData=${this.tableMetaData as never}
                .selected=${this.selected}
              >
              </titanium-data-table-core>
            </main>

            <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
