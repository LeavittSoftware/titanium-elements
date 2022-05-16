import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-chip-multi-select';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import '@material/mwc-icon';
import { repeat } from 'lit/directives/repeat.js';

const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];

@customElement('titanium-chip-multi-select-demo')
export class TitaniumChipMultiSelectDemoElement extends LitElement {
  @state() private demoItems: string[] = chipLabels.slice(0, 4);

  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      titanium-chip-multi-select {
        margin: 16px;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Examples using hasItems,noItemsText,helper,and disabled</p>
        <titanium-chip-multi-select label="Default" hasItems
          >${repeat(
            chipLabels.slice(0, 4),
            o => o,
            o => html`<titanium-chip label=${o}></titanium-chip>`
          )}</titanium-chip-multi-select
        >
        <titanium-chip-multi-select label="Has No Items" ?hasItems=${false} noItemsText="I don't have any items"></titanium-chip-multi-select>
        <titanium-chip-multi-select label="Helper Text" hasItems helper="my helper text"
          >${repeat(
            chipLabels.slice(0, 4),
            o => o,
            o => html`<titanium-chip label=${o}></titanium-chip>`
          )}</titanium-chip-multi-select
        >
        <titanium-chip-multi-select label="Disabled" hasItems disabled
          >${repeat(
            chipLabels.slice(0, 4),
            o => o,
            o => html`<titanium-chip disabled label=${o}></titanium-chip>`
          )}</titanium-chip-multi-select
        >
      </div>
    `;
  }

  #demoStory() {
    return html`
      <div>
        <h1>Demo</h1>
        <p>Demonstrates handling adding and removing chips</p>
        <titanium-chip-multi-select label="Service Animals" hasItems>
          <mwc-button
            slot="button"
            label="Add Animal"
            icon="add"
            outlined
            @click=${async () => {
              this.demoItems.push(chipLabels[this.demoItems.length % chipLabels.length]);
              this.requestUpdate('demoItems');
            }}
          ></mwc-button>
          ${repeat(
            this.demoItems,
            o => o,
            (o, index) =>
              html`<titanium-chip
                label=${o}
                closeable
                @titanium-chip-close=${() => {
                  this.demoItems = this.demoItems.filter((_, i) => i !== index);
                }}
              ></titanium-chip>`
          )}</titanium-chip-multi-select
        >
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium chip multi-select" tagName="titanium-chip-multi-select" klass="TitaniumChipMultiSelectElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#demoStory()}
        <code-block .snippet=${this.#demoStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
    `;
  }
}
