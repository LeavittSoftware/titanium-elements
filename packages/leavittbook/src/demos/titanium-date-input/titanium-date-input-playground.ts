/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/card/card';

import '@material/web/button/outlined-button';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/date-input/date-input';
import { TitaniumDateInput } from '@leavittsoftware/web/titanium/date-input/date-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

/* playground-fold */
@customElement('titanium-date-input-playground')
export class TitaniumDateInputItemPlayground extends LitElement {
  @query('titanium-date-input') protected input!: TitaniumDateInput;
  @state() value: string;
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
          <!--   min="2017-04-01"
            max="2017-04-30" -->
          <titanium-date-input label="Start date" @change=${(e: DOMEvent<TitaniumDateInput>) => (this.value = e.target.value)}></titanium-date-input>
          <span>Output: ${this.value}</span>
          <section buttons>
            <md-outlined-button @click=${() => (this.input.value = this.input.value ? '' : '2023-12-08')}>Set an value</md-outlined-button>
            <md-outlined-button
              @click=${() => {
                this.input.error = true;
                this.input.errorText = this.input.errorText ? '' : 'Oh no not that date!';
              }}
              >Set an error</md-outlined-button
            >
            <md-outlined-button @click=${() => (this.input.required = !this.input.required)}>Toggle required</md-outlined-button>
            <md-outlined-button @click=${() => (this.input.disabled = !this.input.disabled)}>Toggle disabled</md-outlined-button>

            <md-outlined-button @click=${() => (this.input.supportingText = this.input.supportingText ? '' : 'Supporting text example')}
              >Toggle supporting text</md-outlined-button
            >

            <md-outlined-button @click=${() => (this.input.label = this.input.label ? '' : 'Start date')}>Toggle label text</md-outlined-button>

            <md-outlined-button @click=${() => this.input.reset()}>Reset</md-outlined-button>
            <md-outlined-button @click=${() => this.input.reportValidity()}>Report validity</md-outlined-button>
          </section>
        </div>
      </titanium-card>
    `;
  }
}
