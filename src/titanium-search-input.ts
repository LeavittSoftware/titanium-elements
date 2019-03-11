import '../lib/titanium-svg-button';

import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-search-input')
export class TitaniumSearchInput extends LitElement {
  @property() value: string = '';
  @property() placeholder: string = '';
  @property({type: Boolean, attribute: 'hide-clear-button'})
  hideClearButton: boolean = false;
  @property({type: Boolean, reflect: true}) disabled: boolean;

  _input: HTMLInputElement;

  firstUpdated() {
    super.firstUpdated(new Map());
    const el = this.shadowRoot && this.shadowRoot.querySelector('input');
    if (el)
      this._input = el;
  }

  _onValueChange() {
    this.value = this._input.value;
    this.dispatchEvent(new CustomEvent('value-changed', {detail: this.value}));
  }

  _onClearClick() {
    if (this.disabled)
      return;

    this.value = '';
    this.dispatchEvent(new CustomEvent('value-changed', {detail: this.value}));
    this.focus();
  }

  focus() {
    this._input.focus();
  }

  static styles = css`
  :host {
    display: flex;
    flex-direction: column;
  }

  input-container {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  svg[search] {
    position: absolute;
    left: 12px;
    top: 12px;
    fill: var(--titanium-search-input-svg-fill-color, #4285f4);
    width: 24px;
    height: 24px;
  }

  :host([disabled]) svg {
    cursor: not-allowed;
  }

  titanium-svg-button {
    position: absolute;
    right: 8px;
    top: 6px;
    width: 36px;
    height: 36px;
    --titanium-svg-button-svg-active-color: var(--titanium-search-input-clear-button-fill-color, #757575);
  }

  :host([disabled]) titanium-svg-button {
    cursor: not-allowed;
    opacity: .6;
  }

  input-container input {
    width: 100%;
    height: 48px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 42px !important;
    padding-right: 42px !important;
    transition: background 100ms ease-in, width 100ms ease-out;
    padding: 5px 0;
    color: var(--titanium-search-input-text-color, #8c929d);
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid var(--titanium-search-input-border-color, #eee);
  }

  input-container:hover input {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  input-container input::-ms-clear {
    display: none;
  }

  :host([disabled]) input-container input {
    background-color: #fafafa;
    cursor: not-allowed;
    opacity: .6;
  }

  :host([disabled]) input-container:hover input {
    box-shadow: none;
  }

  input-container input,
  input-container input:focus {
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }

  input-container input:focus {
    color: var(--titanium-search-input-focus-color, #000);
  }

  [hidden] {
    display: none;
  }`;

  render() {
    return html
    `
<input-container>
  <svg search viewBox="0 0 24 24">
    <path
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
    </path>
  </svg>
  <input type="text" ?disabled="${this.disabled}" placeholder="${
        this.placeholder}" autocomplete="off" .value="${this.value}" @keyup="${
        this._onValueChange}" @change="${this._onValueChange}" />
  <titanium-svg-button ?hidden="${this.hideClearButton}" @click="${
        this._onClearClick}" ?disabled="${this.disabled}"
    path="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</input-container>`;
  }
}
