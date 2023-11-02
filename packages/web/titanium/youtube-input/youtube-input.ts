import { PropertyValues } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { MdOutlinedField } from '@material/web/field/outlined-field';
// import '@material/mwc-textfield';
// import { TextField } from '@material/mwc-textfield';
/**
 * Material design YouTube url input.
 *
 * @element titanium-youtube-input
 *
 * @fires video-changed - Fired when the YouTube video key changes
 *
 */

@customElement('titanium-youtube-input')
export class TitaniumYouTubeInput extends MdOutlinedTextField {
  /**
   * Unique YouTube video key
   */
  @property({ type: String, attribute: 'youtube-video-key' }) youTubeVideoKey: string | null | undefined;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'YouTube Video Key';
  @property({ type: String }) value: string = '';

  firstUpdated() {
    const leadingSlot: HTMLSlotElement | null = this.shadowRoot?.querySelector('slot[name="leading-icon"]') || null;
    if (leadingSlot) {
      leadingSlot.append(this.#createDefaultImage());
    }
    this.hasLeadingIcon = true;
    const field: MdOutlinedField | null = this.shadowRoot?.querySelector('md-outlined-field') || null;
    if (field) {
      field.populated = true;
    }
  }

  #createDefaultImage() {
    const image = document.createElement('img');
    image.style.maxHeight = '36px';
    image.style.borderRadius = '8px';
    image.style.marginLeft = '8px';
    image.title = 'video thumbnail';
    image.src = `https://img.youtube.com/vi/default.jpg`;
    image.setAttribute('youtube-image', '');
    return image;
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('value')) {
      this.#youTubeKeyChanged(this.value);
    }
  }

  #getYouTubeKey(value: string) {
    // https://stackoverflow.com/a/8260383
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = value.match(regExp);

    const key = match && match[7].length === 11 ? match[7] : false;

    // If key stripped from url use key. Otherwise use the value input by user.
    return key ? key : value;
  }

  async #youTubeKeyChanged(value) {
    this.youTubeVideoKey = !!value ? this.#getYouTubeKey(value) : '';
    const leadingSlot: HTMLSlotElement | null = this.shadowRoot?.querySelector('slot[name="leading-icon"]') || null;
    Array.from(leadingSlot?.children ?? [])?.forEach((node) => {
      if (node.hasAttribute('youtube-image')) {
        (node as HTMLImageElement).src = `https://img.youtube.com/vi/${
          (this.youTubeVideoKey?.length || 0) === 11 ? this.youTubeVideoKey + '/' : ''
        }default.jpg`;
      }
    });

    this.dispatchEvent(new CustomEvent('video-changed', { detail: { key: this.youTubeVideoKey } }));
  }
}
