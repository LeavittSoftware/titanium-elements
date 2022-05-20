/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, property, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/titanium-address-input';
import { TitaniumAddressInput } from '@leavittsoftware/titanium-address-input';
import { Address } from '@leavittsoftware/titanium-address-input/lib/Address';

/* playground-fold */
@customElement('titanium-address-input-playground')
export class TitaniumAddressInputPlayground extends LitElement {
  @state() private setLocationResult: string | null = null;
  @property({ type: Object }) address: Partial<Address> | null = {
    street: '11 North Main Street',
    city: 'Cedar City',
    state: 'UT',
    zip: '84720',
  };
  @query('titanium-address-input[layout]') private layoutInput!: TitaniumAddressInput;
  @query('titanium-address-input[set-location]') private setLocationInput!: TitaniumAddressInput;
  @query('titanium-address-input[reset]') private resetInput!: TitaniumAddressInput;

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

  firstUpdated() {
    this.setLocationInput.setLocation(this.address);
  }

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using default, required, outlined, icon, helper, and helperPersistent</p>
      <div>
        <titanium-address-input googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <titanium-address-input
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          required
          validation-message="Please input an address"
        ></titanium-address-input>
        <titanium-address-input outlined googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <titanium-address-input icon="home" googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <titanium-address-input googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k" helper="Address for something"></titanium-address-input>
        <titanium-address-input
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          helper="Address for something"
          helperPersistent
        ></titanium-address-input>
      </div>

      <h1>SetLocation()</h1>
      <p>Populates input with pre selected address (using setLocation in firstUpdated)</p>
      <div>
        <titanium-address-input set-location googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <mwc-button outlined @click=${() => (this.setLocationResult = JSON.stringify(this.setLocationInput.setLocation(this.address)))}
          >Set Location</mwc-button
        >
        <span>${this.setLocationResult}</span>
      </div>

      <h1>Layout</h1>
      <p>Layout the input</p>
      <div>
        <titanium-address-input layout googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <mwc-button outlined @click=${() => this.layoutInput.layout()}>Layout</mwc-button>
      </div>

      <h1>Reset</h1>
      <p>Reset the input</p>
      <div>
        <titanium-address-input reset googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
        <mwc-button outlined @click=${() => this.resetInput.reset()}>Reset</mwc-button>
      </div>
    `;
  }
}
