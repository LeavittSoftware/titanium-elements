import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/card/card';

import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/header/header';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-header-demo')
export class TitaniumHeaderDemo extends LitElement {
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

      titanium-card {
        margin: 24px 0;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium header" className="TitaniumHeader"></story-header>
      <h1>No nav</h1>
      <p>Header without navigation controls</p>
      <titanium-card>
        <titanium-header header="Cheeses" subHeader="Your favorite cheeses" no-nav></titanium-header>
      </titanium-card>

      <h1>Back Arrow (default window.history.back)</h1>
      <p>Header with default back button behavior</p>
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats"></titanium-header>
      </titanium-card>

      <h1>Back Arrow (overloaded action)</h1>
      <p>Header with custom back button action</p>
      <titanium-card>
        <titanium-header
          header="Meats and cheese and dairy and things"
          subHeader="Your favorite meats"
          disable-default-back-button-behavior
          @titanium-header-back-click=${() => {
            alert('back clicked');
          }}
        ></titanium-header>
      </titanium-card>

      <h1>Icon</h1>
      <p>Header with custom icon</p>
      <titanium-card>
        <titanium-header
          header="Meats and cheese and dairy and things"
          subHeader="Your favorite meats"
          icon="stadium"
          @titanium-header-back-click=${() => {
            alert('back clicked');
          }}
        ></titanium-header>
      </titanium-card>

      <h1>Icon no-nav</h1>
      <p>Header with icon but no navigation controls</p>
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats" icon="stadium" no-nav></titanium-header>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
    `;
  }
}
