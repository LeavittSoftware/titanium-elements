import '@material/web/icon/icon';

import { css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

/**
 * Material design filled YouTube url input.
 *
 * @element titanium-filled-youtube-input
 *
 */

@customElement('titanium-filled-youtube-input')
export class TitaniumFilledYouTubeInput extends MdFilledTextField {
  @property({ type: String }) autocomplete: string = 'off';
  @property({ type: Boolean }) spellcheck: boolean = false;
  @property({ type: String }) label: string = 'YouTube video key';
  @property({ type: String }) pattern: string = '^.{11}$';

  #trailingImg: HTMLImageElement | null = null;

  override connectedCallback() {
    super.connectedCallback();
    if (!this.querySelector('md-icon[slot="leading-icon"]')) {
      const icon = document.createElement('md-icon');
      icon.slot = 'leading-icon';
      icon.textContent = 'youtube_activity';
      this.appendChild(icon);
    }
  }

  override updated(changedProps: PropertyValues<this>) {
    super.updated(changedProps);
    if (changedProps.has('value')) {
      const stripped = this.#stripYouTubeKeyFromUrl(this.value);
      if (stripped !== this.value) {
        this.value = stripped;
      }
      this.#updateTrailingImage();
    }
  }

  #updateTrailingImage() {
    if (this.value && this.value.length === 11) {
      if (!this.#trailingImg) {
        this.#trailingImg = document.createElement('img');
        this.#trailingImg.slot = 'trailing-icon';
        this.#trailingImg.style.maxHeight = '42px';
        this.#trailingImg.style.borderRadius = '8px';
        this.#trailingImg.style.marginRight = '24px';
        this.appendChild(this.#trailingImg);
      }
      this.#trailingImg.src = `https://img.youtube.com/vi/${this.value}/default.jpg`;
    } else if (this.#trailingImg) {
      this.#trailingImg.remove();
      this.#trailingImg = null;
    }
  }

  #stripYouTubeKeyFromUrl(value: string) {
    // https://stackoverflow.com/a/8260383
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = value.match(regExp);
    const key = match && match[7].length === 11 ? match[7] : false;
    return key ? key : value;
  }

  static override styles = [
    ...(Array.isArray(MdFilledTextField.styles) ? MdFilledTextField.styles : [MdFilledTextField.styles]),
    css`
      :host {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }
    `,
  ];
}
