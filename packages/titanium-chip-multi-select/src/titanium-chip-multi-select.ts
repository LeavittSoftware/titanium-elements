import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { TitaniumInputValidator } from '@leavittsoftware/titanium-input-validator';

import '@leavittsoftware/titanium-input-validator';

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
  @property({ type: String }) label: string;

  /**
   *  Text to show when there are no items
   */
  @property({ type: String }) noItemsText: string = 'No items';

  /**
   *  Adds the * to the label
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Indicates whether or not to show the no items text
   */
  @property({ type: Boolean }) hasItems: boolean;

  /**
   *  Sets supporting text
   */
  @property({ type: String }) supportingText: string;

  /**
   *  Whether or not the input should appear disabled (chips, buttons and anything else slotted will still have to be disabled individually).
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean;

  @query('titanium-input-validator') validator: TitaniumInputValidator;

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

      ::slotted(md-outlined-button) {
        line-height: 0;
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
        .evaluator=${() => !!this.hasItems}
        ?required=${this.required}
        .label=${this.label}
        .supportingText=${this.supportingText}
      >
        <slot-container>
          <slot></slot>
          ${!this.hasItems ? html` <span>${this.noItemsText}</span>` : ''}
        </slot-container>
      </titanium-input-validator>
    `;
  }
}
