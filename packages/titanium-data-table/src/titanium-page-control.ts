import { css, customElement, html, LitElement, property, queryAsync } from 'lit-element';
import { Select } from '@material/mwc-select';

import '@material/mwc-checkbox';
import '@material/mwc-select';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';

@customElement('titanium-page-control')
export class TitaniumPageControlElement extends LitElement {
  /**
   * Available page sizes
   */
  @property({ type: Array }) pageSizes: Array<number>;

  /**
   * Current page of data the table is on
   */
  @property({ type: Number }) page: number = 0;

  /**
   * Total number of items in all pages.
   */
  @property({ type: Number }) count: number;

  /**
   *  Get current take value. Do not set.
   */
  @property({ type: Number }) take: number;

  /**
   * Local storage key. Not required if header is static and unique
   */
  @property({ type: String }) localStorageKey: string;

  /**
   * Label for the page control. If not provided, defaults to 'Items per page'.
   */
  @property({ type: String }) label: string = 'Items per page';

  /**
   * Disables the page control select and page navigation buttons when true
   */
  @property({ type: Boolean }) disabled: boolean;
  @queryAsync('mwc-select') select: Select;

  connectedCallback() {
    super.connectedCallback();
    this._setTake(this._determineTake());
  }

  async firstUpdated() {
    //TODO: when height is allowed to be changed via css mixin on mwc-select, remove this
    const selectAnchor = (await this.select)?.shadowRoot?.querySelector<HTMLElement>('.mdc-select')?.querySelector<HTMLElement>('.mdc-select__anchor');
    if (selectAnchor) {
      selectAnchor.style.height = '36px';
    }
  }

  private _determineTake() {
    const take = Number(window.localStorage.getItem(this.localStorageKey)) || 0;
    if (take > 0) {
      return take;
    }

    return this.pageSizes?.[0] ?? 1;
  }

  private _getPageStats(page: number, count: number) {
    if (!count) {
      return '0-0 of 0';
    }

    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage = (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  private _setTake(value: number) {
    this.take = value;
    this.dispatchEvent(new CustomEvent('take-changed', { composed: true, detail: value, bubbles: true }));
    localStorage.setItem(this.localStorageKey, `${value}`);
  }

  private _handleNextPageClick() {
    const nextPage = this.page + 1;
    if (nextPage * this.take >= this.count) {
      return;
    }
    this._setPage(this.page + 1);
  }

  private _handleLastPageClick() {
    if (this.page === 0) {
      return;
    }
    this._setPage(this.page - 1);
  }

  private _setPage(value: number) {
    this.page = value;
    this.dispatchEvent(new CustomEvent('page-changed', { composed: true, detail: value, bubbles: true }));
  }

  static styles = css`
    :host {
      display: block;
    }

    mwc-icon-button {
      --mdc-icon-button-size: 32px;
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

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <table-controls>
        <take-control>
          <div ellipsis>${this.label}</div>
          <mwc-select outlined @change=${e => this._setTake(Number(e.target.value))} ?disabled=${this.disabled}>
            ${this.pageSizes?.map(o => html` <mwc-list-item ?selected=${this.take === o} value=${o}>${o}</mwc-list-item>`)}
          </mwc-select>
        </take-control>
        <pagination-text>${this._getPageStats(this.page, this.count)}</pagination-text>
        <table-paging>
          <mwc-icon-button
            icon="keyboard_arrow_left"
            @click=${this._handleLastPageClick}
            ?disabled=${this.page === 0 || !this.count || this.disabled}
          ></mwc-icon-button>
          <mwc-icon-button
            icon="keyboard_arrow_right"
            @click=${this._handleNextPageClick}
            ?disabled=${!this.count || (this.page + 1) * this.take >= this.count || this.disabled}
          ></mwc-icon-button>
        </table-paging>
      </table-controls>
    `;
  }
}
