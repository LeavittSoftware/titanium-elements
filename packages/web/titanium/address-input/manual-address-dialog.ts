import '@material/web/icon/icon';
import '@material/web/select/outlined-select';
import '@material/web/select/select-option';
import '@material/web/dialog/dialog';
import '@material/web/textfield/outlined-text-field';

import { css, html, LitElement, nothing } from 'lit';
import { property, customElement, query, queryAll, state } from 'lit/decorators.js';
import { AddressInputAddress } from './types/address-input-address';
import { MdDialog } from '@material/web/dialog/dialog';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { MdOutlinedSelect } from '@material/web/select/outlined-select';
import { DOMEvent } from '../types/dom-event';
import { allowDialogOverflow, preventDialogOverflow } from '../hacks/dialog-overflow-hacks';
import { reportValidityIfError } from '../hacks/report-validity-if-error';

@customElement('manual-address-dialog')
export class ManualAddressDialog extends LitElement {
  @query('md-dialog') protected accessor dialog: MdDialog;

  @property({ type: String }) accessor label: string = '';
  @property({ type: Boolean, attribute: 'show-county' }) accessor showCounty: boolean;
  @property({ type: Boolean, attribute: 'show-street2' }) accessor showStreet2: boolean;

  @state() protected accessor street: string = '';
  @state() protected accessor street2: string = '';
  @state() protected accessor city: string = '';
  @state() protected accessor county: string = '';
  @state() protected accessor state: string = '';
  @state() protected accessor zip: string = '';

  @queryAll('md-outlined-text-field, md-outlined-select') protected accessor allInputs: NodeListOf<MdOutlinedTextField | MdOutlinedSelect>;

  resolve: (value: Partial<AddressInputAddress> | null) => void;

  public async open(address: AddressInputAddress | null | undefined) {
    this.reset();
    await this.updateComplete;

    this.street = address?.street ?? '';
    this.street2 = address?.street2 ?? '';
    this.city = address?.city ?? '';
    this.state = address?.state ?? '';
    this.zip = address?.zip ?? '';
    this.county = address?.county ?? '';

    this.dialog.show();
    return new Promise<Partial<AddressInputAddress> | null>((res) => {
      this.resolve = res;
    });
  }

  validate() {
    let valid = true;
    this.allInputs.forEach((input) => {
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

    this.allInputs.forEach((input) => input.reset());
  }

  static styles = [
    css`
      md-dialog {
        width: -webkit-fill-available;
        max-width: min(0% + 550px, 100% - 48px);
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @closing=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue !== 'apply') {
            this.resolve(null);
          }
        }}
      >
        <div slot="headline">${this.label}</div>
        <form slot="content">
          <md-outlined-text-field
            label="Street"
            required
            .value=${this.street || ''}
            @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
            @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.street = e.target.value)}
          >
            <md-icon slot="leading-icon">markunread_mailbox</md-icon>
          </md-outlined-text-field>
          ${this.showStreet2
            ? html` <md-outlined-text-field
                @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
                label="Street 2"
                .value=${this.street2 || ''}
                @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.street2 = e.target.value)}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></md-outlined-text-field
              >`
            : nothing}
          <md-outlined-text-field
            label="City"
            required
            .value=${this.city || ''}
            @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
            @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.city = e.target.value)}
            ><md-icon slot="leading-icon">location_city</md-icon></md-outlined-text-field
          >
          ${!this.showCounty
            ? nothing
            : html`<md-outlined-text-field
                @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
                label="County"
                required
                .value=${this.county || ''}
                @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.county = e.target.value)}
                ><md-icon slot="leading-icon">explore</md-icon></md-outlined-text-field
              >`}

          <md-outlined-select
            @opening=${() => preventDialogOverflow(this.dialog)}
            @closing=${() => allowDialogOverflow(this.dialog)}
            @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
            label="State"
            required
            .value=${this.state || ''}
            @request-selection=${(e: DOMEvent<MdOutlinedSelect>) => {
              e.stopPropagation();
              this.state = e.target.value;
            }}
          >
            <md-icon slot="location_on">location_on</md-icon>
            <md-select-option value="AL">
              <div slot="headline">Alabama</div>
            </md-select-option>

            <md-select-option value="AK"> <div slot="headline">Alaska</div></md-select-option>
            <md-select-option value="AS"> <div slot="headline">American Samoa</div></md-select-option>
            <md-select-option value="AZ"> <div slot="headline">Arizona</div></md-select-option>
            <md-select-option value="AR"> <div slot="headline">Arkansas</div></md-select-option>
            <md-select-option value="CA"> <div slot="headline">California</div></md-select-option>
            <md-select-option value="CO"> <div slot="headline">Colorado</div></md-select-option>
            <md-select-option value="CT"> <div slot="headline">Connecticut</div></md-select-option>
            <md-select-option value="DE"> <div slot="headline">Delaware</div></md-select-option>
            <md-select-option value="DC"> <div slot="headline">District of Columbia</div></md-select-option>
            <md-select-option value="FM"> <div slot="headline">Federated States of Micronesia</div></md-select-option>
            <md-select-option value="FL"> <div slot="headline">Florida</div></md-select-option>
            <md-select-option value="GA"> <div slot="headline">Georgia</div></md-select-option>
            <md-select-option value="GU"> <div slot="headline">Guam</div></md-select-option>
            <md-select-option value="HI"> <div slot="headline">Hawaii</div></md-select-option>
            <md-select-option value="ID"> <div slot="headline">Idaho</div></md-select-option>
            <md-select-option value="IL"> <div slot="headline">Illinois</div></md-select-option>
            <md-select-option value="IN"> <div slot="headline">Indiana</div></md-select-option>
            <md-select-option value="IA"> <div slot="headline">Iowa</div></md-select-option>
            <md-select-option value="KS"> <div slot="headline">Kansas</div></md-select-option>
            <md-select-option value="KY"> <div slot="headline">Kentucky</div></md-select-option>
            <md-select-option value="LA"> <div slot="headline">Louisiana</div></md-select-option>
            <md-select-option value="ME"> <div slot="headline">Maine</div></md-select-option>
            <md-select-option value="MH"> <div slot="headline">Marshall Islands</div></md-select-option>
            <md-select-option value="MD"> <div slot="headline">Maryland</div></md-select-option>
            <md-select-option value="MA"> <div slot="headline">Massachusetts</div></md-select-option>
            <md-select-option value="MI"> <div slot="headline">Michigan</div></md-select-option>
            <md-select-option value="MN"> <div slot="headline">Minnesota</div></md-select-option>
            <md-select-option value="MS"> <div slot="headline">Mississippi</div></md-select-option>
            <md-select-option value="MO"> <div slot="headline">Missouri</div></md-select-option>
            <md-select-option value="MT"> <div slot="headline">Montana</div></md-select-option>
            <md-select-option value="NE"> <div slot="headline">Nebraska</div></md-select-option>
            <md-select-option value="NV"> <div slot="headline">Nevada</div></md-select-option>
            <md-select-option value="NH"> <div slot="headline">New Hampshire</div></md-select-option>
            <md-select-option value="NJ"> <div slot="headline">New Jersey</div></md-select-option>
            <md-select-option value="NM"> <div slot="headline">New Mexico</div></md-select-option>
            <md-select-option value="NY"> <div slot="headline">New York</div></md-select-option>
            <md-select-option value="NC"> <div slot="headline">North Carolina</div></md-select-option>
            <md-select-option value="ND"> <div slot="headline">North Dakota</div></md-select-option>
            <md-select-option value="MP"> <div slot="headline">Northern Mariana Islands</div></md-select-option>
            <md-select-option value="OH"> <div slot="headline">Ohio</div></md-select-option>
            <md-select-option value="OK"> <div slot="headline">Oklahoma</div></md-select-option>
            <md-select-option value="OR"> <div slot="headline">Oregon</div></md-select-option>
            <md-select-option value="PW"> <div slot="headline">Palau</div></md-select-option>
            <md-select-option value="PA"> <div slot="headline">Pennsylvania</div></md-select-option>
            <md-select-option value="PR"> <div slot="headline">Puerto Rico</div></md-select-option>
            <md-select-option value="RI"> <div slot="headline">Rhode Island</div></md-select-option>
            <md-select-option value="SC"> <div slot="headline">South Carolina</div></md-select-option>
            <md-select-option value="SD"> <div slot="headline">South Dakota</div></md-select-option>
            <md-select-option value="TN"> <div slot="headline">Tennessee</div></md-select-option>
            <md-select-option value="TX"> <div slot="headline">Texas</div></md-select-option>
            <md-select-option value="UT"> <div slot="headline">Utah</div></md-select-option>
            <md-select-option value="VT"> <div slot="headline">Vermont</div></md-select-option>
            <md-select-option value="VI"> <div slot="headline">Virgin Islands</div></md-select-option>
            <md-select-option value="VA"> <div slot="headline">Virginia</div></md-select-option>
            <md-select-option value="WA"> <div slot="headline">Washington</div></md-select-option>
            <md-select-option value="WV"> <div slot="headline">West Virginia</div></md-select-option>
            <md-select-option value="WI"> <div slot="headline">Wisconsin</div></md-select-option>
            <md-select-option value="WY"> <div slot="headline">Wyoming</div></md-select-option>
          </md-outlined-select>
          <md-outlined-text-field
            label="Zip"
            pattern="^\\d{5}$|^\\d{5}-\\d{4}$"
            required
            .value=${this.zip || ''}
            @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
            @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.zip = e.target.value)}
            ><md-icon slot="leading-icon">map</md-icon></md-outlined-text-field
          >
        </form>

        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close('cancel')}> Cancel </md-text-button>
          <md-text-button
            @click=${() => {
              if (this.validate()) {
                this.dialog.close('apply');
                const address: Partial<AddressInputAddress> = {
                  street: this.street,
                  street2: this.street2,
                  city: this.city,
                  state: this.state,
                  zip: this.zip,
                  county: this.county,
                };
                this.resolve(address);
              }
            }}
            >Update</md-text-button
          >
        </div>
      </md-dialog>
    `;
  }
}
