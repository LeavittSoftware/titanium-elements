import { css, html, LitElement } from 'lit';
import { property, customElement, queryAsync } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Select } from '@material/mwc-select';

import '@material/mwc-select';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';

/**
 * Material design page control with page size selector!
 *
 * @element titanium-page-control
 *
 * @fires action - Fired when take or page is changed by click or keyboard action. Replaces `take-changed` and `page-changed`.
 *
 * @cssprop {Color} [--app-dark-text-color=#202124] - page control text color
 * @cssprop [--titanium-page-control-font-family=Roboto, Noto, sans-serif] - page control font family
 */
@customElement('titanium-page-control')
export class TitaniumPageControlElement extends LitElement {
  /**
   * Available page sizes
   */
  @property({ type: Array }) pageSizes: Array<number> = [10, 15, 20, 50];

  /**
   * The default page size before the user changes it
   */
  @property({ type: Number, attribute: 'default-page-size' }) defaultPageSize: number = 10;

  /**
   * Current page of data the table is on
   */
  @property({ type: Number }) page: number = 0;

  /**
   * Total number of items in all pages.
   */
  @property({ type: Number }) count: number;

  /**
   * Local storage key to save the current page size.
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
  @queryAsync('mwc-select') private select: Select;

  /**
   * Gets or sets take value and assigns it to local storage.
   */
  @property({ type: Number })
  get take() {
    const take = Number(window.localStorage.getItem(this.localStorageKey)) || 0;
    if (take > 0) {
      return take;
    }

    const defaultTake = this.pageSizes.includes(this.defaultPageSize) ? this.defaultPageSize : this.pageSizes?.[0] ?? 1;
    return defaultTake;
  }

  set take(val: number) {
    this.page = 0;
    if (!this.pageSizes.includes(val)) {
      this.pageSizes = [...this.pageSizes, val].sort((a, b) => a - b);
    }
    localStorage.setItem(this.localStorageKey, String(val));
    this.requestUpdate('take');
  }

  async firstUpdated() {
    //TODO: when height is allowed to be changed via css mixin on mwc-select, remove this
    const selectAnchor = (await this.select)?.shadowRoot?.querySelector<HTMLElement>('.mdc-select')?.querySelector<HTMLElement>('.mdc-select__anchor');
    if (selectAnchor) {
      selectAnchor.style.height = '36px';
    }
  }

  private _getPageStats(page: number, count: number) {
    if (!count) {
      return '0-0 of 0';
    }

    const startOfPage = count === 0 ? count : page * this.take + 1;
    const endOfPage = (page + 1) * this.take > count ? count : (page + 1) * this.take;
    return `${startOfPage}-${endOfPage} of ${count}`;
  }

  private _handleNextPageClick() {
    const nextPage = this.page + 1;
    if (nextPage * this.take >= this.count) {
      return;
    }
    this._setPage(this.page + 1);
    this.dispatchEvent(new CustomEvent('action', { composed: true }));
  }

  private _handleLastPageClick() {
    if (this.page === 0) {
      return;
    }
    this._setPage(this.page - 1);
    this.dispatchEvent(new CustomEvent('action', { composed: true }));
  }

  private _setPage(value: number) {
    this.page = value;
  }

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--titanium-page-control-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
    }

    mwc-icon-button {
      --mdc-icon-button-size: 32px;
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
      color: var(--app-dark-text-color, #202124);
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
          <mwc-select
            outlined
            @action=${e => {
              e.stopPropagation();
              this.take = Number(e.target.value);
              this.dispatchEvent(new CustomEvent('action', { composed: true }));
            }}
            .value=${String(this.take)}
            ?disabled=${this.disabled}
          >
            ${repeat(
              this.pageSizes,
              o => o,
              o => html` <mwc-list-item ?selected=${this.take === o} value=${o}>${o}</mwc-list-item>`
            )}
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
