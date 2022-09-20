import { html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';

import '@material/mwc-textfield';
import { TextField } from '@material/mwc-textfield';
import { Duration } from 'luxon';
import humanInterval from './human-interval';

/**
 * Human readable duration input
 *
 * @element titanium-duration-input
 *
 *
 */

const TICKS_PER_MILLISECOND = 10000;

@customElement('titanium-duration-input')
export class TitaniumDurationInputElement extends LitElement {
  /**
   * Main input value
   */
  @property({ type: String }) value: string | null | undefined;

  /**
   *  Displays error state if value is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean;

  /**
   * Disables the input
   */
  @property({ type: Boolean }) disabled: boolean;

  /**
   * Disables the input
   */
  @property({ type: Boolean }) helperPersistent: boolean;

  /**
   *  Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  helper text displayed to user
   */
  @property({ type: String }) helper: string = 'Enter a duration e.g. "3 hours and 30 minutes"';

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = '';

  /**
   *  Sets icon value.
   */
  @property({ type: String }) icon: string = '';

  @query('mwc-textfield') private input!: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  firstUpdated() {
    this.input.validityTransform = (newValue, nativeValidity) => {
      if (!nativeValidity.valid) {
        return {};
      } else {
        const len = newValue?.length ?? 0;
        const isValid = (len > 6 && len < 12) || (len === 0 && !this.required);
        return {
          valid: isValid,
          customError: !isValid,
        };
      }
    };
  }

  #getReadableTime(time: number): string {
    console.log(time);
    try {
      const units = Object.entries(
        Duration.fromMillis(time / TICKS_PER_MILLISECOND)
          .shiftTo('years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds')
          .toObject()
      );
      return units
        .filter(value => value[1] !== 0)
        .map(value => `${value[1]} ${value[1] === 1 ? value[0].slice(0, -1) : value[0]}`)
        .join(' and ');
    } catch {
      return '';
    }
  }

  /**
   *  Runs layout() method on textfield.
   */
  layout() {
    this.input.layout();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.input.reportValidity();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.input.checkValidity();
  }

  /**
   *  Resets the inputs state.
   */
  reset() {
    this.input.isUiValid = true;
    this.input.mdcFoundation?.setValid?.(true);
  }

  render() {
    return html`
      <mwc-textfield
        .label=${this.label}
        .required=${this.required}
        .validationMessage=${this.validationMessage}
        .icon=${this.icon}
        outlined
        helper=${this.helper}
        .value=${this.value ? this.#getReadableTime(Number(this.value)) : ''}
        @change=${event => {
          const millis = humanInterval(event.target.value);
          if (millis && !isNaN(millis)) {
            this.value = String(millis * TICKS_PER_MILLISECOND);
            this.dispatchEvent(new CustomEvent('changed', { bubbles: true, composed: true }));
          }
        }}
        .validityTransform=${(newValue, nativeValidity) => {
          const millis = humanInterval(newValue);
          return {
            valid: !isNaN(millis) && nativeValidity?.valid,
          };
        }}
      ></mwc-textfield>
    `;
  }
}
