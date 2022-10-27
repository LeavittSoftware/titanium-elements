﻿import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A list item for use inside a titanium-card
 *
 * @element titanium-card-list-item
 *
 * @fires item-click - Fired when the item is clicked
 *
 * @cssprop {Color} [--app-border-color=#dadce0] - Border color
 * @cssprop {Color} [--app-dark-text-color=#202124] - Link text color
 *
 * @slot default - Item content (text)
 */
@customElement('titanium-card-list-item')
export class TitaniumCardListItemElement extends LitElement {
  /**
   * sets html title attribute on inner &lt;a&gt;
   */
  @property({ type: String }) title: string;

  /**
   * Disables element.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled' }) disabled: boolean = false;

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;

        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        transition: background 0.4s;
        background-position: center;
      }

      :host(:focus:not([disabled])),
      :host(:hover:not([disabled])) {
        background-color: var(--app-hover-color, #f9f9f9);
      }

      :host(:active:not([disabled])) {
        background-color: var(--app-active-color, #eee);
      }

      a {
        color: var(--app-dark-text-color, #202124);
        border-top: 1px solid var(--app-border-color, #dadce0);
        border-bottom: 1px solid var(--app-border-color, #dadce0);
        margin-top: -1px;
        margin-left: 24px;

        cursor: pointer;

        -webkit-user-select: none; /* Safari 3.1+ */
        -moz-user-select: none; /* Firefox 2+ */
        -ms-user-select: none; /* IE 10+ */
        user-select: none; /* Standard syntax */
        outline: none;

        padding: 16px 24px 16px 0;

        display: flex;
        flex-direction: row;
        text-decoration: none;

        align-items: center;
        position: relative;
      }

      ::slotted([spacer]) {
        flex: 1 1 auto;
      }

      a:focus,
      :host(:hover:not([disabled])) a {
        margin-left: 0;
        padding-left: 24px;
      }

      :host([disabled]) a {
        pointer-events: none;
        color: rgba(0, 0, 0, 0.37);
      }

      :host(:first-of-type) a {
        border-top: none;
        margin-top: 0;
      }

      :host(:last-of-type) a {
        border-bottom: none;
      }
    `,
  ];

  /**
   * @ignore
   */
  slottedContent() {
    return html` <slot></slot> `;
  }

  render() {
    return html`
      <a
        draggable="false"
        title=${ifDefined(this.title)}
        href=${this.title}
        @click=${(e: Event) => {
          e.preventDefault();
          this.dispatchEvent(new Event('item-click'));
        }}
      >
        ${this.slottedContent()}
      </a>
    `;
  }
}
