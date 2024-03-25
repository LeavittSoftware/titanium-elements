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
import '@leavittsoftware/web/titanium/chip/chip';

/* playground-fold */
@customElement('titanium-chip-playground')
export class TitaniumChipPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 8px;
        margin: 24px 12px;
      }

      titanium-chip[short] {
        width: 140px;
      }

      img[chip-image] {
        width: 110px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <titanium-chip label="Jon Stewart"> </titanium-chip>

      <titanium-chip label="Stephen Colbert" input-chip @click=${() => alert('click!')}> </titanium-chip>

      <titanium-chip label="Jimmy Kimmel" @click=${() => alert('click!')}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip label="All late shows" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip short label="I'm a little long" input-chip @remove=${() => alert('remove!')} @click=${() => alert('click!')}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip label="Informational" inert> </titanium-chip>
    `;
  }
}
