import '@material/web/icon/icon';

import { LitElement, PropertyValues, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ellipsis, h1 } from '@leavittsoftware/web/titanium/styles/styles';
import { findScrollableParent } from '../../titanium/helpers/find-scrollable-parent';

@customElement('leavitt-app-navigation-header')
export class LeavittAppNavigationHeader extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'sticky-top' }) accessor stickyTop: boolean = false;
  @property({ type: Object, attribute: 'scrollable-parent' }) accessor scrollableParent: Element | null = null;

  @property({ type: String }) accessor level1Text: string | null = null;
  @property({ type: String }) accessor level1Href: string | null = null;

  @property({ type: String }) accessor level2Text: string | null = null;
  @property({ type: String }) accessor level2Href: string | null = null;

  @property({ type: String }) accessor level3Text: string | null = null;
  @property({ type: String }) accessor level3Href: string | null = null;

  @property({ type: String }) accessor level4Text: string | null = null;
  @property({ type: String }) accessor level4Href: string | null = null;

  @property({ type: String }) accessor level5Text: string | null = null;
  @property({ type: String }) accessor level5Href: string | null = null;

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
      /*
       * Earlier crumbs start at zero width and grow, up to their full text, to share the free space.
       * Flexbox hands the space out evenly and stops growing a crumb once its text fits, so short
       * crumbs stay whole and only the longest ones are cut. Each keeps at least a letter and an
       * ellipsis. The current page keeps its full width and only shrinks when it alone is wider than
       * the row.
       */
      h1 {
        opacity: 0.8;
        flex: 1 1 0;
        min-width: 2.5em;
        max-width: max-content;
      }

      h1[current] {
        opacity: 1;
        flex: 0 1 auto;
        min-width: 0;
      }

      md-icon {
        flex: none;
      }

      h1 > a:visited,
      h1 > a {
        text-decoration: none;
        color: var(--md-sys-color-on-surface);
      }

      h1 > a:hover {
        text-decoration: underline;
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

  #getCrumbs() {
    return [
      { text: this.level1Text, href: this.level1Href },
      { text: this.level2Text, href: this.level2Href },
      { text: this.level3Text, href: this.level3Href },
      { text: this.level4Text, href: this.level4Href },
      { text: this.level5Text, href: this.level5Href },
    ].filter((crumb): crumb is { text: string; href: string | null } => !!crumb.text);
  }

  #onScroll() {
    this.isScrolled = (this.#scrollableParent?.scrollTop || 0) > 0;
  }

  render() {
    return html`
      <main ellipsis part="main">
        ${this.#getCrumbs().map(
          (crumb, index, crumbs) =>
            html`${index > 0 ? html`<md-icon>chevron_right</md-icon>` : nothing}
              <h1 ellipsis title=${crumb.text} ?current=${index === crumbs.length - 1}>
                ${crumb.href ? html`<a href=${crumb.href}>${crumb.text}</a>` : crumb.text}
              </h1>`
        )}
      </main>
      <aside part="trailing"><slot name="trailing"></slot></aside>
      <footer part="footer"><slot name="footer"></slot></footer>
    `;
  }
}
