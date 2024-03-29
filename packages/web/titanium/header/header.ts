import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

import { h1, h3 } from '../../titanium/styles/styles';
import { css, html, LitElement, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * A pre-styled page header with sub header and optional back button.
 *
 * @element titanium-header
 *
 * @fires titanium-header-back-click - Fired when the back button is clicked
 *
 * @cssprop {Color} [--md-sys-color-on-background] - Header text color
 * @cssprop {Color} [--md-sys-color-on-surface-variant] - Sub-header text color
 */
@customElement('titanium-header')
export class TitaniumHeader extends LitElement {
  /**
   * Header text
   */
  @property({ type: String }) accessor header: string;

  /**
   * Sub-header text
   */
  @property({ type: String }) accessor subHeader: string;

  /**
   * Leading header icon
   */
  @property({ type: String }) accessor icon: string;

  /**
   *  Removes the back button
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-nav' }) accessor noNav: boolean = false;

  /**
   *  Lets user override back button behavior
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-default-back-button-behavior' }) accessor disableDefaultBackButtonBehavior: boolean = false;

  #handleBackClick() {
    if (this.disableDefaultBackButtonBehavior) {
      this.dispatchEvent(new CustomEvent('titanium-header-back-click', { composed: true }));
    } else {
      window.history.back();
    }
  }

  static styles = [
    h1,
    h3,
    css`
      :host {
        display: flex;
        flex-direction: column;
        -webkit-font-smoothing: antialiased;
        padding: 0 52px 8px 52px;
        position: relative;
      }

      :host([no-nav]) md-icon-button {
        display: none;
      }

      :host([no-nav]) {
        padding: 0 0 8px 0;
      }

      header {
        display: block;
        text-align: center;
        padding: 0 0 8px 0;
      }

      h1 {
        display: inline;
        font-size: 40px;
        line-height: 42px;
        font-weight: 200;

        margin: 0;
        color: var(--md-sys-color-on-background);
      }

      h3 {
        color: var(--md-sys-color-on-surface-variant);
        font-family: Metropolis, Roboto, Noto, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }

      md-icon[header-icon] {
        display: inline;
        vertical-align: text-bottom;
        font-size: 40px;
        color: var(--md-sys-color-on-background);
        margin-right: 8px;
      }

      md-icon-button {
        position: absolute;
        top: 0;
        left: 0;
      }

      @media (max-width: 920px) {
        h1 {
          font-size: 30px;
          line-height: 32px;
        }

        h3 {
          font-size: 14px;
          line-height: 16px;
        }

        md-icon[header-icon] {
          font-size: 30px;
        }
      }

      :host([hidden]) {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <header part="header">
        ${this.icon ? html`<md-icon header-icon part="icon">${this.icon}</md-icon>` : nothing}
        <h1 part="h1">${this.header}</h1>
        <md-icon-button part="button" @click="${this.#handleBackClick}" large> <md-icon>arrow_back</md-icon></md-icon-button>
      </header>

      <h3 part="h3">${this.subHeader}</h3>
    `;
  }
}
