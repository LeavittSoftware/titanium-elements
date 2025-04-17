import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/profile-picture-stack/profile-picture-stack';
import '@leavittsoftware/web/titanium/card/card';
import '@material/web/iconbutton/outlined-icon-button';
import '@material/web/icon/icon';
const kaseyPerson = {
    Id: 771130,
    FullName: 'Kasey Person',
    ProfilePictureCdnFileName: '_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed',
};
const aaronPerson = {
    Id: 11056,
    FullName: 'Aaron Person',
    ProfilePictureCdnFileName: 'HzJz-mPu5ENzFokQb3uEgJbiCscFQz6OQtCqkmaH3QczhQOvxqIdXPAGTV3u',
};
const randomPerson = { Id: 771130, FullName: 'Random Person', ProfilePictureCdnFileName: '' };
/* playground-fold */
let TitaniumProfilePictureStackPlayground = class TitaniumProfilePictureStackPlayground extends LitElement {
    constructor() {
        super(...arguments);
        this.people = [randomPerson, kaseyPerson, aaronPerson, randomPerson, randomPerson];
        this.manyPeople = new Array(20).fill(kaseyPerson);
    }
    static { this.styles = [
        h1,
        p,
        css `
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-profile-picture-stack {
        margin: 0 0 24px 0;
      }

      titanium-profile-picture-stack[size='50'] {
        --titanium-profile-picture-stack-transform-scale: 1.5;
      }

      titanium-card:first-of-type {
        margin-bottom: 12px;
      }

      button-container {
        align-items: center;
        justify-self: end;
        display: flex;
        gap: 12px;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <titanium-card>
        <h1>Default</h1>
        <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>

        <h1>One person</h1>
        <titanium-profile-picture-stack .people=${[kaseyPerson]}></titanium-profile-picture-stack>

        <h1>One person with show full name</h1>
        <titanium-profile-picture-stack show-full-name .people=${[kaseyPerson]}></titanium-profile-picture-stack>

        <h1>Max of 3</h1>
        <titanium-profile-picture-stack max="3" .people=${this.people}></titanium-profile-picture-stack>

        <h1>Enable directory href</h1>
        <titanium-profile-picture-stack enable-directory-href .people=${this.people}></titanium-profile-picture-stack>

        <h1>Auto resize - Large</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="40"
          .people=${[...new Array(20).fill(kaseyPerson), ...new Array(20).fill(aaronPerson)]}
        ></titanium-profile-picture-stack>

        <h1>Auto resize - Extra large</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="60"
          .people=${[...new Array(15).fill(kaseyPerson), ...new Array(15).fill(aaronPerson)]}
        ></titanium-profile-picture-stack>

        <h1>Auto resize - Custom overlap</h1>
        <titanium-profile-picture-stack
          auto-resize
          size="40"
          overlap="20"
          .people=${[...new Array(15).fill(kaseyPerson), ...new Array(15).fill(aaronPerson)]}
        ></titanium-profile-picture-stack>
      </titanium-card>

      <titanium-card>
        <h1>Auto resize</h1>
        <titanium-profile-picture-stack auto-resize .people=${this.manyPeople}></titanium-profile-picture-stack>

        <button-container>
          <p>${this.manyPeople?.length} ${this.manyPeople?.length === 1 ? 'person' : 'people'}</p>
          <md-outlined-icon-button @click=${() => (this.manyPeople = [...(this.manyPeople?.slice(0, (this.manyPeople?.length ?? 0) - 1) ?? undefined)])}>
            <md-icon>remove</md-icon>
          </md-outlined-icon-button>
          <md-outlined-icon-button @click=${() => (this.manyPeople = [...this.manyPeople, this.manyPeople?.length % 2 === 1 ? kaseyPerson : aaronPerson])}>
            <md-icon>add</md-icon>
          </md-outlined-icon-button>
        </button-container>
      </titanium-card>
    `;
    }
};
__decorate([
    state()
], TitaniumProfilePictureStackPlayground.prototype, "people", void 0);
__decorate([
    state()
], TitaniumProfilePictureStackPlayground.prototype, "manyPeople", void 0);
TitaniumProfilePictureStackPlayground = __decorate([
    customElement('titanium-profile-picture-stack-playground')
], TitaniumProfilePictureStackPlayground);
export { TitaniumProfilePictureStackPlayground };
//# sourceMappingURL=titanium-profile-picture-stack-playground.js.map