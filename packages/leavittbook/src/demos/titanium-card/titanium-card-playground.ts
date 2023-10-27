/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-card';

/* playground-fold */
@customElement('titanium-card-playground')
export class TitaniumChipPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      titanium-card {
        margin: 12px 0;
      }

      img[card-image] {
        width: 110px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <titanium-card>
        <h1>Default</h1>
      </titanium-card>

      <titanium-card primary>
        <h1>primary</h1>
      </titanium-card>

      <titanium-card surface>
        <h1>surface</h1>
      </titanium-card>

      <titanium-card elevation="high">
        <h1>Elevated</h1>
      </titanium-card>

      <titanium-card has-image>
        <img card-image alt="password" src="https://cdn.leavitt.com/icons/icon-permissions.svg" />
        <h1>Has image</h1>
        <p card-body></p>
      </titanium-card>

      <titanium-card has-footer>
        <h1>Has footer</h1>
        <main card-body></main>
        <span nav card-footer>
          <mwc-button>SAVE</mwc-button>
        </span>
      </titanium-card>

      <titanium-card has-menu>
        <h1>Has menu</h1>
        <mwc-icon-button card-menu icon="add"></mwc-icon-button>
        <div card-body></div>
      </titanium-card>
    `;
  }
}
