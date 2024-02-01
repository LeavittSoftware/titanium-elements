import { PropertyValues, css, html, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';

import { ExtendableOutlinedTextField } from '../extendable-outlined-text-field/extendable-outlined-text-field';

/**
 * A styled input with built-in search and clear icons. .
 *
 * @element titanium-search-input
 *
 * @cssprop {Length} --titanium-search-input-expanded-width - Width when input expands
 *
 */
@customElement('titanium-search-input')
export class TitaniumSearchInput extends ExtendableOutlinedTextField {
  /**
   *  Whether or not the input should hide the clear button
   */
  @property({ type: Boolean, attribute: 'hide-clear-button' }) accessor hideClearButton: boolean = false;

  /**
   *  Whether the input should prevent collapse.
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-collapse' }) accessor preventCollapse: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'has-value' }) protected accessor hasValue: boolean = true;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('value')) {
      this.hasValue = !!this.value;
    }
  }

  static styles = css`
    :host {
      display: block;
      cursor: pointer;
      overflow: hidden;
    }

    md-outlined-text-field {
      width: 48px;
      --md-outlined-field-outline-width: 0;
      --md-outlined-field-hover-outline-width: 0;
      --md-outlined-field-disabled-outline-width: 0;

      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      --md-outlined-text-field-bottom-space: 11px;
      --md-outlined-text-field-top-space: 11px;
    }

    :host([has-value]) md-icon-button[search],
    :host([prevent-collapse]) md-icon-button[search],
    md-outlined-text-field:focus-within md-icon-button[search] {
      pointer-events: none;
    }

    :host([has-value]) md-outlined-text-field,
    :host([prevent-collapse]) md-outlined-text-field,
    md-outlined-text-field:focus-within {
      --md-outlined-field-outline-width: initial;
      --md-outlined-field-disabled-outline-width: initial;
      --md-outlined-field-hover-outline-width: initial;
      --md-outlined-text-field-container-shape: initial;

      width: var(--titanium-search-input-expanded-width, 258px);
    }
  `;

  protected override renderMainSlot() {
    return html`
      <slot></slot>
      <md-icon-button search ?disabled=${this.disabled} @click=${() => this.focus()} @focus=${() => this.focus()} slot="leading-icon">
        <md-icon search>search</md-icon></md-icon-button
      >

      ${!this.hasValue
        ? nothing
        : html`<md-icon-button
            slot="trailing-icon"
            ?disabled=${!this.value || this.disabled}
            @click=${() => {
              if (this.disabled) {
                return;
              }
              this.input.focus();
              this.value = '';
              this.dispatchEvent(new Event('input'));
            }}
          >
            <md-icon>close</md-icon></md-icon-button
          >`}
    `;
  }
}
