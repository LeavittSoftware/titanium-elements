/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-button';
import '@leavittsoftware/titanium-chip';
const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];

/* playground-fold-end */
import '@leavittsoftware/titanium-chip-multi-select';
import { repeat } from 'lit/directives/repeat.js';

/* playground-fold */
@customElement('titanium-chip-multi-select-playground')
export class TitaniumChipMultiSelectPlayground extends LitElement {
  @state() private demoItems: string[] = chipLabels.slice(0, 4);

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

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using hasItems,noItemsText,helper,and disabled</p>
      <div>
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

      <h1>Demo</h1>
      <p>Demonstrates handling adding and removing chips</p>
      <div>
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
}
