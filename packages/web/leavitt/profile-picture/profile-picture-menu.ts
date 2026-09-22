import './profile-picture';
import '@material/web/menu/menu';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/text-button';
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/button/filled-button';

import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { MdMenu } from '@material/web/menu/menu';
import { PropertyValues } from 'lit';
import { AuthZeroLgUserManager } from '../user-manager/auth-zero-lg-user-manager';
import { ellipsis } from '../../titanium/styles/styles';

/**
 * Profile picture menu for the Leavitt Group
 *
 * @element profile-picture-menu
 *
 */
@customElement('profile-picture-menu')
export class ProfilePictureMenu extends LitElement {
  @property({ type: Object }) accessor userManager: AuthZeroLgUserManager | null = null;

  /**
   * Size in pixels of profile picture button
   */
  @property({ type: Number }) accessor size: number = 40;

  @property({ type: String }) accessor profilePictureFileName: string | null = null;

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

  @query('md-menu') private accessor menu!: MdMenu;

  @property() positioning: 'absolute' | 'fixed' | 'document' | 'popover' = 'popover';

  firstUpdated() {
    const userManager = this.#getUserManager();

    if (userManager instanceof AuthZeroLgUserManager) {
      userManager.onIdentityUpdated(() => {
        this.personId = userManager.identity?.coreid ?? 0;
        this.profilePictureFileName = userManager.identity?.profilePictureFileName ?? null;
        this.email = userManager.identity?.email ?? '';
        this.company = userManager.identity?.companyName ?? '';
        this.name = userManager.identity?.name ?? '';
      });

      this.personId = userManager.identity?.coreid ?? 0;
      this.profilePictureFileName = userManager.identity?.profilePictureFileName ?? null;
      this.email = userManager.identity?.email ?? '';
      this.company = userManager.identity?.companyName ?? '';
      this.name = userManager.identity?.name ?? '';
    }
  }

  #getUserManager() {
    return this.userManager;
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has('size') && changed.get('size') !== this.size) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
    }

    if (changed.has('positioning') && this.positioning === 'popover' && !this.showPopover) {
      this.positioning = 'fixed';
    }
  }

  static styles = [
    ellipsis,
    css`
      :host {
        display: block;
        position: relative;
      }

      md-menu {
        --md-menu-container-shape: 28px;
        --md-menu-container-color: var(--md-sys-color-surface-container);
        --md-menu-top-space: 0;
        --md-menu-bottom-space: 0;

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      md-menu main {
        display: block;
        width: 360px;
        max-width: 100%;
        container: profile-menu / inline-size;
      }

      md-menu menu-content {
        display: grid;
        gap: 8px;
        padding: 8px 12px 12px;
      }

      md-menu header {
        display: grid;
        justify-content: end;
      }

      md-menu section[identity] {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        padding: 16px;
        border-radius: 24px;
        background: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface);
      }

      md-menu section[identity] div {
        display: grid;
        min-width: 0;
      }

      md-menu h1 {
        font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        margin: 0;
      }

      md-menu h2 {
        font-family: Roboto, 'Noto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: var(--md-sys-color-on-surface-variant);
        margin: 0;
      }

      md-menu h2[company] {
        opacity: 0.8;
        margin-bottom: 2px;
      }

      md-menu slot-container {
        display: contents;
      }

      md-menu nav[actions] {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 8px;
      }

      md-menu nav[actions] md-filled-button {
        --md-filled-button-container-height: 48px;
        --md-filled-button-container-color: var(--md-sys-color-surface-container-high);
        --md-filled-button-container-elevation: 0;
        --md-filled-button-hover-container-elevation: 0;
        --md-filled-button-focus-container-elevation: 0;
        --md-filled-button-pressed-container-elevation: 0;
        --md-filled-button-label-text-color: var(--md-sys-color-on-surface);
        --md-filled-button-hover-label-text-color: var(--md-sys-color-on-surface);
        --md-filled-button-focus-label-text-color: var(--md-sys-color-on-surface);
        --md-filled-button-pressed-label-text-color: var(--md-sys-color-on-surface);
        --md-filled-button-icon-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-hover-icon-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-focus-icon-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-pressed-icon-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-hover-state-layer-color: var(--md-sys-color-on-surface);
        --md-filled-button-pressed-state-layer-color: var(--md-sys-color-on-surface);
      }

      @container profile-menu (max-width: 320px) {
        md-menu menu-content {
          padding: 4px 8px 8px;
        }

        md-menu section[identity] {
          gap: 12px;
          padding: 12px;
        }

        md-menu h1 {
          font-size: 16px;
        }
      }

      md-filled-tonal-button {
        --md-filled-tonal-button-container-height: 48px;
      }

      md-menu footer {
        display: grid;
        justify-content: center;
        margin-top: 8px;
      }

      md-menu footer md-text-button {
        --md-text-button-container-height: 32px;
        --md-text-button-label-text-size: 13px;
        --md-text-button-label-text-weight: 500;
        --md-text-button-label-text-color: var(--md-sys-color-on-surface-variant);
        --md-text-button-hover-label-text-color: var(--md-sys-color-on-surface);
        --md-text-button-focus-label-text-color: var(--md-sys-color-on-surface);
        --md-text-button-pressed-label-text-color: var(--md-sys-color-on-surface);
      }
    `,
  ];

  render() {
    return html`
      <md-icon-button
        id="icon-button"
        @click=${() => {
          if (this.personId) {
            this.menu.open = !this.menu.open;
          } else {
            this.userManager?.authenticate();
          }
        }}
        style=${styleMap({
          height: `${this.size}px`,
          width: `${this.size}px`,
        })}
      >
        <profile-picture shape="circle" .fileName=${this.profilePictureFileName} .size=${this.size}></profile-picture>
      </md-icon-button>
      <md-menu y-offset="4" anchor="icon-button" menu-corner="start-end" anchor-corner="end-end" .positioning=${this.positioning}>
        <main>
          <menu-content>
            <header>
              <md-icon-button aria-label="Close" @click=${() => (this.menu.open = false)}><md-icon>close</md-icon></md-icon-button>
            </header>
            <section identity>
              <profile-picture shape="circle" .fileName=${this.profilePictureFileName} size="64"></profile-picture>
              <div>
                <h1 ellipsis>${this.name}</h1>
                ${this.company ? html`<h2 ellipsis company>${this.company}</h2>` : ''}
                <h2 ellipsis title=${this.email}>${this.email}</h2>
              </div>
            </section>
            <slot-container>
              <slot name="content"></slot>
            </slot-container>
            <nav actions>
              <md-filled-button href="https://accounts.leavitt.com/your-apps" target="_blank" title="Browse Leavitt applications"
                ><md-icon slot="icon">apps</md-icon>Leavitt apps</md-filled-button
              >
              <md-filled-button href="https://accounts.leavitt.com/" target="_blank" title="Account settings"
                ><md-icon slot="icon">manage_accounts</md-icon>Settings</md-filled-button
              >
            </nav>
            <md-filled-tonal-button @click=${() => this.userManager?.logout()}><md-icon slot="icon">logout</md-icon>Sign out</md-filled-tonal-button>
            <footer>
              <md-text-button @click=${() => this.userManager?.refreshPermissions()}>Refresh permissions</md-text-button>
            </footer>
          </menu-content>
        </main>
      </md-menu>
    `;
  }
}
