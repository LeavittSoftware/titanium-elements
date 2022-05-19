/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-button';

/* playground-fold-end */
import { a, button, ellipsis, h1, h2, h3, h4, h5, p } from '@leavittsoftware/titanium-styles';

/* playground-fold */
@customElement('titanium-styles-playground')
export class TitaniumStylesPlayground extends LitElement {
  static styles = [
    a,
    button,
    ellipsis,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using h1, h2, h3, h4, h5, a, p, and lowercase attributes</p>
      <div>
        <h1>Heading one</h1>
        <h2>Heading two</h2>
        <h3>Heading three</h3>
        <h4>Heading four</h4>
        <h5>Heading five</h5>
        <a href="#">Anchor tag</a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus, felis mollis aliquet eleifend, sem nunc volutpat risus, eget cursus odio eros
          vel sapien. Phasellus sit amet mi a tellus commodo molestie eu nec tellus. In hac habitasse platea dictumst.
        </p>
        <h2 ellipsis="" style="max-width: 130px">Ellipsis text sit amet, consectetur adipiscing elit. Duis</h2>
        <mwc-button outlined="" lowercase="" label="Lowercase button style"></mwc-button>
      </div>
    `;
  }
}
