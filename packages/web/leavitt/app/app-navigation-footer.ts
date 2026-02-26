import { LitElement, PropertyValues, css, html, nothing } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { findScrollableParent } from '../../titanium/helpers/find-scrollable-parent';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('leavitt-app-navigation-footer')
export class LeavittAppNavigationFooter extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'is-overflowed' }) private accessor isOverflowed: boolean = false;
  @property({ type: String, attribute: 'max-width' }) accessor maxWidth: string | null = '640px';
  @property({ type: Object, attribute: 'scrollable-parent' }) accessor scrollableParent: Element | null = null;

  @property({ type: Boolean, reflect: true, attribute: 'has-leading' }) private accessor hasLeading: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-trailing' }) private accessor hasTrailing: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-main' }) private accessor hasMain: boolean = false;

  @queryAssignedElements({ slot: 'leading' }) private accessor leadingElements!: Element[];
  @queryAssignedElements({ slot: 'trailing' }) private accessor trailingElements!: Element[];
  @queryAssignedElements({ slot: 'main' }) private accessor mainElements!: Element[];

  #scrollableParent: Element | null = null;
  #resizeObserver: ResizeObserver | null = null;
  async connectedCallback() {
    super.connectedCallback();

    const fallbackScrollableParent = await findScrollableParent(this);
    this.#scrollableParent = this.scrollableParent || fallbackScrollableParent;
    if (this.#scrollableParent) {
      this.#resizeObserver = new ResizeObserver(() => {
        this.#onResize();
      });
      this.#resizeObserver.observe(this.#scrollableParent);
    }
  }

  disconnectedCallback() {
    if (this.#scrollableParent) {
      this.#resizeObserver?.disconnect();
    }
    super.disconnectedCallback();
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('scrollableParent')) {
      this.#resizeObserver?.disconnect();
      const fallbackScrollableParent = await findScrollableParent(this);
      this.#scrollableParent = this.scrollableParent || fallbackScrollableParent;
      if (this.#scrollableParent) {
        this.#resizeObserver = new ResizeObserver(() => {
          this.#onResize();
        });
        this.#resizeObserver.observe(this.#scrollableParent);
      }
    }
  }

  isOverflown(element: Element) {
    return element.scrollHeight > element.clientHeight;
  }

  #onResize() {
    if (this.#scrollableParent) {
      this.isOverflowed = this.isOverflown(this.#scrollableParent);
    }
  }

  static styles = [
    css`
      :host {
        display: grid;

        position: sticky;
        bottom: 0;
        min-height: 64px;

        background-color: var(--md-sys-color-surface-container-lowest);
        z-index: 2;
      }

      :host([is-overflowed]) {
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        justify-self: center;
        padding: 12px 16px;
        width: 100%;
        box-sizing: border-box;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }

      :host([has-leading][has-main]) main,
      :host([has-main][has-trailing]) main,
      :host([has-leading][has-trailing]) main {
        gap: 16px;
      }
    `,
  ];

  render() {
    return html`
      <main part="main" style=${this.maxWidth ? styleMap({ maxWidth: this.maxWidth }) : nothing}>
        <section part="leading"><slot @slotchange=${() => (this.hasLeading = this.leadingElements.length > 0)} name="leading"></slot></section>
        <section part="main"><slot @slotchange=${() => (this.hasMain = this.mainElements.length > 0)}></slot></section>
        <section part="trailing"><slot @slotchange=${() => (this.hasTrailing = this.trailingElements.length > 0)} name="trailing"></slot></section>
      </main>
    `;
  }
}
