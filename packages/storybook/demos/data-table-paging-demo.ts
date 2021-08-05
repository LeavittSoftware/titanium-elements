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
  @state() private take: number = 10;
  @state() private resultTotal: number = largeSet?.length;
  @state() private searchTerm: string = '';
  @state() private cars: Car[] = largeSet;
  @state() private filteredCars: Car[] = [];

  @state() private selected: Car[] = [];

  @query('titanium-data-table') private dataTable!: TitaniumDataTableElement;

  async _reload() {
    console.log('reload');
    const len = this.filteredCars.length;
    this.filteredCars = [];
    const get = this._later(500);
    this.dataTable.loadWhile(get);
    await get;
    if (len === 0) {
      console.log(0, this.take);
      this.filteredCars = this.cars.slice(0, this.take);
    } else {
      console.log(len * this.page, this.take + this.take * this.page);
      this.filteredCars = this.cars.slice(len * this.page, this.take + this.take * this.page);
    }
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
        @titanium-data-table-items-reorder=${() => {
          this.requestUpdate('filteredCars');
          console.log('SAVE ORDER TO REMOTE');
        }}
        single-select
        header="Tesla Motors Paging Demo"
        @selected-changed=${(e: CustomEvent<Car[]>) => {
          this.selected = [...e.detail];
        }}
        @page-changed=${(e: CustomEvent<number>) => {
          this.page = e.detail;
          this._reload();
        }}
        @take-changed=${(e: CustomEvent<number>) => {
          this.take = e.detail;
          this.page = 0;
          this.filteredCars = [];
          this._reload();
        }}
        .count=${this.resultTotal}
        .page=${this.page}
        .take=${this.take}
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
  {
    id: 100,
    price: '$1,994.57',
    name: 'Virginia',
    miles: 174,
  },
  {
    id: 101,
    price: '$1,631.11',
    name: 'Daniels',
    miles: 435,
  },
  {
    id: 102,
    price: '$1,956.20',
    name: 'Estela',
    miles: 757,
  },
  {
    id: 103,
    price: '$2,254.16',
    name: 'Estelle',
    miles: 426,
  },
  {
    id: 104,
    price: '$3,000.94',
    name: 'Sweeney',
    miles: 605,
  },
  {
    id: 105,
    price: '$3,401.32',
    name: 'Tamera',
    miles: 695,
  },
  {
    id: 106,
    price: '$3,816.17',
    name: 'Amanda',
    miles: 721,
  },
  {
    id: 107,
    price: '$1,203.42',
    name: 'James',
    miles: 463,
  },
  {
    id: 108,
    price: '$2,745.95',
    name: 'Beryl',
    miles: 554,
  },
  {
    id: 109,
    price: '$3,130.26',
    name: 'Meadows',
    miles: 822,
  },
  {
    id: 110,
    price: '$2,454.38',
    name: 'Terry',
    miles: 136,
  },
  {
    id: 111,
    price: '$3,479.60',
    name: 'Sheryl',
    miles: 317,
  },
  {
    id: 112,
    price: '$2,780.20',
    name: 'Danielle',
    miles: 401,
  },
  {
    id: 113,
    price: '$1,976.38',
    name: 'Katy',
    miles: 796,
  },
  {
    id: 114,
    price: '$2,251.74',
    name: 'Lucile',
    miles: 698,
  },
  {
    id: 115,
    price: '$1,103.15',
    name: 'Galloway',
    miles: 226,
  },
  {
    id: 116,
    price: '$3,471.66',
    name: 'Whitehead',
    miles: 656,
  },
  {
    id: 117,
    price: '$3,048.51',
    name: 'Anderson',
    miles: 690,
  },
  {
    id: 118,
    price: '$2,098.70',
    name: 'Madge',
    miles: 780,
  },
  {
    id: 119,
    price: '$3,128.79',
    name: 'Deana',
    miles: 158,
  },
  {
    id: 120,
    price: '$2,672.42',
    name: 'Jannie',
    miles: 525,
  },
  {
    id: 121,
    price: '$2,207.84',
    name: 'Leanna',
    miles: 590,
  },
  {
    id: 122,
    price: '$3,154.96',
    name: 'Salinas',
    miles: 658,
  },
  {
    id: 123,
    price: '$2,759.30',
    name: 'Gaines',
    miles: 606,
  },
  {
    id: 124,
    price: '$1,867.55',
    name: 'Noreen',
    miles: 258,
  },
  {
    id: 125,
    price: '$2,332.88',
    name: 'Rutledge',
    miles: 266,
  },
  {
    id: 126,
    price: '$3,178.74',
    name: 'Tracie',
    miles: 944,
  },
  {
    id: 127,
    price: '$3,161.98',
    name: 'Terry',
    miles: 384,
  },
  {
    id: 128,
    price: '$3,912.24',
    name: 'Morrow',
    miles: 922,
  },
  {
    id: 129,
    price: '$1,047.48',
    name: 'Susie',
    miles: 236,
  },
  {
    id: 130,
    price: '$3,038.72',
    name: 'Donovan',
    miles: 602,
  },
  {
    id: 131,
    price: '$2,974.52',
    name: 'Stacey',
    miles: 998,
  },
  {
    id: 132,
    price: '$2,122.40',
    name: 'Tiffany',
    miles: 501,
  },
  {
    id: 133,
    price: '$1,102.71',
    name: 'Barbra',
    miles: 224,
  },
  {
    id: 134,
    price: '$3,014.03',
    name: 'Ava',
    miles: 543,
  },
  {
    id: 135,
    price: '$2,975.62',
    name: 'Best',
    miles: 626,
  },
  {
    id: 136,
    price: '$1,238.39',
    name: 'Christa',
    miles: 205,
  },
  {
    id: 137,
    price: '$1,365.35',
    name: 'Bonnie',
    miles: 319,
  },
  {
    id: 138,
    price: '$3,322.12',
    name: 'Claudette',
    miles: 704,
  },
  {
    id: 139,
    price: '$3,213.00',
    name: 'Blackwell',
    miles: 161,
  },
  {
    id: 140,
    price: '$1,926.23',
    name: 'Saunders',
    miles: 656,
  },
  {
    id: 141,
    price: '$1,434.20',
    name: 'Ester',
    miles: 486,
  },
  {
    id: 142,
    price: '$2,852.79',
    name: 'Erna',
    miles: 374,
  },
  {
    id: 143,
    price: '$3,046.20',
    name: 'Jodi',
    miles: 498,
  },
  {
    id: 144,
    price: '$3,262.50',
    name: 'Park',
    miles: 550,
  },
  {
    id: 145,
    price: '$3,383.32',
    name: 'Chambers',
    miles: 908,
  },
  {
    id: 146,
    price: '$1,241.63',
    name: 'Stephenson',
    miles: 942,
  },
  {
    id: 147,
    price: '$1,274.61',
    name: 'Vang',
    miles: 467,
  },
  {
    id: 148,
    price: '$2,698.87',
    name: 'Cooley',
    miles: 290,
  },
  {
    id: 149,
    price: '$3,085.39',
    name: 'Murray',
    miles: 983,
  },
  {
    id: 150,
    price: '$2,571.69',
    name: 'Pearl',
    miles: 370,
  },
  {
    id: 151,
    price: '$2,140.08',
    name: 'Nikki',
    miles: 459,
  },
  {
    id: 152,
    price: '$1,266.00',
    name: 'Dixon',
    miles: 944,
  },
  {
    id: 153,
    price: '$3,185.86',
    name: 'Kimberly',
    miles: 236,
  },
  {
    id: 154,
    price: '$3,657.17',
    name: 'Ana',
    miles: 935,
  },
  {
    id: 155,
    price: '$2,081.75',
    name: 'Selena',
    miles: 453,
  },
  {
    id: 156,
    price: '$2,564.90',
    name: 'Wilda',
    miles: 367,
  },
  {
    id: 157,
    price: '$2,908.60',
    name: 'Hansen',
    miles: 591,
  },
  {
    id: 158,
    price: '$2,756.18',
    name: 'Sutton',
    miles: 198,
  },
  {
    id: 159,
    price: '$1,097.32',
    name: 'Jacqueline',
    miles: 707,
  },
  {
    id: 160,
    price: '$1,886.87',
    name: 'Kim',
    miles: 418,
  },
  {
    id: 161,
    price: '$1,146.13',
    name: 'Oneill',
    miles: 543,
  },
  {
    id: 162,
    price: '$2,603.49',
    name: 'Williams',
    miles: 928,
  },
  {
    id: 163,
    price: '$3,426.56',
    name: 'Pacheco',
    miles: 629,
  },
  {
    id: 164,
    price: '$3,807.82',
    name: 'Norma',
    miles: 284,
  },
  {
    id: 165,
    price: '$3,761.63',
    name: 'Meagan',
    miles: 210,
  },
  {
    id: 166,
    price: '$1,054.91',
    name: 'Alana',
    miles: 353,
  },
  {
    id: 167,
    price: '$3,022.73',
    name: 'Sellers',
    miles: 595,
  },
  {
    id: 168,
    price: '$3,780.84',
    name: 'Wilkinson',
    miles: 661,
  },
  {
    id: 169,
    price: '$1,639.04',
    name: 'Lana',
    miles: 764,
  },
  {
    id: 170,
    price: '$1,256.17',
    name: 'Jefferson',
    miles: 284,
  },
  {
    id: 171,
    price: '$1,646.17',
    name: 'Dean',
    miles: 835,
  },
  {
    id: 172,
    price: '$1,186.69',
    name: 'Ronda',
    miles: 600,
  },
  {
    id: 173,
    price: '$3,708.36',
    name: 'Bryan',
    miles: 505,
  },
  {
    id: 174,
    price: '$1,078.29',
    name: 'Tate',
    miles: 282,
  },
  {
    id: 175,
    price: '$1,482.64',
    name: 'Everett',
    miles: 137,
  },
  {
    id: 176,
    price: '$2,527.32',
    name: 'Eloise',
    miles: 510,
  },
  {
    id: 177,
    price: '$1,374.11',
    name: 'Montoya',
    miles: 841,
  },
  {
    id: 178,
    price: '$3,850.19',
    name: 'Mavis',
    miles: 381,
  },
  {
    id: 179,
    price: '$3,245.72',
    name: 'Alvarez',
    miles: 773,
  },
  {
    id: 180,
    price: '$1,861.15',
    name: 'Manuela',
    miles: 692,
  },
  {
    id: 181,
    price: '$2,797.92',
    name: 'Castillo',
    miles: 728,
  },
  {
    id: 182,
    price: '$2,420.19',
    name: 'Johns',
    miles: 697,
  },
  {
    id: 183,
    price: '$2,875.71',
    name: 'Moon',
    miles: 692,
  },
  {
    id: 184,
    price: '$1,643.23',
    name: 'Lillie',
    miles: 862,
  },
  {
    id: 185,
    price: '$2,705.91',
    name: 'Antonia',
    miles: 906,
  },
  {
    id: 186,
    price: '$2,296.39',
    name: 'Strong',
    miles: 932,
  },
  {
    id: 187,
    price: '$3,156.68',
    name: 'Levine',
    miles: 929,
  },
  {
    id: 188,
    price: '$3,155.54',
    name: 'Joyner',
    miles: 795,
  },
  {
    id: 189,
    price: '$3,644.06',
    name: 'Lorrie',
    miles: 317,
  },
  {
    id: 190,
    price: '$2,773.25',
    name: 'Monique',
    miles: 477,
  },
  {
    id: 191,
    price: '$2,266.29',
    name: 'Georgia',
    miles: 453,
  },
  {
    id: 192,
    price: '$2,860.37',
    name: 'Lesley',
    miles: 984,
  },
  {
    id: 193,
    price: '$1,896.83',
    name: 'Esmeralda',
    miles: 919,
  },
  {
    id: 194,
    price: '$2,203.86',
    name: 'Isabelle',
    miles: 564,
  },
  {
    id: 195,
    price: '$3,267.43',
    name: 'Michael',
    miles: 264,
  },
  {
    id: 196,
    price: '$1,652.60',
    name: 'Holder',
    miles: 609,
  },
  {
    id: 197,
    price: '$2,662.15',
    name: 'Stella',
    miles: 751,
  },
  {
    id: 198,
    price: '$1,910.82',
    name: 'Potts',
    miles: 488,
  },
  {
    id: 199,
    price: '$2,104.86',
    name: 'Sawyer',
    miles: 819,
  },
  {
    id: 200,
    price: '$2,160.50',
    name: 'Durham',
    miles: 869,
  },
  {
    id: 201,
    price: '$1,737.16',
    name: 'Mcconnell',
    miles: 570,
  },
  {
    id: 202,
    price: '$1,591.90',
    name: 'Middleton',
    miles: 768,
  },
  {
    id: 203,
    price: '$1,664.66',
    name: 'Lesa',
    miles: 369,
  },
  {
    id: 204,
    price: '$3,396.81',
    name: 'Roman',
    miles: 730,
  },
  {
    id: 205,
    price: '$1,500.20',
    name: 'Alston',
    miles: 787,
  },
  {
    id: 206,
    price: '$3,052.58',
    name: 'Pena',
    miles: 124,
  },
  {
    id: 207,
    price: '$3,881.38',
    name: 'Tammi',
    miles: 316,
  },
  {
    id: 208,
    price: '$3,639.82',
    name: 'Nelda',
    miles: 357,
  },
  {
    id: 209,
    price: '$2,916.90',
    name: 'Blevins',
    miles: 281,
  },
  {
    id: 210,
    price: '$3,838.76',
    name: 'Ruiz',
    miles: 427,
  },
  {
    id: 211,
    price: '$3,782.86',
    name: 'Corine',
    miles: 188,
  },
  {
    id: 212,
    price: '$1,681.66',
    name: 'Ora',
    miles: 804,
  },
  {
    id: 213,
    price: '$2,806.40',
    name: 'Dianna',
    miles: 198,
  },
  {
    id: 214,
    price: '$1,460.41',
    name: 'Ashley',
    miles: 482,
  },
  {
    id: 215,
    price: '$3,655.92',
    name: 'Margie',
    miles: 135,
  },
  {
    id: 216,
    price: '$3,307.03',
    name: 'Melissa',
    miles: 322,
  },
  {
    id: 217,
    price: '$1,234.76',
    name: 'Duran',
    miles: 766,
  },
  {
    id: 218,
    price: '$1,842.36',
    name: 'Trina',
    miles: 736,
  },
  {
    id: 219,
    price: '$3,042.82',
    name: 'Maryellen',
    miles: 394,
  },
  {
    id: 220,
    price: '$1,554.76',
    name: 'Dixie',
    miles: 442,
  },
  {
    id: 221,
    price: '$3,281.87',
    name: 'Kitty',
    miles: 264,
  },
  {
    id: 222,
    price: '$3,285.03',
    name: 'Hilary',
    miles: 463,
  },
  {
    id: 223,
    price: '$2,976.06',
    name: 'Maxwell',
    miles: 875,
  },
  {
    id: 224,
    price: '$1,198.89',
    name: 'Flynn',
    miles: 864,
  },
  {
    id: 225,
    price: '$2,639.79',
    name: 'Vickie',
    miles: 484,
  },
  {
    id: 226,
    price: '$2,519.07',
    name: 'Rosa',
    miles: 448,
  },
  {
    id: 227,
    price: '$3,695.87',
    name: 'Richard',
    miles: 428,
  },
  {
    id: 228,
    price: '$1,940.48',
    name: 'Enid',
    miles: 820,
  },
  {
    id: 229,
    price: '$3,257.36',
    name: 'Maritza',
    miles: 578,
  },
  {
    id: 230,
    price: '$1,970.40',
    name: 'Rodgers',
    miles: 669,
  },
  {
    id: 231,
    price: '$2,925.41',
    name: 'Victoria',
    miles: 347,
  },
  {
    id: 232,
    price: '$3,118.08',
    name: 'Katelyn',
    miles: 877,
  },
  {
    id: 233,
    price: '$1,504.15',
    name: 'Jones',
    miles: 389,
  },
  {
    id: 234,
    price: '$2,263.09',
    name: 'Joanne',
    miles: 872,
  },
  {
    id: 235,
    price: '$3,392.77',
    name: 'Steele',
    miles: 948,
  },
  {
    id: 236,
    price: '$2,523.50',
    name: 'Vicki',
    miles: 287,
  },
  {
    id: 237,
    price: '$1,610.47',
    name: 'Colette',
    miles: 989,
  },
  {
    id: 238,
    price: '$3,259.96',
    name: 'Susana',
    miles: 386,
  },
  {
    id: 239,
    price: '$3,262.92',
    name: 'Wendi',
    miles: 158,
  },
  {
    id: 240,
    price: '$3,302.29',
    name: 'Hernandez',
    miles: 911,
  },
  {
    id: 241,
    price: '$3,145.75',
    name: 'Maria',
    miles: 968,
  },
  {
    id: 242,
    price: '$2,149.54',
    name: 'Leola',
    miles: 159,
  },
  {
    id: 243,
    price: '$1,646.18',
    name: 'Maricela',
    miles: 861,
  },
  {
    id: 244,
    price: '$3,904.84',
    name: 'Cassandra',
    miles: 960,
  },
  {
    id: 245,
    price: '$2,697.55',
    name: 'Woods',
    miles: 467,
  },
  {
    id: 246,
    price: '$3,989.69',
    name: 'Iris',
    miles: 180,
  },
  {
    id: 247,
    price: '$2,943.74',
    name: 'Travis',
    miles: 638,
  },
  {
    id: 248,
    price: '$2,996.92',
    name: 'Evangelina',
    miles: 321,
  },
  {
    id: 249,
    price: '$3,729.81',
    name: 'Schroeder',
    miles: 540,
  },
  {
    id: 250,
    price: '$1,716.56',
    name: 'Angelica',
    miles: 360,
  },
  {
    id: 251,
    price: '$2,790.31',
    name: 'Adriana',
    miles: 386,
  },
  {
    id: 252,
    price: '$1,332.10',
    name: 'Kristina',
    miles: 726,
  },
  {
    id: 253,
    price: '$3,929.02',
    name: 'Chrystal',
    miles: 496,
  },
  {
    id: 254,
    price: '$3,972.32',
    name: 'Wagner',
    miles: 808,
  },
  {
    id: 255,
    price: '$2,158.52',
    name: 'Imelda',
    miles: 718,
  },
  {
    id: 256,
    price: '$3,924.80',
    name: 'Coleen',
    miles: 921,
  },
  {
    id: 257,
    price: '$2,784.90',
    name: 'Bradford',
    miles: 442,
  },
  {
    id: 258,
    price: '$1,175.57',
    name: 'Wheeler',
    miles: 690,
  },
  {
    id: 259,
    price: '$2,890.98',
    name: 'Aisha',
    miles: 303,
  },
  {
    id: 260,
    price: '$2,131.73',
    name: 'Kerr',
    miles: 898,
  },
  {
    id: 261,
    price: '$2,174.87',
    name: 'Sharp',
    miles: 978,
  },
  {
    id: 262,
    price: '$1,639.08',
    name: 'Kathleen',
    miles: 995,
  },
  {
    id: 263,
    price: '$3,496.95',
    name: 'Berry',
    miles: 205,
  },
  {
    id: 264,
    price: '$1,641.99',
    name: 'Latasha',
    miles: 236,
  },
  {
    id: 265,
    price: '$2,981.16',
    name: 'Peterson',
    miles: 674,
  },
  {
    id: 266,
    price: '$3,463.71',
    name: 'Parks',
    miles: 363,
  },
  {
    id: 267,
    price: '$2,538.74',
    name: 'Preston',
    miles: 355,
  },
  {
    id: 268,
    price: '$3,796.74',
    name: 'Banks',
    miles: 341,
  },
  {
    id: 269,
    price: '$1,547.20',
    name: 'Elsa',
    miles: 506,
  },
  {
    id: 270,
    price: '$2,107.85',
    name: 'Stanley',
    miles: 103,
  },
  {
    id: 271,
    price: '$2,828.35',
    name: 'Leann',
    miles: 325,
  },
  {
    id: 272,
    price: '$1,878.80',
    name: 'Arlene',
    miles: 324,
  },
  {
    id: 273,
    price: '$3,534.13',
    name: 'Buchanan',
    miles: 780,
  },
  {
    id: 274,
    price: '$1,214.16',
    name: 'Emily',
    miles: 913,
  },
  {
    id: 275,
    price: '$1,326.79',
    name: 'Elnora',
    miles: 856,
  },
  {
    id: 276,
    price: '$2,363.96',
    name: 'Deborah',
    miles: 959,
  },
  {
    id: 277,
    price: '$2,411.96',
    name: 'Bowen',
    miles: 107,
  },
  {
    id: 278,
    price: '$2,123.61',
    name: 'Parsons',
    miles: 352,
  },
  {
    id: 279,
    price: '$2,040.31',
    name: 'Vanessa',
    miles: 877,
  },
  {
    id: 280,
    price: '$2,907.11',
    name: 'Gardner',
    miles: 266,
  },
  {
    id: 281,
    price: '$1,401.01',
    name: 'Ingram',
    miles: 225,
  },
  {
    id: 282,
    price: '$1,204.19',
    name: 'Vivian',
    miles: 865,
  },
  {
    id: 283,
    price: '$3,628.88',
    name: 'Barron',
    miles: 418,
  },
  {
    id: 284,
    price: '$2,005.68',
    name: 'Mai',
    miles: 838,
  },
  {
    id: 285,
    price: '$1,516.23',
    name: 'Cain',
    miles: 309,
  },
  {
    id: 286,
    price: '$2,228.67',
    name: 'Lacey',
    miles: 366,
  },
  {
    id: 287,
    price: '$1,436.52',
    name: 'Taylor',
    miles: 974,
  },
  {
    id: 288,
    price: '$1,143.98',
    name: 'Albert',
    miles: 187,
  },
  {
    id: 289,
    price: '$1,161.58',
    name: 'Ball',
    miles: 114,
  },
  {
    id: 290,
    price: '$2,077.90',
    name: 'Angelita',
    miles: 852,
  },
  {
    id: 291,
    price: '$3,396.53',
    name: 'Walter',
    miles: 126,
  },
  {
    id: 292,
    price: '$2,408.13',
    name: 'Valenzuela',
    miles: 326,
  },
  {
    id: 293,
    price: '$1,509.90',
    name: 'Bridges',
    miles: 899,
  },
  {
    id: 294,
    price: '$3,364.35',
    name: 'Beverly',
    miles: 772,
  },
  {
    id: 295,
    price: '$2,319.54',
    name: 'Savage',
    miles: 226,
  },
  {
    id: 296,
    price: '$2,084.69',
    name: 'Jimenez',
    miles: 178,
  },
  {
    id: 297,
    price: '$3,788.53',
    name: 'George',
    miles: 101,
  },
  {
    id: 298,
    price: '$1,749.59',
    name: 'Christy',
    miles: 257,
  },
  {
    id: 299,
    price: '$3,467.99',
    name: 'Pollard',
    miles: 749,
  },
  {
    id: 300,
    price: '$2,449.66',
    name: 'Patel',
    miles: 945,
  },
] as Car[];
