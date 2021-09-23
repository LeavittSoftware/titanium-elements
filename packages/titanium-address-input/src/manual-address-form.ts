import { css, html, LitElement } from 'lit';
import { property, customElement, query, queryAll } from 'lit/decorators.js';

import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

import { TextField } from '@material/mwc-textfield';
import { validateStreet } from './Address';
import { Select } from '@material/mwc-select';

@customElement('manual-address-form')
export class ManualAddressFormElement extends LitElement {
  @property({ type: String }) street: string = '';
  @property({ type: String }) city: string = '';
  @property({ type: String }) state: string = '';
  @property({ type: String }) zip: string = '';

  @query('mwc-textfield[street]') private streetInput: TextField;
  @queryAll('mwc-textfield, mwc-select') private allInputs: NodeListOf<(TextField | Select) & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean }>;

  async firstUpdated() {
    this.streetInput.validityTransform = newValue => (validateStreet(newValue) ? {} : { valid: false });
  }

  validate() {
    let valid = true;
    this.allInputs.forEach(input => {
      if (!input.reportValidity()) {
        valid = false;
      }
    });
    return valid;
  }

  async reset() {
    this.street = '';
    this.city = '';
    this.state = '';
    this.zip = '';

    await this.updateComplete;
    this.allInputs.forEach(input => {
      input.isUiValid = true;
      input.mdcFoundation?.setValid?.(true);
    });
  }

  static styles = css`
    form {
      display: grid;
      gap: 24px;
    }
  `;

  render() {
    return html`
      <form slot="content">
        <mwc-textfield
          street
          outlined
          icon="markunread_mailbox"
          required
          .value=${this.street || ''}
          @input=${event => {
            this.street = event.target.value;
          }}
          label="Street"
        ></mwc-textfield>
        <mwc-textfield
          icon="location_city"
          outlined
          required
          .value=${this.city || ''}
          @input=${event => {
            this.city = event.target.value;
          }}
          label="City"
        ></mwc-textfield>
        <mwc-select
          .value=${this.state || ''}
          @selected=${event => {
            this.state = event.target.value;
          }}
          outlined
          icon="location_on"
          label="State"
          required
        >
          <mwc-list-item graphic="icon" value="AL">Alabama</mwc-list-item>
          <mwc-list-item graphic="icon" value="AK">Alaska</mwc-list-item>
          <mwc-list-item graphic="icon" value="AS">American Samoa</mwc-list-item>
          <mwc-list-item graphic="icon" value="AZ">Arizona</mwc-list-item>
          <mwc-list-item graphic="icon" value="AR">Arkansas</mwc-list-item>
          <mwc-list-item graphic="icon" value="CA">California</mwc-list-item>
          <mwc-list-item graphic="icon" value="CO">Colorado</mwc-list-item>
          <mwc-list-item graphic="icon" value="CT">Connecticut</mwc-list-item>
          <mwc-list-item graphic="icon" value="DE">Delaware</mwc-list-item>
          <mwc-list-item graphic="icon" value="DC">District of Columbia</mwc-list-item>
          <mwc-list-item graphic="icon" value="FM">Federated States of Micronesia</mwc-list-item>
          <mwc-list-item graphic="icon" value="FL">Florida</mwc-list-item>
          <mwc-list-item graphic="icon" value="GA">Georgia</mwc-list-item>
          <mwc-list-item graphic="icon" value="GU">Guam</mwc-list-item>
          <mwc-list-item graphic="icon" value="HI">Hawaii</mwc-list-item>
          <mwc-list-item graphic="icon" value="ID">Idaho</mwc-list-item>
          <mwc-list-item graphic="icon" value="IL">Illinois</mwc-list-item>
          <mwc-list-item graphic="icon" value="IN">Indiana</mwc-list-item>
          <mwc-list-item graphic="icon" value="IA">Iowa</mwc-list-item>
          <mwc-list-item graphic="icon" value="KS">Kansas</mwc-list-item>
          <mwc-list-item graphic="icon" value="KY">Kentucky</mwc-list-item>
          <mwc-list-item graphic="icon" value="LA">Louisiana</mwc-list-item>
          <mwc-list-item graphic="icon" value="ME">Maine</mwc-list-item>
          <mwc-list-item graphic="icon" value="MH">Marshall Islands</mwc-list-item>
          <mwc-list-item graphic="icon" value="MD">Maryland</mwc-list-item>
          <mwc-list-item graphic="icon" value="MA">Massachusetts</mwc-list-item>
          <mwc-list-item graphic="icon" value="MI">Michigan</mwc-list-item>
          <mwc-list-item graphic="icon" value="MN">Minnesota</mwc-list-item>
          <mwc-list-item graphic="icon" value="MS">Mississippi</mwc-list-item>
          <mwc-list-item graphic="icon" value="MO">Missouri</mwc-list-item>
          <mwc-list-item graphic="icon" value="MT">Montana</mwc-list-item>
          <mwc-list-item graphic="icon" value="NE">Nebraska</mwc-list-item>
          <mwc-list-item graphic="icon" value="NV">Nevada</mwc-list-item>
          <mwc-list-item graphic="icon" value="NH">New Hampshire</mwc-list-item>
          <mwc-list-item graphic="icon" value="NJ">New Jersey</mwc-list-item>
          <mwc-list-item graphic="icon" value="NM">New Mexico</mwc-list-item>
          <mwc-list-item graphic="icon" value="NY">New York</mwc-list-item>
          <mwc-list-item graphic="icon" value="NC">North Carolina</mwc-list-item>
          <mwc-list-item graphic="icon" value="ND">North Dakota</mwc-list-item>
          <mwc-list-item graphic="icon" value="MP">Northern Mariana Islands</mwc-list-item>
          <mwc-list-item graphic="icon" value="OH">Ohio</mwc-list-item>
          <mwc-list-item graphic="icon" value="OK">Oklahoma</mwc-list-item>
          <mwc-list-item graphic="icon" value="OR">Oregon</mwc-list-item>
          <mwc-list-item graphic="icon" value="PW">Palau</mwc-list-item>
          <mwc-list-item graphic="icon" value="PA">Pennsylvania</mwc-list-item>
          <mwc-list-item graphic="icon" value="PR">Puerto Rico</mwc-list-item>
          <mwc-list-item graphic="icon" value="RI">Rhode Island</mwc-list-item>
          <mwc-list-item graphic="icon" value="SC">South Carolina</mwc-list-item>
          <mwc-list-item graphic="icon" value="SD">South Dakota</mwc-list-item>
          <mwc-list-item graphic="icon" value="TN">Tennessee</mwc-list-item>
          <mwc-list-item graphic="icon" value="TX">Texas</mwc-list-item>
          <mwc-list-item graphic="icon" value="UT">Utah</mwc-list-item>
          <mwc-list-item graphic="icon" value="VT">Vermont</mwc-list-item>
          <mwc-list-item graphic="icon" value="VI">Virgin Islands</mwc-list-item>
          <mwc-list-item graphic="icon" value="VA">Virginia</mwc-list-item>
          <mwc-list-item graphic="icon" value="WA">Washington</mwc-list-item>
          <mwc-list-item graphic="icon" value="WV">West Virginia</mwc-list-item>
          <mwc-list-item graphic="icon" value="WI">Wisconsin</mwc-list-item>
          <mwc-list-item graphic="icon" value="WY">Wyoming</mwc-list-item>
        </mwc-select>
        <mwc-textfield
          outlined
          icon="map"
          type="text"
          pattern="^\\d{5}$|^\\d{5}-\\d{4}$"
          inputmode="numeric"
          required
          .value=${this.zip || ''}
          @input=${event => {
            this.zip = event.target.value;
          }}
          label="Zip"
        ></mwc-textfield>
      </form>
    `;
  }
}
