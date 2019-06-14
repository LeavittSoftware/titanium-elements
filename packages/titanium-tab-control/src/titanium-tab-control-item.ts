import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-tab-control-item')
export class TitaniumTabControlItemElement extends LitElement {
  @property({ type: String }) href: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean;
  @property({ type: Boolean, reflect: true }) selected: boolean;

  updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('selected') && this.selected) this.dispatchEvent(new CustomEvent('selected', { detail: this }));
  }

  static styles = css`
    :host {
      display: block;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: 24px;
      letter-spacing: 0.35px;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      color: var(--app-menu-text-color, #3c4043);
      fill: var(--app-menu-text-color, #3c4043);
      transition: background 75ms;
      white-space: nowrap;
      padding: 0 24px;
    }

    @media (max-width: 468px) {
      a {
        padding: 0 16px;
      }
    }

    a:hover,
    :host([selected]) a {
      color: var(--app-link-color, #3b95ff);
    }

    selection-marker {
      padding: 12px 0;
    }

    :host([selected]) selection-marker {
      border-bottom: 3px solid var(--app-link-color, #3b95ff);
      padding-bottom: 9px;
    }

    :host([disabled]:not([selected])) a {
      color: rgba(0, 0, 0, 0.37);
      cursor: default;
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <a href=${this.href}>
        <selection-marker><slot></slot></selection-marker>
      </a>
    `;
  }
}
