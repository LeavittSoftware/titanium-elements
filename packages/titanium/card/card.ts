import '@material/web/elevation/elevation';

import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * A material card filled or outlined
 *
 * @element titanium-card
 *
 * @cssprop {Number} [--md-elevation-level: 0] - Use md elevation to set elevation levels
 * @cssprop {Color} [--md-elevation-shadow-color: --md-sys-color-shadow] - Use md elevation to set elevation levels
 * @cssprop {Color} [--md-sys-color-outline-variant] - Card border color
 *
 * @slot Default - Card content
 */
@customElement('titanium-card')
export class TitaniumCard extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'has-menu' }) hasMenu: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-image' }) hasImage: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'has-footer' }) hasFooter: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'primary' }) primary: boolean;
  @property({ type: Boolean, reflect: true, attribute: 'surface' }) surface: boolean;

  static styles = [
    css`
      :host {
        display: grid;
        padding: 24px;
        gap: 8px 12px;
        grid:
          'title' auto
          'body' 1fr;
        border-radius: 12px;
        position: relative;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      :host([primary]) {
        border: none;
        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);
      }

      :host([surface]) {
        border: none;
        background-color: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
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
    return html`<md-elevation></md-elevation> <slot></slot> `;
  }
}
