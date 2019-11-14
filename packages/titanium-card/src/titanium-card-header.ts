import { html, customElement, LitElement, css } from 'lit-element';

/**
 * Easily add a image and header to a titanium-card.
 *
 * @element titanium-card-header
 *
 * @slot content - Header content typically a h1 and a p tag
 * @slot image - Header image
 */
@customElement('titanium-card-header')
export class TitaniumCardHeaderElement extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr 144px;
      grid-template-areas: 'content img';
    }

    div[img] {
      grid-area: img;
      margin: 24px 24px 12px 24px;
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
