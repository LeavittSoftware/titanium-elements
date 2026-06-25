import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';

import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/search-input/filled-search-input';
import TitaniumFilledSearchInput from '@leavittsoftware/web/titanium/search-input/filled-search-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-search-input-demo')
export class TitaniumSearchInputDemo extends LitElement {
  @query('titanium-filled-search-input[method-focused]') protected accessor methodFocus!: TitaniumFilledSearchInput;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium search input" level1Href="/titanium-search-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium filled search input" className="TitaniumFilledSearchInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic filled search input with clear button</p>
              <titanium-filled-search-input @input=${(e: DOMEvent<TitaniumFilledSearchInput>) => console.log(e.target.value)}></titanium-filled-search-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled search input</p>
              <titanium-filled-search-input disabled></titanium-filled-search-input>
            </div>

            <div>
              <h1>Placeholder text</h1>
              <p>Search input with custom placeholder</p>
              <titanium-filled-search-input placeholder="Search for something"></titanium-filled-search-input>
            </div>

            <div>
              <h1>With value</h1>
              <p>Search input with an initial value</p>
              <titanium-filled-search-input value="Initial search"></titanium-filled-search-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates focusing the underlying text field</p>
              <titanium-filled-search-input method-focused></titanium-filled-search-input>
              <br />

              <section buttons>
                <md-filled-tonal-button @click=${() => this.methodFocus.shadowRoot?.querySelector<MdFilledTextField>('md-filled-text-field')?.focus()}
                  >Focus</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-search-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
