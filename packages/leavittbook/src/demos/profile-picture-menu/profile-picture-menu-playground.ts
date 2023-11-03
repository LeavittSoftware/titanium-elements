/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

/* playground-fold-end */
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';

/* playground-fold */
@customElement('profile-picture-menu-playground')
export class ProfilePictureMenuPlayground extends LitElement {
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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
        align-items: flex-end;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture-menu name="Testboii Testeri" email="testboi-tester@leavitt.com" company="Kasey Quality Assurance Inc."></profile-picture-menu>
      </div>
    `;
  }
}
