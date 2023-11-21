import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { TitaniumInputValidator } from '../../titanium/input-validator/input-validator';

import '../../titanium/input-validator/input-validator';

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

  @query('titanium-input-validator') private accessor validator: TitaniumInputValidator;

  updated(changedProps: PropertyValues<this>) {
    if ((changedProps.get('hasItems') && changedProps.has('hasItems')) || (this.hasItems && changedProps.has('hasItems'))) {
      this.reportValidity();
    }
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.validator.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.validator.reportValidity();
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.validator.reset();
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }

      titanium-input-validator {
        display: block;
        width: 100%;
      }

      slot-container {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 12px;
        align-items: center;
      }

      span {
        font-size: 13px;
      }
    `,
  ];

  protected render() {
    return html`
      <titanium-input-validator
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
      </titanium-input-validator>
    `;
  }
}
