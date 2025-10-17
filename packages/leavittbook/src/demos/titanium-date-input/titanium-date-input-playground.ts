/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/card/card';

import '@material/web/button/outlined-button';
import '@material/web/textfield/outlined-text-field';
import '@material/web/textfield/filled-text-field';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/date-input/date-input';
import { TitaniumDateInput } from '@leavittsoftware/web/titanium/date-input/date-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

/* playground-fold */
@customElement('titanium-date-input-playground')
export class TitaniumDateInputItemPlayground extends LitElement {
  @query('titanium-date-input[demo1]') protected accessor input!: TitaniumDateInput;
  @query('titanium-date-input[filled]') protected accessor filledInput!: TitaniumDateInput;

  @state() private accessor value: string;
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
        gap: 24px;
      }

      md-filled-text-field {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      titanium-card {
        gap: 24px;
      }

      two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        align-items: start;
        margin-top: 12px;
        margin-bottom: 12px;
      }

      footer {
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
      <titanium-card>
        <h1>Main demo</h1>

        <main card-body>
          <two-column>
            <titanium-date-input
              autocomplete="bday"
              demo1
              label="Birthday"
              @change=${(e: DOMEvent<TitaniumDateInput>) => (this.value = e.target.value)}
            ></titanium-date-input>
            <md-outlined-text-field label="Birthday" value="Test"></md-outlined-text-field>
          </two-column>

          <two-column>
            <titanium-date-input filled label="Start date"></titanium-date-input>
            <md-filled-text-field label="Start date" value="Test"></md-filled-text-field>
          </two-column>
        </main>
        <span card-menu>Output: ${this.value}</span>

        <footer card-footer>
          <md-outlined-button
            @click=${() => {
              this.input.value = this.input.value ? '' : '2023-12-08';
              this.filledInput.value = this.filledInput.value ? '' : '2023-12-08';
             
            }}
            >Set a value</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.input.error = true;
              this.input.errorText = this.input.errorText ? '' : 'Oh no not that date!';
              this.filledInput.error = true;
              this.filledInput.errorText = this.filledInput.errorText ? '' : 'Oh no not that date!';
            }}
            >Set an error</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.input.required = !this.input.required;
              this.filledInput.required = !this.filledInput.required;
            }}
            >Toggle required</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.input.disabled = !this.input.disabled;
              this.filledInput.disabled = !this.filledInput.disabled;
            }}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.input.supportingText = this.input.supportingText ? '' : 'Thank you for your birthday! I hope you have a great day!';
              this.filledInput.supportingText = this.filledInput.supportingText ? '' : 'Thank you for your birthday! I hope you have a great day!';
            }}
          >
            Toggle supporting text
          </md-outlined-button>

          <md-outlined-button
            @click=${() => {
              this.input.label = this.input.label ? '' : 'Start date';
              this.filledInput.label = this.filledInput.label ? '' : 'Start date';
            }}
            >Toggle label text</md-outlined-button
          >

          <md-outlined-button
            @click=${() => {
              this.input.reset();
              this.filledInput.reset();
            }}
            >Reset</md-outlined-button
          >
          <md-outlined-button
            @click=${() => {
              this.input.reportValidity();
              this.filledInput.reportValidity();
            }}
            >Report validity</md-outlined-button
          >
        </footer>
      </titanium-card>

      <titanium-card>
        <h1>Date time demo</h1>
        <div>
          <titanium-date-input type="datetime-local" label="Reboot every"></titanium-date-input>
        </div>
      </titanium-card>
    `;
  }
}
