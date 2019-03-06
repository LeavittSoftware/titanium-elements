import '../lib/titanium-svg-button';

import {customElement, html, LitElement, property} from 'lit-element';

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
  }

  focus() {
    this._input.focus();
  }

  styles = html`<style>
  :host {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    @apply --titanium-search-input;
  }

  input-container {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-align-self: flex-end;
    -webkit-align-self: flex-end;
    align-self: flex-end;
    position: relative;
    @apply --titanium-search-input-input-container;
  }

  svg[search] {
    position: absolute;
    left: 12px;
    -ms-align-self: center;
    -webkit-align-self: center;
    align-self: center;
    fill: #4285f4;
    width: 24px;
    height: 24px;
    @apply --titanium-search-input-svg-search;
  }

  :host([disabled]) svg {
    cursor: not-allowed;
    @apply --titanium-search-input-svg-search-disabled;
  }

  titanium-svg-button {
    position: absolute;
    right: 8px;
    -ms-align-self: center;
    -webkit-align-self: center;
    align-self: center;
    width: 36px;
    height: 36px;
    --titanium-svg-button-svg-active-color: #757575;
    @apply --titanium-search-input-titanium-svg-button;
  }

  :host([disabled]) titanium-svg-button {
    cursor: not-allowed;
    opacity: .6;
    @apply --titanium-search-input-titanium-svg-button-disabled;
  }

  input-container input {
    width: 100%;
    height: 48px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-left: 42px !important;
    padding-right: 80px !important;
    transition: background 100ms ease-in, width 100ms ease-out;
    padding: 5px 0;
    color: #8C929D;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid #eee;
    border-bottom: 1px solid #eee;
    @apply --titanium-search-input-input;
  }

  input-container:hover input {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    @apply --titanium-search-input-input-hover;
  }

  input-container input::-ms-clear {
    display: none;
  }

  :host([disabled]) input-container input {
    background-color: #FAFAFA;
    cursor: not-allowed;
    opacity: .6;
    @apply --titanium-search-input-input-disabled;
  }

  :host([disabled]) input-container:hover input {
    box-shadow: none;
    @apply --titanium-search-input-input-disabled-hover;
  }

  input-container input,
  input-container input:focus {
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    @apply --titanium-search-input-and-focus;
  }

  input-container input:focus {
    color: #000;
    @apply --titanium-search-input-focus;
  }

  [hidden] {
    display: none;
  }
</style>`;

  render() {
    return html
    `${this.styles}
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
