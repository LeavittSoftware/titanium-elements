import { css, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { literal, html } from 'lit/static-html.js';

import '../../titanium/input-validator/outlined-input-validator';
import '../../titanium/input-validator/filled-input-validator';

/**
 *  Multi select outlined themed input that styles
 *  slotted in chips and add button
 *
 *  @element titanium-chip-multi-select
 *
 * @slot default - Main slot (intended to be a &lt;md-outlined-button&gt; and a list of &lt;md-chip&gt;)
 *
 */

@customElement('titanium-chip-multi-select')
export class TitaniumChipMultiSelect extends LitElement {
  /**
   *  Swaps outlined validator for filled validator
   */
  @property({ type: Boolean, attribute: 'filled' }) accessor filled: boolean = false;
  /**
   *  Label of input to display to users
   */
  @property({ type: String }) accessor label: string;

  /**
   *  Text to show when there are no items
   */
  @property({ type: String }) accessor noItemsText: string = 'No items';

  /**
   *  Adds the * to the label
   */
  @property({ type: Boolean }) accessor required: boolean = false;

  /**
   *  Indicates whether or not to show the no items text
   */
  @property({ type: Boolean }) accessor hasItems: boolean;

  /**
   *   Passes the supportingText property to the input-validator
   */
  @property({ type: String }) accessor supportingText: string;

  /**
   *  Passes the error property to the input-validator
   */
  @property({ type: Boolean }) accessor error: boolean;

  /**
   *  Passes the errorText property to the input-validator
   */
  @property({ type: String }) accessor errorText: string;

  /**
   *  Passes the resizable property to the input-validator
   */
  @property({ type: Boolean }) accessor resizable: boolean;

  /**
   *  Whether or not the input should appear disabled (chips, buttons and anything else slotted will still have to be disabled individually).
   */
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean;

  @query('titanium-outlined-input-validator, titanium-filled-input-validator') private accessor validator:
    | { checkValidity: () => boolean; reportValidity: () => boolean; reset: () => void }
    | undefined;

  updated(changedProps: PropertyValues<this>) {
    if ((changedProps.get('hasItems') && changedProps.has('hasItems')) || (this.hasItems && changedProps.has('hasItems'))) {
      this.reportValidity();
    }
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.validator?.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.validator?.reportValidity();
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.validator?.reset();
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }

      titanium-outlined-input-validator,
      titanium-filled-input-validator {
        display: block;
        width: 100%;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
      }

      span {
        font-size: 13px;
      }

      :host([filled]) {
        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;

        slot-container {
          margin-top: 6px;
        }

        titanium-filled-input-validator {
          --md-filled-field-with-label-bottom-space: 12px;
        }

        ::slotted(md-filled-button),
        ::slotted(md-filled-tonal-button) {
          --md-filled-button-container-shape: 8px;
          --md-filled-button-container-height: 32px;

          --md-filled-button-with-trailing-icon-leading-space: 8px;
          --md-filled-button-with-trailing-icon-trailing-space: 16px;
          --md-filled-button-with-leading-icon-leading-space: 8px;
          --md-filled-button-with-leading-icon-trailing-space: 16px;

          --md-filled-tonal-button-with-trailing-icon-leading-space: 8px;
          --md-filled-tonal-button-with-trailing-icon-trailing-space: 16px;
          --md-filled-tonal-button-with-leading-icon-leading-space: 8px;
          --md-filled-tonal-button-with-leading-icon-trailing-space: 16px;
          --md-filled-tonal-button-container-shape: 8px;
          --md-filled-tonal-button-container-height: 32px;
        }

        ::slotted(md-input-chip) {
          background: var(--md-sys-color-surface-container);
          --md-sys-color-outline: transparent;
        }
      }
    `,
  ];

  protected render() {
    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${this.filled ? literal`titanium-filled-input-validator` : literal`titanium-outlined-input-validator`}
        ?disabled=${this.disabled}
        .evaluator=${() => !this.required || !!this.hasItems}
        ?required=${this.required}
        .label=${this.label}
        .resizable=${this.resizable}
        .supportingText=${this.supportingText}
        .errorText=${this.errorText}
        ?error=${this.error}
      >
        <slot-container>
          <slot></slot>
          ${!this.hasItems ? html` <span>${this.noItemsText}</span>` : ''}
        </slot-container>
      </${this.filled ? literal`titanium-filled-input-validator` : literal`titanium-outlined-input-validator`}>
    `;
    /* eslint-enable lit/binding-positions, lit/no-invalid-html */
  }
}
