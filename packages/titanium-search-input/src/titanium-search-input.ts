import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';

/**
 * A styled input with built-in search and clear icons. .
 *
 * @element titanium-search-input
 *
 * @fires value-changed - Fired when selection changes. details contains the selected item <T> or null.
 *
 * @cssprop {Color} --md-sys-color-outline-variant - Input border color
 *
 */
@customElement('titanium-search-input')
export class TitaniumSearchInput extends LitElement {
  /**
   *  Gets and sets input value.
   */
  @property({ type: String }) value: string = '';

  /**
   *  Sets input placeholder text.
   */
  @property({ type: String }) placeholder: string = '';

  /**
   *  Whether or not the input should hide the clear button
   */
  @property({ type: Boolean, attribute: 'hide-clear-button' }) hideClearButton: boolean = false;

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Whether the input should prevent collapse.
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-collapse' }) preventCollapse: boolean = false;
  @property({ type: Boolean, reflect: true }) protected collapsed: boolean = true;

  @query('input') protected input: HTMLInputElement;
  /**
   * Focuses the input
   */
  focus() {
    if (this.preventCollapse) {
      this._focus();
    } else {
      this.#handleSearchClick();
    }
  }

  _focus() {
    this.input.focus();
  }

  firstUpdated() {
    this.collapsed = !this.value;
  }

  #onValueChange() {
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    }
  }

  #onClearClick() {
    if (this.disabled) {
      return;
    }

    this.value = '';
    this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    this._focus();
  }

  async #handleSearchClick() {
    if (this.preventCollapse) {
      return;
    }

    this.collapsed = false;
    await this.updateComplete;
    this._focus();
  }

  #lostFocus() {
    if (this.preventCollapse) {
      return;
    }

    if (!this.value) {
      this.collapsed = true;
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 42px;
      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 250px;
      --md-icon-button-state-layer-width: 42px;
      --md-icon-button-state-layer-height: 42px;
    }

    input-container {
      display: flex;
      flex-direction: row;
      position: relative;
    }

    md-icon-button {
      position: absolute;
      top: 0;
    }

    md-icon-button[clear] {
      right: 0;
    }

    md-icon-button[search] {
      left: 0;
    }

    :host([disabled]) svg {
      cursor: not-allowed;
    }

    input-container input {
      -webkit-appearance: none;
      width: 100%;
      height: 42px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      padding: 0;
      margin: 0;
      padding-left: 46px !important;
      padding-right: 46px !important;
      transition:
        background 100ms ease-in,
        width 100ms ease-out;
      color: var(--md-sys-color-on-background);
      background-color: transparent;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 1px solid var(--md-sys-color-outline-variant);
    }

    :host([shallow]) input-container input {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    input-container:hover input {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    }

    input-container input::-ms-clear {
      display: none;
    }

    :host([collapsed]:not([prevent-collapse])) {
      width: 42px;
    }

    :host([collapsed]:not([prevent-collapse])) input-container input {
      opacity: 0;
      pointer-events: none;
    }

    :host([disabled]) input-container input {
      cursor: not-allowed;
      opacity: 0.6;
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

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <input-container>
        <md-icon-button ?disabled=${this.disabled} search @click=${this.#handleSearchClick}><md-icon>search</md-icon></md-icon-button>
        <input
          type="text"
          ?disabled=${this.disabled || (this.collapsed && !this.preventCollapse)}
          placeholder=${this.placeholder}
          autocomplete="off"
          .value=${this.value}
          @keyup=${this.#onValueChange}
          @focusout=${this.#lostFocus}
          @change=${this.#onValueChange}
        />

        ${this.hideClearButton || !this.value
          ? ''
          : html` <md-icon-button clear @click=${this.#onClearClick} ?disabled=${this.disabled}> <md-icon>close</md-icon></md-icon-button> `}
      </input-container>
    `;
  }
}
