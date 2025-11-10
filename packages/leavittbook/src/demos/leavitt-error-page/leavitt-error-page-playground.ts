/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/error-page/error-page';

/* playground-fold */
@customElement('leavitt-error-page-playground')
export class LeavittErrorPagePlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Error page sample</p>
      <div>
        <leavitt-error-page message="It looks like this demo doesn't exist."></leavitt-error-page>
      </div>
    `;
  }
}

