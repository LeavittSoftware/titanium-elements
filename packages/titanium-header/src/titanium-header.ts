import '@leavittsoftware/titanium-svg-button';

import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * A pre-styled page header with sub header and optional back button.
 *
 * @element titanium-header
 *
 * @fires titanium-header-back-click - Fired when the back button is clicked
 *
 * @cssprop {Color} --app-dark-text-color - Header text color
 * @cssprop {Color} --app-text-color - Sub-header text color
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

  static styles = css`
    :host {
      display: block;
      padding-bottom: 24px;
      font-family: Metropolis, 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    :host([no-nav]) h1 {
      padding: 0 12px 8px 12px;
    }

    :host([no-nav]) titanium-svg-button {
      display: none;
    }

    :host([hidden]) {
      display: none;
    }

    h1 {
      display: block;
      position: relative;
      letter-spacing: -0.012em;
      line-height: 32px;
      font-size: 28px;
      font-weight: 400;
      text-align: center;
      margin: 0;
      padding: 0 52px 8px 52px;
      color: var(--app-dark-text-color, #202124);
    }

    h3 {
      font-family: 'Roboto', 'Noto', sans-serif;
      letter-spacing: -0.012em;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      text-align: center;
      margin: 0;
      padding: 0 12px;
      color: var(--app-text-color, #5f6368);
    }

    titanium-svg-button {
      position: absolute;
      top: -11px;
      left: 0;
    }
  `;

  render() {
    return html`
      <h1>
        <titanium-svg-button @click="${this._handleBackClick}" large path="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></titanium-svg-button
        >${this.header}
      </h1>
      <h3>${this.subHeader}</h3>
    `;
  }
}
