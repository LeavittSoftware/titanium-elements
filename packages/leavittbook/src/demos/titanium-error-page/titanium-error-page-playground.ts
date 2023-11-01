/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '../../../../titanium/styles/styles';
import '../../../../leavitt/profile-picture/profile-picture';
import '@material/mwc-icon';

/* playground-fold-end */
import '../../../../titanium/error-page/error-page';

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
      <p>Error page sample</p>
      <div>
        <titanium-error-page message="You can customize this message"></titanium-error-page>
      </div>
    `;
  }
}
