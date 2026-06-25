/// <reference types="google.maps" />
import { AddressInputAddress } from '../types/address-input-address';

export function placeToAddress(place: google.maps.places.Place) {
  const addressComponents = place.addressComponents;
  const formattedAddress = place.formattedAddress;

  if (!addressComponents?.length || !formattedAddress) {
    return null;
  }

  const neighborhood = addressComponents.find((o) => o.types.some((p) => p === 'neighborhood'));
  const stateComponent = addressComponents.find((o) => o.types.some((p) => p === 'administrative_area_level_1'));
  const streetNumberComponent =
    addressComponents.find((o) => o.types.some((p) => p === 'street_number')) || addressComponents.find((o) => o.types.some((p) => p === 'premise'));
  const streetAddressComponent = addressComponents.find((o) => o.types.some((p) => p === 'route'));

  // GOOGLE flip-flops neighborhood and locality, neither can be used for a accurate city. formattedAddress however seems to
  // always show the accurate city.
  const locality = addressComponents.find((o) => o.types.some((p) => p === 'locality'));
  const sublocality = addressComponents.find((o) => o.types.some((p) => p === 'sublocality'));
  const adminAreaLevel3 = addressComponents.find((o) => o.types.some((p) => p === 'administrative_area_level_3'));
  const adminAreaLevel4 = addressComponents.find((o) => o.types.some((p) => p === 'administrative_area_level_4'));

  const cityComponent =
    neighborhood?.shortText && formattedAddress.includes(neighborhood.shortText + ',')
      ? neighborhood
      : locality
        ? locality
        : sublocality
          ? sublocality
          : adminAreaLevel3
            ? adminAreaLevel3
            : adminAreaLevel4;
  const zipCodeComponent = addressComponents.find((o) => o.types.some((p) => p === 'postal_code'));
  const countyComponent = addressComponents.find((o) => o.types.some((p) => p === 'administrative_area_level_2'));
  const countryComponent = addressComponents.find((o) => o.types.some((p) => p === 'country'));
  const street2 = addressComponents.find((o) => o.types.some((p) => p === 'subpremise'));
  const location: Partial<AddressInputAddress> = {
    street: streetNumberComponent?.shortText
      ? `${streetNumberComponent?.shortText} ${streetAddressComponent?.shortText || ''}`?.trim()
      : streetAddressComponent?.shortText || '',
    fullStreet: `${streetNumberComponent?.longText} ${streetAddressComponent?.longText}`,
    city: cityComponent?.shortText ?? undefined,
    street2: street2?.shortText ?? undefined,
    county: countyComponent?.shortText ?? undefined,
    country: countryComponent?.shortText ?? undefined,
    state: stateComponent?.shortText ?? undefined,
    fullState: stateComponent?.longText ?? undefined,
    zip: zipCodeComponent?.shortText ?? undefined,
    latitude: place.location?.lat(),
    longitude: place.location?.lng(),
  };

  return location;
}
