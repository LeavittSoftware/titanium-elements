﻿import './profile-picture';
import '@leavittsoftware/titanium-button';

import { GetUserManagerInstance } from '@leavittsoftware/user-manager';
import { UserManagerUpdatedEvent } from '@leavittsoftware/user-manager/lib/user-manager-events';
import { css, customElement, html, LitElement, property } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

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
   * Full name of user
   */
  @property({ type: String }) name: string = '';

  @property({ type: Boolean, reflect: true }) protected opened: boolean = false;
  @property({ type: Boolean, reflect: true }) protected opening: boolean = false;
  @property({ type: Boolean, reflect: true }) protected closing: boolean = false;

  private _animationTimer: number;
  private _animationFrame: number;

  firstUpdated() {
    GetUserManagerInstance().addEventListener(UserManagerUpdatedEvent.eventName, () => this.setUserProps());
    this.setUserProps();
  }

  setUserProps() {
    this.personId = GetUserManagerInstance().personId;
    this.email = GetUserManagerInstance().email;
    this.name = GetUserManagerInstance().fullname;
  }

  updated(changedProps) {
    if (changedProps.has('size') && changedProps.get('size') !== this.size) {
      this.style.width = this.size + 'px';
      this.style.height = this.size + 'px';
    }
  }

  _toggleOverlay() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.personId) {
      return;
    }

    this.closing = false;
    this.opened = false;
    this.opening = true;

    this.runNextAnimationFrame_(() => {
      this.opened = true;
      this._animationTimer = window.setTimeout(() => {
        this.handleAnimationTimerEnd_();
      }, 150);
    });
  }

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */
  private runNextAnimationFrame_(callback: () => void) {
    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = requestAnimationFrame(() => {
      this._animationFrame = 0;
      clearTimeout(this._animationFrame);
      this._animationFrame = window.setTimeout(callback, 0);
    });
  }

  close() {
    if (!this.opened) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    clearTimeout(this._animationTimer);
    this._animationTimer = window.setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);
  }

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  protected _calcOverlayPosition(size: number) {
    return { top: `${(Number(size) || 40) + 8}px` };
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    paper-dialog {
      min-width: 305px;
      margin: 2px 0 0 0;
    }

    overlay-menu {
      position: absolute;
      z-index: 9;

      display: none;
      flex-direction: column;

      width: 300px;
      border-radius: 4px;
      background-color: #fff;
      -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);

      right: 0;

      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
    }

    :host([opening]) overlay-menu,
    :host([opened]) overlay-menu,
    :host([closing]) overlay-menu {
      display: flex;
    }

    :host([closing]) overlay-menu {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: opacity 75ms linear;
      -o-transition: opacity 75ms linear;
      transition: opacity 75ms linear;
    }

    :host([opened]) overlay-menu {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    :host([opening]) overlay-menu {
      -webkit-transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      -o-transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
      transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    }

    profile-picture[main] {
      -webkit-user-select: none; /* Chrome all / Safari all */
      -moz-user-select: none; /* Firefox all */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;

      cursor: pointer;
    }

    overlay-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 auto;
    }

    overlay-actions {
      display: flex;
      flex-direction: row;
      padding: 8px;
      justify-content: flex-end;
      border-top: 1px solid var(--app-border-color, #dadce0);
    }

    overlay-content profile-picture {
      margin: 24px 24px 20px;
    }

    overlay-title {
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

    overlay-subtitle {
      display: flex;
      color: var(--app-text-color, #5f6368);
      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
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
    }

    [unresolved] {
      display: none;
    }

    click-trap {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.01;
      z-index: 8;
    }
  `;

  render() {
    return html`
      <profile-picture main shape="circle" .personId=${this.personId} .size=${this.size} @click=${() => this._toggleOverlay()}></profile-picture>
      <click-trap ?hidden=${!this.opened} @click=${() => this.close()}></click-trap>
      <overlay-menu style=${styleMap(this._calcOverlayPosition(this.size))} tabindex="-1">
        <overlay-content @mousedown=${(e: Event) => e.preventDefault()}>
          <profile-picture shape="circle" .personId=${this.personId} size="90"></profile-picture>
          <overlay-title>${this.name}</overlay-title>
          <overlay-subtitle>${this.email}</overlay-subtitle>
          <slot-container>
            <slot name="content"></slot>
          </slot-container>
          <titanium-button outlined account @click=${() => window.open('https://accounts.leavitt.com/', '_blank')}>My Leavitt Group Account</titanium-button>
        </overlay-content>
        <overlay-actions>
          <titanium-button @click=${() => this.close()}>CLOSE</titanium-button>
          <titanium-button @click=${() => GetUserManagerInstance().logout()}>LOGOUT</titanium-button>
        </overlay-actions>
      </overlay-menu>
    `;
  }
}
