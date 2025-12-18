import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/card/card';
import '@material/web/button/outlined-button';
import '@material/web/textfield/outlined-text-field';
import '@material/web/textfield/filled-text-field';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/date-input/date-input';
import { TitaniumDateInput } from '@leavittsoftware/web/titanium/date-input/date-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-date-input-demo')
export class TitaniumDateInputDemo extends LitElement {
  @query('titanium-date-input[demo1]') protected accessor input!: TitaniumDateInput;
  @query('titanium-date-input[filled]') protected accessor filledInput!: TitaniumDateInput;

  @state() private accessor value: string;

  static styles = [
    StoryStyles,
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
      <story-header name="Titanium date input" className="TitaniumDateInput"></story-header>
      <h1>Basic date input</h1>
      <p>Date input component with various configurations</p>

      <titanium-card>
        <two-column>
          <titanium-date-input demo1 label="Date" @change=${(e: DOMEvent<TitaniumDateInput>) => console.log('change', e.target.value)}></titanium-date-input>
          <titanium-date-input filled label="Filled" @change=${(e: DOMEvent<TitaniumDateInput>) => console.log('change', e.target.value)}></titanium-date-input>
        </two-column>

        <section buttons>
          <md-outlined-button @click=${() => this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.input.focus()}>Focus</md-outlined-button>
          <md-outlined-button @click=${() => this.input.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </titanium-card>

      <h1>With pre-filled value</h1>
      <titanium-card>
        <titanium-date-input label="Pre-filled" .value=${'2023-12-18'}></titanium-date-input>
      </titanium-card>

      <h1>Disabled and required</h1>
      <titanium-card>
        <two-column>
          <titanium-date-input disabled label="Disabled" .value=${'2023-12-18'}></titanium-date-input>
          <titanium-date-input required label="Required"></titanium-date-input>
        </two-column>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-date-input"></api-docs>
    `;
  }
}
