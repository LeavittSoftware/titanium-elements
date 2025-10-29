import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
/* playground-fold-end */
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu';
import '@leavittsoftware/web/leavitt/user-manager/user-manager';
/* playground-fold */
let ProfilePictureMenuPlayground = class ProfilePictureMenuPlayground extends LitElement {
    static { this.styles = [
        h1,
        p,
        css `
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
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <user-manager></user-manager>

      <h1>Default</h1>
      <p>Default profile picture styles</p>
      <div>
        <profile-picture-menu name="Testboii Testeri" email="testboi-tester@leavitt.com" company="Kasey Quality Assurance Inc."></profile-picture-menu>
      </div>
    `;
    }
};
ProfilePictureMenuPlayground = __decorate([
    customElement('profile-picture-menu-playground')
], ProfilePictureMenuPlayground);
export { ProfilePictureMenuPlayground };
//# sourceMappingURL=profile-picture-menu-playground.js.map