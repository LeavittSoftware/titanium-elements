import{i as e,h as t,a,p as o,b as r,c as i,x as n,_ as s,t as l}from"./qx-Pki5z.js";import"./CP_rWIhU.js";import"./DsC-OJ0m.js";let c=class extends e{static{this.styles=[t,a,o,r,i`
      :host {
        display: block;
        margin: 24px 0;
      }

      h2 {
        margin: 24px 0 4px 0;
      }

      code {
        margin: 12px 0;
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
        padding: 6px;
      }

      code[block] {
        display: inline-block;
      }
    `]}render(){return n`
      <titanium-header header="Getting started" subHeader="Leavitt Group open-source custom elements" no-nav></titanium-header>
      <h2>TLDR;</h2>
      <p>
        A collection of mostly <a target="_blank" href="https://lit.dev/">Lit HTML</a> based custom web elements that supplement or extend
        <a target="_blank" href="https://github.com/material-components/material-web">Google's Material Web elements</a>. These elements are open-source and
        free for anyone to use. The elements prefixed with <code>titanium-</code> are less specific, general use components. The elements prefixed with
        <code>leavitt-</code> are more specific to the Leavitt Group, many require authentication, and therefore their use is limited to the Leavitt Group and
        its affiliates.
      </p>

      <h2>Browser support</h2>
      <p>Chrome, Safari, Firefox, and Edge</p>

      <h2>Installation</h2>
      <p>NPM install:</p>
      <code block>npm i @leavittsoftware/web</code>
      <p>Include the element on your page.</p>
      <code block>import '@leavittsoftware/web/titanium/card/card';</code>
      <p>Use the element:</p>
      <code block>${"<titanium-card></titanium-card>"}</code>

      <h2>Styling</h2>
      <p>Elements are styled via CSS variables. See each element's docs for the list of available mixins.</p>

      <h2>Contributions</h2>
      <p>
        Make sure new commits follow the <a target="_blank" href="https://www.conventionalcommits.org/en/v1.0.0/"> Conventional Commits</a> convention as they
        are required to generate the changelog. Releases are automated upon merging into the master branch.
      </p>
    `}};c=s([l("getting-started")],c);var m=c;export{m as default};
