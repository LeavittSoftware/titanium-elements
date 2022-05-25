/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-button';
import '@material/mwc-icon-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-card/lib/titanium-single-action-card';

/* playground-fold */
@customElement('titanium-single-action-card-playground')
export class TitaniumSingleActionCardPlayground extends LitElement {
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

      titanium-single-action-card {
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
      <titanium-single-action-card buttonTitle="Default">
        <h1>Default card</h1>
        <p>This is a default styled card</p>
      </titanium-single-action-card>

      <titanium-single-action-card buttonTitle="Disabled" disable-action has-menu>
        <h1>Disabled button card</h1>
        <p>This is a card with a disabled button</p>
      </titanium-single-action-card>

      <titanium-single-action-card buttonTitle="Elevated" elevation="high">
        <h1>Elevated card</h1>
        <p>This is an elevated card</p>
      </titanium-single-action-card>

      <titanium-single-action-card buttonTitle="Menu" has-menu>
        <h1>Menu card</h1>
        <mwc-icon-button card-menu icon="add"></mwc-icon-button>
        <p>This is a card with a menu</p>
      </titanium-single-action-card>

      <titanium-single-action-card buttonTitle="Image" has-image>
        <img card-image alt="password" src="https://cdn.leavitt.com/icons/icon-permissions.svg" />
        <h1>Image card</h1>
        <p>This is a card with an image</p>
      </titanium-single-action-card>
    `;
  }
}
