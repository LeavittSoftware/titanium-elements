/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@leavittsoftware/web/titanium/card/card';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/search-input/search-input';
import { TitaniumSearchInput } from '@leavittsoftware/web/titanium/search-input/search-input';

/* playground-fold */
@customElement('titanium-search-input-playground')
export class TitaniumSearchInputItemPlayground extends LitElement {
  @query('titanium-search-input[method-focused]') protected methodFocus!: TitaniumSearchInput;
  @query('titanium-search-input[method-focused-collapsed]') protected methodsFocusedCollapsed!: TitaniumSearchInput;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div[row] {
        display: flex;
        align-items: center;
      }

      mwc-button {
        margin-left: 16px;
      }

      titanium-card {
        margin: 24px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <titanium-card>
        <p>Default search input styles</p>
        <titanium-search-input></titanium-search-input>
      </titanium-card>

      <h1>Disabled</h1>
      <titanium-card>
        <p>Disabled search input styles</p>
        <titanium-search-input disabled></titanium-search-input>
      </titanium-card>

      <h1>Placeholder</h1>
      <titanium-card>
        <p>Placeholder search input styles with clear button hidden</p>
        <titanium-search-input placeholder="Search for something" hide-clear-button></titanium-search-input>
      </titanium-card>

      <h1>Collapse Prevented</h1>
      <titanium-card>
        <p>Collapse prevented search input styles</p>
        <titanium-search-input prevent-collapse></titanium-search-input>
      </titanium-card>

      <h1>Methods</h1>
      <p>Demonstrates public methods</p>
      <titanium-card>
        <div row>
          <titanium-search-input prevent-collapse method-focused></titanium-search-input>
          <mwc-button
            raised
            @click=${() => {
              this.methodFocus.focus();
            }}
            label="Focus"
          ></mwc-button>
        </div>
        <div row>
          <titanium-search-input method-focused-collapsed></titanium-search-input>
          <mwc-button
            raised
            @click=${() => {
              this.methodsFocusedCollapsed.focus();
            }}
            label="Focus Collapsed"
          ></mwc-button>
        </div>
      </titanium-card>
    `;
  }
}
