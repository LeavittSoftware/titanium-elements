import { property, html, customElement, LitElement, css, query } from 'lit-element';
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
  @property({ type: String }) helper: string;
  @property({ type: Boolean }) helperPersistent: boolean;

  @query('manual-address-dialog') private dialog: ManualAddressDialogElement;
  @query('google-address-input') private input: GoogleAddressInput;

  static styles = css`
    :host {
      display: grid;
      grid-auto-flow: row;
    }

    a {
      font-family: Roboto, Arial, sans-serif;
      color: var(--app-link-color, #3b95ff);
      justify-self: right;
      padding: 3px 3px 0 0;
      text-decoration: none;
      font-weight: 500;
      font-size: 12px;
      cursor: pointer;
    }

    a:link,
    a:visited,
    a:hover {
      text-decoration: none;
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

  public setLocation(location: Partial<Address> | null) {
    this.location = location;
    this.dispatchEvent(new CustomEvent<Partial<Address> | null>('location-changed', { composed: true, detail: location }));
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
        .helper=${this.helper}
        .helperPersistent=${this.helperPersistent}
        @location-changed=${event => {
          const location = event.detail;
          this.setLocation(location);
        }}
      ></google-address-input>
      <a
        href="#find-my-address"
        @click=${async e => {
          e.preventDefault();
          const customAddress = await this.dialog.open(this.location);
          if (customAddress) {
            this.setLocation(customAddress);
            this.input.focus();
          }
        }}
        title="I can't find my address"
        >I can't find my address</a
      >

      <manual-address-dialog .label=${this.label}></manual-address-dialog>
    `;
  }
}
