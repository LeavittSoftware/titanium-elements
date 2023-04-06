import { css, html, LitElement, nothing } from 'lit';
import { property, customElement, query, queryAll } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@leavittsoftware/titanium-dialog';
import { validateStreet } from './Address';

import { Address } from './Address';
import { TextField } from '@material/mwc-textfield';
import { Select } from '@material/mwc-select';
import { TitaniumDialogElement } from '@leavittsoftware/titanium-dialog';

@customElement('manual-address-dialog')
export class ManualAddressDialogElement extends LitElement {
  @query('titanium-dialog') protected dialog!: TitaniumDialogElement;

  @property({ type: String }) label: string = '';
  @property({ type: String }) street: string = '';
  @property({ type: String }) street2: string = '';
  @property({ type: String }) city: string = '';
  @property({ type: String }) county: string = '';
  @property({ type: String }) state: string = '';
  @property({ type: String }) zip: string = '';
  @property({ type: Boolean, attribute: 'show-county' }) showCounty: boolean;
  @property({ type: Boolean, attribute: 'show-street2' }) showStreet2: boolean;
  @property({ type: Boolean, attribute: 'disabled-closing-animation' }) disableClosingAnimation: boolean = false;

  @query('mwc-textfield[street]') protected streetInput: TextField;
  @queryAll('mwc-textfield, mwc-select') protected allInputs: NodeListOf<(TextField | Select) & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean }>;

  public async open(location: Partial<Address> | null) {
    this.reset();
    if (location) {
      this.street = location?.street ?? '';
      this.street2 = location?.street2 ?? '';
      this.city = location?.city ?? '';
      this.state = location?.state ?? '';
      this.zip = location?.zip ?? '';
      this.county = location?.county ?? '';
    }

    const reason = await this.dialog.open();
    if (reason === 'update') {
      const address: Partial<Address> = {
        street: this.street,
        street2: this.street2,
        city: this.city,
        state: this.state,
        zip: this.zip,
        county: this.county,
      };
      return address;
    }
    return null;
  }

  layout() {
    this.allInputs.forEach(input => {
      input.layout();
    });
  }

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
    this.street2 = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.county = '';

    await this.updateComplete;
    this.allInputs.forEach(input => {
      input.isUiValid = true;
      input.mdcFoundation?.setValid?.(true);
    });
  }

  static styles = css`
    titanium-dialog {
      --titanium-dialog-max-width: 450px;
    }

    @media (max-width: 600px) {
      titanium-dialog {
        --titanium-dialog-max-width: inherit;
      }
    }

    mwc-textfield:first-of-type {
      margin-top: 12px;
    }

    mwc-textfield,
    mwc-select {
      margin-top: 24px;
      width: 100%;
    }
  `;

  render() {
    return html`
      <titanium-dialog
        disable-scroll
        header=${this.label}
        @opened=${e => {
          if (e.target.nodeName === 'DIALOG') {
            this.streetInput.focus();
          }
        }}
        .disableClosingAnimation=${this.disableClosingAnimation}
      >
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
        ${this.showStreet2
          ? html` <mwc-textfield
              street2
              outlined
              icon="meeting_room"
              required
              .value=${this.street2 || ''}
              @input=${event => {
                this.street2 = event.target.value;
              }}
              label="Street 2"
            ></mwc-textfield>`
          : nothing}
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
        ${!this.showCounty
          ? nothing
          : html`<mwc-textfield
              icon="explore"
              outlined
              required
              .value=${this.county || ''}
              @input=${event => {
                this.county = event.target.value;
              }}
              label="County"
            ></mwc-textfield>`}

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
        <mwc-button
          slot="secondaryAction"
          @click=${() => {
            this.dialog.close('close');
          }}
          label="Cancel"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="Update"
          @click=${() => {
            if (this.validate()) {
              this.dialog.close('update');
            }
          }}
        ></mwc-button>
      </titanium-dialog>
    `;
  }
}
