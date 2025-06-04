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
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { reportValidityIfError } from '../hacks/report-validity-if-error';
import { caStates, usStates } from './utils/states-abbr-to-titlecase';
import { countries } from './utils/country-abbr-to-titlecase';

@customElement('manual-address-dialog')
export class ManualAddressDialog extends LitElement {
  @query('md-dialog') protected accessor dialog: MdDialog;

  @property({ type: String }) accessor label: string = '';
  @property({ type: Boolean, attribute: 'show-county' }) accessor showCounty: boolean;
  @property({ type: Boolean, attribute: 'show-street2' }) accessor showStreet2: boolean;

  @property({ type: Boolean, attribute: 'allow-international' }) accessor allowInternational: boolean = false;

  @state() protected accessor street: string = '';
  @state() protected accessor street2: string = '';
  @state() protected accessor city: string = '';
  @state() protected accessor county: string = '';
  @state() protected accessor country: string = '';
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
    this.country = address?.country ?? '';

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
    this.country = '';

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

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => {
          dialogZIndexHack(e.target);
        }}
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
            autocomplete="address-line1"
            ?required=${!this.allowInternational || this.country === 'US'} 
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
                autocomplete="address-line2"
                .value=${this.street2 || ''}
                @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.street2 = e.target.value)}
              >
                <md-icon slot="leading-icon">meeting_room</md-icon></md-outlined-text-field
              >`
            : nothing}
          <md-outlined-text-field
            label="City"
            autocomplete="address-level2"
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
          ${this.allowInternational
            ? html`<md-outlined-select
                @opening=${() => preventDialogOverflow(this.dialog)}
                @closing=${() => allowDialogOverflow(this.dialog)}
                @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
                label="Country"
                autocomplete="country"
                required
                .value=${this.country || ''}
                @change=${(e: DOMEvent<MdOutlinedSelect>) => {
                  e.stopPropagation();
                  this.country = e.target.value;

                  if (this.country === 'US') {
                    // If manually typed state is a valid US state abbreviation or name, preselect it
                    const foundState = usStates?.find(
                      (s) => s.abbreviation.toLowerCase() === this.state.toLowerCase() || s.name?.toLowerCase() === this.state.toLowerCase()
                    );
                    this.state = foundState ? foundState?.abbreviation : '';
                  } else if (this.country === 'CA') {
                    // If manually typed state is a valid CA state abbreviation or name, preselect it
                    const foundState = caStates?.find(
                      (s) => s.abbreviation.toLowerCase() === this.state.toLowerCase() || s.name?.toLowerCase() === this.state.toLowerCase()
                    );
                    this.state = foundState ? foundState?.abbreviation : '';
                  } else {
                    this.state = '';
                  }
                }}
              >
                <md-icon slot="leading-icon">map</md-icon>
                ${countries.map((s) => html`<md-select-option value=${s.abbreviation}> <div slot="headline">${s.name}</div></md-select-option>`)}
              </md-outlined-select> `
            : nothing}
          ${this.allowInternational && this.country !== 'US' && this.country !== 'CA'
            ? html`
                <md-outlined-text-field
                  label="State/Province"
                  autocomplete="address-level1"
                  required
                  .value=${this.state || ''}
                  @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
                  @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.state = e.target.value)}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>
                </md-outlined-text-field>
              `
            : html`
                <md-outlined-select
                  @opening=${() => preventDialogOverflow(this.dialog)}
                  @closing=${() => allowDialogOverflow(this.dialog)}
                  @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
                  label="State"
                  autocomplete="address-level1"
                  required
                  .value=${this.state || ''}
                  @change=${(e: DOMEvent<MdOutlinedSelect>) => {
                    e.stopPropagation();
                    this.state = e.target.value;
                    if (usStates.some((o) => o.abbreviation.toLowerCase() === this.state.toLowerCase())) {
                      this.country = 'US';
                    }
                  }}
                >
                  <md-icon slot="leading-icon">location_on</md-icon>

                  ${usStates.map(
                    (s) =>
                      html`<md-select-option ?hidden=${this.country === 'CA'} ?selected=${s.abbreviation === this.state} value=${s.abbreviation}>
                        <div slot="headline">${s.name}</div>
                        <div slot="supporting-text">United States</div>
                      </md-select-option>`
                  )}
                  ${caStates.map(
                    (s) =>
                      html`<md-select-option
                        ?hidden=${!this.allowInternational || this.country === 'US'}
                        ?selected=${s.abbreviation === this.state}
                        value=${s.abbreviation}
                      >
                        <div slot="headline">${s.name}</div>
                        <div slot="supporting-text">Canada</div>
                      </md-select-option>`
                  )}
                </md-outlined-select>
              `}

          <md-outlined-text-field
            label="Zip"
            autocomplete="postal-code"
            ?required=${!this.allowInternational || this.country === 'US'}
            .value=${this.zip || ''}
            @blur=${(e: DOMEvent<MdOutlinedTextField>) => reportValidityIfError(e.target)}
            @change=${(e: DOMEvent<MdOutlinedTextField>) => (this.zip = e.target.value)}
            ><md-icon slot="leading-icon">universal_local</md-icon></md-outlined-text-field
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
