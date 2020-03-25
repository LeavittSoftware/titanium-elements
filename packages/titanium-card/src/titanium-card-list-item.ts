import { css, customElement, html, LitElement, property, query } from 'lit-element';
import '@material/mwc-ripple';
import { ifDefined } from 'lit-html/directives/if-defined';
import { Ripple } from '@material/mwc-ripple';

/**
 * A list item for use inside a titanium-card
 *
 * @element titanium-card-list-item
 *
 * @fires item-click - Fired when the item is clicked
 *
 * @cssprop {Color} --app-border-color - Border color
 * @cssprop {Color} --app-dark-text-color - Link text color
 *
 * @slot - Item content (text)
 */
@customElement('titanium-card-list-item')
export class TitaniumCardListItemElement extends LitElement {
  @property({ type: String }) title: string;

  /**
   * Disables element.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled' }) disabled: boolean = false;

  @query('mwc-ripple') private ripple: Ripple;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
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
  `;

  slottedContent() {
    return html`
      <slot></slot>
    `;
  }

  render() {
    return html`
      <a
        draggable="false"
        title=${ifDefined(this.title)}
        href=${this.title}
        @click=${(e: Event) => {
          e.preventDefault();
          this.ripple.activate();
          this.dispatchEvent(new Event('item-click'));
        }}
        @mouseenter=${() => this.ripple.handleMouseEnter()}
        @mouseleave=${() => this.ripple.handleMouseLeave()}
        @focus=${() => this.ripple.handleFocus()}
        @blur=${() => this.ripple.handleBlur()}
        @mousedown=${e => this.ripple.activate(e)}
        @mouseup=${() => this.ripple.deactivate()}
        @keydown=${e => (e.which === 32 ? this.ripple.activate() : '')}
        @keyup=${() => this.ripple.deactivate()}
      >
        ${this.slottedContent()}
        <mwc-ripple></mwc-ripple>
      </a>
    `;
  }
}
