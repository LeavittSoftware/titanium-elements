import './profile-picture';
import '@material/web/menu/menu';
import '@material/web/button/outlined-button';
import '@material/web/button/text-button';

import { GetUserManagerInstance } from '../user-manager/user-manager';
import { UserManagerUpdatedEvent } from '../user-manager/user-manager-events';
import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { MdMenu } from '@material/web/menu/menu';

/**
 * Profile picture menu for the Leavitt Group
 *
 * @element profile-picture-menu
 *
 */
@customElement('profile-picture-menu')
export class ProfilePictureMenuElement extends LitElement {
  /**
   * Size in pixels of profile picture button
   */
  @property({ type: Number }) accessor size: number = 40;

  @property({ type: String }) accessor profilePictureFileName: string | null;

  /**
   * Person id of user
   */
  @property({ type: Number }) accessor personId: number = 0;

  /**
   * Email address of user
   */
  @property({ type: String }) accessor email: string = '';

  /**
   * Company of user
   */
  @property({ type: String }) accessor company: string = '';

  /**
   * Full name of user
   */
  @property({ type: String }) accessor name: string = '';

  @query('md-menu') private accessor menu: MdMenu;

  firstUpdated() {
    GetUserManagerInstance().addEventListener(UserManagerUpdatedEvent.eventName, () => this.setUserProps());
    this.setUserProps();
  }

  /**
   * Sets properties based on user manager instance
   */
  setUserProps() {
    this.personId = GetUserManagerInstance().personId;
    this.profilePictureFileName = GetUserManagerInstance().profilePictureFileName;
    this.email = GetUserManagerInstance().email;
    this.company = GetUserManagerInstance().company;
    this.name = GetUserManagerInstance().fullname;
  }

  updated(changedProps) {
    if (changedProps.has('size') && changedProps.get('size') !== this.size) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
    }
  }

  static styles = css`
    :host {
      display: block;
      /* --md-menu-container-color: var(--md-sys-color-surface-variant); */
    }

    div {
      display: inline-block;
      position: relative;
    }

    profile-picture {
      cursor: pointer;
    }

    md-menu main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
    }

    md-menu main profile-picture {
      margin: 24px 24px 20px;
    }

    md-menu h1 {
      display: block;
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 0 24px;
    }

    md-menu h2 {
      display: flex;
      font-family: Roboto, sans-serif;

      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.25px;
      margin: 0;
      padding: 0 24px 12px 24px;
    }

    md-menu h2[company] {
      padding-bottom: 12px;
    }

    md-menu slot-container {
      display: flex;
      flex-direction: column;
    }

    md-outlined-button {
      margin: 12px 24px 24px 24px;
    }

    md-menu footer {
      display: flex;
      flex-direction: column;
      align-items: end;
      padding: 0 8px;
      width: 300px;
    }
  `;

  render() {
    return html`
      <div
        style=${styleMap({
          height: `${this.size}px`,
          width: `${this.size}px`,
        })}
      >
        <profile-picture
          id="profile-picture"
          shape="circle"
          .fileName=${this.profilePictureFileName}
          .size=${this.size}
          @click=${() => {
            if (this.personId) {
              this.menu.show();
            } else {
              GetUserManagerInstance().authenticateAsync();
            }
          }}
        ></profile-picture>
        <md-menu y-offset="4" anchor="profile-picture" menu-corner="start-end" anchor-corner="end-end">
          <main>
            <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="90"></profile-picture>
            <h1>${this.name}</h1>
            ${this.company ? html`<h2 company>${this.company}</h2>` : ''}
            <h2>${this.email}</h2>
            <slot-container>
              <slot name="content"></slot>
            </slot-container>
            <md-outlined-button account href="https://accounts.leavitt.com/" target="_blank">Manage your Leavitt account</md-outlined-button>
          </main>
          <md-divider role="separator" tabindex="-1"></md-divider>
          <footer>
            <md-text-button @click=${() => GetUserManagerInstance().logout()}>Sign out</md-text-button>
          </footer>
        </md-menu>
      </div>
    `;
  }
}
