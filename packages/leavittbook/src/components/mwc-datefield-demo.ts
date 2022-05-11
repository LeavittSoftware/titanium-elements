import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/leavitt-elements/lib/mwc-datefield';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-button';
import '../shared/code-block';
import '../shared/story-header';
import { DateField } from '@leavittsoftware/leavitt-elements/lib/mwc-datefield';

@customElement('mwc-datefield-demo')
export class MWCDatefieldDemoElement extends LitElement {
  @query('mwc-datefield[layout-demo]') private layoutInput!: DateField;
  @state() private showLayoutInput: boolean = false;

  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      mwc-datefield {
        margin: 8px;
      }

      [row] {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      mwc-formfield {
        margin: 10px;
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default date field styles</p>
        <mwc-datefield></mwc-datefield>
        <mwc-datefield label="initial value" value="2022-05-10"></mwc-datefield>
        <mwc-datefield label="prefix" prefix="before"></mwc-datefield>
        <mwc-datefield label="suffix" prefix="after"></mwc-datefield>
        <mwc-datefield label="icon" icon="schedule"></mwc-datefield>
        <mwc-datefield label="disabled" disabled></mwc-datefield>
        <mwc-datefield label="helper text" helper="I can help"></mwc-datefield>
        <mwc-datefield label="persistent helper text" helperPersistent helper="I can help"></mwc-datefield>
        <mwc-datefield label="required" validateOnInitialRender required validationMessage="This is required"></mwc-datefield>
      </div>
    `;
  }

  #timeStory() {
    return html`
      <div>
        <h1>Time</h1>
        <p>date field with time styles</p>
        <mwc-datefield></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="initial value" value="2022-05-10T20:47"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="prefix" prefix="before"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="suffix" prefix="after"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="icon" icon="schedule"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="disabled" disabled></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="helper text" helper="I can help"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="persistent helper text" helperPersistent helper="I can help"></mwc-datefield>
        <mwc-datefield date-type="datetime-local" label="required" validateOnInitialRender required validationMessage="This is required"></mwc-datefield>
      </div>
    `;
  }

  #layoutStory() {
    return html`
      <div>
        <h1>Layout</h1>
        <p>Call layout() on date fields that are initially hidden to float the label</p>
        <mwc-formfield label="Show date field">
          <mwc-switch
            .selected=${this.showLayoutInput}
            @click=${() => {
              this.showLayoutInput = !this.showLayoutInput;
            }}
          ></mwc-switch>
        </mwc-formfield>
        <div row ?hidden=${!this.showLayoutInput}>
          <mwc-datefield layout-demo label="Label"></mwc-datefield>
          <mwc-button
            raised
            @click=${() => {
              this.layoutInput.layout();
            }}
            >layout()</mwc-button
          >
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="datefield" tagName="mwc-datefield" klass="DateField"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#timeStory()}
        <code-block .snippet=${this.#timeStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#layoutStory()}
        <code-block .snippet=${this.#layoutStory()}> </code-block>
      </titanium-card>
    `;
  }
}
