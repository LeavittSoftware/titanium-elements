/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/card/card';

import '@material/web/button/outlined-button';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/date-input/date-input';
import { TitaniumDateInput } from '@leavittsoftware/web/titanium/date-input/date-input';

/* playground-fold */
@customElement('titanium-date-input-playground')
export class TitaniumDateInputItemPlayground extends LitElement {
  @query('titanium-date-input[method-focused]') protected methodFocus!: TitaniumDateInput;

  static styles = [
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
    /* playground-fold-end */
    return html`
      <h1>Demo</h1>
      <p>Demonstrates public methods</p>
      <titanium-card>
        <div>
          <titanium-date-input method-focused></titanium-date-input>
          <section buttons>
            <md-outlined-button @click=${() => this.methodFocus.focus()}>Focus</md-outlined-button>
          </section>
        </div>
      </titanium-card>
    `;
  }
}
