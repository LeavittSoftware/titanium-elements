/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-button';
import '@material/web/chips/input-chip';
import '@material/web/icon/icon';
import '@material/web/button/outlined-button';
const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];

/* playground-fold-end */
import '@leavittsoftware/titanium-chip-multi-select';
import { repeat } from 'lit/directives/repeat.js';
import { TitaniumChipMultiSelectElement } from '@leavittsoftware/titanium-chip-multi-select';

/* playground-fold */
@customElement('titanium-chip-multi-select-playground')
export class TitaniumChipMultiSelectPlayground extends LitElement {
  @state() protected demoItems: string[] = chipLabels.slice(0, 4);
  @query('titanium-chip-multi-select[demo2]') titaniumChipMultiSelect: TitaniumChipMultiSelectElement;

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
        <titanium-chip-multi-select label="Default" hasItems>
          <md-outlined-button>
            <md-icon slot="icon">add</md-icon>
            Add
          </md-outlined-button>
          ${repeat(
            chipLabels.slice(0, 4),
            (o) => o,
            (o) =>
              html`<md-input-chip
                @remove=${(e: Event) => {
                  e.preventDefault();
                }}
                label=${o}
                remove-only
              ></md-input-chip>`
          )}</titanium-chip-multi-select
        >
        <titanium-chip-multi-select label="Has No Items" ?hasItems=${false} noItemsText="I don't have any items"></titanium-chip-multi-select>

        <titanium-chip-multi-select label="Disabled" hasItems disabled>
          <md-outlined-button disabled>
            <md-icon slot="icon">add</md-icon>
            Add Animal
          </md-outlined-button>
          ${repeat(
            chipLabels.slice(0, 4),
            (o) => o,
            (o) =>
              html`<md-input-chip
                @remove=${(e: Event) => {
                  e.preventDefault();
                }}
                disabled
                label=${o}
              ></md-input-chip>`
          )}</titanium-chip-multi-select
        >
      </div>

      <h1>Demo</h1>
      <p>Demonstrates handling adding and removing chips</p>
      <div>
        <titanium-chip-multi-select demo2 required label="Service Animals" ?hasItems=${!!this.demoItems.length} helper="This is a list of animals">
          <md-outlined-button
            @click=${async () => {
              this.demoItems.push(chipLabels[this.demoItems.length % chipLabels.length]);
              this.requestUpdate('demoItems');
            }}
          >
            <md-icon slot="icon">add</md-icon>
            Add Animal
          </md-outlined-button>
          ${repeat(
            this.demoItems,
            (o) => o,
            (o, index) =>
              html`<md-input-chip
                label=${o}
                closeable
                @remove=${(e: Event) => {
                  e.preventDefault();
                  this.demoItems = this.demoItems.filter((_, i) => i !== index);
                }}
              ></md-input-chip>`
          )}</titanium-chip-multi-select
        >
      </div>
      <mwc-button
        slot="button"
        label="Report validity"
        outlined
        @click=${async () => {
          this.titaniumChipMultiSelect.reportValidity();
        }}
      ></mwc-button>

      <mwc-button
        slot="button"
        label="Reset"
        outlined
        @click=${async () => {
          this.titaniumChipMultiSelect.reset();
        }}
      ></mwc-button>
    `;
  }
}
