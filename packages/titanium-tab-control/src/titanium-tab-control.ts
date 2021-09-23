import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './titanium-tab-control-item';
import { TitaniumTabControlItemElement } from './titanium-tab-control-item';

@customElement('titanium-tab-control')
export class TitaniumTabControlElement extends LitElement {
  @query('menu-container') container: HTMLElement;
  @query('left-nav') leftNav: HTMLElement;
  @query('right-nav') rightNav: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._updateMenu.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._updateMenu);
  }

  firstUpdated() {
    this.addEventListener('selected', (e: CustomEvent<TitaniumTabControlItemElement>) => {
      this.container.scrollLeft = e.detail.offsetLeft - (this.offsetWidth - e.detail.offsetWidth) / 2;
    });
    this.container.addEventListener('scroll', this._updateMenu.bind(this));
    this._updateMenu();
  }

  private timeoutHandle: number;
  _updateMenu() {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = window.setTimeout(() => {
      this.leftNav.style.display = this.container.scrollLeft === 0 ? 'none' : 'flex';
      this.rightNav.style.display = this.container.scrollLeft >= this.container.scrollWidth - this.container.offsetWidth ? 'none' : 'flex';
    }, 50);
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
    }

    menu-container {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid var(--app-border-color, #dadce0);
      overflow-x: scroll;
      overflow-x: -moz-scrollbars-none;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    menu-container::-webkit-scrollbar {
      display: none;
    }

    left-nav,
    right-nav {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 48px;
      padding: 8px 8px 7px 8px;
      margin-bottom: 1px;
      fill: var(--app-text-color, #5f6368);
      cursor: pointer;
    }

    left-nav:hover,
    right-nav:hover {
      fill: var(--app-link-color, #3b95ff);
    }

    right-nav {
      right: 0;
      justify-content: flex-end;
      background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%);
    }

    left-nav {
      left: 0;
      justify-content: flex-start;
      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `;

  render() {
    return html`
      <menu-container>
        <slot></slot>
      </menu-container>
      <left-nav
        @click=${() => {
          try {
            this.container.scrollBy({
              left: -100,
              behavior: 'smooth',
            });
          } catch {
            this.container.scrollLeft -= 100;
          }
        }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </left-nav>
      <right-nav
        @click=${() => {
          try {
            this.container.scrollBy({
              left: 100,
              behavior: 'smooth',
            });
          } catch {
            this.container.scrollLeft += 100;
          }
        }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </right-nav>
    `;
  }
}
