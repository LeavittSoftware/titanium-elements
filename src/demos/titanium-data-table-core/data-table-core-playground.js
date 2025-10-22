import { __decorate } from "tslib";
import '@leavittsoftware/web/titanium/data-table/data-table-core';
import '@leavittsoftware/web/titanium/data-table/data-table-action-bar';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/filled-button';
import '@material/web/iconbutton/icon-button';
/* playground-fold */
import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';
import { niceBadgeStyles } from '@leavittsoftware/web/titanium/styles/nice-badge';
import { delay } from '@leavittsoftware/web/titanium/helpers/delay';
const allTeslas = [
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
let DataTableCorePlayground = class DataTableCorePlayground extends LitElement {
    #sort_accessor_storage = [];
    get sort() { return this.#sort_accessor_storage; }
    set sort(value) { this.#sort_accessor_storage = value; }
    #items_accessor_storage = this.sortItems(allTeslas, this.sort);
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #selected_accessor_storage = [];
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #tableCore_accessor_storage;
    get tableCore() { return this.#tableCore_accessor_storage; }
    set tableCore(value) { this.#tableCore_accessor_storage = value; }
    /**
     * Sorts items based on multiple sort criteria
     * @param items Array of items to sort
     * @param sortCriteria Array of sort criteria
     * @returns Sorted array of items
     */
    sortItems(items, sortCriteria) {
        return [...items].sort((a, b) => {
            // Iterate through all sort criteria
            for (const sortItem of sortCriteria || []) {
                const aValue = a[sortItem.key];
                const bValue = b[sortItem.key];
                // Skip if either value is null/undefined
                if (aValue == null && bValue == null)
                    continue;
                if (aValue == null)
                    return sortItem.direction === 'asc' ? 1 : -1;
                if (bValue == null)
                    return sortItem.direction === 'asc' ? -1 : 1;
                let comparison = 0;
                // Handle string comparison
                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    comparison = aValue.localeCompare(bValue);
                }
                else {
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
    #tableMetaData_accessor_storage = {
        uniqueKey: (item) => item.Id?.toString() ?? '',
        // itemLinkUrl: (item) => `/titanium-data-table-core#edit-${item.Id}`,
        itemClickHandler: (item) => alert(`item click ${item.Name}`),
        itemMetaData: [
            {
                key: 'Name',
                friendlyName: 'Name',
                render: (item) => html `<image-row>
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
                render: (item) => html `${item.Appearance}`,
                width: '250px',
                defaultSort: {
                    direction: 'desc',
                    position: 1,
                },
            },
            {
                key: 'Owner',
                friendlyName: 'Owner',
                render: (item) => html `<two-line
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
                render: (item) => html `${item.DragCoefficient}%`,
                width: '250px',
            },
            {
                key: 'Year',
                friendlyName: 'Year',
                sortExpression: 'Year',
                render: (item) => html `${item.Year}`,
                width: '250px',
                hideByDefault: true,
                disableSort: true,
            },
            {
                key: 'Color',
                friendlyName: 'Color',
                render: (item) => html `${item.Color}`,
                width: '250px',
                hideByDefault: true,
            },
            {
                key: 'MaxSpeed',
                render: (item) => html `${item.MaxSpeed} mph`,
                width: '250px',
            },
            {
                key: 'IsElectric',
                friendlyName: 'Is Electric',
                render: (item) => html `${item.IsElectric ? 'Yes' : 'No'}`,
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
    get tableMetaData() { return this.#tableMetaData_accessor_storage; }
    set tableMetaData(value) { this.#tableMetaData_accessor_storage = value; }
    static { this.styles = [
        h1,
        h2,
        niceBadgeStyles,
        p,
        css `
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
    ]; }
    render() {
        /* playground-fold-end */
        return html `
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
          .supplementalItemStyles=${css `
            img {
              border-radius: 50%;
            }
          `}
          @selected-changed=${(e) => (this.selected = [...e.target.selected])}
          @sort-changed=${async (e) => {
            this.sort = e.target.sort;
            const _delay = delay(300);
            this.tableCore.loadWhile(_delay);
            await _delay;
            this.items = this.sortItems(this.items, this.sort);
            this.requestUpdate('items');
        }}
          @reorder-save-request=${async (e) => {
            console.log('reorder-save-request..simulating API delay', e.detail.items);
            await delay(1300);
            e.detail.resolve();
        }}
          .items=${this.items}
          .tableMetaData=${this.tableMetaData}
          .selected=${this.selected}
        >
        </titanium-data-table-core>
      </main>
    `;
    }
};
__decorate([
    state()
], DataTableCorePlayground.prototype, "sort", null);
__decorate([
    state()
], DataTableCorePlayground.prototype, "items", null);
__decorate([
    state()
], DataTableCorePlayground.prototype, "selected", null);
__decorate([
    query('titanium-data-table-core')
], DataTableCorePlayground.prototype, "tableCore", null);
__decorate([
    state()
], DataTableCorePlayground.prototype, "tableMetaData", null);
DataTableCorePlayground = __decorate([
    customElement('data-table-core-playground')
], DataTableCorePlayground);
export { DataTableCorePlayground };
//# sourceMappingURL=data-table-core-playground.js.map