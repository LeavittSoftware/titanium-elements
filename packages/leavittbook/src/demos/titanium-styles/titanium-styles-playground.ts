/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-button';

/* playground-fold-end */
import { dataRow, a, ellipsis, h1, h2, h3, h4, h5, p } from '../../../../titanium/styles/styles';

/* playground-fold */
@customElement('titanium-styles-playground')
export class TitaniumStylesPlayground extends LitElement {
  static styles = [
    dataRow,
    a,
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

      div[basic] {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      div:last-of-type {
        border: 1px solid var(--app-border-color);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using h1, h2, h3, h4, h5, a, p, and lowercase attributes</p>
      <div basic>
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

      <div data-row-container>
        <data-row>
          <h5>First name</h5>
          <p image><img src="https://cdn.leavitt.com/user-0-32.jpeg" />Bob</p>
        </data-row>

        <data-row>
          <h5>Last name</h5>
          <p>Alice</p>
        </data-row>

        <data-row>
          <h5>Bio</h5>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </data-row>
      </div>
    `;
  }
}
