import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import { css, customElement, html, LitElement, property} from 'lit-element';

@customElement('profile-picture')
export class ProfilePictureElement extends LitElement {
  @property({ type: Number }) personId: number = 44;
  @property({ reflect: true, type: String }) shape: string = 'circle';
  @property({ type: Number }) size: number = 120;

  _computeSrc(personId: number, size: number): string {
    const baseUrl = isDevelopment ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
    return `${baseUrl}People(${personId})/Default.Picture(size=${size})`;
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
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <img draggable="false" alt="Profile Picture" src="${this._computeSrc(this.personId, this.size)}" />
    `;
  }
}
