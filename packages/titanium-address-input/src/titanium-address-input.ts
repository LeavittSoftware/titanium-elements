import { property, html, customElement, LitElement, css, query } from 'lit-element';
import '@material/mwc-icon-button';
import './google-address-input';
import './manual-address-dialog';

import { Address } from './Address';
import { ManualAddressDialogElement } from './manual-address-dialog';
import { GoogleAddressInput } from './google-address-input';

@customElement('titanium-address-input')
export class TitaniumAddressInput extends LitElement {
  @property({ type: Boolean }) required: boolean;
  @property({ type: Boolean }) outlined: boolean;
  @property({ type: String }) validationMessage: string;
  @property({ type: Object }) location: Partial<Address> | null;
  @property({ type: String }) label: string = 'Address';
  @property({ type: String }) icon: string;
  @property({ type: String }) googleMapsApiKey: string;

  @query('manual-address-dialog') private dialog: ManualAddressDialogElement;
  @query('google-address-input') private input: GoogleAddressInput;

  static styles = css`
    :host {
      display: grid;
      grid: 'input button' / 1fr auto;
      grid-gap: 0 12px;
    }

    mwc-icon-button {
      margin-top: 4px;
      color: var(--app-text-color);
    }
  `;

  public checkValidity() {
    return this.input.checkValidity();
  }

  public reportValidity() {
    return this.input.reportValidity();
  }

  public reset() {
    return this.input.reset();
  }

  public layout() {
    return this.input.layout();
  }

  private _setLocationAndNotify(location: Partial<Address> | null) {
    this.location = location;
    this.dispatchEvent(
      new CustomEvent<Partial<Address> | null>('location-changed', { composed: true, detail: location })
    );
  }

  render() {
    return html`
      <google-address-input
        .required=${this.required}
        .outlined=${this.outlined}
        .location=${this.location}
        .icon=${this.icon}
        .validationMessage=${this.validationMessage}
        .label=${this.label}
        .googleMapsApiKey=${this.googleMapsApiKey}
        @location-changed=${event => {
          const location = event.detail;
          this._setLocationAndNotify(location);
        }}
      ></google-address-input>
      <mwc-icon-button
        icon="keyboard"
        @click=${async () => {
          const customAddress = await this.dialog.open(this.location);
          if (customAddress) {
            this._setLocationAndNotify(customAddress);
            this.input.focus();
          }
        }}
        title="I can't find my address"
        label="I can't find my address"
      >
      </mwc-icon-button>
      <manual-address-dialog .label=${this.label}></manual-address-dialog>
    `;
  }
}
