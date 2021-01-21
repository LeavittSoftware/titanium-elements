import { property, html, customElement, query, LitElement, css } from 'lit-element';
import '@material/mwc-textfield';
import '@em-polymer/google-apis/google-maps-api';

import { TextField } from '@material/mwc-textfield';
import { Address, addressToString, validateStreet } from './Address';

@customElement('google-address-input')
export class GoogleAddressInput extends LitElement {
  @property({ type: Object }) private autocomplete: google.maps.places.Autocomplete;
  @property({ type: String }) private inputValue: string = '';
  @property({ type: Boolean }) required: boolean;
  @property({ type: Boolean }) outlined: boolean;
  @property({ type: String }) validationMessage: string;
  @property({ type: String }) icon: string;
  @property({ type: Object }) location: Partial<Address> | null;
  @property({ type: String }) label: string = 'Address';
  @property({ type: String }) googleMapsApiKey: string;
  @property({ type: String }) helper: string;
  @property({ type: Boolean }) helperPersistent: boolean;

  @query('mwc-textfield') input: TextField & { formElement: HTMLInputElement; mdcFoundation: { setValid(): boolean }; isUiValid: boolean };
  @query('google-maps-api') mapsApi: HTMLElement;

  async disconnectedCallback() {
    super.disconnectedCallback();
    this.mapsApi.removeEventListener('library-loaded-changed', this._onLibraryLoadedChanged.bind(this));
  }

  async updated(changedProps: Map<keyof this, unknown>) {
    if (changedProps.has('location')) {
      this.inputValue = addressToString(this.location);

      await this.input.updateComplete;
      this.reportValidity();
    }
  }

  async firstUpdated() {
    this.input.validityTransform = () => {
      if (!this.location || !validateStreet(this.location?.street ?? '') || !this.location.city || !this.location.state || !this.location.zip) {
        return {
          valid: false,
        };
      }

      return {};
    };

    await this.updateComplete;
    this.mapsApi.addEventListener('library-loaded-changed', this._onLibraryLoadedChanged.bind(this));
    if (typeof google !== 'undefined') {
      this._setUpAutocomplete();
    }
  }

  public async reset() {
    //Hack to get around lack of a reset method on mwc-textfield
    // Update when API is available
    this._clearAddress();
    this._setLocationAndNotify(null);
    await this.updateComplete;
    this.input?.mdcFoundation?.setValid(true);
    this.input.isUiValid = true;
  }

  private _setLocationAndNotify(location: Partial<Address> | null) {
    this.location = location;
    this.dispatchEvent(
      new CustomEvent<Partial<Address> | null>('location-changed', { composed: true, detail: location })
    );
  }

  public checkValidity() {
    return this.input.checkValidity();
  }

  public reportValidity() {
    return this.input.reportValidity();
  }

  public layout() {
    this.input.layout();
  }

  private _onLibraryLoadedChanged(e: CustomEvent) {
    if (!e.detail.value) {
      return;
    }
    this._setUpAutocomplete();
  }

  private async _setUpAutocomplete() {
    await this.input.updateComplete;
    this.autocomplete = new google.maps.places.Autocomplete(this.input.formElement, { types: ['address'] });
    google.maps.event.addListener(this.autocomplete, 'place_changed', this._onPlaceChanged.bind(this));
  }

  private _clearAddress() {
    this.inputValue = '';
    this.dispatchEvent(new CustomEvent('value-changed', { composed: true, detail: { value: this.inputValue } }));
  }

  private _onPlaceChanged() {
    const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();

    if (!place || !place.address_components || !place.formatted_address) {
      this.reset();
      return;
    }

    this.dispatchEvent(new CustomEvent('value-changed', { composed: true, detail: { value: this.inputValue } }));

    const stateComponent = place.address_components.filter(o => o.types.some(p => p === 'administrative_area_level_1'))[0];
    const streetNumberComponent = place.address_components.filter(o => o.types.some(p => p === 'street_number'))[0];
    const streetAddressComponent = place.address_components.filter(o => o.types.some(p => p === 'route'))[0];
    const cityComponent = place.address_components.filter(o => o.types.some(p => p === 'locality'))[0];
    const zipCodeComponent = place.address_components.filter(o => o.types.some(p => p === 'postal_code'))[0];
    const countyComponent = place.address_components.filter(o => o.types.some(p => p === 'administrative_area_level_2'))[0];
    const countryComponent = place.address_components.filter(o => o.types.some(p => p === 'country'))[0];
    const location: Address = {
      street: streetNumberComponent?.short_name
        ? `${streetNumberComponent?.short_name} ${streetAddressComponent?.long_name}`
        : streetAddressComponent?.long_name,
      fullStreet: `${streetNumberComponent?.long_name} ${streetAddressComponent?.long_name}`,
      city: cityComponent?.short_name,
      county: countyComponent?.short_name,
      country: countryComponent?.short_name,
      state: stateComponent?.short_name,
      fullState: stateComponent?.long_name,
      zip: zipCodeComponent?.short_name,
      latitude: place.geometry?.location.lat() ?? null,
      longitude: place.geometry?.location.lng() ?? null,
    };

    if (location.street || location.city || location.state || location.zip || location.fullStreet || location.fullState) {
      this.location = location;
      this._setLocationAndNotify(this.location);
      this.reportValidity();
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    return html`
      <google-maps-api api-key=${this.googleMapsApiKey} libraries="places"></google-maps-api>
      <mwc-textfield
        .required=${this.required}
        .outlined=${this.outlined}
        .value=${this.inputValue}
        .validationMessage=${this.validationMessage}
        .label=${this.label}
        .icon=${this.icon}
        .helper=${this.helper}
        .helperPersistent=${this.helperPersistent}
        @input=${event => {
          this.inputValue = event.target.value;
          if (this.location) {
            this._setLocationAndNotify(null);
          }
          this.dispatchEvent(new CustomEvent('value-changed', { composed: true, detail: { value: this.inputValue } }));
        }}
      ></mwc-textfield>
    `;
  }
}
