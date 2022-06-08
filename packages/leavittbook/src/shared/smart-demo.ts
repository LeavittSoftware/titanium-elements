import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/mwc-tab-bar';
import { SiteErrorEvent } from '../events';

@customElement('smart-demo')
export default class SmartDemoElement extends LitElement {
  @property({ type: String }) selectedTab: 'simple' | 'playground' = 'simple';
  @property({ type: String, attribute: 'project-src' }) projectSrc;
  @property({ type: String, attribute: 'html-file' }) htmlFile = 'index.html';
  @property({ type: Boolean, attribute: 'line-numbers' }) lineNumbers;
  @property({ type: Boolean, attribute: 'line-wrapping' }) lineWrapping;
  @property({ type: Boolean }) resizable;

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selectedTab')) {
      if (this.selectedTab === 'playground') {
        try {
          import('playground-elements/playground-ide');
        } catch (error) {
          this.dispatchEvent(new SiteErrorEvent(error));
        }
      }
    }
  }

  static styles = [
    css`
      :host {
        display: block;
      }

      playground-ide {
        --playground-preview-width: 50%;
        min-height: 500px;

        --playground-tab-bar-indicator-color: #212121;
        --playground-bar-height: 48px;
        --playground-highlight-color: #212121;
        /* --playground-tab-bar-foreground-color: #fff; */
        --playground-tab-bar-background: white;
      }

      main {
        border: 1px solid var(--app-border-color);
      }
    `,
  ];

  render() {
    return html`
      <mwc-tab-bar @MDCTabBar:activated=${(o: CustomEvent<{ index: number }>) => (this.selectedTab = o.detail.index === 0 ? 'simple' : 'playground')}>
        <mwc-tab label="Demo" stacked icon="preview"></mwc-tab>
        <mwc-tab label="Playground (BETA)" stacked icon="family_restroom"></mwc-tab>
      </mwc-tab-bar>
      ${this.selectedTab === 'playground'
        ? html` <playground-ide
            ?line-numbers=${this.lineNumbers}
            ?line-wrapping=${this.lineNumbers}
            ?resizable=${this.resizable}
            .projectSrc=${this.projectSrc}
            .htmlFile=${this.htmlFile}
          >
          </playground-ide>`
        : html`<main><slot></slot></main>`}
    `;
  }
}
