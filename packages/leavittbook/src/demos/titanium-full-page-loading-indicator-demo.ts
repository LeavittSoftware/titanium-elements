import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/full-page-loading-indicator/full-page-loading-indicator';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-full-page-loading-indicator-demo')
export class TitaniumFullPageLoadingIndicatorDemo extends LitElement {
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

      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;
        margin-bottom: 48px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      p {
        margin-bottom: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium full page loading indicator" level1Href="/titanium-full-page-loading-indicator" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium full page loading indicator" className="TitaniumFullPageLoadingIndicator"></story-header>
            <div>
              <h1>Demo</h1>
              <p>A promise driven pending-state-events loading scrim</p>
              <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
              <md-filled-tonal-button
                @click=${(e) => {
                  e.preventDefault();
                  const work = new Promise((r) => setTimeout(r, 50));
                  const work2 = new Promise((r) => setTimeout(r, 3000));
                  window.dispatchEvent(
                    new CustomEvent('pending-state', {
                      composed: true,
                      bubbles: true,
                      detail: { promise: work.then(() => console.log('Done 1')) },
                    })
                  );
                  window.dispatchEvent(
                    new CustomEvent('pending-state', {
                      composed: true,
                      bubbles: true,
                      detail: { promise: work2.then(() => console.log('Done 2')) },
                    })
                  );
                }}
                >Open loading veil for 2 seconds</md-filled-tonal-button
              >
            </div>
            <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
