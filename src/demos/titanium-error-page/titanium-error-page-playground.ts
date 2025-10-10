/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/error-page/error-page';

/* playground-fold */
@customElement('titanium-error-page-playground')
export class TitaniumErrorPagePlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
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
      <p>Error page sample</p>
      <div>
        <titanium-error-page message="You can customize this message"></titanium-error-page>
      </div>
    `;
  }
}
