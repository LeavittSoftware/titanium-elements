import '@material/mwc-icon';
import '@material/mwc-icon-button';
import { h1, h3 } from '@leavittsoftware/titanium-styles';

import { css, html, LitElement, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * A pre-styled page header with sub header and optional back button.
 *
 * @element titanium-header
 *
 * @fires titanium-header-back-click - Fired when the back button is clicked
 *
 * @cssprop {Color} [--app-dark-text-color=#202124] - Header text color
 * @cssprop {Color} [--app-text-color=#5f6368] - Sub-header text color
 */
@customElement('titanium-header')
export class TitaniumHeader extends LitElement {
  /**
   * Header text
   */
  @property({ type: String }) header: string;

  /**
   * Sub-header text
   */
  @property({ type: String }) subHeader: string;

  /**
   * Leading header icon
   */
  @property({ type: String }) icon: string;

  /**
   *  Removes the back button
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-nav' }) noNav: boolean = false;

  /**
   *  Lets user override back button behavior
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-default-back-button-behavior' }) disableDefaultBackButtonBehavior: boolean = false;

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

      :host([no-nav]) mwc-icon-button {
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
        color: var(--app-dark-text-color, #202124);
      }

      h3 {
        color: var(--app-text-color, #5f6368);
        font-family: Metropolis, Roboto, Noto, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }

      mwc-icon {
        display: inline;
        vertical-align: text-bottom;
        --mdc-icon-size: var(--titanium-header-icon-size, 40px);
        color: var(--app-dark-text-color, #202124);
        margin-right: 8px;
      }

      mwc-icon-button {
        position: absolute;
        top: -3px;
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

        mwc-icon {
          --mdc-icon-size: var(--titanium-header-icon-size, 30px);
        }

        mwc-icon-button {
          top: -9px;
        }
      }

      :host([hidden]) {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <header>
        ${this.icon ? html`<mwc-icon>${this.icon}</mwc-icon>` : nothing}
        <h1>${this.header}</h1>
        <mwc-icon-button icon="arrow_back" @click="${this.#handleBackClick}" large></mwc-icon-button>
      </header>

      <h3>${this.subHeader}</h3>
    `;
  }
}
