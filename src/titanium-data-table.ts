import '../lib/titanium-svg-button';
import '../lib/titanium-loading-indicator';

import {css, customElement, html, LitElement, property, queryAll} from 'lit-element';
import {TitaniumDataTableItem} from './titanium-data-table-item';

@customElement('titanium-data-table')
export class TitaniumDataTable extends LitElement {
  @property() title: string;
  @property() take: number;
  @property() page: number = 0;
  @property() count: number;
  @property() items: Array<any>;
  @property({type: Boolean, attribute: 'single-select', reflect: true})
  singleSelect: boolean;
  @property() selected: Array<any> = [];
  @queryAll('table-container') tableContanier: NodeListOf<any>;

  connectedCallback() {
    super.connectedCallback();
    this.setTake(this._determineTake());
    this.setPage(0);
    this.addEventListener(
        'titanium-data-table-item-selected-changed',
        this._handleItemSelectionChange.bind(this));
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

  private _handleItemSelectionChange(
      e: CustomEvent<{item: any, isSelected: boolean}>) {
    e.stopPropagation();

    if (e.detail.isSelected) {
      if (this.singleSelect) {
        this._getTableItems()
            .filter(o => o.item !== e.detail.item)
            .forEach(o => o.deselected())
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
    this.dispatchEvent(new CustomEvent(
        'selected-changed', {composed: true, detail: this.selected}));
  }

  private _getPageStats(page: number, count: number) {
    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage =
        (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  private _determineTake() {
    const height = Math.max(
        document.documentElement.clientHeight, window.innerHeight || 0);
    if (height > 1200) {
      return 20;
    } else if (height > 1000) {
      return 15;
    } else if (height > 800) {
      return 10;
    }
    return 5;
  }

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(
        new CustomEvent('page-changed', {composed: true, detail: value}));
  }

  private setTake(value: number) {
    this.take = value;
    this.dispatchEvent(
        new CustomEvent('take-changed', {composed: true, detail: value}));
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
    this._getTableItems().forEach(o => o.deselected())
  }

  private selectAll() {
    this._getTableItems().forEach(o => o.select())
  }

  private _getTableItems(): Array<TitaniumDataTableItem> {
    return this.tableContanier[0]
        .querySelector('slot[name="items"]')
        .assignedNodes()
        .filter(
            o => typeof o.select === 'function' ||
                typeof o.deselect === 'function');
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

  static styles = css`:host {
    display: flex;
    flex-direction: column;

    border: 1px solid #dadce0;
    border-radius: 8px;

    font-family: 'Roboto', 'Noto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 12px 12px 0 12px;
    position: relative;
  }

  header-text {
    display: flex;
    flex: 1 1 auto;
    letter-spacing: -0.264px;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    padding: 12px;
    color: #202124;
  }
 
  header-actions {
    display: flex;
    flex-direction: row; 
    justify-content: center;
  }

  header-actions ::slotted(*) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 12px;
  }
  
  @media(max-width: 768px) {
    header {
      flex-direction: column;
    }
  }

  selected-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    color: #1e88e5;
    font-size: 18px;
    background-color: #e3f2fd;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
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
    border-bottom: 1px solid #dadce0;
  }

  table-header ::slotted(titanium-table-header:last-of-type) {
    padding-right: 24px;
  }

  titanium-loading-indicator {
    align-content: center;
    justify-content: center;
    margin: 64px;
  }

  page-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 12px 12px 12px;
  }

  pagination-text {
    align-self: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.011em;
    line-height: 20px;
    color: #757575;
    text-align: right;
    margin: 0 8px;
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

  select-all-checkbox>div {
    width: 22px;
    height: 22px;
    padding: 0;
  }

  select-all-checkbox svg {
    fill: #757575;
  }

  :host([single-select]) select-all-checkbox svg[empty] {
    fill: #b9b9b9;
    cursor: not-allowed ;
  }

  [hidden] {
    display: none;
  }`;

  render() {
    return html
    `<header>
  <header-text>${this.title}</header-text>
  <header-actions>
    <slot name="table-actions"></slot>
  </header-actions>
  <selected-actions ?hidden="${this.selected.length === 0}">
    <div>${this.selected.length} selected</div>
    <div spacer></div>
    <slot name="selected-actions"></slot>
  </selected-actions>
</header>
<table-container>
  <table-header>
    <select-all-checkbox @click="${this._handleSelectAllClick}">
      <div title="${this.singleSelect ? '' : 'Select all'}" ?hidden="${
        this.selected.length !== 0}">
        <svg empty viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
      <div title="Deselect all" ?hidden="${
        this.selected.length === 0 ||
        this.selected.length !== this.items.length}">
        <svg viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </div>
      <div title="Clear selection" ?hidden="${
        this.selected.length === 0 ||
        this.selected.length === this.items.length}">
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

  <titanium-loading-indicator hidden disabled="[[!isLoading]]">Loading...</titanium-loading-indicator>
  <slot name="items"></slot>

</table-container>
<page-buttons>
  <pagination-text>${
        this._getPageStats(this.page, this.count)}</pagination-text>
  <titanium-svg-button path="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" @click="${
        this._handleLastPageClick}"
    ?disabled="${this.page === 0}"></titanium-svg-button>
  <titanium-svg-button path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" @click="${
        this._handleNextPageClick}"
    ?disabled="${
        (this.page + 1) * this.take >= this.count}"></titanium-svg-button>
</page-buttons>`;
  }
}