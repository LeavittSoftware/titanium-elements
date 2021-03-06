import { LitElement, css, html, customElement, property, query } from 'lit-element';
import '@material/mwc-textfield';
import { TextField } from '@material/mwc-textfield';
/**
 * Material design YouTube url input.
 *
 * @element titanium-youtube-input
 *
 * @fires video-changed - Fired when the YouTube video key changes
 *
 */

@customElement('titanium-youtube-input')
export class TitaniumYouTubeInputElement extends LitElement {
  /**
   * Unique YouTube video key
   */
  @property({ type: String, attribute: 'youtube-video-key' }) youTubeVideoKey: string | null | undefined;

  /**
   *  Displays error state if value is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean;

  /**
   * Disables the input
   */
  @property({ type: Boolean }) disabled: boolean;

  /**
   *  	Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'YouTube Video Key';

  @query('mwc-textfield') private input!: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  firstUpdated() {
    this.input.validityTransform = (newValue, nativeValidity) => {
      if (!nativeValidity.valid) {
        return {};
      } else {
        const len = newValue?.length ?? 0;
        const isValid = len > 6 && len < 12;
        return {
          valid: isValid,
          customError: !isValid,
        };
      }
    };
  }

  reportValidity() {
    return this.input.reportValidity();
  }

  checkValidity() {
    return this.input.checkValidity();
  }

  reset() {
    this.input.isUiValid = true;
    this.input.mdcFoundation?.setValid?.(true);
  }

  private _getYouTubeKey(value: string) {
    // https://stackoverflow.com/a/8260383
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = value.match(regExp);

    const key = match && match[7].length === 11 ? match[7] : false;

    // If key stripped from url use key. Otherwise use the value input by user.
    return key ? key : value;
  }

  private async _clearYouTubeInputValue() {
    this.youTubeVideoKey = '';
    return this.updateComplete;
  }

  private async _youTubeKeyChanged(event) {
    if (event && event.target && event.target.value) {
      const value = event.target.value;
      // Clears the input before resetting it with just the key
      await this._clearYouTubeInputValue();
      this.youTubeVideoKey = this._getYouTubeKey(value);
    } else {
      this.youTubeVideoKey = '';
    }

    // values changed
    this.dispatchEvent(new CustomEvent('video-changed', { detail: { key: this.youTubeVideoKey } }));
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    img {
      position: absolute;
      top: 7px;
      right: 7px;
      max-height: 42px;
    }

    mwc-textfield {
      display: flex;
    }
  `;
  render() {
    return html`
      <mwc-textfield
        outlined
        ?required=${this.required}
        ?disabled=${this.disabled}
        .validationMessage=${this.validationMessage}
        .label=${this.label}
        @input="${this._youTubeKeyChanged}"
        .value=${this.youTubeVideoKey || ''}
      ></mwc-textfield>
      ${this.youTubeVideoKey &&
      html`
        <img title="video thumbnail" src="https://img.youtube.com/vi/${this.youTubeVideoKey.length === 11 ? this.youTubeVideoKey + '/' : ''}default.jpg" />
      `}
    `;
  }
}
