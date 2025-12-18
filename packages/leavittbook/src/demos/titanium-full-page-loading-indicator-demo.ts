import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/text-button';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/full-page-loading-indicator/full-page-loading-indicator';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-full-page-loading-indicator-demo')
export class TitaniumFullPageLoadingIndicatorDemo extends LitElement {
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

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium full page loading indicator" className="TitaniumFullPageLoadingIndicator"></story-header>
      <h1>Demo</h1>
      <p>A promise driven pending-state-events loading scrim</p>
      <div>
        <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
        <md-text-button
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
          >Open loading veil for 2 seconds
        </md-text-button>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
    `;
  }
}
