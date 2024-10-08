/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';

import '@material/web/button/filled-tonal-button';
import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';
import '@material/web/list/list-item';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/card/card';

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

      <titanium-card filled>
        <h1>filled</h1>
      </titanium-card>

      <titanium-card elevated>
        <h1>elevated</h1>
      </titanium-card>

      <titanium-card>
        <img card-image alt="password" src="https://cdn.leavitt.com/icons/icon-permissions.svg" />
        <h1>Has image</h1>
        <p card-body></p>
      </titanium-card>

      <titanium-card>
        <h1>Has footer</h1>
        <main card-body></main>
        <span nav card-footer>
          <md-filled-tonal-button> Save </md-filled-tonal-button>
        </span>
      </titanium-card>

      <titanium-card>
        <h1>Has menu</h1>
        <md-icon-button card-menu> <md-icon>more_vert</md-icon> </md-icon-button>
        <div card-body></div>
      </titanium-card>

      <titanium-card style="padding-bottom:0;overflow:hidden;">
        <h1>Card with list items</h1>
        <md-icon-button card-menu> <md-icon>more_vert</md-icon> </md-icon-button>
        <div card-body full-width>
          <md-list-item interactive href="/" target="_blank">
            <img slot="start" height="48" src="https://cdn.leavitt.com/icons/icon-scoreboard-details.svg" />
            <div slot="headline">Go Home</div>
            <div slot="supporting-text">This will link you out in a new tab</div>
            <md-icon slot="end">navigate_next</md-icon>
          </md-list-item>
          <md-list-item interactive href="/" target="_blank">
            <img slot="start" height="48" src="https://cdn.leavitt.com/icons/icon-reminder.svg" />
            <div slot="headline">Details</div>
            <div slot="supporting-text">This will link you out in a new tab</div>
            <md-icon slot="end">navigate_next</md-icon>
          </md-list-item>
        </div>
      </titanium-card>
    `;
  }
}
