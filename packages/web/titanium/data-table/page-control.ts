import { css, html, LitElement } from 'lit';
import { property, customElement, queryAsync } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { MdOutlinedSelect } from '@material/web/select/outlined-select.js';

import '@material/web/iconbutton/icon-button';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

/**
 * Material design page control with page size selector!
 *
 * @element titanium-page-control
 *
 * @fires action - Fired when take or page is changed by click or keyboard action. Replaces `take-changed` and `page-changed`.
 *
 * @cssprop [--titanium-page-control-font-family=Roboto, Noto, sans-serif] - page control font family
 */
@customElement('titanium-page-control')
export class TitaniumPageControl extends LitElement {
  /**
   * Available page sizes
   */
  @property({ type: Array }) accessor pageSizes: Array<number> = [10, 15, 20, 50];

  /**
   * The default page size before the user changes it
   */
  @property({ type: Number, attribute: 'default-page-size' }) accessor defaultPageSize: number = 10;

  /**
   * Current page of data the table is on
   */
  @property({ type: Number }) accessor page: number = 0;

  /**
   * Total number of items in all pages.
   */
  @property({ type: Number }) accessor count: number;

  /**
   * Local storage key to save the current page size.
   */
  @property({ type: String }) accessor localStorageKey: string;

  /**
   * Label for the page control. If not provided, defaults to 'Items per page'.
   */
  @property({ type: String }) accessor label: string = 'Items per page';

  /**
   * Disables the page control select and page navigation buttons when true
   */
  @property({ type: Boolean }) accessor disabled: boolean;
  @queryAsync('md-select') protected accessor select: MdOutlinedSelect;

  /**
   * Gets or sets take value and assigns it to local storage.
   */
  get take() {
    const take = Number(window.localStorage.getItem(this.localStorageKey)) || 0;
    if (take > 0) {
      return take;
    }

    const defaultTake = this.pageSizes.includes(this.defaultPageSize) ? this.defaultPageSize : this.pageSizes?.[0] ?? 1;
    return defaultTake;
  }
  @property({ type: Number })
  set take(val: number) {
    this.page = 0;
    if (!this.pageSizes.includes(val)) {
      this.pageSizes = [...this.pageSizes, val].sort((a, b) => a - b);
    }
    localStorage.setItem(this.localStorageKey, String(val));
  }

  #getPageStats(page: number, count: number) {
    if (!count) {
      return '0-0 of 0';
    }
    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage = (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  #handleNextPageClick() {
    const nextPage = this.page + 1;
    if (nextPage * this.take >= this.count) {
      return;
    }
    this.#setPage(this.page + 1);
    this.dispatchEvent(new CustomEvent('action', { composed: true }));
  }

  #handleLastPageClick() {
    if (this.page === 0) {
      return;
    }
    this.#setPage(this.page - 1);
    this.dispatchEvent(new CustomEvent('action', { composed: true }));
  }

  #setPage(value: number) {
    this.page = value;
  }

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--titanium-page-control-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    table-controls {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 450px;
      min-width: 0;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.011em;
      line-height: 20px;
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

    md-outlined-select {
      min-width: 100px;
      --md-outlined-field-top-space: 4px;
      --md-outlined-field-bottom-space: 4px;
      --md-outlined-select-text-field-container-shape: 8px;
    }

    pagination-text {
      text-align: center;
      user-select: none;
      padding-left: 12px;
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
          <md-outlined-select
            ?disabled=${this.disabled}
            @request-selection=${(e) => {
              e.stopPropagation();
              this.take = Number(e.target.value);
              this.dispatchEvent(new CustomEvent('action', { composed: true }));
            }}
          >
            ${repeat(
              this.pageSizes,
              (o) => o,
              (o) =>
                html` <md-select-option ?selected=${this.take === o} value=${o}>
                  <div slot="headline">${o}</div>
                </md-select-option>`
            )}
          </md-outlined-select>
        </take-control>
        <pagination-text>${this.#getPageStats(this.page, this.count)}</pagination-text>
        <table-paging>
          <md-icon-button @click=${this.#handleLastPageClick} ?disabled=${this.page === 0 || !this.count || this.disabled}>
            <md-icon>keyboard_arrow_left</md-icon>
          </md-icon-button>
          <md-icon-button @click=${this.#handleNextPageClick} ?disabled=${!this.count || (this.page + 1) * this.take >= this.count || this.disabled}>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-icon-button>
        </table-paging>
      </table-controls>
    `;
  }
}
