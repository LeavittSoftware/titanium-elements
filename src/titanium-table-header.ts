import {css, customElement, html, LitElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('titanium-table-header')
export class TitaniumTableHeader extends LitElement {
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property() title: string;
  @property() sortBy: string;
  @property({reflect: true, type: Boolean}) active: Boolean;
  @property({reflect: true, type: String, attribute: 'sort-direction'})
  sortDirection: 'asc'|'desc'|'';
  @property({attribute: 'column-name'}) columnName: string;

  updated(changedProps) {
    if (changedProps.has('sortBy') &&
        changedProps.get('sortBy') !== this.sortBy) {
      this.active = this.sortBy === this.columnName;
    }
  }

  firstUpdated() {
    this.addEventListener('click', () => {
      this.sortBy = this.columnName;
      this.dispatchEvent(
          new CustomEvent('sort-by-changed', {detail: this.sortBy}));

      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.dispatchEvent(new CustomEvent(
          'sort-direction-changed', {detail: this.sortDirection}));
    });
  }

  static styles = css`
  :host {
    display:flex;
    flex-direction: row;
    align-items: center;

    -ms-flex: 3;
    -webkit-flex: 3;
    flex: 3;

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

  :host([hidden]) {
    display: none;
  }

  :host([active]) {
     color: var(--titanium-table-header-active-text-color, #000);
  }

  :host([large]) {
    -ms-flex: 5;
    -webkit-flex: 5;
    flex: 5;
  }

  :host([no-sort]) {
    cursor: inherit;
  }

  :host([center]) {
    justify-content: center;
  }

  :host([right]) {
    justify-content: flex-end;
  }

  :host([no-sort]) sort-icon {
    display: none;
  }

  sort-icon {
    height: 18px;
    width: 18px;
    margin-right: 4px;
  }

  sort-icon svg {
    display: none;
    fill: var(--titanium-table-header-svg-color, #737373);
  }

  :host([active][sort-direction="asc"]) sort-icon svg[desc],
  :host([active][sort-direction="desc"]) sort-icon svg[asc] {
    display: block;
    fill: var(--titanium-table-header-active-svg-color, #000);
  }`;

  render() {
    return html`<sort-icon>
    <svg asc viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    <svg desc viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </svg>
  </sort-icon>
  ${this.title}`;
  }
}