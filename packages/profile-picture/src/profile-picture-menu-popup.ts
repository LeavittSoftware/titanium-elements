import './profile-picture';
import '@leavittsoftware/titanium-button';

import { TitaniumPopupSurfaceFoundation } from '@leavittsoftware/titanium-popup-surface';
import { GetUserManagerInstance } from '@leavittsoftware/user-manager';
import { css, customElement, html, property } from 'lit-element';

@customElement('profile-picture-menu-popup')
export class ProfilePictureMenuPopupElement extends TitaniumPopupSurfaceFoundation {
  /**
   * Person id of user
   */
  @property({ type: Number }) personId: number = 0;

  /**
   * Email address of user
   */
  @property({ type: String }) email: string = '';

  /**
   * Full name of user
   */
  @property({ type: String }) name: string = '';

  static styles = css`
    ${TitaniumPopupSurfaceFoundation.styles} :host {
      width: 300px;

      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      border-radius: 8px;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    main profile-picture {
      margin: 24px 24px 20px;
    }

    h1 {
      display: block;
      color: var(--app-dark-text-color, #202124);
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 0 24px;
    }

    h2 {
      display: flex;
      color: var(--app-text-color, #5f6368);
      font-family: Roboto, sans-serif;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 12px 24px;
    }

    slot-container {
      display: flex;
      flex-direction: column;
    }

    titanium-button[account] {
      margin: 12px 24px 24px 24px;
      --app-link-color: #5f6368;
    }

    footer {
      display: grid;
      justify-content: end;
      padding: 10px;
      border-top: 1px solid var(--app-border-color, #dadce0);
    }
  `;

  render() {
    return html`
      <main @mousedown=${(e: Event) => e.preventDefault()}>
        <profile-picture shape="circle" .personId=${this.personId} size="90"></profile-picture>
        <h1>${this.name}</h1>
        <h2>${this.email}</h2>
        <slot-container>
          <slot name="content"></slot>
        </slot-container>
        <titanium-button outlined account @click=${() => window.open('https://accounts.leavitt.com/', '_blank')}>My Leavitt Group Account</titanium-button>
      </main>

      <footer>
        <titanium-button @click=${() => GetUserManagerInstance().logout()}>Sign out</titanium-button>
      </footer>
    `;
  }
}
