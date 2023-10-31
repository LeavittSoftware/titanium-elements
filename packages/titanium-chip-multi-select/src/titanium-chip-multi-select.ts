import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@leavittsoftware/titanium-input-validator';
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import { TitaniumInputValidator } from '@leavittsoftware/titanium-input-validator';

/**
 *  Multi select outlined themed input that styles
 *  slotted in chips and add button
 *
 *  @element titanium-chip-multi-select
 *
 * @slot default - Main slot (intended to be a list of &lt;titanium-chip&gt;)
 * @slot button - Optional slot shown before the chips (typically used as an add chip button)
 *
 * @cssprop {Color} [--mdc-text-field-outlined-idle-border-color=rgba(0, 0, 0, 0.38)] - Container border color
 * @cssprop {Color} [--app-light-text-color=#80868b] - No items text color
 * @cssprop {Color} [--app-primary-color=#1a73e8] - Focused outline color
 * @cssprop {Color} [--mdc-theme-error=#b00020] - Text and outline color in invalid state
 * @cssprop {Color} [--mdc-text-field-disabled-ink-color=rgba(0, 0, 0, 0.38)] - Disabled helper text color
 * @cssprop {Color} [--mdc-text-field-label-ink-color=rgba(0, 0, 0, 0.6)] - Helper text color
 * @cssprop [--mdc-typography-caption-font-family=var(--mdc-typography-font-family, Roboto, sans-serif)] - Helper font-family
 * @cssprop [--mdc-typography-caption-font-size=0.75rem] - Helper font-size
 * @cssprop [--mdc-typography-caption-font-weight=400] - Helper font-weight
 * @cssprop [--mdc-typography-caption-letter-spacing=0.0333333em] - Helper letter-spacing
 * @cssprop [--mdc-typography-caption-text-decoration=inherit] - Helper text-decoration
 * @cssprop [--mdc-typography-caption-text-transform=inherit] - Helper text-transform
 */

@customElement('titanium-chip-multi-select')
export class TitaniumChipMultiSelectElement extends LitElement {
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
   *  Sets helper text
   */
  @property({ type: String }) helper: string;

  /**
   *  Whether or not the input should appear disabled (chips, buttons and anything else slotted will still have to be disabled individually).
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean;

  /**
   *  Whether or not the input should appear invalidated
   */
  @property({ type: Boolean, reflect: true }) isUiValid: boolean = true;

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

      ::slotted(*) {
        line-height: 0;
      }

      div[empty-text] {
        font-size: 12px;
        color: var(--app-light-text-color);
        align-self: center;
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
        .supportingText=${this.helper}
      >
        <slot-container>
          <slot></slot>
          ${!this.hasItems ? html` <div empty-text>${this.noItemsText}</div>` : ''}
        </slot-container>
      </titanium-input-validator>
    `;
  }
}
