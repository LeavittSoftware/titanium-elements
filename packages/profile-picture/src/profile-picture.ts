import { css, customElement, html, LitElement, property } from 'lit-element';

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

  @property({ type: Boolean }) private hasError: boolean = false;

  @property({ type: Number }) private cacheBust: number = 0;

  private _availableSizes = new Set([32, 64, 128, 256, 512]);

  _computeSrc(personId: number, size: number, cacheBust: number, hasError: boolean): string {
    if (hasError) {
      return `https://cdn.leavitt.com/user-0-${this.determineSize(this.size)}.jpeg`;
    }

    return `https://cdn.leavitt.com/user-${personId}-${this.determineSize(size)}.jpeg${cacheBust > 0 ? `?c=${cacheBust}` : ''}`;
  }

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
    }

    :host([shape='circle']) img {
      border-radius: 50%;
    }
  `;

  render() {
    return this.personId
      ? html`
          <img
            draggable="false"
            alt="Profile Picture"
            @error=${() => (this.hasError = true)}
            src=${this._computeSrc(this.personId, this.size, this.cacheBust, this.hasError)}
          />
        `
      : html``;
  }
}
