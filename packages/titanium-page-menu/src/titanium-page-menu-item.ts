import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('titanium-page-menu-item')
export class TitaniumPageMenuItemElement extends LitElement {
  @property({ type: String }) icon: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean;
  @property({ type: Boolean }) parentDisabled: boolean;
  @property({ type: String }) value: string;

  connectedCallback() {
    super.connectedCallback();
    if (!this.value) this.value = this.innerText;
    if (this.parentNode && this.parentNode['register']) this.parentNode['register'](this);
    this.addEventListener('click', () => {
      if (this.disabled || this.parentDisabled) return;
      this.select();
      this.dispatchEvent(new CustomEvent('selected', { composed: true, bubbles: true, detail: this }));
    });
  }

  updated(changedProps: Map<string, any>) {
    if (changedProps.has('disabled') || changedProps.has('parentDisabled')) {
      this.classList[this.disabled || this.parentDisabled ? 'add' : 'remove']('disabled');
    }
  }

  select() {
    this.classList.add('selected');
  }

  deselect() {
    this.classList.remove('selected');
  }

  static styles = css`
    :host {
      background: transparent;
      font-family: Roboto, Noto, sans-serif;
      -webkit-font-smoothing: antialiased;
      line-height: 24px;
      padding: 10px 16px 10px 24px;
      border-radius: 0 50px 50px 0;
      display: flex;
      flex-direction: row;
      cursor: pointer;
      color: var(--titanium-menu-color, #5f6368);
    }
    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      fill: var(--titanium-menu-color, #5f6368);
    }

    :host(:hover) {
      background: var(--titanium-menu-hover-background-color, rgba(0, 0, 0, 0.05));
      color: var(--titanium-menu-hover-color, #5f6368);
    }
    :host(:hover) svg {
      fill: var(--titanium-menu-hover-color, #5f6368);
    }

    :host(:active) {
      background: var(--titanium-menu-active-background-color, rgba(0, 0, 0, 0.1));
      color: var(--titanium-menu-active-color, #5f6368);
    }
    :host(:active) svg {
      fill: var(--titanium-menu-active-color, #5f6368);
    }

    :host(.selected) {
      background: var(--titanium-menu-selected-background-color, #e8f0fe);
      color: var(--titanium-menu-selected-color, #1967d2);
    }
    :host(.selected) svg {
      fill: var(--titanium-menu-selected-color, #1967d2);
    }

    :host(.disabled) {
      color: var(--titanium-menu-disabled-color, #a1a1a1);
      cursor: default;
    }
    :host(.disabled) svg {
      fill: var(--titanium-menu-disabled-color, #a1a1a1);
    }
    :host(.disabled:hover) {
      background: transparent;
    }
  `;

  render() {
    return html`
      ${this.icon ? html`<svg viewBox="0 0 24 24"><path d="${this.icon}"></svg>` : ''}
      <slot></slot>
    `;
  }
}
