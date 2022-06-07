import { css, html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import './google-address-input';
import './manual-address-dialog';

import { Address } from './Address';
import { ManualAddressDialogElement } from './manual-address-dialog';
import { GoogleAddressInput } from './google-address-input';

/**
 * An input with built-in google address search and manual address entering. .
 *
 * @element titanium-address-input
 *
 * @fires location-changed - Fired when address changes. details contains the selected item <T> or null.
 *
 * @cssprop {Color} [--app-link-color=#3b95ff] - Color of manual switch link
 */
@customElement('titanium-address-input')
export class TitaniumAddressInput extends LitElement {
  /**
   *  Displays error state if select is empty or invalid and input is blurred.
   */
  @property({ type: Boolean }) required: boolean;

  /**
   *  Sets outlined styles.
   */
  @property({ type: Boolean }) outlined: boolean;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  The address input or selected by the user.
   */
  @property({ type: Object }) location: Partial<Address> | null;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Address';

  /**
   *  Sets icon.
   */
  @property({ type: String }) icon: string;

  /**
   *  Sets google maps api key.
   */
  @property({ type: String }) googleMapsApiKey: string;

  /**
   *  Sets helper text.
   */
  @property({ type: String }) helper: string;

  /**
   *  Sets whether helper text should persist or not.
   */
  @property({ type: Boolean }) helperPersistent: boolean;

  @property({ type: Boolean, attribute: 'disabled-closing-animation' }) disableClosingAnimation: boolean = false;

  @query('manual-address-dialog') private dialog: ManualAddressDialogElement;
  @query('google-address-input') private input: GoogleAddressInput;

  static styles = css`
    :host {
      display: grid;
      grid-auto-flow: row;
      align-content: start;
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

  /**
   *  Returns true if the input passes validity checks.
   */
  public checkValidity() {
    return this.input.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  public reportValidity() {
    return this.input.reportValidity();
  }

  /**
   *  Resets the input's state.
   */
  public reset() {
    return this.input.reset();
  }

  /**
   *  Runs layout() method on textfield.
   */
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

      <manual-address-dialog .label=${this.label} .disableClosingAnimation=${this.disableClosingAnimation}></manual-address-dialog>
    `;
  }
}
