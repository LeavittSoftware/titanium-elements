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
  @property({ type: Boolean, attribute: 'hide-clear-button' }) hideClearButton: boolean = false;

  /**
   *  Whether the input should prevent collapse.
   */
  @property({ type: Boolean, reflect: true, attribute: 'prevent-collapse' }) preventCollapse: boolean = false;

  @property({ type: Boolean, reflect: true, attribute: 'has-value' }) protected hasValue: boolean = true;

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('value')) {
      this.hasValue = !!this.value;
    }
  }

  static styles = css`
    :host {
      display: block;
      cursor: pointer;
    }

    md-outlined-text-field {
      width: 48px;
      --md-outlined-text-field-container-shape: 24px;
      --md-outlined-field-outline-width: 0;

      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      --md-outlined-text-field-bottom-space: 11px;
      --md-outlined-text-field-top-space: 11px;
    }

    md-icon[search] {
      display: flex;
      height: 48px;
      width: 48px;
      border-radius: 24px;
      cursor: pointer;
      place-content: center;
      line-height: 48px;
    }

    :host([has-value]) md-outlined-text-field,
    :host([prevent-collapse]) md-outlined-text-field,
    md-outlined-text-field:focus-within {
      --md-outlined-field-outline-width: 1px;
      width: var(--titanium-search-input-expanded-width, 258px);
      --md-outlined-text-field-container-shape: initial;
    }
  `;

  protected override renderMainSlot() {
    return html`
      <slot></slot>
      <md-icon search slot="leading-icon">search</md-icon>
      ${!this.hasValue
        ? nothing
        : html`<md-icon-button
            slot="trailing-icon"
            ?disabled=${!this.value}
            @click=${() => {
              if (this.disabled) {
                return;
              }
              this.input.focus();
              this.value = '';
              this.dispatchEvent(new Event('input'));
            }}
            ?disabled=${this.disabled}
          >
            <md-icon>close</md-icon></md-icon-button
          >`}
    `;
  }
}
