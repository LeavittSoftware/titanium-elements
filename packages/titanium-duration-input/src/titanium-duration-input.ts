import { property, customElement } from 'lit/decorators.js';
import { TextField } from '@material/mwc-textfield';

import humanInterval from './human-interval';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import { PropertyValues } from 'lit';
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
export class TitaniumDurationInputElement extends TextField {
  /**
   *  Dayjs duration object. This is the main property you will interact with because the value
   *  property of this component is actually the human readable string and not the duration you most likely
   *  want to work with. When changed a duration-change event will be dispatched.
   */
  @property({ type: String }) duration: duration.Duration | null | undefined;

  constructor() {
    super();
    this.helper = 'Enter a duration e.g. "3 hours and 30 minutes"';
    this.validityTransform = (newValue, nativeValidity) => ({
      valid: !isNaN(humanInterval(newValue)) && nativeValidity?.valid,
    });

    this.addEventListener('change', () => {
      const millis = humanInterval(this.value);
      this.duration = isNaN(millis) ? null : dayjs.duration(millis, 'ms');
      this.dispatchEvent(new CustomEvent('duration-change', { bubbles: true, composed: true }));
    });
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('duration') && changedProperties.get('duration') !== this.duration) {
      if (this.duration) {
        this.value = this.#getReadableTime(this.duration);
        this.layout();
      }
    }
  }

  /**
   * @ignore
   */
  #getReadableTime(d: duration.Duration | null | undefined): string {
    if (d === null || d === undefined) {
      return '';
    }

    return Object.entries({
      years: d.years(),
      months: d.months(),
      days: d.days(),
      hours: d.hours(),
      minutes: d.minutes(),
      seconds: d.seconds(),
    })
      .filter(value => value[1] !== 0)
      .map(value => `${value[1]} ${value[1] === 1 ? value[0].slice(0, -1) : value[0]}`)
      .join(' and ');
  }
}
