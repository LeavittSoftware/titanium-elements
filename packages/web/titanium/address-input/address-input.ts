import { css, html, PropertyValues } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import './google-address-input';
import './manual-address-dialog';

import '@material/web/iconbutton/icon-button';
import '@material/web/icon/icon';

import { GoogleAddressInput } from './google-address-input';
import { ManualAddressDialog } from './manual-address-dialog';

/**
 * An input with built-in google address search and manual address entering. .
 *
 * @element titanium-address-input
 *
 * @fires location-changed - Fired when address changes. details contains the selected item <T> or null.
 *
 */
@customElement('titanium-address-input')
export class TitaniumAddressInput extends GoogleAddressInput {
  /**
   *  Sets whether or not the street2 textfield displays in the manual address dialog
   */
  @property({ type: Boolean, attribute: 'show-street2' }) accessor showStreet2: boolean = false;

  /**
   *  Sets whether or not the county textfield displays in the manual address dialog
   */
  @property({ type: Boolean, attribute: 'show-county' }) accessor showCounty: boolean = false;

  @query('manual-address-dialog') private accessor manualAddressDialog: ManualAddressDialog;

  @property({ type: Boolean, attribute: 'has-selection', reflect: true }) private accessor hasSelection: boolean = false;

  static styles = [
    ...GoogleAddressInput.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        --_supporting-text-trailing-space: 165px;
      }

      :host([has-selection]) {
        --md-outlined-text-field-with-trailing-icon-trailing-space: 36px;
      }
    `,
  ];

  update(changed: PropertyValues<this>) {
    if (changed.has('selected')) {
      this.hasSelection = !!this.selected;
    }

    super.update(changed);
  }

  override renderTrailingSlot() {
    return html`<manual-address-dialog
      .allowInternational=${this.allowInternational}
      .showCounty=${this.showCounty}
      .showStreet2=${this.showStreet2}
      .label=${this.label}
    ></manual-address-dialog>`;
  }

  override renderTrailingInputSlot() {
    return html`
      <md-icon-button
        ?hidden=${this.isLoading}
        ?disabled=${this.disabled}
        slot="trailing-icon"
        title="Can't find address"
        @click=${async (e: MouseEvent) => {
          e.preventDefault();
          const address = await this.manualAddressDialog.open(this.selected);
          if (address) {
            super.setSelectedBase({ Id: Math.random().toString(36).slice(2, 7), ...address });
            this.reportValidity();
          }
        }}
      >
        <md-icon>contact_support</md-icon>
      </md-icon-button>
    `;
  }
}
