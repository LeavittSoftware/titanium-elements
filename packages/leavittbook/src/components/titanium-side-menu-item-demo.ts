import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-side-menu/lib/titanium-side-menu-item';
import '@material/mwc-icon';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-side-menu-item-demo')
export class TitaniumSideMenuItemDemoElement extends LitElement {
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      [desktop-menu] {
        width: 280px;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div desktop-menu>
        <h1>Default</h1>
        <p>Default items</p>
        <titanium-side-menu-item>Default</span></titanium-side-menu-item>
        <titanium-side-menu-item disabled>Disabled</titanium-side-menu-item>
        <titanium-side-menu-item selected>Selected</titanium-side-menu-item>
      </div>
    `;
  }

  #slotsStory() {
    return html`
      <div desktop-menu>
        <h1>Slotted</h1>
        <p>Slotted items</p>
        <titanium-side-menu-item
          ><mwc-icon><span class="material-icons-outlined"> content_copy </span></mwc-icon><span>Slotted with 1 icon</span></titanium-side-menu-item
        >
        <titanium-side-menu-item><mwc-icon>apps</mwc-icon><span>Slotted with 2 icons</span><mwc-icon ext>exit_to_app</mwc-icon></titanium-side-menu-item>
      </div>
    `;
  }

  #hrefStory() {
    return html`
      <div desktop-menu>
        <h1>Href</h1>
        <p>items with href and target</p>
        <titanium-side-menu-item href="https://www.google.com" target="_blank">_blank target</span></titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_parent">_parent target</titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_self">_self target</titanium-side-menu-item>
        <titanium-side-menu-item href="https://www.google.com" target="_top">_top target</titanium-side-menu-item>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium Side Menu Item" tagName="titanium-side-menu-item" klass="TitaniumSideMenuItemElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#slotsStory()}
        <code-block .snippet=${this.#slotsStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#hrefStory()}
        <code-block .snippet=${this.#hrefStory()}> </code-block>
      </titanium-card>
    `;
  }
}
