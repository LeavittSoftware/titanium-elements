/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/card/card';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/header/header';

/* playground-fold */
@customElement('titanium-header-playground')
export class TitaniumHeaderItemPlayground extends LitElement {
  static styles = [
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
    /* playground-fold-end */
    return html`
      <h1>No nav</h1>
      <titanium-card>
        <titanium-header header="Cheeses" subHeader="Your favorite cheeses" no-nav></titanium-header>
      </titanium-card>

      <h1>Back Arrow (default window.history.back)</h1>
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats"></titanium-header>
      </titanium-card>

      <h1>Back Arrow (overloaded action)</h1>
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
      <titanium-card>
        <titanium-header header="Meats and cheese and dairy and things" subHeader="Your favorite meats" icon="stadium" no-nav></titanium-header>
      </titanium-card>
    `;
  }
}
