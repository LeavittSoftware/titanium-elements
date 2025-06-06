import { PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import { Debouncer } from '../../titanium/helpers/helpers';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';

import { Loader } from '@googlemaps/js-api-loader';

import '@material/web/icon/icon';
import { placeResultToAddress } from './utils/place-result-to-address';
import { addressToString } from './utils/address-to-string';
import { AddressInputAddress } from './types/address-input-address';
import { validateStreet } from './utils/validate-street';

/**
 *  Single select input that searches Places using the Google Places API
 *
 *  @element google-address-input
 *
 */
@customElement('google-address-input')
export class GoogleAddressInput extends TitaniumSingleSelectBase<AddressInputAddress> {
  /**
   *  **REQUIRED** GoogleAPI key for Places API
   */
  @property({ type: String }) accessor googleMapsApiKey: string;

  @property({ type: String }) accessor label: string = 'Address';

  @property({ type: String }) accessor placeholder: string = 'Search for an address';

  @property({ type: String }) accessor pathToSelectedText: string = 'primaryDisplayText';

  @property({ type: Boolean, attribute: 'allow-international' }) accessor allowInternational: boolean = false;

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  @property({ reflect: true, type: String }) accessor autocorrect: string = 'off';

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();
  #placesService: google.maps.places.PlacesService;
  #autoCompleteService: google.maps.places.AutocompleteService;

  async firstUpdated() {
    const loader = new Loader({
      apiKey: this.googleMapsApiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    await loader.importLibrary('places');

    this.#placesService = new google.maps.places.PlacesService(document.createElement('div'));
    this.#autoCompleteService = new google.maps.places.AutocompleteService();
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('selected')) {
      //Re-write the primaryDisplayText
      if (this.selected) {
        const addressFormatted = addressToString(this.selected);
        if (addressFormatted !== this.selected.primaryDisplayText) {
          this.selected.primaryDisplayText = addressToString(this.selected);
          this.requestUpdate('selected');
        }
      }
    }
  }

  async #getSuggestions(searchTerm: string) {
    return new Promise<AddressInputAddress[] | null>((res) => {
      const autoCompletionRequest: google.maps.places.AutocompletionRequest = {
        input: searchTerm,
        types: ['address'],
      };
      if (!this.allowInternational) {
        autoCompletionRequest.componentRestrictions = { country: ['us'] };
      }
      this.#autoCompleteService.getPlacePredictions(
        autoCompletionRequest,
        (predictions: google.maps.places.AutocompletePrediction[] | null, status: google.maps.places.PlacesServiceStatus) => {
          if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
            console.warn(status);
            return res([]);
          }

          return res(
            predictions.map(
              (o) =>
                ({
                  Id: o.place_id,
                  primaryDisplayText: o?.structured_formatting?.main_text || o.description,
                  secondaryText: o.structured_formatting?.secondary_text,
                }) satisfies AddressInputAddress
            )
          );
        }
      );
    });
  }

  async #getPlaceDetail(placeId: string) {
    return new Promise<google.maps.places.PlaceResult>((res, rej) => {
      const request: google.maps.places.PlaceDetailsRequest = {
        placeId: placeId,
        fields: ['address_components', 'formatted_address', 'geometry'],
      };

      this.#placesService.getDetails(request, (place, status) => {
        if (status != google.maps.places.PlacesServiceStatus.OK || !place) {
          return rej(status);
        }

        return res(place);
      });
    });
  }

  async #doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.#abortController.abort();
    this.#abortController = new AbortController();
    try {
      const get = this.#getSuggestions(searchTerm);
      this.loadWhile(get);
      const results = (await get) ?? [];
      this.showSuggestions(results, results.length);
      return;
    } catch (error) {
      if (!error?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error));
      }
    }

    this.showSuggestions([], 0);
  }

  override customCheckValidity() {
    if (!this.selected && this.textfield?.value) {
      this.errorText = 'Please enter a valid address in this field';
      return false;
    }

    if (!this.required && !this.selected) {
      return true;
    }

    if (!this.selected) {
      this.errorText = 'Please enter a valid address in this field';
      return false;
    }

    if (!this.allowInternational || this.selected?.country === 'US') {
      if (!validateStreet(this.selected?.street ?? '')) {
        this.errorText = 'Please correct the invalid street';
        return false;
      }

      if (!this.selected?.city) {
        this.errorText = 'Please correct the missing city';
        return false;
      }

      if (!this.selected?.state) {
        this.errorText = 'Please correct the missing state';
        return false;
      }

      if (!this.selected?.zip) {
        this.errorText = 'Please correct the missing zip code';
        return false;
      }
    }
    return true;
  }

  override customReportValidity() {
    if (!this.customCheckValidity()) {
      this.error = true;
    } else {
      this.errorText = '';
      this.error = false;
    }
    return !this.error;
  }

  // Overloaded base

  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected async setSelected(entity: AddressInputAddress | null) {
    if (entity) {
      try {
        const place = await this.#getPlaceDetail(entity.Id);
        const address = placeResultToAddress(place);
        if (address) {
          entity = { ...entity, ...address };
        }
      } catch (error) {
        this.dispatchEvent(new ShowSnackbarEvent(error));
      }
    }
    super.setSelected(entity);
  }

  protected setSelectedBase(entity: AddressInputAddress | null) {
    super.setSelected(entity);
  }

  protected renderLeadingInputSlot() {
    return html`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`;
  }

  protected override renderTrailingMenuSlot() {
    return html` <div
      ?hidden=${!this.suggestions.length}
      style="display: flex; gap: 4px; justify-content: flex-end; margin: 0 8px -4px 8px; align-items: center; "
    >
      <span style="color: var(--md-sys-color-on-surface-variant); font-weight: 500; font-size:12px;opacity: .6;">powered by</span>
      <img
        google
        style="height: 28px"
        src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
        alt="Powered by Google"
      />
    </div>`;
  }

  protected override renderSelectedLeadingInputSlot(_item: AddressInputAddress) {
    return html` <md-icon slot="leading-icon">place</md-icon> `;
  }

  protected override renderSuggestion(item: AddressInputAddress) {
    return html`<md-menu-item .item=${item} ?selected=${this.selected?.Id === item.Id}>
      <md-icon slot="start">place</md-icon>
      <span slot="headline">${item.primaryDisplayText}</span>
      <span slot="supporting-text">${item.secondaryText}</span>
    </md-menu-item>`;
  }
}
