import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-loading-indicator';
import '@leavittsoftware/titanium-card';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-full-page-loading-indicator-demo')
export class TitaniumFullPageLoadingIndicatorDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default titanium full page loading indicator</p>
        <titanium-full-page-loading-indicator></titanium-full-page-loading-indicator>
        <a
          href="#"
          @click=${e => {
            e.preventDefault();
            const work = new Promise(r => setTimeout(r, 50));
            const work2 = new Promise(r => setTimeout(r, 3000));
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
        >
          Open loading veil for 2 seconds
        </a>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium full page loading indicator"
        tagName="titanium-full-page-loading-indicator"
        packageName="titanium-loading-indicator"
        klass="TitaniumFullPageLoadingIndicatorElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-full-page-loading-indicator"></api-docs>
    `;
  }
}
