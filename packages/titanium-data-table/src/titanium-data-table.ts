import '@leavittsoftware/titanium-svg-button';
import '@leavittsoftware/titanium-svg-button/lib/titanium-svg-button-menu';
import '@leavittsoftware/titanium-loading-indicator';
import '@material/mwc-checkbox';
import { Checkbox } from '@material/mwc-checkbox';

import { css, customElement, html, LitElement, property, query } from 'lit-element';
import { TitaniumDataTableItemElement } from './titanium-data-table-item';
import { TitaniumDataTableHeaderElement } from './titanium-data-table-header';

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
 * @slot footer - slot for additional footer items
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
  @property({ type: Boolean, attribute: 'disable-paging' }) disablePaging: boolean = false;

  /**
   * Array of currently selected data table objects
   */
  @property({ type: Array }) selected: Array<unknown> = [];

  /**
   * When set to true, the loading state is shown.
   */
  @property({ type: Boolean }) private _isLoading: boolean;

  /**
   * Allows page sizes of 100 and 500 to be selected in addition to the standard sizes of 10, 15, 20, and 50.
   */
  @property({ type: Boolean }) largePages: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @query('slot[name="items"]') private itemsSlot: HTMLSlotElement;
  @query('slot[name="table-headers"]') private tableHeaders: HTMLSlotElement;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true, attribute: 'narrow' }) protected narrow: boolean = false;

  @property({ type: Number }) private take: number;

  @query('mwc-checkbox') checkbox: Checkbox;

  private _openCount = 0;

  connectedCallback() {
    super.connectedCallback();

    if (!this.disablePaging) {
      this.setTake(this._determineTake());
    }
    this.addEventListener('titanium-data-table-item-selected-changed', this._handleItemSelectionChange.bind(this));
  }

  firstUpdated() {
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          this.narrow = cr.width < 760;
          this.updateChildrenIsNarrow();
        }
      });

      ro.observe(this);
    } else {
      const mql = window.matchMedia('(max-width: 768px)');
      mql.addListener(e => {
        this.narrow = e.matches;
        this.updateChildrenIsNarrow();
      });
      this.narrow = mql.matches;
      this.updateChildrenIsNarrow();
    }

    //When slotted in items change, sync the narrow prop
    this.tableHeaders.addEventListener('slotchange', () => this.updateChildrenIsNarrow());
    this.itemsSlot.addEventListener('slotchange', () => this.updateChildrenIsNarrow());
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

    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (height > 1200) {
      return 20;
    } else if (height > 1000) {
      return 15;
    }
    return 10;
  }

  async loadWhile(promise: Promise<unknown>) {
    this._isLoading = true;
    this._openCount++;
    try {
      await promise;
    } finally {
      this._openCount--;
      if (this._openCount === 0) {
        this._isLoading = false;
      }
    }
  }

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', { composed: true, detail: value }));
  }

  private setTake(value: number) {
    this.take = value;
    this.dispatchEvent(new CustomEvent('take-changed', { composed: true, detail: value }));
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

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;

      background-color: #fff;
      border: 1px solid var(--app-border-color, #dadce0);
      border-radius: 8px;

      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    header {
      display: flex;
      flex-direction: column;

      border-bottom: 1px solid var(--app-border-color, #dadce0);
      position: relative;
    }

    adaptive-header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 12px;
    }

    table-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      flex-wrap: wrap;
      flex: 1 1 150px;
      padding: 0 4px;
    }

    table-actions > ::slotted(*) {
      margin: 0 8px 8px 8px;
    }

    h1 {
      display: flex;
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;

      letter-spacing: -0.264px;
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
      margin: 0px;
      padding: 12px 24px 12px;
      color: var(--app-dark-text-color, #202124);
    }

    selected-actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      color: #1e88e5;
      font-size: 18px;
      background-color: #e8f0fe;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      margin: 0 !important;
    }

    selected-text {
      display: block;
    }

    selected-text,
    selected-actions ::slotted(*) {
      margin: 8px;
    }

    section[row-two] {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin: 0 12px 6px 12px;
    }

    section[row-two] > ::slotted(*) {
      margin: 6px 0;
    }

    filter-container {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
    }

    filter-container > ::slotted(*) {
      align-self: flex-start;
      flex-shrink: 0;
      margin: 6px 0;
    }

    all-filters {
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
      flex-wrap: wrap;
      align-content: flex-end;
      padding-bottom: 6px;
    }

    all-filters > ::slotted(*) {
      margin: 6px 0 6px 12px;
    }

    [spacer] {
      flex: 1 1 auto;
    }

    table-container {
      padding-bottom: 12px;
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

    titanium-loading-indicator {
      align-content: center;
      justify-content: center;
      margin: 64px;
    }

    no-results-indicator {
      display: flex;
      align-content: center;
      justify-content: center;
      margin: 48px 32px 32px 32px;
      font-size: 13px;
      color: var(--app-text-color, #5f6368);
      line-height: 20px;
    }

    no-results-indicator svg {
      display: block;
      align-self: center;
      margin: 0 8px;
      height: 20px;
      width: 20px;
      fill: var(--app-text-color, #5f6368);
      flex-shrink: 0;
    }

    table-controls {
      display: grid;
      grid-auto-flow: column;
      gap: 44px;
      align-items: center;

      justify-content: flex-end;
      padding: 0 12px 12px 12px;

      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.011em;
      line-height: 20px;
      color: var(--app-dark-text-color, #202124);
    }

    table-control {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
      user-select: none;
    }

    table-control span {
      padding: 0 4px 0 12px;
    }

    table-control > titanium-svg-button-menu {
      margin-bottom: -6px;
      --titanium-svg-button-size: 32px;
      --titanium-svg-button-svg-size: 25px;
    }

    :host([narrow]) table-controls {
      grid-auto-columns: 1fr auto auto;
      gap: 8px;
    }

    pagination-text {
      text-align: right;
      margin: 0 8px;
      user-select: none;
    }

    mwc-checkbox {
      flex-shrink: 0;
      align-self: center;
      margin: 0 0 0 16px;
    }

    :host([disable-select]) table-header ::slotted(titanium-data-table-header:first-of-type) {
      padding-left: 24px;
    }

    :host(:not([disable-select])[single-select]) table-header {
      padding-left: 60px;
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <header>
        <adaptive-header>
          <h1>${this.header}</h1>
          <table-actions>
            <slot name="table-actions"></slot>
          </table-actions>
        </adaptive-header>
        <section row-two>
          <filter-container>
            <slot name="filter-button"></slot>
            <all-filters>
              <slot name="filters"></slot>
            </all-filters>
          </filter-container>
          <slot name="search-button"></slot>
        </section>
        <selected-actions ?hidden="${this.selected.length === 0}">
          <selected-text>${this.selected.length} item${this.selected.length > 1 ? 's' : ''} selected</selected-text>
          <div spacer></div>
          <slot name="selected-actions"></slot>
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

        <no-results-indicator ?hidden="${this._isLoading || this.items.length > 0}"
          ><svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
          ${this.searchTerm === '' || typeof this.searchTerm === 'undefined' || this.searchTerm === null
            ? 'No results'
            : `Your search of '${this.searchTerm}' did not match any results`}</no-results-indicator
        >

        <titanium-loading-indicator ?hidden="${!this._isLoading}" ?disabled="${!this._isLoading}">Loading...</titanium-loading-indicator>
        <slot name="items"></slot>
      </table-container>

      ${this.disablePaging
        ? ''
        : html`
            <table-controls ?hidden=${this._isLoading}>
              <table-control>
                Rows per page: <span>${this.take}</span>
                <titanium-svg-button-menu path="M7 10l5 5 5-5H7z" anchorCorner="9" anchor-margin-top="0" anchor-margin-right="0">
                  <div role="menuitem" @item-selected=${() => this.setTake(10)}>10 rows</div>
                  <div role="menuitem" @item-selected=${() => this.setTake(15)}>15 rows</div>
                  <div role="menuitem" @item-selected=${() => this.setTake(20)}>20 rows</div>
                  <div role="menuitem" @item-selected=${() => this.setTake(50)}>50 rows</div>
                  ${this.largePages
                    ? html`
                        <div role="menuitem" @item-selected=${() => this.setTake(100)}>100 rows</div>
                        <div role="menuitem" @item-selected=${() => this.setTake(500)}>500 rows</div>
                      `
                    : ''}
                </titanium-svg-button-menu>
              </table-control>
              <pagination-text>${this._getPageStats(this.page, this.count)}</pagination-text>
              <table-control>
                <titanium-svg-button
                  path="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                  @click="${this._handleLastPageClick}"
                  ?disabled="${this.page === 0 || !this.count}"
                ></titanium-svg-button>
                <titanium-svg-button
                  path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  @click="${this._handleNextPageClick}"
                  ?disabled="${!this.count || (this.page + 1) * this.take >= this.count}"
                ></titanium-svg-button>
              </table-control>
            </table-controls>
          `}
      <slot name="footer"></slot>
    `;
  }
}
