import '@material/web/textfield/filled-text-field';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import { redispatchEvent } from '@material/web/internal/events/redispatch-event';

import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

@customElement('titanium-filled-search-input')
export default class TitaniumFilledSearchInput extends LitElement {
  @property({ type: String }) accessor value: string = '';
  @property({ type: String }) accessor placeholder: string = 'Search';
  @property({ type: String }) accessor autocomplete: string = 'off';
  @property({ type: Boolean }) accessor spellcheck: boolean = false;
  @property({ type: Boolean }) accessor disabled: boolean = false;

  @query('md-filled-text-field') private accessor textField: MdFilledTextField;

  static styles = css`
    :host {
      display: block;
      max-width: 640px;
      width: 100%;

      --md-filled-text-field-container-color: var(--md-sys-color-surface-container-high);
      --md-filled-text-field-container-shape: 24px;
      --md-filled-field-container-shape: 24px;

      --md-filled-text-field-active-indicator-height: 0;
      --md-filled-text-field-error-active-indicator-height: 0;
      --md-filled-text-field-hover-active-indicator-height: 0;
      --md-filled-text-field-focus-active-indicator-height: 0;
      --md-filled-text-field-disabled-active-indicator-height: 0;

      --md-filled-text-field-bottom-space: 12px;
      --md-filled-text-field-top-space: 12px;
    }

    md-filled-text-field {
      width: 100%;
    }

    [hidden] {
      display: none !important;
    }
  `;

  render() {
    return html`
      <md-filled-text-field
        type="search"
        .autocomplete=${this.autocomplete}
        .spellcheck=${this.spellcheck}
        .disabled=${this.disabled}
        .value=${this.value}
        placeholder=${this.placeholder}
        @input=${(e: DOMEvent<MdFilledTextField>) => {
          this.value = e.target.value;
          this.dispatchEvent(new Event('input', { composed: true }));
        }}
        @blur=${(e) => redispatchEvent(this, e)}
        @focus=${(e) => redispatchEvent(this, e)}
        @change=${(e) => redispatchEvent(this, e)}
        @invalid=${(e) => redispatchEvent(this, e)}
      >
        <md-icon slot="leading-icon">search</md-icon>
        <md-icon-button
          slot="trailing-icon"
          ?hidden=${!this.value}
          @click=${() => {
            this.value = '';
            this.textField?.focus?.();
            this.dispatchEvent(new Event('input', { composed: true }));
          }}
        >
          <md-icon>close</md-icon>
        </md-icon-button>
      </md-filled-text-field>
    `;
  }
}
