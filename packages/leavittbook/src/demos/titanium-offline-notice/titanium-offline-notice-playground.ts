/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon';

/* playground-fold-end */
import '@leavittsoftware/titanium-offline-notice';
import { TitaniumOfflineNoticeElement } from '@leavittsoftware/titanium-offline-notice';

/* playground-fold */
@customElement('titanium-offline-notice-playground')
export class TitaniumOfflineNoticePlayground extends LitElement {
  @query('titanium-offline-notice') notice: TitaniumOfflineNoticeElement;

  firstUpdated() {
    this.notice.isOnline = false;
    console.log('Is online:', this.notice.isOnline);
  }

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
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      titanium-offline-notice {
        position: relative;
        margin: 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default test</h1>
      <p>Offline notice sample</p>
      <titanium-offline-notice></titanium-offline-notice>
    `;
  }
}
