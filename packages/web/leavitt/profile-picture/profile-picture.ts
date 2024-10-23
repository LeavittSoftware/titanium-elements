import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { isDevelopment } from '../../titanium/helpers/helpers';
import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Displays a Leavitt Group users profile picture
 *
 * @element profile-picture
 *
 */
@customElement('profile-picture')
export class ProfilePicture extends LitElement {
  /**
   * File name of the profile picture on CDN, no extension
   */
  @property({ reflect: true, type: String }) accessor fileName: string | null;

  /**
   * Shape of profile picture
   */
  @property({ reflect: true, type: String }) accessor shape: 'circle' | 'square' = 'circle';

  /**
   * Shows a colored ring around the picture
   */
  @property({ reflect: true, type: Boolean, attribute: 'show-ring' }) accessor showRing: boolean;

  /**
   * Makes the image a link to the respective profile page
   */
  @property({ reflect: true, type: Number, attribute: 'profile-picture-link-person-id' }) accessor profilePictureLinkPersonId: number | null;

  /**
   * Size in pixels of profile picture
   */
  @property({ type: Number }) accessor size: number = 120;

  /**
   *  Setting true will cause the size attribute to only determine what size image to fetch from CDN and not set any CSS size styles on the image. Therefore the image will be displayed at its intrinsic size unless further overridden by the consumer.
   */
  @property({ type: Boolean }) accessor useIntrinsicImageSize: boolean = false;

  #availableSizes = new Set([32, 64, 128, 256, 512, 1024]);
  #fallbackSrc = 'https://cdn.leavitt.com/icon-user-profile-sq.svg';

  protected updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('size') || changedProps.has('useIntrinsicImageSize')) {
      this.style.width = this.useIntrinsicImageSize || !this.size ? '' : this.size + 'px';
      this.style.height = this.useIntrinsicImageSize || !this.size ? '' : this.size + 'px';
    }
  }

  #determineSize(size: number) {
    const availableSizes = [...this.#availableSizes];
    for (let index = 0; index < availableSizes.length; index++) {
      const availableSize = availableSizes[index];
      if (size <= availableSize) {
        return availableSize;
      }
    }
    return 512;
  }

  #getFilePath(cdnFileName: string | null, size: number) {
    const requestedSize = this.#determineSize(size);

    if (!cdnFileName) {
      return this.#fallbackSrc;
    } else {
      return `https://cdn.leavitt.com/${cdnFileName}-${requestedSize}.webp`;
    }
  }

  static styles = css`
    :host {
      display: inline-block;
      white-space: normal;
      flex-shrink: 0;
      position: relative;
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      image-rendering: -webkit-optimize-contrast;
    }

    :host([shape='circle']) a:after,
    :host([shape='circle']) img {
      border-radius: 50%;
    }

    :host([show-ring]) {
      justify-self: center;
      border: 3px solid var(--profile-picture-ring-color, var(--app-accent-color-blue, #4285f4));
      padding: 3px;
    }

    :host([show-ring][shape='circle']) {
      border-radius: 50%;
    }

    a:after,
    a:before {
      position: absolute;
      opacity: 0;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
    }

    a:after {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
    }

    a:before {
      content: '↗';
      width: 100%;
      color: #fff;
      z-index: 1;
      bottom: 0;
      text-align: center;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
    }

    a:hover:before,
    a:hover:after {
      opacity: 1;
    }
  `;

  renderProfilePicture() {
    return html`
      <img
        loading="lazy"
        draggable="false"
        alt="User profile picture"
        src=${this.#getFilePath(this.fileName, this.size)}
        @error=${(e: DOMEvent<HTMLImageElement>) => {
          if (e.target.src !== this.#fallbackSrc) {
            e.target.src = this.#fallbackSrc;
          }
        }}
      />
    `;
  }

  render() {
    if (this.profilePictureLinkPersonId) {
      return html`<a target="_blank" href="https://${isDevelopment ? 'dev' : ''}workforce.leavitt.com/user/${this.profilePictureLinkPersonId}/view"
        >${this.renderProfilePicture()}</a
      > `;
    }
    return this.renderProfilePicture();
  }
}
