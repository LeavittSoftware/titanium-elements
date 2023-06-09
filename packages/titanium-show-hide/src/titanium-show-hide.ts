import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { button } from '@leavittsoftware/titanium-styles';

import '@material/mwc-button';

/**
 * Titanium Show Hide
 *
 * @element titanium-show-hide
 *
 * @slot - main slot for content. Please note that component is assuming that the slotted content is not deeply nested.
 * Please place your items directly in the titanium-show-hide element default slot for this component to function properly.
 *
 * @cssprop [--titanium-show-hide-flex-direction=column] - flex direction for the parent of the slotted in content
 * @cssprop [--titanium-show-hide-flex-wrap=wrap] - flex wrap for the parent of the slotted in content
 * @cssprop [--titanium-show-hide-gap=8px] - flex direction of the for the parent of the slotted in content
 */
@customElement('titanium-show-hide')
export default class TitaniumShowHideElement extends LitElement {
  /**
   * This will be the height of the content you want visible when collapsed.
   * An example would be if you have a list of items where each item is 20px in height
   * and you want to show only the first 2 items pass in 48px (height of 2 items + gap).
   */
  @property({ type: Number, attribute: 'collapse-height' }) collapseHeight: number = 120;
  @property({ type: Boolean, reflect: true, attribute: 'disable-fade' }) disableFade: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'collapsed' }) collapsed: boolean = true;
  @property({ type: Boolean, reflect: true, attribute: 'has-hidden-items' }) protected hasHiddenItems: boolean = false;
  @property({ type: String }) collapsedButtonLabel: string = 'Show more';
  @property({ type: String }) expandedButtonLabel: string = 'Show less';
  @property({ type: Boolean }) showCountWithLabel: boolean = true;
  @property({ type: String }) buttonType: 'flat' | 'raised' | 'unelevated' | 'outlined' = 'outlined';

  @state() protected hiddenItemCount: number = 0;
  @query('items-container') protected itemsContainer: HTMLElement;
  @query('collapsed-box') protected collapsedContainer: HTMLElement;

  firstUpdated() {
    const resizeObserver = new ResizeObserver(() => {
      // Look at the reserved space in the container and see how many items we can show without exceeding the collapse height.
      // We then display the count of the remaining hidden items on the button
      const items = (this.itemsContainer.children?.[0] as HTMLSlotElement)?.assignedElements();
      this.hiddenItemCount = items.filter(o => !this.#isWithin(this.collapsedContainer, o)).length;
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
    button,
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

      mwc-button {
        align-self: center;
        margin-top: 12px;
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
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
      <mwc-button
        .outlined=${this.buttonType === 'outlined'}
        .raised=${this.buttonType === 'raised'}
        .unelevated=${this.buttonType === 'unelevated'}
        part="button"
        lowercase
        @click=${() => (this.collapsed = !this.collapsed)}
        ?hidden=${!this.hasHiddenItems}
      >
        ${this.collapsed ? `${this.collapsedButtonLabel} ${this.showCountWithLabel ? `(${this.hiddenItemCount})` : ''}` : this.expandedButtonLabel}</mwc-button
      >
    `;
  }
}
