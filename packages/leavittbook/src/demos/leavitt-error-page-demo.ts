import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/icon/icon';
import '@api-viewer/docs';

import '@leavittsoftware/web/leavitt/error-page/error-page';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';

@customElement('leavitt-error-page-demo')
export class LeavittErrorPageDemo extends LitElement {
  static styles = [
    StoryStyles,
    heroStyles,
    h1,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      leavitt-app-width-limiter div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      md-divider {
        margin: 24px 0;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt error page" level1Href="/leavitt-error-page" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt error page" className="LeavittErrorPage"></story-header>

            <div>
              <leavitt-error-page message="It looks like this demo doesn't exist."></leavitt-error-page>
              <md-divider></md-divider>
              <leavitt-error-page heading="Sorry!" message="It looks like you don't have access to this area."
                ><md-icon slot="icon">lock</md-icon></leavitt-error-page
              >
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-error-page"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
