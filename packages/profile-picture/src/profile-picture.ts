import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Displays a Leavitt Group users profile picture
 *
 * @element profile-picture
 *
 */
@customElement('profile-picture')
export class ProfilePictureElement extends LitElement {
  /**
   * Person id of user
   */
  @property({ type: Number }) personId: number = 0;

  /**
   * Shape of profile picture
   */
  @property({ reflect: true, type: String }) shape: 'circle' | 'square' = 'circle';

  /**
   * Shows a colored ring around the picture
   */
  @property({ reflect: true, type: Boolean, attribute: 'show-ring' }) showRing: boolean;

  /**
   * Size in pixels of profile picture
   */
  @property({ type: Number }) size: number = 120;

  /**
   *  Setting true will cause the size attribute to only determine what size image to fetch from CDN and not set any CSS size styles on the image. Therefore the image will be displayed at its intrinsic size unless further overridden by the consumer. 
   */
  @property({ type: Boolean }) useIntrinsicImageSize: boolean = false;

  @state() protected cacheBust: number = 0;
  @state() protected hasError = false;

  #availableSizes = new Set([32, 64, 128, 256, 512]);

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

  updated(changedProps) {
    if (changedProps.has('size') && changedProps.get('size') !== this.size && !this.responsive) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
    }

    if (changedProps.has('personId')) {
      this.hasError = false;
    }
  }

  /**
   * Reloads profile picture from server
   */
  refresh() {
    this.hasError = false;
    this.cacheBust = this.cacheBust > 0 ? this.cacheBust + 1 : 1;
  }

  static styles = css`
    :host {
      display: inline-block;
      white-space: normal;
      flex-shrink: 0;
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      image-rendering: -webkit-optimize-contrast;
    }

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
  `;

  render() {
    return html`
      <img
        loading="lazy"
        draggable="false"
        alt="User profile picture"
        @error=${() => (this.hasError = true)}
        src="https://cdn.leavitt.com/user-${this.hasError ? 0 : this.personId}-${this.#determineSize(this.size)}.jpeg${this.cacheBust > 0
          ? `?c=${this.cacheBust}`
          : ''}"
      />
    `;
  }
}
