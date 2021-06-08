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
  @property({ type: Boolean, reflect: true, attribute: 'has-menu' }) hasMenu: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-image' }) hasImage: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-footer' }) hasFooter: boolean;

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

      :host([has-menu]) {
        grid:
          'title menu' auto
          'body body' 1fr / 1fr auto;
      }

      :host([has-footer]) {
        grid:
          'title' auto
          'body' 1fr
          'footer' auto;
      }

      :host([has-footer][has-menu]) {
        grid:
          'title menu' min-content
          'body body' 1fr
          'footer footer' auto / 1fr auto;
      }

      :host([has-image]) {
        grid:
          'title image' min-content
          'body image' 1fr / 1fr auto;
      }

      :host([has-image][has-footer]) {
        grid:
          'title image' min-content
          'body image' 1fr
          'footer footer' auto / 1fr auto;
      }

      :host([has-image][has-footer][has-menu]) {
        grid:
          'title menu' min-content
          'body image' 1fr
          'footer footer' auto / 1fr auto;
      }

      ::slotted([card-menu]) {
        grid-area: menu;
        justify-self: right;
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

      ::slotted([full-width]) {
        margin: 0 -24px;
      }

      ::slotted([card-footer]) {
        grid-area: footer;
      }

      ::slotted([nav]) {
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

        :host([has-image][has-footer]) {
          grid:
            'title' min-content
            'body' auto
            'footer' 1fr / auto;
        }

        :host([has-image]) {
          grid:
            'title' min-content
            'body' auto / auto;
        }
      }
    `,
  ];

  render() {
    return html` <slot></slot> `;
  }
}
