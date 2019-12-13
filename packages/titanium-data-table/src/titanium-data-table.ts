import '@leavittsoftware/titanium-svg-button';
import '@leavittsoftware/titanium-loading-indicator';

import { css, customElement, html, LitElement, property, queryAll } from 'lit-element';
import { TitaniumDataTableItemElement } from './titanium-data-table-item';

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

  // tslint:disable-next-line: no-any
  @queryAll('table-container') private _tableContainer: NodeListOf<any>;
  @property({ type: Number }) private take: number;

  private _openCount = 0;

  connectedCallback() {
    super.connectedCallback();
    this.setTake(this._determineTake());
    this.addEventListener('titanium-data-table-item-selected-changed', this._handleItemSelectionChange.bind(this));
  }

  clearSelection() {
    this.deselectAll();
    // Ensure the collection is empty, deselect can cause a race condition
    // between deselecting and UI drawing new items.
    this.selected = [];
    this._notifySelectedChanged();
  }

  updated(changedProps) {
    if (changedProps.has('items') && changedProps.get('items') !== this.items) {
      // Clear selection when items array changes.
      this.clearSelection();
    }
  }

  // tslint:disable-next-line: no-any
  private _handleItemSelectionChange(e: any) {
    e.stopPropagation();

    if (e.detail.isSelected) {
      if (this.singleSelect) {
        this._getTableItems()
          .filter(o => o.item !== e.detail.item)
          .forEach(o => o.deselected());
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

  private _handleChangeTake() {
    if (this.take === 10) {
      this.setTake(15);
    } else if (this.take === 15) {
      this.setTake(20);
    } else if (this.take === 20) {
      this.setTake(50);
    } else if (this.take === 50) {
      this.setTake(this.largePages ? 100 : 10);
    } else if (this.take === 100) {
      this.setTake(500);
    } else if (this.take === 500) {
      this.setTake(10);
    }
  }

  private _determineTake() {
    const take = Number(window.localStorage.getItem(`${this.header}-take`)) || 0;
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
    await promise;
    this._openCount--;
    if (this._openCount === 0) {
      this._isLoading = false;
    }
  }

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', { composed: true, detail: value }));
  }

  private setTake(value: number) {
    this.take = value;
    this.dispatchEvent(new CustomEvent('take-changed', { composed: true, detail: value }));
    localStorage.setItem(`${this.header}-take`, `${value}`);
  }

  private _handleSelectAllClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this._toggleSelectAll();
  }

  private _toggleSelectAll() {
    if (this.selected.length > 0) {
      this.deselectAll();
    } else {
      if (!this.singleSelect) {
        this.selectAll();
      }
    }
  }

  private deselectAll() {
    this._getTableItems().forEach(o => o.deselected());
  }

  private selectAll() {
    this._getTableItems().forEach(o => o.select());
  }

  private _getTableItems(): Array<TitaniumDataTableItemElement> {
    return this._tableContainer[0]
      .querySelector('slot[name="items"]')
      .assignedNodes()
      .filter(o => typeof o.select === 'function' || typeof o.deselect === 'function');
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
      background-color: #e3f2fd;
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

      overflow: hidden;
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
      display: flex;
      flex-direction: row;
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

    table-control:last-of-type {
      margin-left: 44px;
    }

    table-control span {
      padding: 0 4px 0 12px;
    }

    pagination-text {
      text-align: right;
      margin: 0 8px;
      user-select: none;
    }

    take-buttons {
      display: flex;
      flex-direction: column;
    }

    select-all-checkbox {
      display: block;
      flex-shrink: 0;
      align-self: center;
      margin: 0 8px 0 24px;
      width: 22px;
      height: 22px;
      cursor: pointer;
    }

    select-all-checkbox > div {
      width: 22px;
      height: 22px;
      padding: 0;
    }

    select-all-checkbox svg {
      fill: var(--app-light-text-color, #80868b);
    }

    :host([disable-select]) select-all-checkbox {
      display: none;
    }

    :host([disable-select]) table-header ::slotted(titanium-data-table-header:first-of-type) {
      padding-left: 24px;
    }

    :host([single-select]) select-all-checkbox svg[empty] {
      fill: #b9b9b9;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      table-control:last-of-type {
        margin-left: 4px;
      }

      [mobile-space] {
        flex: 1 1 auto;
      }
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
          <select-all-checkbox @click="${this._handleSelectAllClick}">
            <div title="${this.singleSelect ? '' : 'Select all'}" ?hidden="${this.selected.length !== 0}">
              <svg empty viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <div title="Deselect all" ?hidden="${this.selected.length === 0 || this.selected.length !== this.items.length}">
              <svg viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div title="Clear selection" ?hidden="${this.selected.length === 0 || this.selected.length === this.items.length}">
              <svg viewBox="0 0 24 24">
                <defs>
                  <path id="a" d="M0 0h24v24H0z" />
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
              </svg>
            </div>
          </select-all-checkbox>
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
      <table-controls ?hidden="${this._isLoading}">
        <table-control>
          Rows per page: <span>${this.take}</span>
          <take-buttons>
            <titanium-svg-button
              path="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
              @click="${this._handleChangeTake}"
            ></titanium-svg-button>
          </take-buttons>
        </table-control>
        <div mobile-space></div>
        <table-control>
          <pagination-text>${this._getPageStats(this.page, this.count)}</pagination-text>
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
    `;
  }
}
