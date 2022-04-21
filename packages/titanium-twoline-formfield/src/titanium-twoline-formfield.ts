import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Formfield } from '@material/mwc-formfield';
import { classMap } from 'lit-html/directives/class-map.js';

/**
 * Titanium Two Line Formfield.
 *
 * @element titanium-twoline-formfield
 *
 * @slot mwc-checkbox - Checkbox slot that will be placed to the left of the label and description
 * @example
 * <titanium-twoline-formfield label="Share template" description="Share this template with your friends">
 *  <mwc-checkbox></mwc-checkbox>
 * </titanium-twoline-formfield>
 *
 */
@customElement('titanium-twoline-formfield')
export class TitaniumTwoLineFormFieldElement extends Formfield {
  /**
   *  Description of the form field.
   *  This will be placed below the label.
   */
  @property({ type: String }) description: string;

  static styles = [
    ...Formfield.styles,
    css`
      span {
        margin-top: 14px;
      }

      .mdc-form-field {
        align-items: flex-start;
      }

      div {
        font-size: 12px;
      }
    `,
  ];

  protected render() {
    const classes = {
      'mdc-form-field--align-end': this.alignEnd,
      'mdc-form-field--space-between': this.spaceBetween,
      'mdc-form-field--nowrap': this.nowrap,
    };

    return html` <div class="mdc-form-field ${classMap(classes)}">
      <slot></slot>
      <span>
        <label class="mdc-label" @click="${this._labelClick}">${this.label}</label>
        <div desc>${this.description}</div>
      </span>
    </div>`;
  }
}
