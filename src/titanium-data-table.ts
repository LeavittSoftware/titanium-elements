import '../lib/titanium-svg-button';
import '../lib/titanium-loading-indicator';

import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-data-table')
export class TitaniumDataTable extends LitElement {
  @property() title: string;
  @property() take: number;
  @property() page: number = 0;
  @property() count: number;

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

  private setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', {detail: value}));
  }

  private setTake(value: number) {
    this.take = value;
    this.dispatchEvent(new CustomEvent('take-changed', {detail: value}));
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

  table-header ::slotted(titanium-table-header:first-of-type) {
    padding-left:16px;
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
    <slot name="table-headers"></slot>    
  </table-header>

  <titanium-loading-indicator hidden disabled="[[!isLoading]]">Loading...</titanium-loading-indicator>
  <slot name="items"></slot>   

</table-container>
<page-buttons>
  <pagination-text>${
        this._getPageStats(this.page, this.count)}</pagination-text>
  <titanium-svg-button path="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" @click="${
        this._handleLastPageClick}" ?disabled="${
        this.page === 0}"></titanium-svg-button>
  <titanium-svg-button path="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" @click="${
        this._handleNextPageClick}" ?disabled="${
        (this.page + 1) * this.take >= this.count}"></titanium-svg-button>
</page-buttons>`;
  }
}