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
   * Size in pixels of profile picture
   */
  @property({ type: Number }) size: number = 120;

  @state() private cacheBust: number = 0;
  @state() private hasError = false;

  private _availableSizes = new Set([32, 64, 128, 256, 512]);

  private determineSize(size: number) {
    const availableSizes = [...this._availableSizes];
    for (let index = 0; index < availableSizes.length; index++) {
      const availableSize = availableSizes[index];
      if (size <= availableSize) {
        return availableSize;
      }
    }
    return 512;
  }

  updated(changedProps) {
    if (changedProps.has('size') && changedProps.get('size') !== this.size) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
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
      image-rendering: -webkit-optimize-contrast;
    }

    :host([shape='circle']) img {
      border-radius: 50%;
    }
  `;

  render() {
    return html`
      <img
        loading="lazy"
        draggable="false"
        width="${this.size}px"
        height="${this.size}px"
        alt="User profile picture"
        @error=${() => (this.hasError = true)}
        src="https://cdn.leavitt.com/user-${this.hasError ? 0 : this.personId}-${this.determineSize(this.size)}.jpeg${this.cacheBust > 0
          ? `?c=${this.cacheBust}`
          : ''}"
      />
    `;
  }
}
