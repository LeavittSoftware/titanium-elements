import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';

import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/search-input/search-input';
import { TitaniumSearchInput } from '@leavittsoftware/web/titanium/search-input/search-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputDemo extends LitElement {
  @query('titanium-search-input[method-focused]') protected accessor methodFocus!: TitaniumSearchInput;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium search input" level1Href="/titanium-search-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-search-input</kbd> is deprecated and no longer in use.</p>
            </deprecation-notice>
            <story-header name="Titanium search input" className="TitaniumSearchInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic search input with expand/collapse functionality</p>
              <titanium-search-input @input=${(e: DOMEvent<TitaniumSearchInput>) => console.log(e.target.value)}></titanium-search-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled search input</p>
              <titanium-search-input disabled></titanium-search-input>
            </div>

            <div>
              <h1>Placeholder text</h1>
              <p>Search input with placeholder and hidden clear button</p>
              <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
            </div>

            <div>
              <h1>Collapse Prevented</h1>
              <p>Search input that stays expanded</p>
              <titanium-search-input prevent-collapse></titanium-search-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates public methods</p>
              <titanium-search-input method-focused></titanium-search-input>
              <br />

              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodFocus.focus()}>Focus</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-search-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
