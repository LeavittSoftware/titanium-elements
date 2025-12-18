import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/card/card';
import '@material/web/iconbutton/outlined-icon-button';
import '@material/web/icon/icon';

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/profile-picture-stack/profile-picture-stack';
import { Person } from '@leavittsoftware/lg-core-typescript';
import StoryStyles from '../styles/story-styles';

const kaseyPerson: Partial<Person> = {
  Id: 771130,
  FullName: 'Kasey Person',
  ProfilePictureCdnFileName: '_hNIx5g5YkhcC1BCH_-lJBOlMy5urO1kMrmHl-DEyn15qs9IOnAzxXnlV9ed',
} as Person;

const aaronPerson: Partial<Person> = {
  Id: 11056,
  FullName: 'Aaron Person',
  ProfilePictureCdnFileName: 'HzJz-mPu5ENzFokQb3uEgJbiCscFQz6OQtCqkmaH3QczhQOvxqIdXPAGTV3u',
} as Person;

const randomPerson: Partial<Person> = { Id: 771130, FullName: 'Random Person', ProfilePictureCdnFileName: '' };

@customElement('titanium-profile-picture-stack-demo')
export class TitaniumProfilePictureStackDemo extends LitElement {
  @state() people: Array<Partial<Person>> = [randomPerson, kaseyPerson, aaronPerson, randomPerson, randomPerson];
  @state() manyPeople: Array<Partial<Person>> = new Array(20).fill(kaseyPerson);

  static styles = [
    StoryStyles,
    h1,
    p,
    css`
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

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      [stack-container] {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>
      <h1>Basic profile picture stacks</h1>
      <p>Profile picture stacks showing overlapping profile images</p>

      <div>
        <h1>Default size (24px)</h1>
        <stack-container>
          <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>
          <span>${this.people.length} people</span>
        </stack-container>
      </div>

      <div>
        <h1>Larger size (32px)</h1>
        <stack-container>
          <titanium-profile-picture-stack size="32" .people=${this.people}></titanium-profile-picture-stack>
          <span>${this.people.length} people</span>
        </stack-container>
      </div>

      <div>
        <h1>Even larger (50px)</h1>
        <stack-container>
          <titanium-profile-picture-stack size="50" .people=${this.people}></titanium-profile-picture-stack>
          <span>${this.people.length} people</span>
        </stack-container>
      </div>

      <div>
        <h1>Many people (20+)</h1>
        <stack-container>
          <titanium-profile-picture-stack .people=${this.manyPeople}></titanium-profile-picture-stack>
          <span>${this.manyPeople.length} people</span>
        </stack-container>
      </div>

      <div>
        <h1>With max display limit</h1>
        <stack-container>
          <titanium-profile-picture-stack max-display="3" .people=${this.manyPeople}></titanium-profile-picture-stack>
          <span>Showing 3 of ${this.manyPeople.length} people</span>
        </stack-container>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
    `;
  }
}
