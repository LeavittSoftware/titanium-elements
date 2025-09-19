import { css, LitElement, PropertyValues } from 'lit';
import { literal, html } from 'lit/static-html.js';
import { customElement, property, query } from 'lit/decorators.js';

import '@material/web/button/outlined-button';
import '@material/web/button/filled-button';

/**
 * Titanium Show Hide
 *
 * @element titanium-show-hide
 *
 * @slot - main slot for content. Please note that component is assuming that the slotted content is not deeply nested.
 * Please place your items directly in the titanium-show-hide element default slot for this component to function properly.
 *
 * @slot [button] - slot for button to show/hide content. If you do not provide a button slot the component will create a default button.
 *
 * @cssprop [--titanium-show-hide-flex-direction=column] - flex direction for the parent of the slotted in content
 * @cssprop [--titanium-show-hide-flex-wrap=wrap] - flex wrap for the parent of the slotted in content
 * @cssprop [--titanium-show-hide-gap=8px] - flex direction of the for the parent of the slotted in content
 */
@customElement('titanium-show-hide')
export default class TitaniumShowHide extends LitElement {
  /**
   * This will be the height of the content you want visible when collapsed.
   * An example would be if you have a list of items where each item is 20px in height
   * and you want to show only the first 2 items pass in 48px (height of 2 items + gap).
   */
  @property({ type: Number, attribute: 'collapse-height' }) accessor collapseHeight: number = 120;
  @property({ type: Boolean, reflect: true, attribute: 'disable-fade' }) accessor disableFade: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'collapsed' }) accessor collapsed: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'has-hidden-items' }) protected accessor hasHiddenItems: boolean = false;
  @property({ type: Number }) accessor hiddenItemCount: number = 0;
  /**
   * Swaps out outlined button for a filled button when true
   */
  @property({ type: Boolean, attribute: 'filled' }) accessor filled: boolean = false;

  @query('items-container') protected accessor itemsContainer: HTMLElement;
  @query('collapsed-box') protected accessor collapsedContainer: HTMLElement;

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('collapsed')) {
      this.dispatchEvent(new Event('collapsed-changed'));
    }

    if (changedProps.has('hiddenItemCount')) {
      this.dispatchEvent(new Event('hidden-item-count-changed'));
    }
  }

  firstUpdated() {
    const resizeObserver = new ResizeObserver(() => {
      // Look at the reserved space in the container and see how many items we can show without exceeding the collapse height.
      // We then display the count of the remaining hidden items on the button
      const items = (this.itemsContainer.children?.[0] as HTMLSlotElement)?.assignedElements();
      this.hiddenItemCount = items.filter((o) => !this.#isWithin(this.collapsedContainer, o)).length;
      this.hasHiddenItems = !!this.hiddenItemCount;
    });

    resizeObserver.observe(this.itemsContainer);
  }

  #isWithin(container: Element, element: Element) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    return (
      elementRect.top >= containerRect.top &&
      elementRect.bottom <= containerRect.top + this.collapseHeight &&
      elementRect.left >= containerRect.left &&
      elementRect.right <= containerRect.right
    );
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      items-container,
      collapsed-box {
        display: block;
      }

      :host([collapsed]) collapsed-box {
        overflow: hidden;
      }

      :host([collapsed][has-hidden-items]:not([disable-fade])) collapsed-box {
        -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      }

      items-container {
        display: flex;
        flex-direction: var(--titanium-show-hide-flex-direction, column);
        flex-wrap: var(--titanium-show-hide-flex-wrap, wrap);
        gap: var(--titanium-show-hide-gap, 8px);
      }

      md-outlined-button,
      md-filled-button {
        max-width: 160px;
        width: 100%;
        margin-top: 12px;
        align-self: center;
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <style>
        :host([collapsed]) collapsed-box {
          max-height: ${this.collapseHeight}px;
        }
      </style>
      <collapsed-box>
        <items-container part="items-container">
          <slot></slot>
        </items-container>
      </collapsed-box>
      <slot name="button" @click=${() => (this.collapsed = !this.collapsed)} ?hidden=${!this.hasHiddenItems}>
        <${this.filled ? literal`md-filled-button` : literal`md-outlined-button`} part="button">
          ${this.collapsed ? `Show more (${this.hiddenItemCount})` : 'Show less'}
        </${this.filled ? literal`md-filled-button` : literal`md-outlined-button`}>
      </slot>
    `;
    /* eslint-enable lit/binding-positions, lit/no-invalid-html */
  }
}
