﻿import { css, customElement, html, LitElement, property } from 'lit-element';
import '@material/mwc-ripple';

@customElement('titanium-card-list-item')
export class TitaniumCardListItemElement extends LitElement {
  @property({ type: String }) title = '';

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: var(--app-text-color, #5f6368);
      border-bottom: 1px solid var(--app-border-color, #dadce0);
      margin-left: 24px;

      cursor: pointer;

      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */

      padding: 16px 24px 16px 0;

      display: flex;
      flex-direction: column;
      text-decoration: none;
    }

    a:focus,
    :host(:hover:not([disabled])) a {
      margin-left: 0;
      padding-left: 24px;
      background-color: var(--app-hover-color, #f9f9f9);
    }

    :host([disabled]) a {
      pointer-events: none;
      color: rgba(0, 0, 0, 0.37);
    }

    :host(:last-of-type) a {
      border-bottom: none;
    }
  `;

  slottedContent() {
    return html`
      <slot></slot>
    `;
  }

  render() {
    return html`
      <a
        title=${this.title}
        href=${this.title}
        @click=${(e: Event) => {
          e.preventDefault();
          this.dispatchEvent(new Event('item-click'));
        }}
      >
        ${this.slottedContent()}
        <mwc-ripple></mwc-ripple>
      </a>
    `;
  }
}
