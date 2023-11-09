import { css, html, LitElement, nothing } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '@material/web/iconbutton/icon-button';
import '@material/web/textfield/outlined-text-field';
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

  @query('md-outlined-text-field') protected input: HTMLInputElement;
  /**
   * Focuses the input
   */
  focus() {
    if (this.preventCollapse) {
      this.input.focus();
    } else {
      this.#handleSearchClick();
    }
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

  async #handleSearchClick() {
    if (this.preventCollapse) {
      return;
    }

    this.collapsed = false;
    await this.updateComplete;
    this.input.focus();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 42px;
      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 250px;
      --md-outlined-text-field-bottom-space: 11px;
      --md-outlined-text-field-top-space: 11px;
    }

    :host([collapsed]:not([prevent-collapse])) {
      width: 48px;
      --md-outlined-text-field-container-shape: 24px;
    }

    :host([collapsed]:not([prevent-collapse])) input-container input {
      opacity: 0;
      pointer-events: none;
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <md-outlined-text-field
        .placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @blur=${() => {
          if (this.preventCollapse) {
            return;
          }

          if (!this.input.value) {
            this.collapsed = true;
          }
        }}
      >
        <md-icon-button slot="leading-icon" ?disabled=${this.disabled} @click=${this.#handleSearchClick}><md-icon>search</md-icon></md-icon-button>

        ${this.collapsed
          ? nothing
          : html`<md-icon-button
              slot="trailing-icon"
              @click=${() => {
                if (this.disabled) {
                  return;
                }

                this.input.value = '';
                this.input.focus();
              }}
              ?disabled=${this.disabled}
            >
              <md-icon>close</md-icon></md-icon-button
            >`}
      </md-outlined-text-field>
    `;
  }
}
