/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import { Debouncer } from '../../titanium/helpers/helpers';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';

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
      this.#autoCompleteService.getPlacePredictions(
        {
          input: searchTerm,
          types: ['address'],
          componentRestrictions: { country: 'us' },
        },
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
      const result = await this.#getSuggestions(searchTerm);
      this.suggestions = result ?? [];
      this.count = this.suggestions.length;
      return;
    } catch (error) {
      if (!error?.message?.includes('Abort error')) {
        TitaniumSnackbarSingleton.open(error);
      }
    }
    this.suggestions = [];
    this.count = 0;
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
    return true;
  }

  override customReportValidity() {
    if (!this.customCheckValidity()) {
      this.error = true;
    } else {
      this.errorText = '';
      this.error = false;
    }
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
        TitaniumSnackbarSingleton.open(error);
      }
    }
    super.setSelected(entity);
  }

  protected renderLeadingInputSlot() {
    return html`<slot name="leading-icon" slot="leading-icon"><md-icon>place</md-icon></slot>`;
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
