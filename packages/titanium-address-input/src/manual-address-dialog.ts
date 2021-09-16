import { css, customElement, html, LitElement, property, query } from 'lit-element';

import '@material/mwc-button';
import '@leavittsoftware/titanium-dialog';

import './manual-address-form';

import { TitaniumDialogElement } from '@leavittsoftware/titanium-dialog';
import { Address } from './Address';
import { ManualAddressFormElement } from './manual-address-form';

const SAVE_REASON = 'save';
const CANCEL_REASON = 'cancel';

@customElement('manual-address-dialog')
export class ManualAddressDialogElement extends LitElement {
  @query('manual-address-form') private manualAddressForm: ManualAddressFormElement;
  @query('titanium-dialog') private dialog: TitaniumDialogElement;

  @property({ type: String }) label: string = '';

  public async open(location: Partial<Address> | null) {
    this.manualAddressForm?.reset();
    if (location) {
      this.manualAddressForm.street = location?.street ?? '';
      this.manualAddressForm.city = location?.city ?? '';
      this.manualAddressForm.state = location?.state ?? '';
      this.manualAddressForm.zip = location?.zip ?? '';
    }
    await this.dialog.updateComplete;
    this.dialog.section.style.overflowY = 'inherit';

    const reason = await this.dialog.open();
    if (reason === SAVE_REASON) {
      const address: Partial<Address> = {
        street: this.manualAddressForm.street,
        city: this.manualAddressForm.city,
        state: this.manualAddressForm.state,
        zip: this.manualAddressForm.zip,
      };
      return address;
    }
    return null;
  }

  static styles = css`
    titanium-dialog {
      --titanium-dialog-max-width: 450px;
    }
  `;

  render() {
    return html`
      <titanium-dialog fullwidth .header=${this.label}>
        <manual-address-form slot="content"></manual-address-form>
        <div slot="actions">
          <mwc-button @click=${() => this.dialog.close(CANCEL_REASON)} label="Cancel"></mwc-button>
          <mwc-button
            label="Update"
            @click=${() => {
              if (this.manualAddressForm?.validate()) {
                this.dialog.close(SAVE_REASON);
              }
            }}
          ></mwc-button>
        </div>
      </titanium-dialog>
    `;
  }
}
