import '@material/mwc-icon-button';
import { h1, h3 } from '@leavittsoftware/titanium-styles';

import { css, html, LitElement } from 'lit';
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
   *  Removes the back button
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-nav' }) noNav: boolean = false;

  private _handleBackClick() {
    this.dispatchEvent(new CustomEvent('titanium-header-back-click', { composed: true }));
  }

  static styles = [
    h1,
    h3,
    css`
      :host {
        display: block;
        -webkit-font-smoothing: antialiased;
        text-align: center;
      }

      :host([no-nav]) h1 {
        padding: 0 0 8px 0;
      }

      :host([no-nav]) mwc-icon-button {
        display: none;
      }

      :host([hidden]) {
        display: none;
      }

      h1 {
        font-size: 40px;
        line-height: 42px;
        font-weight: 200;

        padding: 0 52px 8px 52px;
        position: relative;
        color: var(--app-dark-text-color, #202124);
      }

      h3 {
        color: var(--app-text-color, #5f6368);
        font-family: Metropolis, Roboto, Noto, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
      }

      mwc-icon-button {
        position: absolute;
        top: -11px;
        left: 0;
      }

      @media (max-width: 830px) {
        h1 {
          font-size: 30px;
          line-height: 32px;
        }

        h3 {
          font-size: 14px;
          line-height: 16px;
        }
      }
    `,
  ];

  render() {
    return html`
      <h1><mwc-icon-button icon="arrow_back" @click="${this._handleBackClick}" large></mwc-icon-button>${this.header}</h1>
      <h3>${this.subHeader}</h3>
    `;
  }
}
