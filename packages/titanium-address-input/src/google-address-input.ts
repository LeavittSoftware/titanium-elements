import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-linear-progress';
import '@material/mwc-menu';
import '@material/mwc-icon';

import { css, html, LitElement, PropertyValues } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';

import { Menu } from '@material/mwc-menu';
import { Loader } from '@googlemaps/js-api-loader';
import { TextField } from '@material/mwc-textfield';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { Debouncer, LoadWhile } from '@leavittsoftware/titanium-helpers';
import { SelectedDetail } from '@material/mwc-menu/mwc-menu-base';
import { MenuSurface } from '@material/mwc-menu/mwc-menu-surface';
import { Address, addressToString, validateStreet } from './Address';
/**
 *  Single select input that searches Places using the Google Places API
 *
 *  @element google-address-input
 *
 *  @fires location-changed - Fired when a valid location is selected or deselected
 *  @fires value-changed - Fired on user input
 *
 */
@customElement('google-address-input')
export class GoogleAddressInput extends LoadWhile(LitElement) {
  @state() protected count: number = 0;
  @state() protected searchTerm: string = '';
  @state() protected suggestions: google.maps.places.AutocompletePrediction[] = [];
  @query('mwc-menu') protected menu: Menu;
  @query('mwc-textfield') protected input: TextField & { mdcFoundation: { setValid(): boolean }; isUiValid: boolean };

  /**
   *  **REQUIRED** GoogleAPI key for Places API
   */
  @property({ type: String }) googleMapsApiKey: string;

  /**
   *  Get or Set location
   */
  @property({ type: Object }) location: Partial<Address> | null;

  /**
   *  Message to show in the error color when the element is invalid.
   */
  @property({ type: String }) validationMessage: string;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) label: string = 'Address';

  /**
   *  Sets placeholder text value.
   */
  @property({ type: String }) placeholder: string = 'Search for an address';

  /**
   *  Leading icon to display in input
   */
  @property({ type: String }) icon: string = 'place';

  /**
   *  Trailing icon to display in input.
   */
  @property({ type: String }) iconTrailing: string;

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean }) disabled: boolean = false;

  /**
   *  Displays error state if input is empty and input is blurred.
   */
  @property({ type: Boolean }) required: boolean = false;

  /**
   *  Helper text to display below the select. Always displays by default.
   */
  @property({ type: String }) helper: string = '';

  /**
   *   Always show the helper text despite focus.
   */
  @property({ type: Boolean }) helperPersistent: boolean;

  /**
   *  Sets the dropdown menu's position to fixed. This is useful when the select is inside of a stacking context e.g. inside of an mwc-dialog. Note, that --mdc-menu-min-width or --mdc-menu-max-width may have to be set to resize the menu to the width anchor.
   */
  @property({ type: Boolean }) fixedMenuPosition = false;

  @property({ type: Boolean, reflect: true }) protected hasHelperOffset = false;

  #placesService: google.maps.places.PlacesService;
  #autoCompleteService: google.maps.places.AutocompleteService;

  async firstUpdated() {
    const loader = new Loader({
      apiKey: this.googleMapsApiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    await loader.load();

    this.#placesService = new google.maps.places.PlacesService(document.createElement('div'));
    this.#autoCompleteService = new google.maps.places.AutocompleteService();

    this.menu.anchor = this.input;

    this.layout();

    this.input.validityTransform = () => {
      if (this.required) {
        if (!this.location || !validateStreet(this.location?.street ?? '') || !this.location.city || !this.location.state || !this.location.zip) {
          return {
            valid: false,
          };
        }
      } else {
        if (
          (!this.location && this.searchTerm) ||
          (this.location && (!validateStreet(this.location?.street ?? '') || !this.location.city || !this.location.state || !this.location.zip))
        ) {
          return {
            valid: false,
          };
        }
      }
      return {};
    };

    await this.updateComplete;
    const helperLine = this.input.shadowRoot?.querySelector<HTMLDivElement>('.mdc-text-field-helper-line');
    if (helperLine) {
      this.hasHelperOffset = true;
      helperLine.style.paddingRight = 'var(--google-address-input-helper-offset, 135px)';
    }
  }

  async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('location')) {
      this.searchTerm = addressToString(this.location);
      await this.updateComplete;
      this.reportValidity();
    }
  }

  /**
   *  Runs layout() method on textfield.
   */
  layout() {
    this.input.layout();
  }

  /**
   *  Resets the inputs state.
   */
  async reset() {
    // this.#clearAddress();
    this.location = null;
    this.suggestions = [];
    this.count = 0;

    //Wait for updates on input before resetting input state
    setTimeout(() => {
      if (this.input) {
        this.input.isUiValid = true;
        this.input.mdcFoundation?.setValid?.(true);
      }
    }, 0);
  }

  /**
   *  Sets focus on the input.
   */
  async focus() {
    await this.input.updateComplete;
    this.input.focus();
  }

  /**
   *  Returns true if the input passes validity checks.
   */
  checkValidity() {
    return this.input.checkValidity();
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the input is invalid.
   */
  reportValidity() {
    return this.input.reportValidity();
  }

  #abortController: AbortController = new AbortController();

  async #getSuggestions(searchTerm: string) {
    return new Promise<google.maps.places.AutocompletePrediction[] | null>(res => {
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

          return res(predictions);
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

  #onPlaceChanged(place: google.maps.places.PlaceResult) {
    if (!place || !place.address_components || !place.formatted_address) {
      this.reset();
      return;
    }

    const neighborhood = place.address_components.find(o => o.types.some(p => p === 'neighborhood'));
    const stateComponent = place.address_components.find(o => o.types.some(p => p === 'administrative_area_level_1'));
    const streetNumberComponent = place.address_components.find(o => o.types.some(p => p === 'street_number'));
    const streetAddressComponent = place.address_components.find(o => o.types.some(p => p === 'route'));

    // GOOGLE flip-flops neighborhood and locality, neither can be used for a accurate city. formatted_address however seems to
    // always show the accurate city.
    const locality = place.address_components.find(o => o.types.some(p => p === 'locality'));
    const sublocality = place.address_components.find(o => o.types.some(p => p === 'sublocality'));
    const cityComponent =
      neighborhood?.short_name && place.formatted_address.includes(neighborhood.short_name + ',') ? neighborhood : locality ? locality : sublocality;
    const zipCodeComponent = place.address_components.find(o => o.types.some(p => p === 'postal_code'));
    const countyComponent = place.address_components.find(o => o.types.some(p => p === 'administrative_area_level_2'));
    const countryComponent = place.address_components.find(o => o.types.some(p => p === 'country'));
    const location: Address = {
      street: streetNumberComponent?.short_name
        ? `${streetNumberComponent?.short_name} ${streetAddressComponent?.short_name}`
        : streetAddressComponent?.short_name ?? '',
      fullStreet: `${streetNumberComponent?.long_name} ${streetAddressComponent?.long_name}`,
      city: cityComponent?.short_name ?? '',
      county: countyComponent?.short_name ?? '',
      country: countryComponent?.short_name ?? '',
      state: stateComponent?.short_name ?? '',
      fullState: stateComponent?.long_name ?? '',
      zip: zipCodeComponent?.short_name ?? '',
      latitude: place.geometry?.location.lat() ?? null,
      longitude: place.geometry?.location.lng() ?? null,
    };

    if (location.street || location.city || location.state || location.zip || location.fullStreet || location.fullState) {
      this.setLocation(location);
    }
  }

  public async setLocation(location: Partial<Address> | null) {
    this.location = location;
    this.dispatchEvent(new CustomEvent<Partial<Address> | null>('location-changed', { composed: true, detail: location }));
  }

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      --mdc-menu-max-width: 550px;
    }

    mwc-textfield {
      width: 100%;
      background-color: var(--google-address-input-background-color, #fff);
      border-radius: 4px;
    }

    :host([shaped]) {
      --mdc-shape-small: 28px;
    }

    :host([shallow]) {
      --mdc-shape-small: 12px;
    }

    :host([shaped]) mwc-textfield {
      border-radius: 28px;
    }

    :host([shallow]) mwc-textfield {
      border-radius: 12px;
    }

    mwc-linear-progress {
      margin: 0 12px;
    }

    img[google] {
      display: block;
      margin-bottom: -4px;
      margin-left: auto;
      padding: 4px 4px 0 4px;
    }

    mwc-icon {
      color: white;
      background-color: #c9c9c9;
    }

    [summary] {
      padding: 0px 16px 4px 16px;
      font-family: Roboto, Arial, sans-serif;
      color: var(--app-light-text-color, #80868b);
      line-height: 18px;
      font-size: 13px;
    }
  `;

  render() {
    return html`
      <mwc-textfield
        outlined
        .label=${this.label}
        .disabled=${this.disabled}
        .placeholder=${this.placeholder}
        .validationMessage=${this.validationMessage}
        .icon=${this.icon}
        .iconTrailing=${this.iconTrailing}
        .helperPersistent=${this.helperPersistent}
        .helper=${this.helper}
        .required=${this.required}
        .value=${this.searchTerm}
        @keydown=${(e: KeyboardEvent) => {
          if (this.suggestions.length > 0 && (e.key == 'Enter' || e.key == 'ArrowDown')) {
            this.menu.focusItemAtIndex(0);
          }
          if (e.key == 'Escape') {
            e.stopPropagation();
            this.input.value = '';
            this.location = null;
          }
        }}
        @input=${async e => {
          const userInput = e.target.value;

          if (this.location) {
            this.setLocation(null);
            await this.updateComplete;
          }

          this.suggestions = [];
          this.count = 0;

          //Let the input run validation on empty
          //then re-bind in user input and start searching
          setTimeout(() => {
            this.searchTerm = userInput;
            this.menu.open = !!this.searchTerm;
            this.loadWhile(this.#doSearchDebouncer.debounce(userInput));
            this.dispatchEvent(new CustomEvent('value-changed', { composed: true, detail: { value: userInput } }));
          }, 0);
        }}
        @focus=${() => {
          if (this.location) {
            this.input.select();
          } else {
            this.menu.open = !!this.searchTerm;
          }
        }}
      ></mwc-textfield>

      <mwc-menu
        ?fixed=${this.fixedMenuPosition}
        activatable
        corner="BOTTOM_LEFT"
        defaultFocus="NONE"
        x="0"
        y=${this.validationMessage ? '-19' : '0'}
        @opened=${() =>
          //Prevent previouslyFocused behavior of msc-menu on close
          ((this.menu.mdcRoot as MenuSurface & { previouslyFocused: null }).previouslyFocused = null)}
        @selected=${async (e: CustomEvent<SelectedDetail<number>>) => {
          e.stopPropagation();
          const selectedIndex = e.detail.index;

          if (selectedIndex > -1) {
            const selected = this.suggestions?.[selectedIndex] ?? null;
            try {
              const place = await this.#getPlaceDetail(selected.place_id);
              this.#onPlaceChanged(place);
            } catch (error) {
              TitaniumSnackbarSingleton.open(error);
            }
          }
        }}
      >
        <mwc-linear-progress .closed=${!this.isLoading} indeterminate></mwc-linear-progress>
        ${!!this.searchTerm && this.isLoading === false
          ? html`<div summary>Showing ${this.suggestions.length} of ${this.count} result${this.count === 1 ? '' : 's'} for '${this.searchTerm}'</div>`
          : ''}
        ${this.suggestions.map(
          suggestion => html`
            <mwc-list-item twoline graphic="avatar">
              <span>${suggestion?.structured_formatting?.main_text || suggestion.description}</span>
              <span slot="secondary">${suggestion?.structured_formatting?.secondary_text}</span>
              <mwc-icon slot="graphic">place</mwc-icon>
            </mwc-list-item>
          `
        )}
        ${this.suggestions.length > 0 && !this.isLoading
          ? html`<img google src="https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png" alt="Powered by Google" />`
          : ''}
      </mwc-menu>
    `;
  }
}
