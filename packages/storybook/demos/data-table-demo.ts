import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-search-input';
import '@leavittsoftware/titanium-chip';
import { repeat } from 'lit-html/directives/repeat';

import { css, customElement, html, LitElement, state } from 'lit-element';
// import { TitaniumDataTableElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import { IconButton } from '@material/mwc-icon-button';

type Car = {
  id: number;
  name: string;
  miles: string;
  price: string;
  metadata: string;
  withSlot?: boolean;
};

@customElement('data-table-demo')
export default class DataTableDemo extends LitElement {
  @state() private page: number = 0;
  @state() private resultTotal: number = 0;
  @state() private searchTerm: string = '';
  @state() private cars: Car[] = [
    // { name: 'Model 2', miles: '170 miles', price: '$35,315', metadata: '', withSlot: true },
    { id: 1, name: 'Cyber Truck', miles: '512 miles', price: '$65,315', metadata: '' },
    { id: 2, name: 'Model S', miles: '512 miles', price: '$84,315', metadata: '' },
    { id: 3, name: 'Model 3', miles: '310 miles', price: '$33,315', metadata: '' },
    { id: 4, name: 'Model X', miles: '328 miles', price: '$93,815', metadata: '' },
    // {
    //   name: 'Model Y',
    //   miles: '300 miles',
    //   price: '$43,700',
    //   metadata:
    //     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    // },
  ];
  @state() private selected: Car[] = [];

  // @query('titanium-data-table') private dataTable!: TitaniumDataTableElement;

  _reload() {
    console.log('todo');
  }

  static styles = [
    css`
      :host {
        display: block;
        margin: 16px 0;
      }
    `,
  ];

  render() {
    return html`
      <titanium-data-table
        @titanium-data-table-item-drop=${() => this.requestUpdate('cars')}
        single-select
        header="Tesla Motors Draggable Demo"
        @selected-changed=${(e: CustomEvent<Car[]>) => {
          this.selected = [...e.detail];
        }}
        @page-changed=${(e: CustomEvent<number>) => {
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
            .anchor=${this.shadowRoot?.querySelector<IconButton>('mwc-icon-button[table-action-button]') ?? null}
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
          @value-changed=${(e: CustomEvent<string>) => {
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
        ${repeat(
          this.cars,
          i => i.id,
          item =>
            html`
              <titanium-data-table-item
                .item=${item}
                slot="items"
                enable-dragging
                @titanium-data-table-item-navigate=${() => {
                  // this.dataTable.clearSelection();
                }}
              >
                <row-item ellipsis title=${item.name ?? ''} large>${item.name}</row-item>
                <row-item desktop>${item.miles ?? '-'}</row-item>
                <row-item desktop>${item.metadata ?? '-'}</row-item>
                <row-item desktop width="100px" right>${item.price}</row-item>
                ${item.withSlot
                  ? html` <div slot="item-footer" style="padding: 24px">
                      <img style="height:40px;" src="https://www.carlogos.org/car-logos/tesla-model-3-logo-2500x300.png" />
                    </div>`
                  : ''}
              </titanium-data-table-item>
            `
        )}
      </titanium-data-table>
    `;
  }
}
