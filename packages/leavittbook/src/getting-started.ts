import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, p, a } from '@leavittsoftware/titanium-styles';
import './shared/code-block';
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/titanium-header';

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
    `,
  ];
  render() {
    return html`
      <titanium-header header="Getting started" subHeader="Leavitt Group open-source custom elements" no-nav></titanium-header>
      <h2>TLDR;</h2>
      <p>
        A collection of mostly <a href="https://lit.dev/">Lit HTML</a> based custom web elements to supplement or extend
        <a href="https://github.com/material-components/material-web">Google's Material Web elements.</a>. These elements are open-source and free for anyone to
        use. The elements prefixed with <code>titanium-</code> are less specific general use components. The elements prefixed with <code>leavitt-</code> are
        more specific to the Leavitt Group, many require authentication, and therefor their use is limited to the Leavitt Group and its affiliates.
      </p>

      <h2>Support</h2>
      <p>Chrome, Safari, Firefox, and Edge</p>

      <h2>Installation</h2>
      <p>NPN install the element you want to use:</p>
      <code-block hide-open-button language="bash" open .snippet=${html`npm i @leavittsoftware/titanium-chip`}></code-block>
      <p>Include the element on you page.</p>
      <code-block hide-open-button open .snippet=${html`import '@microsoft/titanium-chip';`}></code-block>
      <p>Use the element:</p>
      <code-block hide-open-button open .snippet=${html`<titanium-chip></titanium-chip>`}></code-block>
    `;
  }
}
