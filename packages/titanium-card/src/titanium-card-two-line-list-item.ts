import { css, customElement, html } from 'lit-element';
import { TitaniumCardListItemElement } from './titanium-card-list-item';

/**
 * A styled list item with image, title and sub header text styles for use in titanium-card.
 *
 * @element titanium-card-two-line-list-item
 *
 * @fires item-click - Fired when the item is clicked
 *
 * @cssprop {Color} --app-border-color - Border color
 * @cssprop {Color} --app-dark-text-color - Link & Subheader text color
 * @cssprop {Color} --app-text-color - Link, svg & header text/fill color
 *
 * @slot - Item content (text)
 */
@customElement('titanium-card-two-line-list-item')
export class TitaniumCardTwoLineListItemElement extends TitaniumCardListItemElement {
  static styles = [
    ...TitaniumCardListItemElement.styles,
    css`
      section {
        display: grid;
        grid-template-areas:
          'img title   action'
          'img subhead action';
        flex: 1 1 auto;
        grid-auto-columns: auto 1fr auto;
        gap: 4px 18px;
      }

      ::slotted(h2) {
        grid-area: title;
        letter-spacing: 0.1px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        font-weight: 400;
        color: var(--app-dark-text-color, #202124);
        margin: 0;
        padding: 0;
        align-self: end;
      }

      ::slotted(h3) {
        grid-area: subhead;
        letter-spacing: 0.2px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-weight: 400;
        color: var(--app-text-color, #5f6368);
        margin: 0;
        padding: 0;
      }

      ::slotted(img) {
        grid-area: img;
        height: 48px;
        width: 48px;
      }

      ::slotted(mwc-icon),
      ::slotted(svg) {
        grid-area: action;
        width: 24px;
        height: 24px;
        fill: var(--app-text-color, #5f6368);
        color: var(--app-text-color, #5f6368);
        align-self: center;
      }
    `,
  ];

  slottedContent() {
    return html` <section><slot></slot></section>`;
  }
}
