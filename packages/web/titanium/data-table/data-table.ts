import './page-control';
import '@material/web/checkbox/checkbox';
import '@material/web/progress/linear-progress';
import '@material/web/icon/icon';

import { css, html, LitElement } from 'lit';
import { property, customElement, query, queryAsync, state } from 'lit/decorators.js';
import { DataTableItemDropEvent, TitaniumDataTableItem } from './data-table-item';
import { TitaniumDataTableHeader } from './data-table-header';
import { h1, ellipsis } from '../../titanium/styles/styles';
import { TitaniumPageControl } from './page-control';
import { MdCheckbox } from '@material/web/checkbox/checkbox';

declare const ResizeObserver: any;

/**
 * Material design inspired data table with paging, sorting, multi/single select, table actions, selected actions and more!
 *
 * @element titanium-data-table
 *
 * @fires selected-changed - Fired when a row or rows in the data table is selected. detail: array<unknown>
 * @fires titanium-data-table-items-reorder - Fired when table items are resorted by user.
 * @fires paging-changed - Fired when take or page is changed by click or keyboard action.
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
 * @cssprop {Color} [var(--md-sys-color-outline-variant)] - Table border color
 * @cssprop {Color} [--titanium-data-table-font-family=Roboto, Noto, sans-serif] - Set the font family used on the data table and paging control
 */
@customElement('titanium-data-table')
export class TitaniumDataTable extends LitElement {
  /**
   * Table heading / title
   */
  @property({ type: String }) accessor header: string;

  /**
   * Local storage key. Not required if header is static and unique
   */
  @property({ type: String }) accessor localStorageKey: string;

  /**
   * Available page sizes
   */
  @property({ type: Array }) accessor pageSizes: Array<number> = [10, 15, 20, 50];

  /**
   * The default page size before the user changes it
   */
  @property({ type: Number, attribute: 'default-page-size' }) accessor defaultPageSize: number = 10;

  /**
   * Total number of items in all pages.
   */
  @property({ type: Number }) accessor count: number;

  /**
   * Current items displayed on the table.
   */
  @property({ type: Array }) accessor items: Array<unknown> = [];

  /**
   * Current search term shown in the no result state if no results are found
   */
  @property({ type: String }) accessor searchTerm: string;

  /**
   * Limits table selection mode to single-select.  Default is multi-select.
   */
  @property({ type: Boolean, attribute: 'single-select', reflect: true }) accessor singleSelect: boolean;

  /**
   * Disables all item selection on the data-table.
   */
  @property({ type: Boolean, attribute: 'disable-select' }) accessor disableSelect: boolean = false;

  /**
   * Disables paging.
   */
  @property({ type: Boolean, attribute: 'disable-paging', reflect: true }) accessor disablePaging: boolean = false;

  /**
   * Array of currently selected data table objects
   */
  @property({ type: Array }) accessor selected: Array<unknown> = [];
  @query('div[items-slot]') accessor itemsContainer: HTMLDivElement;
  @query('slot[name="items"]') accessor itemsSlot: HTMLSlotElement;

  @property({ type: Boolean, reflect: true, attribute: 'narrow' }) protected accessor narrow: boolean = false;
  @property({ type: Boolean, attribute: 'has-drag-items', reflect: true }) protected accessor hasDragItems: boolean;
  @state() protected accessor isLoading: boolean;
  @query('slot[name="table-headers"]') protected accessor tableHeaders: HTMLSlotElement;
  @query('md-checkbox') protected accessor checkbox: MdCheckbox;
  @queryAsync('titanium-page-control') protected accessor pageControl: Promise<TitaniumPageControl | null>;
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
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          this.narrow = cr.width < 560;
          this.updateChildrenIsNarrow();
        }
      });

      ro.observe(this);
    } else {
      const mql = window.matchMedia('(max-width: 768px)');
      mql.addEventListener('change', (e) => {
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

  protected updateChildrenIsNarrow() {
    this.hasDragItems = (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItem & HTMLElement>).some((o) => o.enableDrag);
    (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItem & HTMLElement>).forEach((o) => (o.narrow = this.narrow));
    (this.tableHeaders.assignedElements() as Array<TitaniumDataTableHeader & HTMLElement>).forEach((o) => (o.narrow = this.narrow));
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
    this.#getTableItems().forEach((o) => o.deselect());
  }

  /**
   *  select all table items
   */
  selectAll() {
    if (!this.singleSelect) {
      this.#getTableItems().forEach((o) => o.select());
    }
  }

  #getTableItems(): Array<TitaniumDataTableItem> {
    return (this.itemsSlot.assignedElements() as Array<TitaniumDataTableItem & HTMLElement>).filter(
      (o) => typeof o.select === 'function' && typeof o.deselect === 'function'
    ) as Array<TitaniumDataTableItem>;
  }

  static styles = [
    h1,
    ellipsis,
    css`
      :host {
        display: flex;
        flex-direction: column;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 8px;
        font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        --titanium-page-control-font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
      }

      header {
        display: flex;
        flex-direction: column;
        padding-bottom: 12px;
        gap: 12px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
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
      }

      div[search] {
        grid-area: search;
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
        background-color: var(--md-sys-color-secondary-container);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: 0 !important;
        padding: 0 12px 12px 24px;
        align-content: end;
        z-index: 1;
      }

      selected-actions h2 {
        color: var(--md-sys-color-on-secondary-container);
        font-size: 18px;
        font-weight: 400;
        align-self: end;
      }

      selected-actions div[buttons] {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0 8px;
        justify-content: flex-end;
      }

      table-header {
        display: flex;
        flex-direction: row;
        gap: 16px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      table-header ::slotted(titanium-data-table-header:last-of-type) {
        padding-right: 24px;
      }

      :host([has-drag-items]) table-header ::slotted(titanium-data-table-header:last-of-type) {
        padding-right: 40px;
      }

      md-linear-progress {
        width: 100%;
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
        background-color: var(--md-sys-color-scrim);
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
      }

      content-veil[opened] {
        opacity: 0.12;
        display: block;
      }

      table-message {
        display: flex;
        place-items: center;
        justify-content: center;
        gap: 8px;
        padding: 64px;

        font-size: 14px;
        z-index: 10;
        line-height: 20px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      table-message md-icon {
        align-self: center;
        flex-shrink: 0;
      }

      footer {
        display: grid;
        grid: 'controls footer-slot' / minmax(400px, 1fr) auto;
        gap: 24px;
        padding: 12px;
        align-items: center;
        margin-top: -1px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
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
        margin: 0 14px 0 20px;
      }

      :host([disable-select]) table-header ::slotted(titanium-data-table-header:first-of-type) {
        padding-left: 24px;
      }

      :host(:not([disable-select])[single-select]) table-header {
        padding-left: 68px;
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
        @titanium-data-table-item-selected-changed=${(e) => {
          e.stopPropagation();
          const dataTableItem = e.target as TitaniumDataTableItem;

          if (dataTableItem.selected) {
            if (this.singleSelect) {
              this.#getTableItems()
                .filter((o) => o.item !== dataTableItem.item)
                .forEach((o) => o.deselect());
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
                  ?disabled=${this.items.length === 0}
                  @click=${() => {
                    if (this.selected.length > 0) {
                      this.#deselectAll();
                    } else {
                      this.selectAll();
                    }
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
          <table-message ?hidden=${this.isLoading || this.items.length > 0}>
            <md-icon>info</md-icon>
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
                  .localStorageKey=${this.localStorageKey || `${this.header}-take`}
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
