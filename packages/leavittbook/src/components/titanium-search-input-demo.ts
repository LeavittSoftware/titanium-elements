import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-search-input';
import '@api-viewer/docs';
import '../shared/code-block';
import '../shared/story-header';
import { TitaniumSearchInput } from '@leavittsoftware/titanium-search-input';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputDemoElement extends LitElement {
  @query('titanium-search-input[prevent-collapse]') private defaultSearch!: TitaniumSearchInput;
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      titanium-button {
        padding-bottom: 16px;
      }
    `,
  ];

  async focus() {
    this.defaultSearch.focus();
  }

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default search input styles</p>
        <titanium-search-input></titanium-search-input>
      </div>
    `;
  }

  #disabledStory() {
    return html`
      <div>
        <h1>Disabled</h1>
        <p>Disabled search input styles</p>
        <titanium-search-input disabled></titanium-search-input>
      </div>
    `;
  }

  #placeholderStory() {
    return html`
      <div>
        <h1>Placeholder</h1>
        <p>Placeholder search input styles with clear button hidden</p>
        <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
      </div>
    `;
  }

  #collapsedStory() {
    return html`
      <div>
        <h1>Collapse prevented</h1>
        <p>Collapse prevented search input styles</p>
        <titanium-button @click=${this.focus} raised>Focus input</titanium-button>
        <titanium-search-input prevent-collapse></titanium-search-input>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium search-input"
        packageName="titanium-search-input"
        tagName="titanium-search-input"
        klass="TitaniumSearchInputElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#disabledStory()}
        <code-block .snippet=${this.#disabledStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#placeholderStory()}
        <code-block .snippet=${this.#placeholderStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#collapsedStory()}
        <code-block .snippet=${this.#collapsedStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `;
  }
}
