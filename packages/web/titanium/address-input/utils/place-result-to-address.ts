import { AddressInputAddress } from '../types/address-input-address';

export function placeResultToAddress(place: google.maps.places.PlaceResult) {
  if (!place || !place.address_components || !place.formatted_address) {
    return null;
  }

  const neighborhood = place.address_components.find((o) => o.types.some((p) => p === 'neighborhood'));
  const stateComponent = place.address_components.find((o) => o.types.some((p) => p === 'administrative_area_level_1'));
  const streetNumberComponent = place.address_components.find((o) => o.types.some((p) => p === 'street_number'));
  const streetAddressComponent = place.address_components.find((o) => o.types.some((p) => p === 'route'));

  // GOOGLE flip-flops neighborhood and locality, neither can be used for a accurate city. formatted_address however seems to
  // always show the accurate city.
  const locality = place.address_components.find((o) => o.types.some((p) => p === 'locality'));
  const sublocality = place.address_components.find((o) => o.types.some((p) => p === 'sublocality'));
  const cityComponent =
    neighborhood?.short_name && place.formatted_address.includes(neighborhood.short_name + ',') ? neighborhood : locality ? locality : sublocality;
  const zipCodeComponent = place.address_components.find((o) => o.types.some((p) => p === 'postal_code'));
  const countyComponent = place.address_components.find((o) => o.types.some((p) => p === 'administrative_area_level_2'));
  const countryComponent = place.address_components.find((o) => o.types.some((p) => p === 'country'));
  const location: Partial<AddressInputAddress> = {
    street: streetNumberComponent?.short_name
      ? `${streetNumberComponent?.short_name} ${streetAddressComponent?.short_name}`
      : streetAddressComponent?.short_name,
    fullStreet: `${streetNumberComponent?.long_name} ${streetAddressComponent?.long_name}`,
    city: cityComponent?.short_name,
    county: countyComponent?.short_name,
    country: countryComponent?.short_name,
    state: stateComponent?.short_name,
    fullState: stateComponent?.long_name,
    zip: zipCodeComponent?.short_name,
    latitude: place.geometry?.location?.lat(),
    longitude: place.geometry?.location?.lng(),
  };

  return location;
}
