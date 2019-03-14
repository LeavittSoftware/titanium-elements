import {css, customElement, html, LitElement, property} from 'lit-element';


@customElement('titanium-data-table-item')
export class TitaniumDataTableItem extends LitElement {
  @property() item: boolean;
  @property() isSelected: boolean;

  constructor() {
    super();
    this.addEventListener('click', () => this._handleToggleButton());
  }

  toggleSelected() {
    this.isSelected = !this.isSelected;
    this.dispatchEvent(
        new CustomEvent('titanium-data-table-item-selected-changed', {
          bubbles: true,
          composed: true,
          detail: {isSelected: this.isSelected, item: this.item}
        }))
  }

  select() {
    if (!this.isSelected) {
      this.toggleSelected();
    }
  }

  deselected() {
    if (this.isSelected) {
      this.toggleSelected();
    }
  }

  _handleToggleButton() {
    this.toggleSelected();
  }

  static styles = css`
  
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-height: 32px;
    text-decoration: none;

    background-color: #fff;
    border-bottom: 1px #dfdfdf solid;

    cursor: pointer;

    font-family: 'Roboto', 'Noto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  :host([is-selected]),
  :host(:hover) {
    background-color: #f9f9f9;
    transition: .3s ease;
  }

  ::slotted(row-item){
    display: block;

    font-size: 13px;
    color: #757575;
    line-height: 40px;
    font-weight: 400;
    padding: 4px 8px;
    margin: 0;
  }

  ::slotted(row-item:last-of-type) {
    padding-right:16px;
  }

  ::slotted(row-item:not([width])) {
    -ms-flex: 3;
    -webkit-flex: 3;
    flex: 3;
  }

  ::slotted(row-item:not([width])[large]) {
    -ms-flex: 5;
    -webkit-flex: 5;
    flex: 5;
  }

  item-checkbox {
    display: block;
    flex-shrink: 0;
    align-self: center;
    margin: 0 8px 0 16px;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  item-checkbox svg {
    fill: #757575;
  }

  [hidden] {
    display: none;
  }`;

  render() {
    return html
    `<item-checkbox>
      <svg empty viewBox="0 0 24 24" ?hidden="${this.isSelected}">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      </svg>
      <svg checked viewBox="0 0 24 24" ?hidden="${!this.isSelected}">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </item-checkbox>
    <slot></slot>`;
  }
}