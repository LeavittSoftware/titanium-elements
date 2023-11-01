/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '../../../../titanium/styles/styles';
import '../../../../leavitt/profile-picture/profile-picture';
import '@material/mwc-icon';

/* playground-fold-end */
import '../../../../titanium/access-denied-page/access-denied-page';

/* playground-fold */
@customElement('titanium-access-denied-page-playground')
export class TitaniumAccessDeniedPlayground extends LitElement {
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
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Access denied page sample</p>
      <div>
        <titanium-access-denied-page message="You can customize this message"></titanium-access-denied-page>
      </div>
    `;
  }
}
