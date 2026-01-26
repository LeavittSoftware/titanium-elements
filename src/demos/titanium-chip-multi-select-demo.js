import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';
import '@material/web/chips/input-chip';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@leavittsoftware/web/titanium/chip-multi-select/chip-multi-select';
import StoryStyles from '../styles/story-styles';
const chipLabels = ['Dog', 'Cat', 'Lion', 'Hedgehog', 'Turtle', 'Monkey', 'Owl', 'Peacock', 'Pigeon', 'Spider', 'Tortoise', 'Zebra'];
let TitaniumChipMultiSelectDemo = class TitaniumChipMultiSelectDemo extends LitElement {
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
    #titaniumChipMultiSelectFilled_accessor_storage;
    get titaniumChipMultiSelectFilled() { return this.#titaniumChipMultiSelectFilled_accessor_storage; }
    set titaniumChipMultiSelectFilled(value) { this.#titaniumChipMultiSelectFilled_accessor_storage = value; }
    static { this.styles = [
        StoryStyles,
        css `
      titanium-chip-multi-select {
        margin-bottom: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
    ]; }
    render() {
        return html `
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium chip multi select" level1Href="/titanium-chip-multi-select" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium chip multi select" className="TitaniumChipMultiSelect"></story-header>

            <div>
              <h1>Default</h1>
              <titanium-chip-multi-select
                required
                label="Service Animals"
                ?hasItems=${!!this.demoItems.length}
                .supportingText=${this.supportingText ?? ''}
                ?disabled=${this.disabled}
              >
                <md-filled-tonal-button
                  ?disabled=${this.disabled}
                  @click=${async () => {
            this.demoItems.push(chipLabels[this.demoItems.length % chipLabels.length]);
            this.requestUpdate('demoItems');
        }}
                  >Add Animal <md-icon slot="icon">add</md-icon></md-filled-tonal-button
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

              <h1>Filled</h1>
              <titanium-chip-multi-select
                filled
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

              <section actions>
                <md-filled-tonal-button
                  @click=${async () => {
            this.supportingText = this.supportingText ? null : 'Service animals are welcome.';
        }}
                  >${this.supportingText ? 'Remove supporting text' : 'Set supporting text'}</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async () => {
            this.disabled = !this.disabled;
        }}
                  >${this.disabled ? 'Enable' : 'Disable'}</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async () => {
            this.titaniumChipMultiSelect.reportValidity();
            this.titaniumChipMultiSelectFilled.reportValidity();
        }}
                  >Report validity</md-filled-tonal-button
                >

                <md-filled-tonal-button
                  @click=${async () => {
            this.titaniumChipMultiSelect.reset();
            this.titaniumChipMultiSelectFilled.reset();
        }}
                  >Reset</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-chip-multi-select"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
    }
};
__decorate([
    state()
], TitaniumChipMultiSelectDemo.prototype, "demoItems", null);
__decorate([
    state()
], TitaniumChipMultiSelectDemo.prototype, "disabled", null);
__decorate([
    state()
], TitaniumChipMultiSelectDemo.prototype, "supportingText", null);
__decorate([
    query('titanium-chip-multi-select')
], TitaniumChipMultiSelectDemo.prototype, "titaniumChipMultiSelect", null);
__decorate([
    query('titanium-chip-multi-select[filled]')
], TitaniumChipMultiSelectDemo.prototype, "titaniumChipMultiSelectFilled", null);
TitaniumChipMultiSelectDemo = __decorate([
    customElement('titanium-chip-multi-select-demo')
], TitaniumChipMultiSelectDemo);
export { TitaniumChipMultiSelectDemo };
//# sourceMappingURL=titanium-chip-multi-select-demo.js.map