/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/titanium-card';
import '@material/mwc-icon';

/* playground-fold-end */
import '@leavittsoftware/titanium-card/lib/titanium-card-two-line-list-item';

/* playground-fold */
@customElement('titanium-card-two-line-list-item-playground')
export class TitaniumCardTwoLineListItemPlayground extends LitElement {
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

      div {
        padding: 24px;
        border-radius: 8px;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      titanium-card {
        padding-bottom: 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default two-line list item displayed in a card</p>
      <div>
        <titanium-card>
          <h1>Card header</h1>
          <card-content full-width>
            <titanium-card-two-line-list-item>
              <img src="https://cdn.leavitt.com/icons/icon-scoreboard-details.svg" />
              <h2>Enabled</h2>
              <h3>Enabled list item</h3>
              <mwc-icon>navigate_next</mwc-icon>
            </titanium-card-two-line-list-item>

            <titanium-card-two-line-list-item disabled>
              <img src="https://cdn.leavitt.com/icons/icon-reminder.svg" />
              <h2>Disabled</h2>
              <h3>Disabled list item</h3>
              <mwc-icon>navigate_next</mwc-icon>
            </titanium-card-two-line-list-item>
          </card-content>
        </titanium-card>
      </div>
    `;
  }
}
