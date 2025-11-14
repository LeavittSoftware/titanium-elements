import { property, customElement } from 'lit/decorators.js';
import { PropertyValues, css } from 'lit';

import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import { ExtendableOutlinedTextField } from '../extendable-outlined-text-field/extendable-outlined-text-field';
import humanInterval, { durationToString } from './human-interval';
dayjs.extend(duration);

/**
 * titanium-duration-input is a human readable duration textfield.
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
  @property({ type: Object }) accessor duration: duration.Duration | null = null;

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  @property({ reflect: true, type: String }) accessor placeholder: string = '3 hours and 30 minutes';
  @property({ reflect: true, type: String }) accessor label: string = 'Duration';

  firstUpdated() {
    this.addEventListener('change', () => {
      this.#customReportValidity(this.input.value);

      const dur = this.#textToInterval(this.input.value);
      if (dur?.asMilliseconds() != this.duration?.asMilliseconds()) {
        this.duration = dur;
        this.dispatchEvent(new Event('duration-change'));
      }
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `;

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
      this.errorText = 'Duration was entered in an incorrect format. Try "3 hours and 30 minutes"';
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
