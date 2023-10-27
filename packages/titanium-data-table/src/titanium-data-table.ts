import './titanium-page-control';
import '@material/web/checkbox/checkbox';

import { css, html, LitElement } from 'lit';
import { property, customElement, query, queryAsync } from 'lit/decorators.js';
import { DataTableItemDropEvent, TitaniumDataTableItemElement } from './titanium-data-table-item';
import { TitaniumDataTableHeaderElement } from './titanium-data-table-header';
import { h1, ellipsis } from '@leavittsoftware/titanium-styles';
import { TitaniumPageControlElement } from './titanium-page-control';
import { MdCheckbox } from '@material/web/checkbox/checkbox';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const ResizeObserver: any;

/**
 * Material design inspired data table with paging, sorting, multi/single select, table actions, selected actions and more!
 *
 * @element titanium-data-table
 *
 * @fires selected-changed - Fired when a row or rows in the data table is selected. detail: array<unknown>
 * @fires page-changed - DEPRECATED Use `paging-changed` instead.
 * @fires take-changed - DEPRECATED Use `paging-changed` instead.
 * @fires titanium-data-table-items-reorder - Fired when table items are resorted by user.
 * @fires paging-changed - Fired when take or page is changed by click or keyboard action. Replaces `take-changed` and `page-changed`.
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
 * @cssprop {Color} [--app-text-color=#5f6368] - No results, Heading, table, and select all checkbox text color
 * @cssprop {Color} [--app-border-color=#dadce0] - Table border color
 * @cssprop {Color} [--titanium-data-table-font-family=Roboto, Noto, sans-serif] - Set the font family used on the data table and paging control
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
   * Available page sizes
   */
  @property({ type: Array }) pageSizes: Array<number> = [10, 15, 20, 50];

  /**
   * The default page size before the user changes it
   */
  @property({ type: Number, attribute: 'default-page-size' }) defaultPageSize: number = 10;

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
   * Disables all item selection on the data-table.
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
  @property({ type: Boolean }) protected isLoading: boolean;

  /**
   * @ignore
   */
  @query('slot[name="items"]') itemsSlot: HTMLSlotElement;
  @query('slot[name="table-headers"]') protected tableHeaders: HTMLSlotElement;
  /**
   * @ignore
   */
  @query('div[items-slot]') itemsContainer: HTMLDivElement;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true, attribute: 'narrow' }) protected narrow: boolean = false;

  /**
   * @ignore
   */
  @query('md-checkbox') checkbox: MdCheckbox;
  /**
   * @ignore
   */
  @queryAsync('titanium-page-control') pageControl: Promise<TitaniumPageControlElement | null>;
  #openCount = 0;

  /**
   *  returns internal pageControl's current take
   */
  public async getTake(): Promise<number> {
    return (await this.pageControl)?.take ?? 0;
  }

  /**
   *  returns internal pageControl's current page
   */
  public async getPage(): Promise<number> {
    return (await this.pageControl)?.page ?? 0;
  }

  /**
   *  sets internal pageControl's current take
   */
  public async setTake(take: number): Promise<void> {
    const control = await this.pageControl;
    if (control) {
      control.take = take;
    }
  }

  /**
   *  sets internal pageControl's current page
   */
  public async setPage(page: number): Promise<void> {
    const control = await this.pageControl;
    if (control) {
      control.page = page;
    }
  }

  /**
   *  resets internal pageControl's current page to 0
   */
  public async resetPage() {
    await this.setPage(0);
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
      e.stopPropagation();
      //HoverIndex cannot be dropped beyond the length of the array
      const hoverIndex = Math.min(e.hoverIndex, this.items.length - 1);

      //Ignore if item goes back to where it started
      if (hoverIndex !== e.originIndex) {
        const temp = this.items[e.originIndex];
        this.items.splice(e.originIndex, 1);
        this.items.splice(hoverIndex, 0, temp);
        /**
         * @ignore
         */
        this.dispatchEvent(new DataTableItemsReorderedEvent());
      }
    });

    //When slotted in items change, sync the narrow prop
    this.tableHeaders.addEventListener('slotchange', () => this.updateChildrenIsNarrow());
    this.itemsSlot.addEventListener('slotchange', () => this.updateChildrenIsNarrow());

    await (
      await this.pageControl
    )?.updateComplete;
  }

  /**
   * @ignore
   */
  updateChildrenIsNarrow() {
    (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItemElement & HTMLElement>).forEach(o => (o.narrow = this.narrow));
    (this.tableHeaders.assignedElements() as Array<TitaniumDataTableHeaderElement & HTMLElement>).forEach(o => (o.narrow = this.narrow));
  }

  /**
   *  de-select all table items and clear this.selected
   */
  clearSelection() {
    this.#deselectAll();
    // Ensure the collection is empty, deselect can cause a race condition
    // between deselecting and UI drawing new items.

    if (this.selected.length > 0) {
      this.selected = [];
      this.#notifySelectedChanged();
    }
  }

  updated(changedProps) {
    if (changedProps.has('items') && changedProps.get('items') !== this.items) {
      // Clear selection when items array changes.
      this.clearSelection();
    }
  }

  #notifySelectedChanged() {
    this.dispatchEvent(new CustomEvent('selected-changed', { composed: true, detail: this.selected }));
  }

  /**
   *  display linear progress bar while promise is active
   */
  async loadWhile(promise: Promise<unknown>) {
    this.isLoading = true;
    this.#openCount++;
    try {
      await promise;
    } finally {
      this.#openCount--;
      if (this.#openCount === 0) {
        this.isLoading = false;
      }
    }
  }

  #deselectAll() {
    this.#getTableItems().forEach(o => o.deselect());
  }

  /**
   *  select all table items
   */
  selectAll() {
    if (!this.singleSelect) {
      this.#getTableItems().forEach(o => o.select());
    }
  }

  #getTableItems(): Array<TitaniumDataTableItemElement> {
    return (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItemElement & HTMLElement>).filter(
      o => typeof o.select === 'function' && typeof o.deselect === 'function'
    ) as Array<TitaniumDataTableItemElement>;
  }

  static styles = [
    h1,
    ellipsis,
    css`
      :host {
        display: flex;
        flex-direction: column;

        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
        --mdc-icon-button-size: 42px;
        font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        --titanium-page-control-font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
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
        border-bottom: 1px solid var(--app-border-color, #dadce0);
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
        margin-top: -1px;
        border-top: 1px solid var(--app-border-color, #dadce0);
      }

      titanium-page-control {
        grid-area: controls;
        margin-left: 12px;
        justify-self: start;
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

      div[add-button] {
        display: flex;
        align-items: center;
      }

      div[items-slot] {
        position: relative;
      }

      md-checkbox {
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
      <header part="header">
        <section row-one>
          <div head ellipsis part="table-header-text-container">
            <slot name="table-header-text"> <h1 ellipsis>${this.header}</h1></slot>
          </div>
          <div menu part="table-actions-container">
            <slot name="table-actions"></slot>
          </div>
        </section>
        <section row-two>
          <div search-filter part="filters-container">
            <slot name="search-button"></slot>
            <slot name="filter-button"></slot>
            <slot name="filters"></slot>
          </div>
          <div add-button part="add-button-container">
            <slot name="add-button"></slot>
          </div>
        </section>

        <selected-actions ?hidden="${this.selected.length === 0}">
          <h2 ellipsis>${this.selected.length} item${this.selected.length > 1 ? 's' : ''} selected</h2>
          <div buttons part="selected-actions-container">
            <slot name="selected-actions"></slot>
          </div>
        </selected-actions>
      </header>

      <table-container
        @titanium-data-table-item-selected-changed=${e => {
          e.stopPropagation();
          const dataTableItem = e.target as TitaniumDataTableItemElement;

          if (dataTableItem.selected) {
            if (this.singleSelect) {
              this.#getTableItems()
                .filter(o => o.item !== dataTableItem.item)
                .forEach(o => o.deselect());
            }

            this.selected.push(dataTableItem.item);
            this.requestUpdate();
            this.#notifySelectedChanged();
          } else {
            this.selected.splice(this.selected.indexOf(dataTableItem.item), 1);
            this.requestUpdate();
            this.#notifySelectedChanged();
          }
        }}
      >
        <table-header part="table-header-container">
          ${this.disableSelect || this.singleSelect
            ? ''
            : html`
                <md-checkbox
                  title="${this.selected.length > 0 ? 'Deselect' : 'Select'} all checkboxes"
                  aria-label="${this.selected.length > 0 ? 'Deselect' : 'Select'} all checkboxes"
                  ?checked=${this.selected.length > 0}
                  ?indeterminate=${this.selected.length !== 0 && this.selected.length !== this.items.length}
                  @click=${() => {
                    this.selected.length > 0 ? this.#deselectAll() : this.selectAll();
                    this.checkbox.focus();
                  }}
                ></md-checkbox>
              `}
          <slot name="table-headers"></slot>
        </table-header>
        <md-linear-progress ?hidden=${!this.isLoading} ?closed=${!this.isLoading} indeterminate></md-linear-progress>

        <main>
          <div items-slot part="items-container">
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
      <footer part="footer-container">
        <slot name="footer">
          ${this.disablePaging
            ? ''
            : html`
                <titanium-page-control
                  label="Rows per page"
                  ?disabled=${this.isLoading}
                  .count=${this.count}
                  .pageSizes=${this.pageSizes}
                  .defaultPageSize=${this.defaultPageSize}
                  .localStorageKey="${this.header}-take"
                  @action=${() => {
                    this.dispatchEvent(new CustomEvent('paging-changed', { composed: true }));
                  }}
                ></titanium-page-control>
              `}
          <div footer>
            <footer-buttons><slot name="footer-buttons"></slot></footer-buttons>
          </div>
        </slot>
      </footer>
    `;
  }
}

export class DataTableItemsReorderedEvent extends Event {
  static eventType = 'titanium-data-table-items-reorder';
  constructor() {
    super(DataTableItemsReorderedEvent.eventType);
  }
}
