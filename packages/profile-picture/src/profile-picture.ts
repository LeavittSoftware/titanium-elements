import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
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

  private _availableSizes = new Set([32, 64, 128, 256, 512, 1024]);

  _computeSrc(personId: number, size: number): string | undefined {
    if (!personId) {
      return undefined;
    }
    const baseUrl = isDevelopment ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
    return `${baseUrl}People(${personId})/Default.Picture(size=${this.determineSize(size)})`;
  }

  private determineSize(size: number) {
    const availableSizes = [...this._availableSizes];
    for (let index = 0; index < availableSizes.length; index++) {
      const availableSize = availableSizes[index];
      if (size <= availableSize) {
        return availableSize;
      }
    }
    return 1024;
  }

  updated(changedProps) {
    if (changedProps.has('size') && changedProps.get('size') !== this.size) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
    }
  }

  public refresh() {
    const personId = this.personId;
    this.personId = 0;
    this.personId = personId;
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
          <img draggable="false" alt="Profile Picture" src=${this._computeSrc(this.personId, this.size)} />
        `
      : html``;
  }
}
