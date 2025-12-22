import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/icon/icon';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/profile-picture-stack/profile-picture-stack';

import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import { Person } from '@leavittsoftware/lg-core-typescript';
import { heroStyles } from '../styles/hero-styles';

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
    heroStyles,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      titanium-profile-picture-stack {
        margin: 0 0 12px 0;
      }

      titanium-profile-picture-stack[size='50'] {
        --titanium-profile-picture-stack-transform-scale: 1.5;
      }

      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
        margin-bottom: 48px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      h1 {
        margin-bottom: 12px;
      }

      p {
        font-size: 13px;
        opacity: 0.8;
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
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium profile picture stack" level1Href="/titanium-profile-picture-stack" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium profile picture stack" className="TitaniumProfilePictureStack"></story-header>

            <div>
              <h1>Default size (24px)</h1>
              <stack-container>
                <titanium-profile-picture-stack .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>Larger size (32px)</h1>
              <stack-container>
                <titanium-profile-picture-stack size="32" .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>Even larger (50px)</h1>
              <stack-container>
                <titanium-profile-picture-stack size="50" .people=${this.people}></titanium-profile-picture-stack>
                <p>${this.people.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>Many people (20+)</h1>
              <stack-container>
                <titanium-profile-picture-stack .people=${this.manyPeople}></titanium-profile-picture-stack>
                <p>${this.manyPeople.length} people</p>
              </stack-container>
            </div>

            <div>
              <h1>With max display limit</h1>
              <stack-container>
                <titanium-profile-picture-stack max-display="3" .people=${this.manyPeople}></titanium-profile-picture-stack>
                <p>Showing 3 of ${this.manyPeople.length} people</p>
              </stack-container>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-profile-picture-stack"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
