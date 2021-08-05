import '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-header';
import '@leavittsoftware/titanium-data-table/lib/titanium-data-table-item';
import '@leavittsoftware/titanium-search-input';
import '@leavittsoftware/titanium-chip';
import { repeat } from 'lit-html/directives/repeat';

import { css, customElement, html, LitElement, query, state } from 'lit-element';
// import { TitaniumDataTableElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table';
import { IconButton } from '@material/mwc-icon-button';
import { TitaniumDataTableElement } from '@leavittsoftware/titanium-data-table/lib/titanium-data-table';

type Car = {
  id: number;
  name: string;
  miles: string | number;
  price: string;
  metadata?: string;
  withSlot?: boolean;
};

@customElement('data-table-paging-demo')
export default class DataTablePagingDemo extends LitElement {
  @state() private page: number = 0;
  @state() private resultTotal: number = largeSet?.length;
  @state() private searchTerm: string = '';
  @state() private cars: Car[] = largeSet;
  @state() private filteredCars: Car[] = [];

  @state() private selected: Car[] = [];

  @query('titanium-data-table') private dataTable!: TitaniumDataTableElement;

  async _reload() {
    const len = this.filteredCars.length;
    this.filteredCars = [];
    const get = this._later(500);
    this.dataTable.loadWhile(get);
    await get;
    this.filteredCars =
      len === 0 ? this.cars.slice(0, this.dataTable.take) : this.cars.slice(len * this.page, this.dataTable.take + this.dataTable.take * this.page);
  }

  _later(delay) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
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
        single-select
        header="Tesla Motors Paging Demo"
        @selected-changed=${(e: CustomEvent<Car[]>) => {
          this.selected = [...e.detail];
        }}
        @page-changed=${(e: CustomEvent<number>) => {
          this.page = e.detail;
          this._reload();
        }}
        @take-changed=${() => {
          this.page = 0;
          this.filteredCars = [];
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
          title="View details"
          @click=${() => {
            const item = this.selected[0];
            if (!item) {
              return;
            }
            this.dataTable.clearSelection();
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

        <titanium-data-table-header width="75" slot="table-headers" title="Id" large no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Model" large no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Range" desktop no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Metadata" right desktop no-sort></titanium-data-table-header>
        <titanium-data-table-header slot="table-headers" title="Price" right width="100px" desktop no-sort></titanium-data-table-header>
        ${repeat(
          this.filteredCars,
          i => i.id,
          (item, i) =>
            html`
              <titanium-data-table-item
                .item=${item}
                slot="items"
                @titanium-data-table-item-navigate=${() => {
                  // this.dataTable.clearSelection();
                }}
              >
                <row-item width="75" title=${item.id ?? ''} large>${item.id} </row-item>
                <row-item ellipsis title=${item.name ?? ''} large>${item.name} index:${i}</row-item>
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

export const smallSet = [
  { id: 0, name: 'Model 2', miles: '170 miles', price: '$35,315', metadata: '', withSlot: true },
  { id: 1, name: 'Cyber Truck', miles: '512 miles', price: '$65,315', metadata: '' },
  { id: 2, name: 'Model S', miles: '512 miles', price: '$84,315', metadata: '' },
  { id: 3, name: 'Model 3', miles: '310 miles', price: '$33,315', metadata: '' },
  { id: 4, name: 'Model X', miles: '328 miles', price: '$93,815', metadata: '' },
  {
    id: 5,
    name: 'Model Y',
    miles: '300 miles',
    price: '$43,700',
    metadata:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
] as Car[];

export const largeSet = [
  {
    id: 0,
    price: '$1,988.22',
    name: 'Edwina',
    miles: 929,
  },
  {
    id: 1,
    price: '$2,748.12',
    name: 'Sharron',
    miles: 560,
  },
  {
    id: 2,
    price: '$1,241.37',
    name: 'Shelia',
    miles: 332,
  },
  {
    id: 3,
    price: '$3,544.80',
    name: 'Dunlap',
    miles: 419,
  },
  {
    id: 4,
    price: '$3,439.43',
    name: 'Elizabeth',
    miles: 943,
  },
  {
    id: 5,
    price: '$1,418.14',
    name: 'Penny',
    miles: 299,
  },
  {
    id: 6,
    price: '$2,156.17',
    name: 'Sabrina',
    miles: 518,
  },
  {
    id: 7,
    price: '$1,887.17',
    name: 'Meredith',
    miles: 705,
  },
  {
    id: 8,
    price: '$1,377.83',
    name: 'Gutierrez',
    miles: 385,
  },
  {
    id: 9,
    price: '$3,209.40',
    name: 'Langley',
    miles: 780,
  },
  {
    id: 10,
    price: '$2,386.02',
    name: 'Butler',
    miles: 630,
  },
  {
    id: 11,
    price: '$3,812.83',
    name: 'Allison',
    miles: 717,
  },
  {
    id: 12,
    price: '$1,195.56',
    name: 'Solis',
    miles: 874,
  },
  {
    id: 13,
    price: '$3,819.42',
    name: 'Oneil',
    miles: 215,
  },
  {
    id: 14,
    price: '$2,635.08',
    name: 'Johnston',
    miles: 433,
  },
  {
    id: 15,
    price: '$3,364.97',
    name: 'Cline',
    miles: 978,
  },
  {
    id: 16,
    price: '$2,438.91',
    name: 'Celina',
    miles: 615,
  },
  {
    id: 17,
    price: '$1,254.02',
    name: 'Nunez',
    miles: 657,
  },
  {
    id: 18,
    price: '$2,785.93',
    name: 'Gill',
    miles: 521,
  },
  {
    id: 19,
    price: '$1,982.37',
    name: 'Walker',
    miles: 465,
  },
  {
    id: 20,
    price: '$3,591.45',
    name: 'Dionne',
    miles: 110,
  },
  {
    id: 21,
    price: '$3,341.12',
    name: 'Walters',
    miles: 169,
  },
  {
    id: 22,
    price: '$3,148.67',
    name: 'Emerson',
    miles: 369,
  },
  {
    id: 23,
    price: '$1,836.81',
    name: 'Mclean',
    miles: 405,
  },
  {
    id: 24,
    price: '$3,384.66',
    name: 'Essie',
    miles: 326,
  },
  {
    id: 25,
    price: '$2,808.96',
    name: 'Tabatha',
    miles: 723,
  },
  {
    id: 26,
    price: '$1,858.82',
    name: 'Whitney',
    miles: 450,
  },
  {
    id: 27,
    price: '$3,112.47',
    name: 'Maldonado',
    miles: 428,
  },
  {
    id: 28,
    price: '$3,750.97',
    name: 'Caitlin',
    miles: 209,
  },
  {
    id: 29,
    price: '$2,907.26',
    name: 'Stokes',
    miles: 521,
  },
  {
    id: 30,
    price: '$1,487.83',
    name: 'Elena',
    miles: 336,
  },
  {
    id: 31,
    price: '$1,578.66',
    name: 'Samantha',
    miles: 616,
  },
  {
    id: 32,
    price: '$3,575.86',
    name: 'Barber',
    miles: 610,
  },
  {
    id: 33,
    price: '$1,743.25',
    name: 'Ray',
    miles: 479,
  },
  {
    id: 34,
    price: '$2,037.71',
    name: 'Beard',
    miles: 129,
  },
  {
    id: 35,
    price: '$1,481.01',
    name: 'Lora',
    miles: 263,
  },
  {
    id: 36,
    price: '$1,303.26',
    name: 'Glenda',
    miles: 545,
  },
  {
    id: 37,
    price: '$2,699.66',
    name: 'Gabriela',
    miles: 636,
  },
  {
    id: 38,
    price: '$3,031.61',
    name: 'Lula',
    miles: 490,
  },
  {
    id: 39,
    price: '$1,885.48',
    name: 'Wise',
    miles: 848,
  },
  {
    id: 40,
    price: '$2,330.21',
    name: 'Cleo',
    miles: 486,
  },
  {
    id: 41,
    price: '$3,462.07',
    name: 'Robertson',
    miles: 427,
  },
  {
    id: 42,
    price: '$2,815.30',
    name: 'Holmes',
    miles: 813,
  },
  {
    id: 43,
    price: '$3,606.96',
    name: 'Bradley',
    miles: 371,
  },
  {
    id: 44,
    price: '$2,238.02',
    name: 'Cortez',
    miles: 319,
  },
  {
    id: 45,
    price: '$3,384.01',
    name: 'Julianne',
    miles: 506,
  },
  {
    id: 46,
    price: '$1,564.88',
    name: 'Robinson',
    miles: 975,
  },
  {
    id: 47,
    price: '$2,411.78',
    name: 'Tara',
    miles: 396,
  },
  {
    id: 48,
    price: '$1,448.27',
    name: 'Desiree',
    miles: 116,
  },
  {
    id: 49,
    price: '$2,243.80',
    name: 'Georgette',
    miles: 229,
  },
  {
    id: 50,
    price: '$2,669.75',
    name: 'Pansy',
    miles: 488,
  },
  {
    id: 51,
    price: '$2,684.04',
    name: 'Dana',
    miles: 521,
  },
  {
    id: 52,
    price: '$2,027.18',
    name: 'Candice',
    miles: 438,
  },
  {
    id: 53,
    price: '$1,323.73',
    name: 'Dina',
    miles: 929,
  },
  {
    id: 54,
    price: '$1,885.05',
    name: 'Avery',
    miles: 492,
  },
  {
    id: 55,
    price: '$2,546.68',
    name: 'Mercado',
    miles: 192,
  },
  {
    id: 56,
    price: '$3,729.28',
    name: 'Hays',
    miles: 133,
  },
  {
    id: 57,
    price: '$1,369.68',
    name: 'Cook',
    miles: 460,
  },
  {
    id: 58,
    price: '$1,607.37',
    name: 'Marva',
    miles: 840,
  },
  {
    id: 59,
    price: '$1,053.09',
    name: 'Roseann',
    miles: 154,
  },
  {
    id: 60,
    price: '$2,638.71',
    name: 'Rosalinda',
    miles: 360,
  },
  {
    id: 61,
    price: '$3,457.84',
    name: 'Debbie',
    miles: 928,
  },
  {
    id: 62,
    price: '$3,112.39',
    name: 'Yolanda',
    miles: 420,
  },
  {
    id: 63,
    price: '$1,681.79',
    name: 'Todd',
    miles: 517,
  },
  {
    id: 64,
    price: '$2,005.89',
    name: 'Flora',
    miles: 760,
  },
  {
    id: 65,
    price: '$3,148.33',
    name: 'Bolton',
    miles: 182,
  },
  {
    id: 66,
    price: '$1,977.58',
    name: 'Fulton',
    miles: 259,
  },
  {
    id: 67,
    price: '$1,610.97',
    name: 'Deann',
    miles: 285,
  },
  {
    id: 68,
    price: '$1,457.99',
    name: 'Lorene',
    miles: 447,
  },
  {
    id: 69,
    price: '$3,992.25',
    name: 'Mathis',
    miles: 563,
  },
  {
    id: 70,
    price: '$3,243.57',
    name: 'Martha',
    miles: 457,
  },
  {
    id: 71,
    price: '$3,882.66',
    name: 'Miranda',
    miles: 632,
  },
  {
    id: 72,
    price: '$2,728.60',
    name: 'Natalie',
    miles: 228,
  },
  {
    id: 73,
    price: '$2,626.60',
    name: 'Justine',
    miles: 601,
  },
  {
    id: 74,
    price: '$2,536.92',
    name: 'Louisa',
    miles: 596,
  },
  {
    id: 75,
    price: '$1,863.41',
    name: 'Leanne',
    miles: 108,
  },
  {
    id: 76,
    price: '$2,344.22',
    name: 'Washington',
    miles: 990,
  },
  {
    id: 77,
    price: '$1,590.07',
    name: 'Guerrero',
    miles: 145,
  },
  {
    id: 78,
    price: '$3,053.36',
    name: 'Frye',
    miles: 325,
  },
  {
    id: 79,
    price: '$3,119.19',
    name: 'Stevenson',
    miles: 240,
  },
  {
    id: 80,
    price: '$3,535.13',
    name: 'Cantu',
    miles: 309,
  },
  {
    id: 81,
    price: '$3,624.01',
    name: 'Silvia',
    miles: 482,
  },
  {
    id: 82,
    price: '$1,612.74',
    name: 'Price',
    miles: 590,
  },
  {
    id: 83,
    price: '$2,322.82',
    name: 'Marsha',
    miles: 664,
  },
  {
    id: 84,
    price: '$2,136.37',
    name: 'Morgan',
    miles: 658,
  },
  {
    id: 85,
    price: '$3,207.64',
    name: 'Hyde',
    miles: 443,
  },
  {
    id: 86,
    price: '$2,906.99',
    name: 'Padilla',
    miles: 145,
  },
  {
    id: 87,
    price: '$1,108.39',
    name: 'Winifred',
    miles: 152,
  },
  {
    id: 88,
    price: '$3,630.34',
    name: 'Weber',
    miles: 331,
  },
  {
    id: 89,
    price: '$1,904.20',
    name: 'Ivy',
    miles: 882,
  },
  {
    id: 90,
    price: '$1,869.64',
    name: 'Santiago',
    miles: 121,
  },
  {
    id: 91,
    price: '$1,889.82',
    name: 'Lancaster',
    miles: 945,
  },
  {
    id: 92,
    price: '$1,599.68',
    name: 'Abigail',
    miles: 284,
  },
  {
    id: 93,
    price: '$2,311.40',
    name: 'Jana',
    miles: 424,
  },
  {
    id: 94,
    price: '$2,102.89',
    name: 'Conley',
    miles: 705,
  },
  {
    id: 95,
    price: '$1,006.86',
    name: 'Lottie',
    miles: 703,
  },
  {
    id: 96,
    price: '$1,363.08',
    name: 'Gay',
    miles: 106,
  },
  {
    id: 97,
    price: '$2,994.21',
    name: 'Houston',
    miles: 779,
  },
  {
    id: 98,
    price: '$3,026.97',
    name: 'Jill',
    miles: 814,
  },
  {
    id: 99,
    price: '$3,693.45',
    name: 'Coffey',
    miles: 593,
  },
] as Car[];
