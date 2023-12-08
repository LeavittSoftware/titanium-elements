import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@material/web/elevation/elevation';

/**
 * A material design inspired site toolbar
 *
 * @element titanium-toolbar
 *
 * @slot default - toolbar content (use main-title attribute on slotted title item)
 *
 * @cssprop {Color} [--md-sys-color-background] - Color of the toolbar background
 * @cssprop {Color} [--md-sys-color-on-background] - Color of the toolbar text
 */
@customElement('titanium-toolbar')
export class TitaniumToolbar extends LitElement {
  /**
   * Adds a box shadow around the toolbar
   */
  @property({ type: Boolean, reflect: true }) protected accessor shadow: boolean;

  static styles = css`
    :host {
      display: flex;

      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      flex-direction: row;
      align-items: center;

      height: 48px;
      padding: 0 14px;
      background-color: var(--md-sys-color-background);
      color: var(--md-sys-color-on-background);

      --md-elevation-level: 0;
    }

    :host([shadow]) {
      --md-elevation-level: 3;
    }

    ::slotted([main-title]) {
      font-size: 22px;
      letter-spacing: 0.9px;
      color: var(--md-sys-color-on-background);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0px;
      font-weight: 400;
    }

    [hidden] {
      display: none !important;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', this.#onScroll.bind(this), false);
  }

  disconnectedCallback() {
    document.removeEventListener('scroll', this.#onScroll, false);
    super.disconnectedCallback();
  }

  #onScroll() {
    this.#amountScrolled();
  }

  #amountScrolled() {
    const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    const docHeight = this.#getDocHeight();
    const scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100);
    this.shadow = (pctScrolled || 0) !== 0;
  }

  #getDocHeight() {
    const D = document;
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    );
  }

  render() {
    return html` <md-elevation></md-elevation><slot></slot>`;
  }
}
