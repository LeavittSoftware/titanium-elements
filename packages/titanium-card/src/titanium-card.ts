import { css, customElement, html, LitElement, property } from 'lit-element';
/**
 * A card with h1,h2,h3 and p styles on-board
 *
 * @element titanium-card
 *
 * @cssprop {Color} --app-border-color - Card border color
 *
 * @slot - Card content
 */
@customElement('titanium-card')
export class TitaniumCardElement extends LitElement {
  @property({ type: String, reflect: true }) elevation: 'high' | undefined;
  @property({ type: Boolean, reflect: true, attribute: 'has-settings' }) hasSettings: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-image' }) hasImage: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-navigation' }) hasNavigation: boolean;

  static styles = [
    css`
      :host {
        display: grid;
        padding: 24px;
        gap: 8px 12px;
        grid:
          'title' auto
          'body' 1fr;
        border: 1px solid var(--app-border-color, #dadce0);
        border-radius: 8px;
        background-color: #fff;
      }

      :host([has-settings]) {
        grid: 'title settings' auto 'body body' 1fr / 1fr auto;
      }

      :host([has-navigation]) {
        grid:
          'title' auto
          'body' 1fr
          'navigation' auto;
      }

      :host([has-image]) {
        grid:
          'body image' auto
          'body image' 1fr / 1fr auto;
      }

      :host([has-settings][has-navigation]) {
        grid: 'title settings' auto 'body body' 1fr 'navigation navigation' auto / 1fr auto;
      }

      ::slotted([card-settings]) {
        margin: -12px -12px -12px 0;
        color: var(--app-text-color, #5f6368);
      }

      ::slotted([card-title]) {
        grid-area: title;
      }

      ::slotted([card-body]) {
        grid-area: body;
      }

      ::slotted([card-image]) {
        grid-area: image;
      }

      ::slotted([card-navigation]) {
        grid-area: navigation;
        margin: 16px -12px -12px 0;
        justify-self: right;
      }

      :host([elevation='high']) {
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
      }

      @media (max-width: 400px) {
        ::slotted([card-image]) {
          display: none;
        }

        :host([has-image]) {
          grid: 'title' auto 'body' 1fr;
        }
      }
    `,
  ];

  render() {
    return html` <slot></slot> `;
  }
}
