import { css, customElement, html, property, LitElement } from 'lit-element';

/**
 * A material design inspired site toolbar
 *
 * @element titanium-toolbar
 *
 * @slot - toolbar content (use main-title attribute on slotted title item)
 *
 * @cssprop {Color} --titanium-toolbar-color - Color of the toolbar background
 * @cssprop {Color} -app-text-color - main title text color
 */
@customElement('titanium-toolbar')
export class TitaniumToolbarElement extends LitElement {
  @property({ type: Boolean, reflect: true }) protected shadow: boolean;

  static styles = css`
    :host {
      display: flex;

      position: fixed;
      z-index: 2;
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
      background-color: var(--titanium-toolbar-color, #fff);
    }

    :host([shadow]) {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      transition: box-shadow 0.3s ease-in-out;
    }

    ::slotted([main-title]) {
      font-size: 22px;
      letter-spacing: 0.9px;
      color: var(--app-text-color);
    }

    [hidden] {
      display: none !important;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  disconnectedCallback() {
    document.removeEventListener('scroll', this.onScroll, false);
    super.disconnectedCallback();
  }

  onScroll() {
    this.amountScrolled();
  }

  amountScrolled() {
    const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    const docHeight = this.getDocHeight();
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100);
    this.shadow = (pctScrolled || 0) !== 0;
  }

  getDocHeight() {
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
    return html`
      <slot></slot>
    `;
  }
}
