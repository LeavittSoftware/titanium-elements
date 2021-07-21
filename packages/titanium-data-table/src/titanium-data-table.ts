import '@material/mwc-linear-progress';
import '@material/mwc-checkbox';
import { Checkbox } from '@material/mwc-checkbox';
import '@material/mwc-icon-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

import { css, customElement, html, LitElement, property, query, queryAsync, state } from 'lit-element';
import { DataTableItemDropEvent, TitaniumDataTableItemElement } from './titanium-data-table-item';
import { TitaniumDataTableHeaderElement } from './titanium-data-table-header';
import { Select } from '@material/mwc-select';
import { h1, ellipsis } from '@leavittsoftware/titanium-styles';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const ResizeObserver: any;

/**
 * Material design inspired data table with paging, sorting, multi/single select, table actions, selected actions and more!
 *
 * @element titanium-data-table
 *
 * @fires selected-changed - Fired when a row or rows in the data table is selected. detail: array<unknown>
 * @fires page-changed - Fired when item is selected.  detail: { isSelected: boolean, item: unknown }
 * @fires take-changed - Fired when item is selected.  detail: { isSelected: boolean, item: unknown }
 *
 * @slot table-actions - item nonspecific table buttons such as add new item
 * @slot filter-button - filter button slot
 * @slot filters - filter chips slot
 * @slot search-button -  search button slot
 * @slot selected-actions -  item specific table buttons such as edit, delete shown when one or more items are selected
 * @slot table-headers - slot for table headers (ex. titanium-data-table-header)
 * @slot items - slot for table rows (ex. titanium-data-table-item)
 * @slot footer - slot for additional footer items. Slotting here overwrites footer-buttons.
 * @slot footer-buttons - slot for footer action buttons
 *
 * @cssprop {Color} --app-text-color - No results text color
 * @cssprop {Color} --app-dark-text-color - Heading and table control color
 * @cssprop {Color} --app-light-text-color - Select all checkbox fill color
 * @cssprop {Color} --app-border-color - Table border color
 */
@customElement('titanium-data-table')
export class TitaniumDataTableElement extends LitElement {
  /**
   * Table heading / title
   */
  @property({ type: String }) header: string;

  /**
   * Local storage key. Not required if header is static and unique
   */
  @property({ type: String }) localStorageKey: string;

  /**
   * Current page of data the table is on
   */
  @property({ type: Number }) page: number = 0;

  /**
   * Total number of items in all pages.
   */
  @property({ type: Number }) count: number;

  /**
   * Current items displayed on the table.
   */
  @property({ type: Array }) items: Array<unknown> = [];

  /**
   * Current search term shown in the no result state if no results are found
   */
  @property({ type: String }) searchTerm: string;

  /**
   * Limits table selection mode to single-select.  Default is multi-select.
   */
  @property({ type: Boolean, attribute: 'single-select', reflect: true }) singleSelect: boolean;

  /**
   * Disables all item section on the data-table.
   */
  @property({ type: Boolean, attribute: 'disable-select' }) disableSelect: boolean = false;

  /**
   * Disables paging.
   */
  @property({ type: Boolean, attribute: 'disable-paging', reflect: true }) disablePaging: boolean = false;

  /**
   * Array of currently selected data table objects
   */
  @property({ type: Array }) selected: Array<unknown> = [];

  /**
   * When set to true, the loading state is shown.
   */
  @property({ type: Boolean }) private isLoading: boolean;

  /**
   * Available page sizes
   */
  @state() pageSizes: Array<number> = [10, 15, 20, 50];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @query('slot[name="items"]') itemsSlot: HTMLSlotElement;
  @query('slot[name="table-headers"]') private tableHeaders: HTMLSlotElement;
  @query('div[items-slot]') itemsContainer: HTMLDivElement;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true, attribute: 'narrow' }) protected narrow: boolean = false;

  /**
   *  Get current take value. Do not set.
   */
  @property({ type: Number }) take: number;

  @query('mwc-checkbox') checkbox: Checkbox;
  @queryAsync('mwc-select') select: Select;

  private _openCount = 0;

  connectedCallback() {
    super.connectedCallback();

    if (!this.disablePaging) {
      this.setTake(this._determineTake(), false);
    }
    this.addEventListener('titanium-data-table-item-selected-changed', this._handleItemSelectionChange.bind(this));
  }

  async firstUpdated() {
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          this.narrow = cr.width < 560;
          this.updateChildrenIsNarrow();
        }
      });

      ro.observe(this);
    } else {
      const mql = window.matchMedia('(max-width: 768px)');
      mql.addEventListener('change', e => {
        this.narrow = e.matches;
        this.updateChildrenIsNarrow();
      });
      this.narrow = mql.matches;
      this.updateChildrenIsNarrow();
    }

    this.addEventListener(DataTableItemDropEvent.eventType, (e: DataTableItemDropEvent) => {
      //HoverIndex cannot be dropped beyond the length of the array
      const hoverIndex = Math.min(e.hoverIndex, this.items.length - 1);

      console.log('hoverIndex', hoverIndex, 'originIndex', e.originIndex);

      //Ignore if item goes back to where it started
      if (hoverIndex !== e.originIndex) {
        const temp = this.items[e.originIndex];
        this.items.splice(e.originIndex, 1);
        this.items.splice(hoverIndex, 0, temp);
        console.log('DataTableItemDropEvent', this.items);
      }
    });

    this.addEventListener('titanium-data-table-item-drag-start', e => {
      this.deselectAll();
      e.stopPropagation();
    });

    //When slotted in items change, sync the narrow prop
    this.tableHeaders.addEventListener('slotchange', () => this.updateChildrenIsNarrow());
    this.itemsSlot.addEventListener('slotchange', () => this.updateChildrenIsNarrow());

    //TODO: when height is allowed to be changed via css mixin on mwc-select, remove this
    const selectAnchor = (await this.select)?.shadowRoot?.querySelector<HTMLElement>('.mdc-select')?.querySelector<HTMLElement>('.mdc-select__anchor');
    if (selectAnchor) {
      selectAnchor.style.height = '36px';
    }
  }

  updateChildrenIsNarrow() {
    (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItemElement & HTMLElement>).forEach(o => (o.narrow = this.narrow));
    (this.tableHeaders.assignedElements() as Array<TitaniumDataTableHeaderElement & HTMLElement>).forEach(o => (o.narrow = this.narrow));
  }

  clearSelection() {
    this.deselectAll();
    // Ensure the collection is empty, deselect can cause a race condition
    // between deselecting and UI drawing new items.

    if (this.selected.length > 0) {
      this.selected = [];
      this._notifySelectedChanged();
    }
  }

  updated(changedProps) {
    if (changedProps.has('items') && changedProps.get('items') !== this.items) {
      // Clear selection when items array changes.
      this.clearSelection();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _handleItemSelectionChange(e: any) {
    e.stopPropagation();

    if (e.detail.isSelected) {
      if (this.singleSelect) {
        this._getTableItems()
          .filter(o => o.item !== e.detail.item)
          .forEach(o => o.deselect());

        e.detail?.checkbox?.focus?.();
      }

      this.selected.push(e.detail.item);
      this.requestUpdate();
      this._notifySelectedChanged();
    } else {
      this.selected.splice(this.selected.indexOf(e.detail.item), 1);
      this.requestUpdate();
      this._notifySelectedChanged();
    }
  }

  private _notifySelectedChanged() {
    this.dispatchEvent(new CustomEvent('selected-changed', { composed: true, detail: this.selected }));
  }

  private _getPageStats(page: number, count: number) {
    if (!count) {
      return '0-0 of 0';
    }

    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage = (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  private _determineTake() {
    const take = Number(window.localStorage.getItem(`${this.localStorageKey ?? this.header}-take`)) || 0;
    if (take > 0) {
      return take;
    }

    return this.pageSizes?.[0] ?? 1;
  }

  async loadWhile(promise: Promise<unknown>) {
    this.isLoading = true;
    this._openCount++;
    try {
      await promise;
    } finally {
      this._openCount--;
      if (this._openCount === 0) {
        this.isLoading = false;
      }
    }
  }

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', { composed: true, detail: value }));
  }

  private setTake(value: number, notify: boolean = true) {
    this.take = value;
    if (notify) {
      this.dispatchEvent(new CustomEvent('take-changed', { composed: true, detail: value }));
    }
    localStorage.setItem(`${this.localStorageKey ?? this.header}-take`, `${value}`);
  }

  private deselectAll() {
    this._getTableItems().forEach(o => o.deselect());
  }

  private selectAll() {
    this._getTableItems().forEach(o => o.select());
  }

  private _getTableItems(): Array<TitaniumDataTableItemElement> {
    return (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItemElement & HTMLElement>).filter(
      o => typeof o.select === 'function' && typeof o.deselect === 'function'
    ) as Array<TitaniumDataTableItemElement>;
  }

  private _handleNextPageClick() {
    const nextPage = this.page + 1;
    if (nextPage * this.take >= this.count) {
      return;
    }
    this.setPage(this.page + 1);
  }

  private _handleLastPageClick() {
    if (this.page === 0) {
      return;
    }
    this.setPage(this.page - 1);
  }

  static styles = [
    h1,
    ellipsis,
    css`
      :host {
        display: flex;
        flex-direction: column;

        background-color: #fff;
        border: 1px solid var(--app-border-color, #dadce0);
        border-radius: 8px;
        --mdc-icon-button-size: 42px;
        font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
      }

      header {
        display: flex;
        flex-direction: column;
        padding-bottom: 12px;
        gap: 12px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
        position: relative;
      }

      /* HEADER ROW ONE */

      section[row-one] {
        display: grid;

        grid: 'head menu' / 1fr auto;
        gap: 8px;
        padding: 12px 12px 0 12px;
      }

      section[row-one] div[head] {
        grid-area: head;
      }

      section[row-one] div[menu] {
        grid-area: menu;
        color: var(--app-text-color, #5f6368);
      }

      div[search] {
        grid-area: search;
        color: var(--app-text-color, #5f6368);
      }

      /* HEADER ROW TWO */

      section[row-two] {
        display: grid;
        grid: 'search-filter add' / 1fr auto;
        gap: 8px;
        padding: 0 12px 0 20px;
      }

      :host([narrow]) section[row-two] {
        grid:
          'search-filter '
          'add' / auto;
      }

      section[row-two] div[search-filter] {
        grid-area: search-filter;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        color: var(--app-text-color, #5f6368);
      }

      section[row-two] div[add-button] {
        grid-area: add;
        justify-self: end;
        align-self: end;
      }

      h1 {
        padding: 12px 12px 0 12px;
      }

      mwc-icon-button {
        --mdc-icon-button-size: 32px;
      }

      selected-actions {
        display: grid;
        gap: 6px 24px;
        grid: 'selected-text buttons';
        background-color: #e8f0fe;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: 0 !important;
        padding: 0 12px 12px 24px;
        align-content: end;
      }

      selected-actions h2 {
        color: #1e88e5;
        font-size: 18px;
        font-weight: 400;
        align-self: end;
      }

      selected-actions div[buttons] {
        color: var(--app-text-color, #5f6368);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0 8px;
        justify-content: flex-end;
      }

      table-header {
        display: flex;
        flex-direction: row;
        min-height: 48px;
        border-bottom: 1px solid var(--app-border-color, #dadce0);
      }

      table-header ::slotted(titanium-data-table-header:last-of-type) {
        padding-right: 24px;
      }

      mwc-linear-progress {
        margin-top: -4px;
      }

      main {
        position: relative;
        min-height: 48px;
      }

      content-veil {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
      }

      content-veil[opened] {
        opacity: 0.8;
        display: block;
      }

      table-message {
        display: flex;
        place-items: center;
        justify-content: center;
        padding: 64px;

        font-size: 14px;
        background-color: #fff;
        z-index: 10;
        color: var(--app-text-color, #5f6368);
        line-height: 20px;
      }

      table-message svg {
        display: block;
        align-self: center;
        margin: 0 8px;
        height: 20px;
        width: 20px;
        fill: var(--app-text-color, #5f6368);
        flex-shrink: 0;
      }

      footer {
        display: grid;
        grid: 'controls footer-slot' / minmax(400px, 1fr) auto;
        gap: 24px;
        padding: 12px;
        align-items: center;
        border-top: 1px solid var(--app-border-color, #dadce0);
      }

      table-controls {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        max-width: 450px;
        min-width: 0;

        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
        color: var(--app-dark-text-color, #202124);
        margin-left: 12px;
        gap: 8px;
      }

      table-paging {
        display: flex;
      }

      take-control {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }

      take-control mwc-select {
        max-width: 100px;
        --mdc-shape-small: 24px;
      }

      pagination-text {
        text-align: center;
        user-select: none;
        flex: 1 1 auto;
      }

      div[footer] {
        justify-self: end;
      }

      :host([narrow]) footer {
        grid:
          'controls'
          'footer-slot' / auto;
      }

      :host([disable-paging]) footer {
        grid: 'footer-slot' / auto;
      }

      footer-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: flex-end;
      }

      div[add-button] ::slotted(mwc-button),
      footer-buttons ::slotted(mwc-button) {
        --mdc-shape-small: 24px;
        --mdc-typography-font-family: 'Metropolis';
        --mdc-typography-button-text-transform: none;
        --mdc-typography-button-font-weight: 400;
        --mdc-typography-button-font-size: 14px;
        --mdc-typography-button-letter-spacing: 0.0107142857em;
      }

      div[add-button] {
        display: flex;
        align-items: center;
      }

      div[items-slot] {
        position: relative;
      }

      mwc-checkbox {
        flex-shrink: 0;
        align-self: center;
        margin: 0 0 0 9px;
      }

      :host([disable-select]) table-header ::slotted(titanium-data-table-header:first-of-type) {
        padding-left: 24px;
      }

      :host(:not([disable-select])[single-select]) table-header {
        padding-left: 57px;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <section row-one>
          <div head ellipsis>
            <slot name="table-header-text"> <h1 ellipsis>${this.header}</h1></slot>
          </div>
          <div menu>
            <slot name="table-actions"></slot>
          </div>
        </section>
        <section row-two>
          <div search-filter>
            <slot name="search-button"></slot>
            <slot name="filter-button"></slot>
            <slot name="filters"></slot>
          </div>
          <div add-button>
            <slot name="add-button"></slot>
          </div>
        </section>

        <selected-actions ?hidden="${this.selected.length === 0}">
          <h2 ellipsis>${this.selected.length} item${this.selected.length > 1 ? 's' : ''} selected</h2>
          <div buttons>
            <slot name="selected-actions"></slot>
          </div>
        </selected-actions>
      </header>

      <table-container>
        <table-header>
          ${this.disableSelect || this.singleSelect
            ? ''
            : html`
                <mwc-checkbox
                  ?checked=${this.selected.length > 0}
                  ?indeterminate=${this.selected.length !== 0 && this.selected.length !== this.items.length}
                  @click=${() => {
                    this.selected.length > 0 ? this.deselectAll() : this.selectAll();
                    this.checkbox.focus();
                  }}
                ></mwc-checkbox>
              `}
          <slot name="table-headers"></slot>
        </table-header>
        <mwc-linear-progress ?hidden=${!this.isLoading} ?closed=${!this.isLoading} indeterminate></mwc-linear-progress>

        <main>
          <div items-slot>
            <slot name="items"></slot>
          </div>
          <table-message ?hidden=${this.isLoading || this.items.length > 0}
            ><svg viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            ${this.searchTerm === '' || typeof this.searchTerm === 'undefined' || this.searchTerm === null
              ? 'No results'
              : `Your search of '${this.searchTerm}' did not match any results`}</table-message
          >
          <table-message ?hidden=${!this.isLoading || this.items.length !== 0}> Loading data... </table-message>
          <content-veil ?opened=${this.isLoading}></content-veil>
        </main>
      </table-container>
      <footer>
        ${this.disablePaging
          ? ''
          : html`
              <table-controls>
                <take-control>
                  <div ellipsis>Rows per page</div>
                  <mwc-select outlined @change=${e => this.setTake(e.target.value)} ?disabled=${this.isLoading}>
                    ${this.pageSizes.map(o => html` <mwc-list-item ?selected=${this.take === o} value=${o}>${o}</mwc-list-item>`)}
                  </mwc-select>
                </take-control>
                <pagination-text>${this._getPageStats(this.page, this.count)}</pagination-text>
                <table-paging>
                  <mwc-icon-button
                    icon="keyboard_arrow_left"
                    @click=${this._handleLastPageClick}
                    ?disabled=${this.page === 0 || !this.count || this.isLoading}
                  ></mwc-icon-button>
                  <mwc-icon-button
                    icon="keyboard_arrow_right"
                    @click=${this._handleNextPageClick}
                    ?disabled=${!this.count || (this.page + 1) * this.take >= this.count || this.isLoading}
                  ></mwc-icon-button>
                </table-paging>
              </table-controls>
            `}
        <div footer>
          <slot name="footer">
            <footer-buttons><slot name="footer-buttons"></slot></footer-buttons>
          </slot>
        </div>
      </footer>
    `;
  }
}
