/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, property, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
// import '@material/mwc-icon';
// import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/web/titanium/address-input/address-input';
import { TitaniumAddressInput } from '@leavittsoftware/web/titanium/address-input/address-input';
import { Address } from '@leavittsoftware/web/titanium/address-input/Address';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

/* playground-fold */
@customElement('titanium-address-input-playground')
export class TitaniumAddressInputPlayground extends LitElement {
  @state() protected setLocationResult: string | null = null;
  @property({ type: Object }) address: Partial<Address> | null = {
    street: '11 North Main Street',
    city: 'Cedar City',
    state: 'UT',
    zip: '84720',
  };
  @query('titanium-address-input[layout]') protected layoutInput!: TitaniumAddressInput;
  @query('titanium-address-input[set-location]') protected setLocationInput!: TitaniumAddressInput;

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
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
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
  ];

  firstUpdated() {
    this.setLocationInput.setLocation(this.address);
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Attribute examples</p>
      <div>
        <titanium-address-input outlined googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <titanium-address-input outlined label="Disabled" disabled googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <titanium-address-input
          outlined
          label="iconTrailing"
          iconTrailing="map"
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        ></titanium-address-input>
        <titanium-address-input
          outlined
          helperPersistent
          helper="Place must have a street number."
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
        ></titanium-address-input>
        <titanium-address-input
          style="--google-address-input-helper-offset: 110px"
          outlined
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          label="Required w/validation message"
          linkLabel="Can't Find Address"
          required
          validationMessage="Please input an address"
        ></titanium-address-input>
      </div>

      <h1>Absolute container</h1>
      <section locked>
        <div absolute>
          <titanium-address-input
            disabled-closing-animation
            label="Business address"
            outlined
            googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          ></titanium-address-input>
        </div>
      </section>

      <h1>Pre-filled</h1>
      <p>Populates input with pre-selected address (using setLocation in firstUpdated)</p>
      <div>
        <titanium-address-input
          outlined
          set-location
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          @location-changed=${(o: DOMEvent<TitaniumAddressInput>) => (this.setLocationResult = JSON.stringify(o.target.location))}
        ></titanium-address-input>
        <p>${this.setLocationResult}</p>
      </div>

      <h1>Functions</h1>
      <p>Available functions</p>
      <div>
        <titanium-address-input outlined required layout googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <section buttons>
          <mwc-button lowercase outlined @click=${() => this.layoutInput.layout()}>layout()</mwc-button>
          <mwc-button lowercase outlined @click=${() => this.layoutInput.reportValidity()}>reportValidity()</mwc-button>
          <mwc-button lowercase outlined @click=${() => this.layoutInput.reset()}>reset()</mwc-button>
          <mwc-button lowercase outlined @click=${() => this.layoutInput.setLocation(structuredClone(this.address))}>setLocation(this.address)</mwc-button>
        </section>
      </div>

      <h1>County textfield</h1>
      <p>County textfield available in the manual address dialog</p>
      <div>
        <titanium-address-input show-county outlined required googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
      </div>

      <h1>Street2 textfield</h1>
      <p>Street2 textfield available in the manual address dialog</p>
      <div>
        <titanium-address-input show-street2 show-county outlined required googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
      </div>
    `;
  }
}
