/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon';
import '@leavittsoftware/titanium-tab-control/lib/titanium-tab-control-item';
import { repeat } from 'lit/directives/repeat.js';

/* playground-fold-end */
import '@leavittsoftware/titanium-tab-control';

/* playground-fold */
@customElement('titanium-tab-control-playground')
export class TitaniumTabControlPlaygroundElement extends LitElement {
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
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default tab control</p>
      <div>
        <titanium-tab-control>
          <titanium-tab-control-item href="#1">One</titanium-tab-control-item>
          <titanium-tab-control-item href="#2">Two</titanium-tab-control-item>
        </titanium-tab-control>
      </div>

      <h1>Scrolling</h1>
      <p>Scrolling tab control</p>
      <div>
        <titanium-tab-control>
          ${repeat(
            [...Array(20).keys()],
            i => i,
            i => html` <titanium-tab-control-item href="#${i}">${i}</titanium-tab-control-item> `
          )}
        </titanium-tab-control>
      </div>
    `;
  }
}
