import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-side-menu-item')
export class TitaniumSideMenuItemElement extends LitElement {
  @property({ type: Boolean, reflect: true }) selected: boolean;
  @property({ type: Boolean, reflect: true }) disabled: boolean;
  @property({ type: String }) href: string;

  static styles = css`
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Metropolis, Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: 24px;
      letter-spacing: 0.35px;
      padding: 10px 16px 10px 24px;
      border-radius: 0 50px 50px 0;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: var(--app-menu-text-color, #3c4043);
      fill: var(--app-menu-text-color, #3c4043);
      transition: background 75ms;
    }

    a:hover {
      background-color: var(--app-hover-color, #f9f9f9);
    }

    a ::slotted(svg) {
      margin-right: 16px;
      height: 24px;
      width: 24px;
    }

    a:active {
      background-color: var(--titanium-side-menu-item-active-background-color, #d6d6d6);
    }

    :host([selected]) a {
      background: var(--titanium-side-menu-item-selected-background-color, #e8f0fe);
      color: var(--titanium-side-menu-item-selected-color, #1967d2);
      fill: var(--titanium-side-menu-item-selected-color, #1967d2);
    }

    :host([disabled]:not([selected])) a {
      color: rgba(0, 0, 0, 0.37);
      cursor: default;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <a href=${this.href}><slot></slot></a>
    `;
  }
}
