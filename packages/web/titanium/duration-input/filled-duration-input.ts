import { property, customElement } from 'lit/decorators.js';
import { PropertyValues } from 'lit';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import humanInterval, { durationToString } from './human-interval';
dayjs.extend(duration);

/**
 * titanium-duration-input is a human readable duration textfield.
 *
 * @element titanium-filled-duration-input
 *
 * @fires duration-change The duration can be accessed via event.target.duration
 *
 */

@customElement('titanium-filled-duration-input')
export class TitaniumFilledDurationInput extends MdFilledTextField {
  /**
   *  Dayjs duration object. This is the main property you will interact with because the value
   *  property of this component is actually the human readable string and not the duration you most likely
   *  want to work with. When changed a duration-change event will be dispatched.
   */
  @property({ type: Object }) accessor duration: duration.Duration | null = null;
  @property({ type: String }) label: string = 'Duration';
  @property({ type: String }) supportingText: string = 'Enter a duration ex. "3 hours and 30 minutes"';
  @property({ type: String }) autocomplete: string = 'off';
  @property({ type: Boolean }) spellcheck: boolean = false;

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('duration') && changedProps.get('duration') !== this.duration) {
      if (this.duration) {
        this.value = durationToString(this.duration);
      } else {
        this.duration = null;
        this.value = '';
      }
    }
  }

  firstUpdated() {
    this.addEventListener('change', () => {
      this.reportValidity();

      const dur = this.#textToInterval(this.value);
      if (dur?.asMilliseconds() != this.duration?.asMilliseconds()) {
        this.duration = dur;
        this.dispatchEvent(new Event('duration-change'));
      }
    });
  }

  checkValidity() {
    return super.checkValidity() && this.#customCheckValidity(this.value);
  }

  reportValidity() {
    if (!this.#customCheckValidity(this.value)) {
      this.error = true;
      this.errorText = 'Duration was entered in an incorrect format. Try "3 hours and 30 minutes"';
    } else {
      this.error = false;
      this.errorText = '';
    }
    return super.reportValidity();
  }

  #customCheckValidity(input: string) {
    if (input && !this.#textToInterval(input)) {
      return false;
    } else {
      return true;
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
