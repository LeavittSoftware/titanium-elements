import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '@leavittsoftware/titanium-svg-button';
import '@leavittsoftware/titanium-progress';

/**
 * Material design inspired searchable single select input.
 *
 * @element titanium-single-select
 *
 * @slot - Main slot for search suggestions. Slotted elements should be titanium-single-select-items
 *
 * @fires selected-change - Fired when selected item changes. Detail is the selected-item  or null.
 * @fires input-change - Fired when the text changed in the text field.
 *
 * @cssprop {Color} --app-border-color - Input border color
 * @cssprop {Color} --app-light=text-color - informatory text color
 * @cssprop {Color} --app-text-color - Inputs main text color
 */
@customElement('titanium-single-select')
export class TitaniumSingleSelectElement<T> extends LitElement {
  @property({ type: Boolean, reflect: true }) disableFullScreen: boolean = false;

  /**
   * Disables element
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   *  Sets input placeholder text.
   */
  @property({ type: String }) placeholder: string = '';

  /**
   *  Displayed when the user focuses the input before typing occurs
   */
  @property({ type: String }) hintText: string;

  /**
   *  Number of total results returned in the search
   */
  @property({ type: Number }) totalCount: number;

  /**
   *  Property name in the suggestions object where the display name is stored.
   */
  @property({ type: String }) itemLabelPath: string = 'Label';

  /**
   *  The selected suggestion object.
   */
  @property({ attribute: false }) selected: T | null = null;

  /**
   *  The native input
   */
  @query('input') input: HTMLInputElement;

  @property({ type: Boolean, reflect: true }) protected open: boolean = false;
  @property({ type: String }) protected inputValue: string = '';
  @property({ type: Boolean, reflect: true }) protected invalid: boolean = true;

  @property({ type: Boolean }) private _isLoading: boolean;
  @query('search-suggestions ') private searchSuggestions: HTMLSlotElement;
  @query('input-container ') private inputContainer: HTMLSlotElement;
  @query('slot') private slotElement: HTMLSlotElement;

  private _blurTimeoutHandle: number;
  private _openCount = 0;

  firstUpdated() {
    this.slotElement.addEventListener('titanium-single-select-item-blur', () => this._blurHandler());
    this.slotElement.addEventListener('titanium-single-select-item-keydown', (e: CustomEvent<{ event: KeyboardEvent; value: T }>) =>
      this._onKeyDown(e.detail.event, e.detail.value)
    );
    this.slotElement.addEventListener('titanium-single-select-item-click', (e: CustomEvent<{ event: MouseEvent; value: T }>) =>
      this._setSelected(e.detail.value)
    );
  }

  updated(changedProps) {
    if (changedProps.has('selected') && changedProps.get('selected') !== this.selected) {
      this.input.value = this.selected && typeof this.selected === 'object' ? this.selected[this.itemLabelPath] || '' : '';
    }

    if (changedProps.has('open') && changedProps.get('open') !== this.open) {
      if (this.open) {
        //Make sure the input is above the click trap;
        this.inputContainer.style.zIndex = '9';
        this._subscribeToResize();
        this.positionSuggestions();
      } else {
        this.inputContainer.style.zIndex = '';
        this._unsubscribeToResize();
      }
    }
  }

  async loadWhile(promise: Promise<unknown>) {
    this._isLoading = true;
    this._openCount++;
    try {
      await promise;
    } finally {
      this._openCount--;
      if (this._openCount === 0) {
        this._isLoading = false;
      }
    }
  }

  private get searchSuggestionElements(): unknown[] {
    return this.querySlotted(this.shadowRoot, 'titanium-single-select-item');
  }

  private _handleValueChange() {
    this._setInputValue(this.input.value);
  }

  private _setInputValue(value: string) {
    this.inputValue = value;
    this.dispatchEvent(
      new CustomEvent<string>('input-changed', {
        detail: value,
        composed: true,
      })
    );
  }

  private positionSuggestions() {
    this.searchSuggestions.style.width = `${this.input.offsetWidth - 2}px`;
  }

  private _resizeHandler() {
    this.positionSuggestions();
  }

  private _subscribeToResize() {
    window.addEventListener('resize', () => this._resizeHandler());
  }

  private _unsubscribeToResize() {
    window.addEventListener('resize', () => this._resizeHandler());
  }

  private _setSelected(value: T | null) {
    this.selected = value;
    this.open = false;
    this.inputValue = '';
    this.dispatchEvent(
      new CustomEvent<unknown>('selected-changed', {
        detail: value,
        composed: true,
      })
    );
  }

  private _inputOnFocus() {
    this.open = true;
  }

  private _blurHandler() {
    clearTimeout(this._blurTimeoutHandle);
    this._blurTimeoutHandle = window.setTimeout(() => {
      const activeElement = this.getActiveElement();

      if (!activeElement || (activeElement.tagName !== 'TITANIUM-SINGLE-SELECT-ITEM' && activeElement.id !== 'searchInput')) {
        this.open = false;
      }
    }, 300);
  }

  private _onKeyDown(e: KeyboardEvent, value: T) {
    this.open = true;
    switch (e.keyCode) {
      case 27: {
        // esc key
        this.open = false;
        this.reset();
        break;
      }
      case 40: {
        this.focusNextElement();
        e.preventDefault();
        break;
      }
      case 38: {
        this.focusPreviousElement();
        e.preventDefault();
        break;
      }
      case 13: {
        this._setSelected(value);
        e.preventDefault();
        break;
      }
      default:
        break;
    }
  }

  private querySlotted(root, selector) {
    const slots = root.querySelectorAll('slot');
    let matched = [];
    slots.forEach(slot => {
      matched = matched.concat(
        slot
          .assignedNodes()
          .filter(el => (typeof el.matches === 'function' && el.matches(selector)) || (el.__shady_className && el.__shady_className.indexOf(selector) > -1))
      );
    });
    return matched;
  }

  //#region Element selection
  private focusNextElement() {
    const items = [].slice.call(this.searchSuggestionElements);
    if (!items) {
      return;
    }

    const activeElement = this.getActiveElement();
    const nextIndex = items.indexOf(activeElement) + 1;
    if (nextIndex > items.length - 1) {
      this.input.focus();
    } else {
      items[nextIndex].focus();
    }
  }

  private focusPreviousElement() {
    const items = [].slice.call(this.searchSuggestionElements);
    if (!items) {
      return;
    }

    const activeElement = this.getActiveElement();
    const previousIndex = items.indexOf(activeElement) - 1;
    if (previousIndex === -2) {
      items[items.length - 1].focus();
    } else if (previousIndex === -1) {
      this.input.focus();
    } else {
      items[previousIndex].focus();
    }
  }
  //#endregion

  //#region Determine Active Element In Shadow Root
  private getActiveElement() {
    return this._getActiveShadowElement(document.activeElement);
  }

  private _getActiveShadowElement(element: Element | null): Element | null {
    if (!element) {
      return null;
    }

    if (element.shadowRoot && element.shadowRoot.activeElement) {
      return this._getActiveShadowElement(element.shadowRoot.activeElement);
    }

    return element;
  }

  //#endregion

  reset() {
    if (this.input) {
      this.input.value = '';
      this._setInputValue(this.input.value);
      this.open = false;
      this._setSelected(null);
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    input-container {
      display: block;
      position: relative;
    }

    input {
      position: relative;
      width: 100%;
    }

    ::placeholder {
      color: #909090;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      color: #909090;
    }

    ::-ms-input-placeholder {
      color: #909090;
    }

    svg {
      position: absolute;
      top: 16px;
      left: 12px;
      fill: var(--app-text-color, #5f6368);
      width: 25px;
      height: 25px;
    }

    titanium-svg-button {
      position: absolute;
      top: 7px;
      right: 8px;
    }

    :host([disabled]) svg {
      opacity: 0.4;
    }

    :host(:not([open]):not([disabled])[filled]) input {
      background-color: #f1f3f4;
    }

    :host([shaped]) input {
      border-top-left-radius: 28px;
      border-top-right-radius: 28px;
      border-bottom-left-radius: 28px;
      border-bottom-right-radius: 28px;
    }

    input {
      width: 100%;
      height: 56px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      padding: 5px 48px;
      transition: background 100ms ease-in, width 100ms ease-out;
      color: var(--app-text-color, #5f6368);
      background-color: #fff;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid var(--app-border-color, #dadce0);
    }

    :host([open]) input {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 1px solid transparent;
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    }

    :host(:not([disabled])) input:hover {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    }

    input::-ms-clear {
      display: none;
    }

    :host([has-term]) input {
      color: #000;
    }

    input:focus {
      background-color: #fff;
    }

    input,
    input:focus {
      box-sizing: border-box;
      outline: none;
      font-size: 16px;
      font-weight: 400;
    }

    hr {
      position: absolute;
      bottom: 1px;
      width: calc(100% - 32px);
      border: 0;
      border-top: 1px solid var(--app-border-color, #dadce0);
      margin: 0 16px;
      height: 0;
    }

    titanium-progress {
      display: block;
      position: absolute;
      bottom: 1px;
      width: calc(100% - 32px);
      height: 1px;
      margin: 0 16px;
    }

    :host([shaped]) search-suggestions {
      border-bottom-left-radius: 28px;
      border-bottom-right-radius: 28px;
    }

    :host(:not([open])) search-suggestions {
      transform: scale(0);
      opacity: 0;
    }

    click-trap {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.01;
      z-index: 8;
    }

    search-suggestions {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 9;
      min-height: 75px;
      background-color: #fff;
      border: 1px solid var(--app-border-color, #dadce0);
      border-top: 0;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-top: -1px;
      box-shadow: 0 6px 6px 0 rgba(32, 33, 36, 0.28);
      overflow: hidden;
      transition: opacity, transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      opacity: 1;
      transform-origin: left top;
      transform: scale(1);
    }

    informatory-text {
      display: block;
      padding: 8px 16px;
      font-family: Roboto, Arial, sans-serif;
      color: var(--app-light-text-color, #80868b);
      line-height: 18px;
      font-size: 13px;
    }

    :host([unresolved]),
    [hidden] {
      display: none !important;
    }

    @media (max-width: 768px) {
      :host([open]:not([disableFullScreen])) {
        max-width: 100% !important;
        margin: 0 !important;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
      }

      :host([open]:not([disableFullScreen])) input,
      :host([open]:not([disableFullScreen])) input:hover {
        position: fixed;
        top: 0;
        left: 0;
        border-radius: 0;
        border: 0;
        box-shadow: none;
      }

      :host([open]:not([disableFullScreen])) input-container {
        height: 57px;
        width: 100%;
      }

      :host([open]:not([disableFullScreen])) search-suggestions {
        box-shadow: none;
        border: none;
        border-radius: 0;
        transition: none;
        overflow: auto;
        max-height: calc(100% - 56px);
        display: block;
      }
    }
  `;

  render() {
    return html`
      <click-trap ?hidden=${!this.open} @click=${() => (this.open = false)}></click-trap>
      <input-container>
        <input
          autocomplete="off"
          aria-label="Search"
          @keydown=${this._onKeyDown}
          ?disabled=${this.disabled}
          id="searchInput"
          tabindex="0"
          @blur=${this._blurHandler}
          @focus=${this._inputOnFocus}
          placeholder=${this.placeholder}
          @input=${this._handleValueChange}
          value=${this.inputValue}
          size="8"
        />
        <svg viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <titanium-svg-button
          @click=${this.reset}
          ?hidden=${!this.open && !this.inputValue}
          path="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></titanium-svg-button>
        <hr ?hidden=${this._isLoading || !this.open} />
        <titanium-progress ?hidden=${!this._isLoading || !this.open} ?disabled=${!this._isLoading}></titanium-progress>
      </input-container>
      <search-suggestions id="suggestions" tabindex="-1">
        <informatory-text ?hidden=${this.totalCount > 0 || this.inputValue !== ''}>${this.hintText}</informatory-text>
        <informatory-text ?hidden=${this.inputValue === '' || this._isLoading}> ${this.totalCount} results for '${this.inputValue}' </informatory-text>
        <slot></slot>
      </search-suggestions>
    `;
  }
}
