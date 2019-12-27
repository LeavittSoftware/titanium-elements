import '@leavittsoftware/titanium-svg-button';

import { css, customElement, html, LitElement, property, query } from 'lit-element';

/**
 * A styled input with built-in search and clear icons. .
 *
 * @element titanium-search-input
 *
 * @fires value-changed - Fired when selection changes. details contains the selected item <T> or null.
 *
 * @cssprop {Color} --app-text-color - Not active text color
 * @cssprop {Color} --app-dark-text-color - Focuses text color
 * @cssprop {Color} --app-border-color - Input border color
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
  @property({ type: Boolean, reflect: true }) private collapsed: boolean = true;

  @query('input') private _input: HTMLInputElement;
  /**
   * Focuses the input
   */
  focus() {
    this._input.focus();
  }

  firstUpdated() {
    this.collapsed = !this.value;
  }

  private _onValueChange() {
    if (this.value !== this._input.value) {
      this.value = this._input.value;
      this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    }
  }

  private _onClearClick() {
    if (this.disabled) return;

    this.value = '';
    this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    this.focus();
  }

  private async _handleSearchClick() {
    if (this.preventCollapse) {
      return;
    }

    this.collapsed = false;
    await this.updateComplete;
    this.focus();
  }

  private _lostFocus() {
    if (this.preventCollapse) {
      return;
    }

    if (!this.value) this.collapsed = true;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 42px;
      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 250px;
    }

    input-container {
      display: flex;
      flex-direction: row;
      position: relative;
    }

    titanium-svg-button {
      position: absolute;
    }

    titanium-svg-button[clear] {
      top: 0;
      right: 0;
      --titanium-svg-button-svg-active-color: var(--app-text-color, #5f6368);
    }

    titanium-svg-button[search] {
      top: 0;
      left: 0;
      --titanium-svg-button-svg-active-color: var(--app-text-color, #5f6368);
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
      transition: background 100ms ease-in, width 100ms ease-out;
      color: var(--app-text-color, #5f6368);
      background-color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 1px solid var(--app-border-color, #dadce0);
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
      background-color: #fafafa;
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

    input-container input:focus {
      color: var(--app-dark-text-color, #202124);
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <input-container>
        <titanium-svg-button
          ?disabled=${this.disabled}
          search
          @click=${this._handleSearchClick}
          path="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        ></titanium-svg-button>
        <input
          type="text"
          ?disabled=${this.disabled || (this.collapsed && !this.preventCollapse)}
          placeholder=${this.placeholder}
          autocomplete="off"
          .value=${this.value}
          @keyup=${this._onValueChange}
          @focusout=${this._lostFocus}
          @change=${this._onValueChange}
        />
        ${this.hideClearButton || !this.value
          ? ''
          : html`
              <titanium-svg-button
                clear
                @click=${this._onClearClick}
                ?disabled=${this.disabled}
                path="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              ></titanium-svg-button>
            `}
      </input-container>
    `;
  }
}
