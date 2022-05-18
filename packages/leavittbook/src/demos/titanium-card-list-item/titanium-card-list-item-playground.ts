/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@leavittsoftware/titanium-card';

/* playground-fold-end */

import '@leavittsoftware/titanium-card/lib/titanium-card-list-item';

/* playground-fold */
@customElement('titanium-card-list-item-playground')
export class TitaniumCardListItemPlayground extends LitElement {
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
        margin-bottom: 24px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <titanium-card>
        <h1>Default</h1>
        <p>Default card list item</p>
        <titanium-card-list-item title="Default">
          <div>Default List Item</div>
          <div spacer></div>
          <mwc-icon>navigate_next</mwc-icon>
        </titanium-card-list-item>
      </titanium-card>

      <titanium-card>
        <h1>Disabled</h1>
        <p>Disabled card list item</p>
        <titanium-card-list-item title="Disabled" disabled>
          <div>Disabled List Item</div>
          <div spacer></div>
          <mwc-icon>navigate_next</mwc-icon>
        </titanium-card-list-item>
      </titanium-card>
    `;
  }
}
