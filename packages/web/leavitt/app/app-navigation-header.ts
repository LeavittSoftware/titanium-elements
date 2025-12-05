import '@material/web/icon/icon';

import { LitElement, PropertyValues, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ellipsis, h1 } from '@leavittsoftware/web/titanium/styles/styles';
import { findScrollableParent } from '../../titanium/helpers/find-scrollable-parent';

@customElement('leavitt-app-navigation-header')
export class LeavittAppNavigationHeader extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'sticky-top' }) accessor stickyTop: boolean = false;
  @property({ type: Object, attribute: 'scrollable-parent' }) accessor scrollableParent: Element | null = null;

  @property({ type: String }) accessor level1Text: string | null;
  @property({ type: String }) accessor level1Href: string | null;

  @property({ type: String }) accessor level2Text: string | null;
  @property({ type: String }) accessor level2Href: string | null;

  @property({ type: String }) accessor level3Text: string | null;
  @property({ type: String }) accessor level3Href: string | null;

  @property({ type: String }) accessor level4Text: string | null;
  @property({ type: String }) accessor level4Href: string | null;

  @property({ type: Boolean, reflect: true, attribute: 'is-scrolled' }) private accessor isScrolled: boolean = false;
  #scrollableParent: Element | null = null;

  static styles = [
    h1,
    ellipsis,
    css`
      :host {
        display: grid;
        grid:
          'main gap trailing'
          'footer footer footer'
          / auto 1fr auto;
        align-items: start;

        min-height: 64px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
        z-index: 2;

        position: relative;
      }

      :host([is-scrolled][sticky-top]) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      :host([sticky-top]) {
        position: sticky;
        top: 0;
      }

      :host(:not([sticky-top])) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      aside {
        grid-area: trailing;
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
        padding: 8px 16px 0 0;
      }

      footer {
        display: grid;
        grid-area: footer;
      }

      main {
        grid-area: main;
        display: flex;
        flex-direction: row;

        padding: 20px 8px 0 16px;

        /* position: sticky;
        left: 16px; */
        align-items: center;

        gap: 4px;
      }
      h1 {
        opacity: 0.8;
      }

      h1 > a:visited,
      h1 > a {
        text-decoration: none;
        color: var(--md-sys-color-on-surface);
      }

      h1 > a:hover {
        text-decoration: underline;
      }

      h1:last-child {
        opacity: 1;
      }

      md-icon {
        opacity: 0.8;
      }

      @container (width < 920px) {
        :host {
          min-height: 54px;
        }

        main {
          padding: 16px 8px 0 16px;
        }

        h1 {
          font-size: 16px;
          line-height: 18px;
        }
      }
    `,
  ];

  async connectedCallback() {
    super.connectedCallback();

    const fallbackScrollableParent = await findScrollableParent(this);
    this.#scrollableParent = this.scrollableParent || fallbackScrollableParent;
    if (this.#scrollableParent) {
      this.#scrollableParent.addEventListener('scroll', this.#onScroll.bind(this), false);
    }
  }

  async disconnectedCallback() {
    if (this.#scrollableParent) {
      this.#scrollableParent.removeEventListener('scroll', this.#onScroll.bind(this), false);
    }
    super.disconnectedCallback();
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('scrollableParent')) {
      this.#scrollableParent?.removeEventListener('scroll', this.#onScroll.bind(this), false);

      const fallbackScrollableParent = await findScrollableParent(this);
      this.#scrollableParent = this.scrollableParent || fallbackScrollableParent;
      if (this.#scrollableParent) {
        this.#scrollableParent.addEventListener('scroll', this.#onScroll.bind(this), false);
      }
    }
  }

  #onScroll() {
    this.isScrolled = (this.#scrollableParent?.scrollTop || 0) > 0;
  }

  render() {
    return html`
      <main ellipsis part="main">
        ${this.level1Text
          ? this.level1Href
            ? html`<h1 ellipsis><a title=${this.level1Text} href=${this.level1Href}>${this.level1Text}</a></h1>`
            : html`<h1 ellipsis>${this.level1Text}</h1>`
          : nothing}
        ${this.level2Text
          ? this.level2Href
            ? html` <md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level2Text} href=${this.level2Href}>${this.level2Text}</a></h1>`
            : html` <md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level2Text}</h1>`
          : nothing}
        ${this.level3Text
          ? this.level3Href
            ? html`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level3Text} href=${this.level3Href}>${this.level3Text}</a></h1>`
            : html`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level3Text}</h1>`
          : nothing}
        ${this.level4Text
          ? this.level4Href
            ? html`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level4Text} href=${this.level4Href}>${this.level4Text}</a></h1>`
            : html`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level4Text}</h1>`
          : nothing}
      </main>
      <aside part="trailing"><slot name="trailing"></slot></aside>
      <footer part="footer"><slot name="footer"></slot></footer>
    `;
  }
}
