import './profile-picture';
import './profile-picture-menu-popup';

import { GetUserManagerInstance } from '@leavittsoftware/user-manager';
import { UserManagerUpdatedEvent } from '@leavittsoftware/user-manager/lib/user-manager-events';
import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ProfilePictureMenuPopupElement } from './profile-picture-menu-popup';
import { ProfilePictureElement } from './profile-picture';

/**
 * Profile picture menu for the Leavitt Group
 *
 * @element profile-picture-menu
 *
 * @cssprop {Color} --app-dark-text-color - User's name color
 * @cssprop {Color} --app-text-color - Email address color
 * @cssprop {Color} --app-border-color - divider line color
 */
@customElement('profile-picture-menu')
export class ProfilePictureMenuElement extends LitElement {
  /**
   * Size in pixels of profile picture button
   */
  @property({ type: Number }) size: number = 40;

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

  @query('profile-picture') profilePicture: ProfilePictureElement;
  @query('profile-picture-menu-popup') popup: ProfilePictureMenuPopupElement;

  /**
   * Full name of user
   */
  @property({ type: String }) name: string = '';

  firstUpdated() {
    GetUserManagerInstance().addEventListener(UserManagerUpdatedEvent.eventName, () => this.setUserProps());
    this.setUserProps();
  }

  /**
   * Reloads profile picture from server
   */
  forceRefreshPicture() {
    this.profilePicture.refresh();
    this.popup.forceRefreshPicture();
  }

  /**
   * Sets properties based on user manager instance
   */
  setUserProps() {
    this.personId = GetUserManagerInstance().personId;
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
    div {
      display: inline-block;
      position: relative;
    }

    profile-picture {
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div
        style=${styleMap({
          height: `${this.size}px`,
          width: `${this.size}px`,
        })}
        class="popup--anchor"
      >
        <profile-picture shape="circle" .personId=${this.personId} .size=${this.size} @click=${() => this.popup.open()}></profile-picture>
        <profile-picture-menu-popup
          anchor-margin-bottom="5"
          anchor-corner="9"
          .personId=${this.personId}
          .name=${this.name}
          .email=${this.email}
          .company=${this.company}
        ></profile-picture-menu-popup>
      </div>
    `;
  }
}
