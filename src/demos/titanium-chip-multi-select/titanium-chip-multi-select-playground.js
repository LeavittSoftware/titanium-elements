import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import { repeat } from 'lit/directives/repeat.js';
import '@material/web/chips/input-chip';
import '@material/web/icon/icon';
import '@material/web/button/outlined-button';
import '@material/web/button/filled-button';
import '@material/web/button/filled-tonal-button';
import '@leavittsoftware/web/titanium/chip-multi-select/chip-multi-select';
const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];
/* playground-fold-end */
/* playground-fold */
let TitaniumChipMultiSelectPlayground = class TitaniumChipMultiSelectPlayground extends LitElement {
    #demoItems_accessor_storage = chipLabels.slice(0, 4);
    get demoItems() { return this.#demoItems_accessor_storage; }
    set demoItems(value) { this.#demoItems_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #supportingText_accessor_storage = 'Service animals are welcome.';
    get supportingText() { return this.#supportingText_accessor_storage; }
    set supportingText(value) { this.#supportingText_accessor_storage = value; }
    #titaniumChipMultiSelect_accessor_storage;
    get titaniumChipMultiSelect() { return this.#titaniumChipMultiSelect_accessor_storage; }
    set titaniumChipMultiSelect(value) { this.#titaniumChipMultiSelect_accessor_storage = value; }
    static { this.styles = [
        h1,
        p,
        css `
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: grid;
        gap: 12px;
        margin: 24px 0 36px 0;
        resize: both;
        overflow: hidden;
      }

      button-container {
        display: flex;
        gap: 12px;
        margin-top: 12px;
        margin-bottom: 24px;
        align-self: flex-end;
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
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
            >Add Animal <md-icon slot="icon">add</md-icon></md-outlined-button
          >
          ${repeat(this.demoItems, (o) => o, (o, index) => html `<md-input-chip
                label=${o}
                closeable
                ?disabled=${this.disabled}
                @remove=${(e) => {
            e.preventDefault();
            this.demoItems = this.demoItems.filter((_, i) => i !== index);
        }}
              ></md-input-chip>`)}</titanium-chip-multi-select
        >

        <button-container>
          <md-outlined-button
            @click=${async () => {
            this.supportingText = this.supportingText ? null : 'Service animals are welcome.';
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

      <h1>Filled</h1>
      <p>Example with filled variant</p>
      <div>
        <titanium-chip-multi-select
          filled
          demo2
          label="Service Animals"
          ?hasItems=${!!this.demoItems.length}
          .supportingText=${this.supportingText ?? ''}
          ?disabled=${this.disabled}
          required
        >
          <md-filled-tonal-button
            ?disabled=${this.disabled}
            @click=${async () => {
            this.demoItems.push(chipLabels[this.demoItems.length % chipLabels.length]);
            this.requestUpdate('demoItems');
        }}
          >
            Add Animal
            <md-icon slot="icon">add</md-icon>
          </md-filled-tonal-button>
          ${repeat(this.demoItems, (o) => o, (o, index) => html `<md-input-chip
                label=${o}
                closeable
                ?disabled=${this.disabled}
                @remove=${(e) => {
            e.preventDefault();
            this.demoItems = this.demoItems.filter((_, i) => i !== index);
        }}
              ></md-input-chip>`)}</titanium-chip-multi-select
        >
      </div>
    `;
    }
};
__decorate([
    state()
], TitaniumChipMultiSelectPlayground.prototype, "demoItems", null);
__decorate([
    state()
], TitaniumChipMultiSelectPlayground.prototype, "disabled", null);
__decorate([
    state()
], TitaniumChipMultiSelectPlayground.prototype, "supportingText", null);
__decorate([
    query('titanium-chip-multi-select[demo2]')
], TitaniumChipMultiSelectPlayground.prototype, "titaniumChipMultiSelect", null);
TitaniumChipMultiSelectPlayground = __decorate([
    customElement('titanium-chip-multi-select-playground')
], TitaniumChipMultiSelectPlayground);
export { TitaniumChipMultiSelectPlayground };
//# sourceMappingURL=titanium-chip-multi-select-playground.js.map