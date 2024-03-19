import '@material/web/icon/icon';

import { html, nothing, css, PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ExtendableOutlinedTextField } from '../extendable-outlined-text-field/extendable-outlined-text-field';

/**
 * Material design YouTube url input.
 *
 * @element titanium-youtube-input
 *
 */

@customElement('titanium-youtube-input')
export class TitaniumYouTubeInput extends ExtendableOutlinedTextField {
  firstUpdated() {
    this.label = this.label || 'YouTube video key';
    this.pattern = '^.{11}$';
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('value')) {
      this.value = this.#stripYouTubeKeyFromUrl(this.input.value);
    }
  }

  #stripYouTubeKeyFromUrl(value: string) {
    // https://stackoverflow.com/a/8260383
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = value.match(regExp);
    const key = match && match[7].length === 11 ? match[7] : false;
    // If key stripped from url use key. Otherwise use the value input by user.
    return key ? key : value;
  }

  static styles = [
    css`
      img {
        max-height: 49px;
        margin-right: 5px;
        border-radius: 8px;
      }

      md-outlined-text-field {
        width: 100%;
      }
    `,
  ];

  protected override renderMainSlot() {
    return html`
      <md-icon slot="leading-icon"> youtube_activity </md-icon>
      ${this.value && (this.value?.length || 0) === 11
        ? html`<img slot="trailing-icon" src="https://img.youtube.com/vi/${this.value}/default.jpg" />`
        : nothing}
    `;
  }
}
