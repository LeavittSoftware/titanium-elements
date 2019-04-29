import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-data-table-header')
export class TitaniumDataTableHeaderElement extends LitElement {
  @property() title: string;
  @property() sortBy: string;
  @property({ reflect: true, type: String }) width: string;
  @property({ reflect: true, type: Boolean }) active: Boolean;
  @property({ reflect: true, type: String, attribute: 'sort-direction' })
  sortDirection: 'asc' | 'desc' | '';
  @property({ attribute: 'column-name' }) columnName: string;

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
      this.sortBy = this.columnName;
      this.dispatchEvent(new CustomEvent('sort-by-changed', { detail: this.sortBy }));

      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.dispatchEvent(new CustomEvent('sort-direction-changed', { detail: this.sortDirection }));
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

      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 13px;
      padding: 8px;
      line-height: 28px;

      color: #737373;
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
      color: var(--titanium-data-table-header-active-text-color, #000);
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
      fill: var(--titanium-data-table-header-svg-color, #737373);
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
      fill: var(--titanium-data-table-header-active-svg-color, #000);
    }

    @media (max-width: 768px) {
      :host([desktop]) {
        display: none;
      }
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
