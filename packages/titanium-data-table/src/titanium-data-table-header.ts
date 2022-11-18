import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * Material design data table header with styling and sorting capabilities
 *
 * @element titanium-data-table-header
 *
 * @fires sort-direction-changed - Fired if sort direction is changed (detail: 'desc' | 'asc')
 * @fires sort-by-changed - Fired when the close button is clicked (detail: {string} column name of currently sorted header )
 *
 * @cssprop {Color} [--app-text-color=#5f6368] --app-text-color - Inactive sort icon color
 * @cssprop {Color} [--app-light-text-color=#80868b] - Inactive text color
 * @cssprop {Color} [--app-dark-text-color=#202124] - Active text color
 */
@customElement('titanium-data-table-header')
export class TitaniumDataTableHeaderElement extends LitElement {
  /**
   * This displayed header name
   */
  @property({ type: String }) title: string;

  /**
   * The column name of the currently applied sort
   */
  @property({ type: String }) sortBy: string;

  /**
   * Optional fixed width of header in px  ex. "140px"
   */
  @property({ reflect: true, type: String }) width: string;

  /**
   * True if header is currently the sorted column. Read-only, do not set.
   */
  @property({ type: Boolean, reflect: true }) active: boolean = false;

  /**
   * Current sort direction on header.
   */
  @property({ type: String, reflect: true, attribute: 'sort-direction' }) sortDirection: 'asc' | 'desc' | '';

  /**
   * Name of header column passed along in sort-by-changed event.  Typically the name of the col in the backing DB. ex. first_name
   */
  @property({ type: String, attribute: 'column-name' }) columnName: string;

  /**
   * Justify header text center
   */
  @property({ type: Boolean, reflect: true }) center: boolean = false;

  /**
   * Justify header text right; moves sort icon to left.
   */
  @property({ type: Boolean, reflect: true }) right: boolean = false;

  /**
   * Removes the sort icon
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-sort' }) noSort: boolean = false;

  /**
   * Set flex 5 on header, default is 3.
   */
  @property({ type: Boolean, reflect: true }) large: boolean = false;

  /**
   * Only show this header when width is larger
   */
  @property({ type: Boolean, reflect: true }) desktop: boolean = false;

  /**
   *  Sets if view port is small
   */
  @property({ type: Boolean, reflect: true }) narrow: boolean = false;

  updated(changedProps) {
    if (changedProps.has('sortBy') && changedProps.get('sortBy') !== this.sortBy) {
      this.active = this.sortBy === this.columnName;
    }

    if (changedProps.has('width') && changedProps.get('width') !== this.width && this.width) {
      this.style.width = this.width;
    }
  }

  firstUpdated() {
    this.addEventListener('click', () => {
      if (this.active) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.dispatchEvent(new CustomEvent('sort-direction-changed', { detail: this.sortDirection }));
      } else {
        this.sortBy = this.columnName;
        this.dispatchEvent(new CustomEvent('sort-by-changed', { detail: this.sortBy }));
      }
    });
  }

  static styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: center;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      cursor: pointer;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      padding: 8px;
      line-height: 28px;
      font-weight: 500;

      color: var(--app-text-color, #5f6368);
    }

    :host(:not([width])) {
      -ms-flex: 3;
      -webkit-flex: 3;
      flex: 3;
    }

    :host(:not([width])[large]) {
      -ms-flex: 5;
      -webkit-flex: 5;
      flex: 5;
    }

    :host([active]) {
      color: var(--app-text-color, #5f6368);
    }

    :host([hidden]) {
      display: none;
    }

    :host([no-sort]) {
      cursor: inherit;
    }

    :host([center]) {
      justify-content: center;
    }

    :host([center])::before {
      width: 18px;
    }

    :host([right]) {
      flex-direction: row-reverse;
    }

    sort-icon {
      height: 18px;
      width: 18px;
      margin-left: 4px;
      flex-shrink: 0;
    }

    :host([no-sort]) sort-icon {
      display: none;
    }

    :host([right]) sort-icon {
      margin-right: 4px;
      margin-left: 0;
    }

    sort-icon svg {
      display: none;
      fill: var(--app-text-color, #5f6368);
    }

    :host([active][sort-direction='asc']) sort-icon svg {
      transform: rotate(-180deg);
      transition: transform 150ms ease;
    }

    :host([active][sort-direction='desc']) sort-icon svg {
      transform: rotate(-360deg);
      transition: transform 150ms ease;
    }

    :host([active][sort-direction='asc']) sort-icon svg,
    :host([active][sort-direction='desc']) sort-icon svg {
      display: block;
      fill: var(--app-text-color, #5f6368);
    }

    :host([narrow][desktop]) {
      display: none;
    }
  `;

  render() {
    return html`
      ${this.title}
      <sort-icon>
        <svg viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
      </sort-icon>
    `;
  }
}
