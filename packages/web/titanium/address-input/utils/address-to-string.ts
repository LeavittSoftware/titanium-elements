import { getCountryName } from '../../helpers/address/get-country-name';
import { AddressInputAddress } from '../types/address-input-address';

export function addressToString(address: Partial<AddressInputAddress>): string {
  if (!address) {
    return '';
  }

  const parts: string[] = [];

  const street = address.street?.trim();
  const street2 = address.street2?.trim();

  if (street) {
    if (street2) {
      parts.push(`${street} ${street2}`);
    } else {
      parts.push(street);
    }
  } else if (street2) {
    parts.push(street2);
  }

  const city = address.city?.trim();
  const state = address.state?.trim();
  const zip = address.zip?.trim();

  if (city) {
    let cityPart = city;
    if (state) {
      cityPart += `, ${state}`;
    }
    if (zip) {
      cityPart += ` ${zip}`;
    }
    parts.push(cityPart);
  } else if (state) {
    let statePart = state;
    if (zip) {
      statePart += ` ${zip}`;
    }
    parts.push(statePart);
  } else if (zip) {
    parts.push(zip);
  }

  if (address?.country !== 'US' && address?.country !== 'CA') {
    const county = address.county?.trim();
    if (county) {
      parts.push(county);
    }
  }

  const country = address.country?.trim();
  if (country) {
    const countryDisplay = country === 'US' ? 'USA' : getCountryName(country);
    parts.push(countryDisplay);
  }

  return parts.join(', ');
}
