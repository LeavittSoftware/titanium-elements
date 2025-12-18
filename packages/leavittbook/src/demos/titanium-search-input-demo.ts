import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/card/card';
import '@material/web/button/outlined-button';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/search-input/search-input';
import { TitaniumSearchInput } from '@leavittsoftware/web/titanium/search-input/search-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputDemo extends LitElement {
  @query('titanium-search-input[method-focused]') protected accessor methodFocus!: TitaniumSearchInput;

  static styles = [
    StoryStyles,
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium search input" className="TitaniumSearchInput"></story-header>
      <h1>Default</h1>
      <p>Basic search input with expand/collapse functionality</p>
      <div>
        <titanium-search-input @input=${(e: DOMEvent<TitaniumSearchInput>) => console.log(e.target.value)}></titanium-search-input>
      </div>

      <h1>Disabled</h1>
      <p>Disabled search input</p>
      <div>
        <titanium-search-input disabled></titanium-search-input>
      </div>

      <h1>Placeholder text</h1>
      <p>Search input with placeholder and hidden clear button</p>
      <div>
        <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
      </div>

      <h1>Collapse Prevented</h1>
      <p>Search input that stays expanded</p>
      <div>
        <titanium-search-input prevent-collapse></titanium-search-input>
      </div>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <titanium-card>
        <div>
          <titanium-search-input method-focused></titanium-search-input>
          <section buttons>
            <md-outlined-button @click=${() => this.methodFocus.focus()}>Focus</md-outlined-button>
          </section>
        </div>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
    `;
  }
}
