import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { p, a } from '@leavittsoftware/web/titanium/styles/styles';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import { heroStyles } from './styles/hero-styles';

@customElement('getting-started')
export default class GettingStarted extends LitElement {
  static styles = [
    heroStyles,
    p,
    a,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      h1,
      h2 {
        margin-bottom: 6px;
      }

      code {
        margin: 12px 0;
        background-color: var(--md-sys-color-surface-container-low);
        padding: 2px 8px;
        border-radius: 28px;
        font-size: 13px;
        opacity: 0.8;
      }

      section {
        margin-bottom: 48px;
      }

      code[block] {
        display: inline-block;
      }
    `,
  ];
  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Getting started" level1Href="/" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="900px">
            <section>
              <h1>Leavitt Group open-source custom elements</h1>
              <p>
                A collection of mostly <a target="_blank" href="https://lit.dev/">Lit HTML</a> based custom web elements that supplement or extend
                <a target="_blank" href="https://github.com/material-components/material-web">Google's Material Web elements</a>. These elements are open-source
                and free for anyone to use. The elements prefixed with <code>titanium-</code> are less specific, general use components. The elements prefixed
                with <code>leavitt-</code> are more specific to the Leavitt Group, many require authentication, and therefore their use is limited to the
                Leavitt Group and its affiliates.
              </p>
            </section>

            <section>
              <h2>Browser support</h2>
              <p>Chrome, Safari, Firefox, and Edge</p>
            </section>

            <section>
              <h2>Installation</h2>
              <p>NPM install:</p>
              <code block>npm i @leavittsoftware/web</code>
              <p>Include the element on your page.</p>
              <code block>import '@leavittsoftware/web/titanium/card/card';</code>
              <p>Use the element:</p>
              <code block>${'<titanium-card></titanium-card>'}</code>
            </section>

            <section>
              <h2>Styling</h2>
              <p>Elements are styled via CSS variables. See each element's docs for the list of available mixins.</p>
            </section>

            <section>
              <h2>Contributions</h2>
              <p>
                Make sure new commits follow the <a target="_blank" href="https://www.conventionalcommits.org/en/v1.0.0/"> Conventional Commits</a> convention
                as they are required to generate the changelog. Releases are automated upon merging into the master branch.
              </p>
            </section>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
