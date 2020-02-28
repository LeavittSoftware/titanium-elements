import { html, customElement, LitElement, css, property } from 'lit-element';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const ResizeObserver: any;

/**
 * Easily add a image and header to a titanium-card.  Image moves from right to top depending on width of card.
 *
 * @element titanium-card-header
 *
 * @slot content - Header content typically a h1 and a p tag
 * @slot image - Header image
 *
 *  * @cssprop {Size} --titanium-card-header-above-image-width - Width of image when it is placed above
 *  * @cssprop {Size} --titanium-card-header-aside-image-width -  Width of image when it is placed to the side
 */
@customElement('titanium-card-header')
export class TitaniumCardHeaderElement extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: 'image-above' }) protected imageAbove: boolean = false;
  /**
   *  Forces image to always be placed above regardless of card size.
   */
  @property({ type: Boolean, reflect: true, attribute: 'force-image-above' }) forceImageAbove: boolean = false;

  firstUpdated() {
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
          const cr = entry.contentRect;
          this.imageAbove = cr.width < 400;
        }
      });

      ro.observe(this);
    } else {
      const mql = window.matchMedia('(max-width: 448px)');
      mql.addListener(e => (this.imageAbove = e.matches));
      this.imageAbove = mql.matches;
    }
  }

  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas: 'content img';
    }

    :host([image-always-above]),
    :host([image-above]) {
      grid-template-columns: inherit;
      grid-template-rows: auto auto;
      grid-template-areas:
        'img'
        'content';
    }

    :host([image-always-above]) div[img],
    :host([image-above]) div[img] {
      width: var(--titanium-card-header-above-image-width, 144px);
      justify-self: center;
      margin: 24px 24px 12px 24px;
    }

    div[img] {
      display: flex;
      flex-direction: column;
      grid-area: img;
      width: var(--titanium-card-header-aside-image-width, 110px);
      margin: 24px;
    }

    div[content] {
      grid-area: content;
    }
  `;

  render() {
    return html`
      <div content>
        <slot name="content"></slot>
      </div>
      <div img>
        <slot name="image"></slot>
      </div>
    `;
  }
}
