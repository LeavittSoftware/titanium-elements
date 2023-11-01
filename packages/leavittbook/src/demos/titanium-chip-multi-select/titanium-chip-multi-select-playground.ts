/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '../@leavittsoftware/web/titanium/styles/styles';
import { repeat } from 'lit/directives/repeat.js';
import { TitaniumChipMultiSelect } from '../@leavittsoftware/web/titanium/chip-multi-select/chip-multi-select';

import '@material/mwc-button';
import '@material/web/chips/input-chip';
import '@material/web/icon/icon';
import '@material/web/button/outlined-button';
import '../@leavittsoftware/web/titanium/chip-multi-select/chip-multi-select';

const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];
/* playground-fold-end */

/* playground-fold */
@customElement('titanium-chip-multi-select-playground')
export class TitaniumChipMultiSelectPlayground extends LitElement {
  @state() protected demoItems: string[] = chipLabels.slice(0, 4);
  @state() protected disabled: boolean = false;
  @state() protected supportingText: string | null = 'Service animals are welcome.';
  @query('titanium-chip-multi-select[demo2]') titaniumChipMultiSelect: TitaniumChipMultiSelect;

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
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      button-container {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        margin-bottom: 24px;
        align-self: flex-end;
      }

      md-outlined-button span {
        display: flex;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples with options for supporting text, disabled, report validity, and reset</p>
      <div>
        <titanium-chip-multi-select
          demo2
          required
          label="Service Animals"
          ?hasItems=${!!this.demoItems.length}
          .supportingText=${this.supportingText ?? ''}
          ?disabled=${this.disabled}
        >
          <md-outlined-button
            ?disabled=${this.disabled}
            @click=${async () => {
              this.demoItems.push(chipLabels[this.demoItems.length % chipLabels.length]);
              this.requestUpdate('demoItems');
            }}
          >
            <md-icon slot="icon">add</md-icon>
            <span>Add Animal</span>
          </md-outlined-button>
          ${repeat(
            this.demoItems,
            (o) => o,
            (o, index) =>
              html`<md-input-chip
                label=${o}
                closeable
                ?disabled=${this.disabled}
                @remove=${(e: Event) => {
                  e.preventDefault();
                  this.demoItems = this.demoItems.filter((_, i) => i !== index);
                }}
              ></md-input-chip>`
          )}</titanium-chip-multi-select
        >

        <button-container>
          <md-outlined-button
            @click=${async () => {
              this.supportingText = !!this.supportingText ? null : 'Service animals are welcome.';
            }}
            >${this.supportingText ? 'Remove supporting text' : 'Set supporting text'}</md-outlined-button
          >

          <md-outlined-button
            @click=${async () => {
              this.disabled = !this.disabled;
            }}
            >${this.disabled ? 'Enable' : 'Disable'}</md-outlined-button
          >

          <md-outlined-button
            @click=${async () => {
              this.titaniumChipMultiSelect.reportValidity();
            }}
            >Report validity</md-outlined-button
          >

          <md-outlined-button
            @click=${async () => {
              this.titaniumChipMultiSelect.reset();
            }}
            >Reset</md-outlined-button
          >
        </button-container>
      </div>
    `;
  }
}
