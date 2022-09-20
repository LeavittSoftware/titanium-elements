import { property, customElement } from 'lit/decorators.js';
import { TextField } from '@material/mwc-textfield';

import humanInterval from './human-interval';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
dayjs.extend(duration);

/**
 * titanium-duration-input is a human readable duration textfield that extends mwc-textfield. This means that the API is the same as TextField.
 * [mwc-textfield documentation](https://www.npmjs.com/package/@material/mwc-textfield).
 * This input is expecting a dayjs duration and will return a dayjs duration.
 *
 * @element titanium-duration-input
 *
 * @fires duration-changed The duration can be accessed via event.target.duration
 *
 */

@customElement('titanium-duration-input')
export class TitaniumDurationInputElement extends TextField {
  /**
   *  Dayjs duration object. This is the main property you will interact with because the value
   *  property of this component is actually the human readable string and not the duration you most likely
   *  want to work with.
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
      this.dispatchEvent(new CustomEvent('duration-changed', { bubbles: true, composed: true }));
    });
  }

  firstUpdated() {
    super.firstUpdated();
    this.value = this.duration ? this._getReadableTime(this.duration) : '';
  }

  private _getReadableTime(d: duration.Duration | null | undefined): string {
    if (d === null || d === undefined) {
      return '';
    }

    return Object.entries({
      years: d.get('years'),
      weeks: d.get('weeks'),
      days: d.get('days'),
      hours: d.get('hours'),
      minutes: d.get('minutes'),
      seconds: d.get('seconds'),
    })
      .filter(value => value[1] !== 0)
      .map(value => `${value[1]} ${value[1] === 1 ? value[0].slice(0, -1) : value[0]}`)
      .join(' and ');
  }
}
