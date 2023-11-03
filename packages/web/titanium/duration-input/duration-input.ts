import { property, customElement } from 'lit/decorators.js';
import { PropertyValues } from 'lit';

import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import { ExtendableOutlinedTextField } from '../extendable-outlined-text-field/extendable-outlined-text-field';
import humanInterval from './human-interval';
dayjs.extend(duration);

/**
 * titanium-duration-input is a human readable duration textfield that extends mwc-textfield. This means that the API is the same as TextField.
 * [mwc-textfield documentation](https://www.npmjs.com/package/@material/mwc-textfield).
 * This input is expecting a dayjs duration and will return a dayjs duration.
 *
 * @element titanium-duration-input
 *
 * @fires duration-change The duration can be accessed via event.target.duration
 *
 */

@customElement('titanium-duration-input')
export class TitaniumDurationInput extends ExtendableOutlinedTextField {
  /**
   *  Dayjs duration object. This is the main property you will interact with because the value
   *  property of this component is actually the human readable string and not the duration you most likely
   *  want to work with. When changed a duration-change event will be dispatched.
   */
  @property({ type: Object }) duration: duration.Duration | null = null;

  firstUpdated() {
    this.label = 'Duration';
    this.supportingText = 'Enter a duration e.g. "3 hours and 30 minutes"';
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('value')) {
      this.#customReportValidity(this.input.value);

      const dur = this.#textToInterval(this.input.value);
      if (dur?.asMilliseconds() != this.duration?.asMilliseconds()) {
        this.duration = dur;
        this.dispatchEvent(new Event('duration-change'));
      }
    }
  }

  checkValidity() {
    return super.checkValidity() && this.#customCheckValidity(this.input.value);
  }

  reportValidity() {
    this.#customReportValidity(this.input.value);
    return super.reportValidity();
  }

  #customCheckValidity(input: string) {
    if (input && !this.#textToInterval(input)) {
      return false;
    } else {
      return true;
    }
  }

  #customReportValidity(input: string) {
    if (!this.#customCheckValidity(input)) {
      this.error = true;
      this.errorText = 'Duration was entered in an incorrect format';
    } else {
      this.error = false;
      this.errorText = '';
    }
  }

  #textToInterval(input: string) {
    if (!input) {
      return null;
    }
    const ms = humanInterval(input);
    return isNaN(ms) ? null : dayjs.duration(ms, 'ms');
  }

  override async reset() {
    super.reset();
    this.error = false;
    this.errorText = '';
    this.duration = null;
  }
}
