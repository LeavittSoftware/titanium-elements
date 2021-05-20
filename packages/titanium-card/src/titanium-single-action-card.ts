﻿import { customElement, html, property, css, LitElement, query } from 'lit-element';
import { TitaniumCardElement } from './titanium-card';
import '@material/mwc-ripple';
import { ifDefined } from 'lit-html/directives/if-defined';
import { Ripple } from '@material/mwc-ripple';

/**
 * A card with a built-in button on the bottom
 *
 * @element titanium-single-action-card
 *
 * @fires action-click - Fired when the single action button is clicked
 *
 * @cssprop {Color} --app-border-color - Card border color
 * @cssprop {Color} --app-link-color - Link text color
 */

@customElement('titanium-single-action-card')
export class TitaniumSingleActionCardElement extends LitElement {
  @property({ type: String }) buttonTitle: string;

  /**
   * Disables the button on the card.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-action' }) disableAction: boolean = false;

  @query('mwc-ripple') private ripple: Ripple;

  static styles = css`
    ${TitaniumCardElement.styles} :host {
      display: flex;
      flex-direction: column;

      border: 1px solid var(--app-border-color, #dadce0);
      border-radius: 8px;
      background-color: #fff;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      --mdc-theme-primary: var(--app-primary-color, #3b95ff);
    }

    a {
      display: block;
      border-top: 1px solid var(--app-border-color, #dadce0);
      color: var(--app-link-color, #1a73e8);
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      padding: 17px 24px 18px 24px;
      letter-spacing: 0.2px;
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */
      text-decoration: none;
      outline: none;
      position: relative;

      border-radius: 0 0 8px 8px;
    }

    a:hover {
      background-color: none;
    }

    mwc-ripple {
      overflow: hidden;
    }

    :host([disable-action]) a {
      pointer-events: none;
      color: rgba(0, 0, 0, 0.37);
    }
  `;

  getHref(disabled: boolean, title: string) {
    return disabled ? undefined : title ? `#${title}` : '#';
  }

  render() {
    return html`
      <slot></slot>
      <a
        title=${this.buttonTitle}
        href=${ifDefined(this.getHref(this.disableAction, this.buttonTitle))}
        @mouseenter=${() => this.ripple.startHover()}
        @mouseleave=${() => this.ripple.endHover()}
        @focus=${() => this.ripple.startFocus()}
        @blur=${() => this.ripple.endFocus()}
        @mousedown=${e => this.ripple.startPress(e)}
        @mouseup=${() => this.ripple.endPress()}
        @keydown=${e => (e.which === 32 ? this.ripple.startPress() : '')}
        @keyup=${() => this.ripple.endPress()}
        @click=${(e: Event) => {
          e.preventDefault();
          if (!this.disableAction) {
            this.dispatchEvent(new Event('action-click'));
          }
        }}
      >
        ${this.buttonTitle}
        <mwc-ripple></mwc-ripple>
      </a>
    `;
  }
}
