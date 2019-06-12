import { customElement, html, property, css, LitElement } from 'lit-element';
import { TitaniumCardElement } from './titanium-card';
import '@material/mwc-ripple';

@customElement('titanium-single-action-card')
export class TitaniumSingleActionCardElement extends LitElement {
  @property({ type: String }) buttonTitle;

  static styles = css`
    ${TitaniumCardElement.styles}

    :host {
      display: flex;
      flex-direction: column;

      border: 1px solid var(--app-border-color, #dadce0);
      border-radius: 8px;
      background-color: #fff;

      font-family: Roboto, sans-serif;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;

      overflow: hidden;
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

      border-radius: 0 0 8px 8px;
    }

    :host([disable-action]) a {
      pointer-events: none;
      color: rgba(0, 0, 0, 0.37);
    }

    a:hover {
      background-color: var(--app-hover-color, #f9f9f9);
      transition: 0.3s ease;
    }
  `;

  render() {
    return html`
      <slot></slot>
      <a
        title=${this.buttonTitle}
        href=${this.buttonTitle}
        @click=${(e: Event) => {
          e.preventDefault();
          this.dispatchEvent(new Event('action-click'));
        }}
      >
        ${this.buttonTitle}
        <mwc-ripple></mwc-ripple>
      </a>
    `;
  }
}
