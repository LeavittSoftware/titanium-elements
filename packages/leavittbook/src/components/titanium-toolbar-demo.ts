import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-toolbar';
import '@leavittsoftware/profile-picture';
import '@leavittsoftware/profile-picture/lib/profile-picture-menu';
import '@api-viewer/docs';
import '../shared/code-block';
import '../shared/story-header';

const LGLogo = new URL('../../images/lg-logo.svg', import.meta.url).href;

@customElement('titanium-toolbar-demo')
export class TitaniumToolbarDemoElement extends LitElement {
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      [container] {
        transform: translateZ(0);
        height: 30px;
      }

      titanium-toolbar[boilerplate] {
        display: flex;
        justify-content: space-between;
      }

      titanium-toolbar[boilerplate] h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      titanium-toolbar[boilerplate] a[logo],
      titanium-toolbar[boilerplate] img {
        margin-right: 12px;
        height: 26px;
        /* Prevent shifting on load */
        min-width: 26px;
        cursor: pointer;
      }

      [main-title] {
        margin: 0px;
        font-weight: 400;
        padding: 0px 0px 8px 24px;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div container>
        <titanium-toolbar>Default Toolbar</titanium-toolbar>
      </div>
    `;
  }

  #bolerplateStory() {
    return html`
      <div container>
        <titanium-toolbar boilerplate
          ><a title="Back to home">
            <img src=${LGLogo} alt="Leavitt Group logo" />
          </a>
          <h3 title="boilerplate toolbar" main-title>Boilerplate Toolbar</h3>
          <profile-picture-menu size="36"></profile-picture-menu>
        </titanium-toolbar>
      </div>
    `;
  }

  #shadowStory() {
    return html`
      <div container>
        <titanium-toolbar shadow>Toolbar with shadow</titanium-toolbar>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium toolbar" tagName="titanium-toolbar" klass="TitaniumToolbarElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#bolerplateStory()}
        <code-block .snippet=${this.#bolerplateStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#shadowStory()}
        <code-block .snippet=${this.#shadowStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-toolbar"></api-docs>
    `;
  }
}
