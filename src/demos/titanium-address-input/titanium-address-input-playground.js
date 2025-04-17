import { __decorate } from "tslib";
/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/outlined-button';
import '@material/web/icon/icon';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/address-input/address-input';
import '@leavittsoftware/web/titanium/address-input/google-address-input';
/* playground-fold */
let TitaniumAddressInputPlayground = class TitaniumAddressInputPlayground extends LitElement {
    #setLocationResult_accessor_storage = null;
    get setLocationResult() { return this.#setLocationResult_accessor_storage; }
    set setLocationResult(value) { this.#setLocationResult_accessor_storage = value; }
    #googleAddressInputDemoA_accessor_storage;
    get googleAddressInputDemoA() { return this.#googleAddressInputDemoA_accessor_storage; }
    set googleAddressInputDemoA(value) { this.#googleAddressInputDemoA_accessor_storage = value; }
    #titaniumAddressInputDemoA_accessor_storage;
    get titaniumAddressInputDemoA() { return this.#titaniumAddressInputDemoA_accessor_storage; }
    set titaniumAddressInputDemoA(value) { this.#titaniumAddressInputDemoA_accessor_storage = value; }
    #countries_accessor_storage = ['us'];
    get countries() { return this.#countries_accessor_storage; }
    set countries(value) { this.#countries_accessor_storage = value; }
    static { this.styles = [
        h1,
        h2,
        p,
        css `
      :host {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 0;
      }

      h1,
      h2 {
        margin-bottom: -12px;
      }

      component-demo {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        gap: 24px;
      }

      section[actions] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      [locked] {
        display: block;
        position: relative;
        height: 300px;
        max-width: 650px;
        width: 100%;
      }

      [absolute] {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        will-change: transform;
        width: 100%;
      }

      @media (min-width: 450px) {
        titanium-address-input {
          min-width: 400px;
        }
      }
    `,
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Google address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <google-address-input
          demo-a
          autocomplete="street-address"
          @selected=${(e) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </google-address-input>

        <section actions>
          <md-outlined-button @click=${() => this.googleAddressInputDemoA.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${() => (this.googleAddressInputDemoA.required = !this.googleAddressInputDemoA.required)}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button @click=${() => (this.googleAddressInputDemoA.disabled = !this.googleAddressInputDemoA.disabled)}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${() => (this.googleAddressInputDemoA.supportingText = this.googleAddressInputDemoA.supportingText ? '' : 'Select an address above')}
            >Toggle supporting text</md-outlined-button
          >
          <md-outlined-button
            @click=${() => (this.googleAddressInputDemoA.selected = {
            Id: '1',
            street: '11 North Main Street',
            city: 'Cedar City',
            state: 'UT',
            zip: '84720',
        })}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${() => this.googleAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>
      <component-demo>
        <h2>Slots demo</h2>
        <google-address-input
          autocomplete="address"
          label="Slots"
          @selected=${(e) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
          <md-icon slot="trailing-icon">security</md-icon><md-icon slot="leading-icon">map</md-icon>
        </google-address-input>
      </component-demo>

      <h1>Titanium address input</h1>

      <component-demo>
        <h2>Main demo</h2>
        <titanium-address-input
          autocomplete="address"
          demo-a
          .countries=${this.countries}
          @selected=${(e) => console.log('selected change 1', e.target.selected)}
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        >
        </titanium-address-input>

        <section actions>
          <md-outlined-select
            label="Allowed countries"
            @request-selection=${(e) => {
            e.stopPropagation();
            if (e.target.value === 'US-CA') {
                this.countries = ['us', 'ca'];
            }
            else if (e.target.value === 'US') {
                this.countries = ['us'];
            }
            else if (e.target.value === 'CA') {
                this.countries = ['ca'];
            }
        }}
          >
            <md-icon slot="leading-icon">map</md-icon>
            <md-select-option value="US"> <div slot="headline">United States</div></md-select-option>
            <md-select-option value="CA"> <div slot="headline">Canada</div></md-select-option>
            <md-select-option value="US-CA"> <div slot="headline">US and Canada</div></md-select-option>
          </md-outlined-select>

          <md-outlined-button @click=${() => this.titaniumAddressInputDemoA.reportValidity()}>reportValidity()</md-outlined-button>
          <md-outlined-button @click=${() => (this.titaniumAddressInputDemoA.required = !this.titaniumAddressInputDemoA.required)}
            >Toggle required</md-outlined-button
          >

          <md-outlined-button @click=${() => (this.titaniumAddressInputDemoA.disabled = !this.titaniumAddressInputDemoA.disabled)}
            >Toggle disabled</md-outlined-button
          >

          <md-outlined-button
            @click=${() => (this.titaniumAddressInputDemoA.supportingText = this.titaniumAddressInputDemoA.supportingText ? '' : 'Select an address above')}
            >Toggle supporting text</md-outlined-button
          >

          <md-outlined-button @click=${() => (this.titaniumAddressInputDemoA.showCounty = !this.titaniumAddressInputDemoA.showCounty)}
            >Toggle showCounty text</md-outlined-button
          >

          <md-outlined-button @click=${() => (this.titaniumAddressInputDemoA.showStreet2 = !this.titaniumAddressInputDemoA.showCounty)}
            >Toggle showStreet2 text</md-outlined-button
          >

          <md-outlined-button
            @click=${() => (this.titaniumAddressInputDemoA.selected = {
            Id: '1',
            street: '11 North Main Street',
            city: 'Cedar City',
            state: 'UT',
            zip: '84720',
        })}
            >Prefill an address</md-outlined-button
          >
          <md-outlined-button @click=${() => this.titaniumAddressInputDemoA.reset()}>reset()</md-outlined-button>
        </section>
      </component-demo>
    `;
    }
};
__decorate([
    state()
], TitaniumAddressInputPlayground.prototype, "setLocationResult", null);
__decorate([
    query('google-address-input[demo-a]')
], TitaniumAddressInputPlayground.prototype, "googleAddressInputDemoA", null);
__decorate([
    query('titanium-address-input[demo-a]')
], TitaniumAddressInputPlayground.prototype, "titaniumAddressInputDemoA", null);
__decorate([
    state()
], TitaniumAddressInputPlayground.prototype, "countries", null);
TitaniumAddressInputPlayground = __decorate([
    customElement('titanium-address-input-playground')
], TitaniumAddressInputPlayground);
export { TitaniumAddressInputPlayground };
//# sourceMappingURL=titanium-address-input-playground.js.map