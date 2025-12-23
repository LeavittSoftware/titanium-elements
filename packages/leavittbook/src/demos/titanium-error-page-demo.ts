import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/error-page/error-page';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-error-page-demo')
export class TitaniumErrorPageDemo extends LitElement {
  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium error page" level1Href="/titanium-error-page" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium error page" className="TitaniumErrorPage"></story-header>
            <div>
              <h1>Default</h1>
              <titanium-error-page message="You can customize this message"></titanium-error-page>
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-error-page"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
