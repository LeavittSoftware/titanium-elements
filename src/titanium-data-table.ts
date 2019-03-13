import '../lib/titanium-svg-button';
import '../lib/titanium-loading-indicator';

import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-data-table')
export class TitaniumDataTable extends LitElement {
  @property() title: string;
  @property() take: number;
  @property() page: number = 0;
  @property() count: number;
  @property() items: Array<any>;
  @property({type: Boolean, attribute: 'single-select', reflect: true})
  singleSelect: boolean;
  @property() selectedCount: number = 0;

  connectedCallback() {
    super.connectedCallback();
    this.setTake(this._determineTake());
    this.setPage(0);
  }

  _getPageStats(page: number, count: number) {
    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage =
        (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  private _determineTake() {
    // const height = Math.max(
    //     document.documentElement.clientHeight, window.innerHeight || 0);
    // if (height > 1200) {
    //   return 20;
    // } else if (height > 1000) {
    //   return 15;
    // } else if (height > 800) {
    //   return 10;
    // }
    return 5;
  }

  private setSelectedCount(value: number) {
    this.selectedCount = value;
    this.dispatchEvent(
        new CustomEvent('selected-count-changed', {detail: value}));
  }

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', {detail: value}));
  }

  private setTake(value: number) {
    this.take = value;
    this.dispatchEvent(new CustomEvent('take-changed', {detail: value}));
  }

  _handleSelectAllClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this._toggleSelectAll();
  }

  private _toggleSelectAll() {
    if (this.selectedCount > 0) {
      this.deselectAll();
    } else {
      if (!this.singleSelect) {
        this.selectAll();
      }
    }
  }

  private deselectAll() {
    this.items.forEach((o) => {
      o.isSelected = false;
    });
    this.setSelectedCount(0);
  }

  private selectAll() {
    this.items.forEach((o) => {
      o.isSelected = true;
    });
    this.setSelectedCount(this.items.length);
  }

  _handleNextPageClick() {
    const nextPage = this.page + 1;
    if (nextPage * this.take >= this.count) {
      return;
    }
    this.setPage(this.page + 1);
  }

  _handleLastPageClick() {
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

  table-header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dadce0;
  }

  table-header ::slotted(titanium-table-header:last-of-type) {
    padding-right:16px;
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
    margin: 0 8px 0 16px;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  select-all-checkbox svg {
    fill: #757575;
  }

  :host([single-select]) select-all-checkbox svg[empty] {
    fill: #f5f5f5;
    cursor: inherit;
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
  <selected-actions hidden>
    <div>1 selected</div>
    <div spacer></div>
    <slot name="selected-actions"></slot>
  </selected-actions>
</header>
<table-container>
  <table-header>
    <select-all-checkbox @click="${this._handleSelectAllClick}">
      <svg empty viewBox="0 0 24 24" ?hidden="${this.selectedCount !== 0}">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      </svg>
      <svg checked viewBox="0 0 24 24" ?hidden="${
        this.selectedCount === 0 || this.selectedCount !== this.items.length}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      <svg indetermanite viewBox="0 0 24 24" ?hidden="${
        this.selectedCount === 0 || this.selectedCount === this.items.length}">
        <defs>
          <path id="a" d="M0 0h24v24H0z" />
        </defs>
        <clipPath id="b">
          <use xlink:href="#a" overflow="visible" />
        </clipPath>
        <path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
      </svg>
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