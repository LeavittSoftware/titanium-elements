import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/tabs/primary-tab';
import '@material/web/tabs/tabs';
import '@material/web/icon/icon';
import { SiteErrorEvent } from '../events';

@customElement('smart-demo')
export default class SmartDemoElement extends LitElement {
  @property({ type: String }) accessor selectedTab: 'simple' | 'playground' = 'simple';
  @property({ type: String, attribute: 'project-src' }) accessor projectSrc;
  @property({ type: String, attribute: 'html-file' }) accessor htmlFile = 'index.html';
  @property({ type: Boolean, attribute: 'line-numbers' }) accessor lineNumbers;
  @property({ type: Boolean, attribute: 'line-wrapping' }) accessor lineWrapping;
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
    `,
  ];

  render() {
    return html`
      <md-tabs
        @change=${(event) => {
          this.selectedTab = event.target.activeTabIndex === 0 ? 'simple' : 'playground';
        }}
      >
        <md-primary-tab
          >Demo
          <md-icon slot="icon">preview</md-icon>
        </md-primary-tab>
        <md-primary-tab
          >Playground (BETA)
          <md-icon slot="icon">family_restroom</md-icon>
        </md-primary-tab>
      </md-tabs>

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
