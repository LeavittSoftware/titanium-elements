import { getCountryName } from '../../helpers/address/get-country-name';
import { AddressInputAddress } from '../types/address-input-address';

export function addressToString(address: Partial<AddressInputAddress>): string {
  if (!address) {
    return '';
  }

  const parts: string[] = [];

  const street = address.street?.trim();
  const street2 = address.street2?.trim();

  if (street || street2) {
    parts.push(`${street || ''} ${street2 || ''}`?.trim());
  }

  const city = address.city?.trim();
  const state = address.state?.trim();
  const zip = address.zip?.trim();

  parts.push(`${city && state ? `${city}, ${state}` : `${city || ''} ${state || ''}`?.trim()} ${zip}`?.trim());

  const county = address.county?.trim();
  if (address?.country !== 'US' && address?.country !== 'CA' && county) {
    parts.push(county);
  }

  const country = address.country?.trim();
  if (country) {
    parts.push(country === 'US' ? 'USA' : getCountryName(country));
  }

  return parts.join(', ');
}
