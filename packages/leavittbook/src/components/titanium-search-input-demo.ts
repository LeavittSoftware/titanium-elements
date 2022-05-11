import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-search-input';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default search input styles</p>
        <titanium-search-input></titanium-search-input>
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
        <titanium-search-input prevent-collapse></titanium-search-input>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium search-input" tagName="titanium-search-input" klass="TitaniumSearchInputElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#placeholderStory()}
        <code-block .snippet=${this.#placeholderStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#collapsedStory()}
        <code-block .snippet=${this.#collapsedStory()}> </code-block>
      </titanium-card>
    `;
  }
}
