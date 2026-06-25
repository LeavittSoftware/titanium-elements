/// <reference types="google.maps" />
// Must precede the @googlemaps/js-api-loader import below; it reads process.env.NODE_ENV at module scope.
import './google-maps-process-shim.js';
import { PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import { Debouncer } from '../../titanium/helpers/helpers';
import { ShowSnackbarEvent } from '../../titanium/snackbar/show-snackbar-event';

import { setOptions, importLibrary } from '@googlemaps/js-api-loader';

import '@material/web/icon/icon';
import { placeToAddress } from './utils/place-result-to-address';
import { addressToString } from './utils/address-to-string';
import { AddressInputAddress } from './types/address-input-address';
import { validateStreet } from './utils/validate-street';
import { HttpError } from '@leavittsoftware/web/leavitt/api-service/HttpError';

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
  @property({ type: String }) accessor googleMapsApiKey: string = '';

  @property({ type: String }) accessor label: string = 'Address';

  @property({ type: String }) accessor placeholder: string = 'Search for an address';

  @property({ type: String }) accessor pathToSelectedText: string = 'primaryDisplayText';

  @property({ type: Boolean, attribute: 'allow-international' }) accessor allowInternational: boolean = false;

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();
  #sessionToken: google.maps.places.AutocompleteSessionToken | undefined;
  #placePredictions = new Map<string, google.maps.places.PlacePrediction>();

  async firstUpdated() {
    setOptions({
      key: this.googleMapsApiKey,
      v: 'weekly',
    });

    await importLibrary('places');
    this.#renewSessionToken();
  }

  #renewSessionToken() {
    this.#placePredictions.clear();
    this.#sessionToken = new google.maps.places.AutocompleteSessionToken();
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
    const request: google.maps.places.AutocompleteRequest = {
      input: searchTerm,
      sessionToken: this.#sessionToken,
      includedPrimaryTypes: ['street_address'],
    };
    if (!this.allowInternational) {
      request.includedRegionCodes = ['us'];
    }

    try {
      const { suggestions } = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(request);

      this.#placePredictions.clear();
      const results: AddressInputAddress[] = [];

      for (const suggestion of suggestions) {
        const prediction = suggestion.placePrediction;
        if (!prediction) {
          continue;
        }

        this.#placePredictions.set(prediction.placeId, prediction);
        results.push({
          Id: prediction.placeId,
          primaryDisplayText: prediction.mainText?.text ?? prediction.text.text,
          secondaryText: prediction.secondaryText?.text,
        });
      }

      return results;
    } catch (error) {
      throw new Error(this.#getPlacesApiErrorMessage(error), { cause: error });
    }
  }

  #getPlacesApiErrorMessage(error: unknown) {
    const message = String((error as Error)?.message ?? error);
    if (message.includes('SERVICE_DISABLED')) {
      return 'Google Places API (New) is not enabled for this API key. In Google Cloud Console, enable "Places API (New)" and "Maps JavaScript API" for the project that owns the key.';
    }
    return message;
  }

  async #getPlaceDetail(placeId: string) {
    const prediction = this.#placePredictions.get(placeId);
    const place = prediction?.toPlace() ?? new google.maps.places.Place({ id: placeId });

    const { place: fetchedPlace } = await place.fetchFields({
      fields: ['addressComponents', 'formattedAddress', 'location'],
    });

    this.#renewSessionToken();
    return fetchedPlace;
  }

  async #doSearch(searchTerm: string) {
    if (!searchTerm) {
      return;
    }
    this.#abortController.abort();
    this.#abortController = new AbortController();
    try {
      const get = this.#getSuggestions(searchTerm);
      this.trackLoadingPromise(get);
      const results = (await get) ?? [];
      this.showSuggestions(results, results.length);
      return;
    } catch (error) {
      const err = error as Partial<HttpError> & { name?: string; message?: string };
      if (err?.name !== 'AbortError' && !err?.message?.includes('Abort error')) {
        this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
      }
    }

    this.showSuggestions([], 0);
  }

  override customCheckValidity() {
    if (!this.selected && this.getTextField()?.value) {
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
        const address = placeToAddress(place);
        if (address) {
          entity = { ...entity, ...address };
        }
      } catch (error) {
        this.dispatchEvent(new ShowSnackbarEvent(error as Partial<HttpError>));
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
