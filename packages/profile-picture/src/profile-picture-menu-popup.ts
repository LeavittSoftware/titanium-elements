import './profile-picture';
import '@material/mwc-button';

import { TitaniumPopupSurfaceFoundation } from '@leavittsoftware/titanium-popup-surface';
import { GetUserManagerInstance } from '@leavittsoftware/user-manager';
import { css, customElement, html, property, query } from 'lit-element';
import { ProfilePictureElement } from './profile-picture';

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
   * Company of user
   */
  @property({ type: String }) company: string = '';

  /**
   * Full name of user
   */
  @property({ type: String }) name: string = '';

  @query('profile-picture') profilePicture: ProfilePictureElement;

  /**
   * Reloads profile picture from server
   */
  forceRefreshPicture() {
    this.profilePicture.refresh();
  }

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

    h2[company] {
      padding-bottom: 12px;
    }

    slot-container {
      display: flex;
      flex-direction: column;
    }

    mwc-button[account] {
      margin: 12px 24px 24px 24px;
      --mdc-theme-primary: #5f6368;
      --mdc-button-outline-color: #dadce0;
      --mdc-typography-button-text-transform: none;
      --mdc-typography-button-font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      --mdc-typography-button-font-weight: 400;
      --mdc-typography-button-letter-spacing: 0.4px;
      --mdc-typography-button-font-size: 14px;
    }

    footer {
      display: grid;
      justify-content: end;
      padding: 8px;
      border-top: 1px solid var(--app-border-color, #dadce0);
      --mdc-theme-primary: #5f6368;
      --mdc-button-outline-color: #dadce0;
      --mdc-typography-button-text-transform: none;
    }
  `;

  render() {
    return html`
      <main @mousedown=${(e: Event) => e.preventDefault()}>
        <profile-picture shape="circle" .personId=${this.personId} size="90"></profile-picture>
        <h1>${this.name}</h1>
        ${this.company ? html`<h2 company>${this.company}</h2>` : ''}
        <h2>${this.email}</h2>
        <slot-container>
          <slot name="content"></slot>
        </slot-container>
        <mwc-button outlined account @click=${() => window.open('https://accounts.leavitt.com/', '_blank')} label="Manage your Leavitt account"></mwc-button>
      </main>

      <footer>
        <mwc-button @click=${() => GetUserManagerInstance().logout()} label="Sign out"></mwc-button>
      </footer>
    `;
  }
}
