import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, p, a } from '../../packages/titanium/styles/styles';
import '../../packages/titanium/header/header';
import '../../packages/titanium/card/card';

@customElement('getting-started')
export default class GettingStartedElement extends LitElement {
  static styles = [
    h1,
    h2,
    p,
    a,
    css`
      :host {
        display: block;
        margin: 24px 0;
      }

      h2 {
        margin: 24px 0 4px 0;
      }

      code {
        margin: 12px 0;
        background-color: var(--app-hover-color);
        padding: 6px;
      }

      code[block] {
        display: inline-block;
      }
    `,
  ];
  render() {
    return html`
      <titanium-header header="Getting started" subHeader="Leavitt Group open-source custom elements" no-nav></titanium-header>
      <h2>TLDR;</h2>
      <p>
        A collection of mostly <a target="_blank" href="https://lit.dev/">Lit HTML</a> based custom web elements that supplement or extend
        <a target="_blank" href="https://github.com/material-components/material-web">Google's Material Web elements</a>. These elements are open-source and
        free for anyone to use. The elements prefixed with <code>titanium-</code> are less specific, general use components. The elements prefixed with
        <code>leavitt-</code> are more specific to the Leavitt Group, many require authentication, and therefore their use is limited to the Leavitt Group and
        its affiliates.
      </p>

      <h2>Support</h2>
      <p>Chrome, Safari, Firefox, and Edge</p>

      <h2>Installation</h2>
      <p>NPM install the element you want to use:</p>
      <code block>npm i @leavittsoftware/titanium-card</code>
      <p>Include the element on your page.</p>
      <code block>import '@leavittsoftware/web/titanium/card/card';</code>
      <p>Use the element:</p>
      <code block>${'<titanium-card></titanium-card>'}</code>

      <h2>Styling</h2>
      <p>Elements are styled via CSS variables. See each element's docs for the list of available mixins.</p>

      <h2>Contributions</h2>
      <p>
        Make sure new commits follow the <a target="_blank" href="https://www.conventionalcommits.org/en/v1.0.0/"> Conventional Commits</a> convention as they
        are required to generate the changelog. Releases are automated upon merging into the master branch.
      </p>
    `;
  }
}
