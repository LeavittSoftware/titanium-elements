import { property, customElement } from 'lit/decorators.js';
import { TextField } from '@material/mwc-textfield';
import { PropertyValues } from 'lit';
import humanInterval, { durationToString } from './human-interval';

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
 * @fires duration-change The duration can be accessed via event.target.duration
 *
 */

@customElement('titanium-duration-input')
export class TitaniumDurationInput extends TextField {
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
        this.value = durationToString(this.duration);
        this.layout();
      } else {
        this.duration = null;
        this.value = '';
        this.layout();
      }
    }
  }

  async reset() {
    this.duration = null;
    this.value = '';
    await this.updateComplete;

    this.isUiValid = true;
    this.mdcFoundation?.setValid?.(true);
  }
}
