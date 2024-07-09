import { AddressInputAddress } from '../types/address-input-address';

export function addressToString(location: AddressInputAddress | null | undefined) {
  if (!location) {
    return '';
  }

  if (!location.street) {
    return `${location.city}, ${location.state}`;
  }

  if (!location.country) {
    return `${location.street}${location.street2 ? ` ${location.street2}` : ''}, ${location.city}, ${location.state}`;
  }

  return `${location.street}${location.street2 ? ` ${location.street2}` : ''}, ${location.city}, ${location.state}, ${
    location.country === 'US' ? 'USA' : location.country === 'CA' ? 'Canada' : location.country
  }`;
}
