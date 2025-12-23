import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/access-denied-page/access-denied-page';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-access-denied-page-demo')
export class TitaniumAccessDeniedPageDemo extends LitElement {
  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium access denied page" level1Href="/titanium-access-denied-page" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium access denied page" className="TitaniumAccessDeniedPage"></story-header>
            <div>
              <h3>Default</h3>
              <p>Access denied page sample</p>
              <titanium-access-denied-page message="You can customize this message"></titanium-access-denied-page>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-access-denied-page"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
