import { LitElement, css, html, customElement, property, query } from 'lit-element';
import '@material/mwc-textfield';
import { TextField } from '@material/mwc-textfield';

@customElement('titanium-youtube-input')
export class TitaniumYoutubeInputElement extends LitElement {
  @property({ type: String }) youtubeVideoKey: string | null | undefined;
  @property({ type: Boolean }) required: boolean;
  @property({ type: Boolean }) disabled: boolean;
  @property({ type: String }) validationMessage: string;
  @property({ type: String }) label: string;
  @query('mwc-textfield') input: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  public reportValidity() {
    return this.input.reportValidity() && this.youtubeVideoKey;
  }

  public reset() {
    this.input.isUiValid = true;
    this.input.mdcFoundation?.setValid?.(true);
  }

  private _getYoutubeKey(value: string) {
    // https://stackoverflow.com/a/8260383
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = value.match(regExp);

    const key = match && match[7].length === 11 ? match[7] : false;

    // If key stripped from url use key. Otherwise use the value input by user.
    return key ? key : value;
  }

  private async clearYoutubeInputValue() {
    this.youtubeVideoKey = '';
    return this.updateComplete;
  }
  private async _youtubeKeyChanged(event) {
    if (event && event.target && event.target.value) {
      const value = event.target.value;
      // Clears the input before resetting it with just the key
      await this.clearYoutubeInputValue();
      this.youtubeVideoKey = this._getYoutubeKey(value);
    } else {
      this.youtubeVideoKey = '';
    }

    // values changed
    this.dispatchEvent(new CustomEvent('video-changed', { detail: { key: this.youtubeVideoKey } }));
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
        @input="${this._youtubeKeyChanged}"
        .value=${this.youtubeVideoKey || ''}
      ></mwc-textfield>
      ${this.youtubeVideoKey &&
      html`
        <img title="video thumbnail" src="https://img.youtube.com/vi/${this.youtubeVideoKey.length === 11 ? this.youtubeVideoKey + '/' : ''}default.jpg" />
      `}
    `;
  }
}
