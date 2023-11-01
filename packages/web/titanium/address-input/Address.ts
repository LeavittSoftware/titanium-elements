export interface Address {
  street: string;
  street2?: string;
  fullStreet: string;
  city: string;
  state: string;
  country: string;
  county: string;
  fullState: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
}

export function addressToString(location: Partial<Address> | null | undefined) {
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
    location.country === 'US' ? 'USA' : location.country
  }`;
}

export function validateStreet(street: string) {
  const streetRegex = new RegExp(/^(?=.{1,64}$)[a-zA-Z \-\.\d #'\.,]{1,64}[\s][a-zA-Z \-\.\d #'\.,]{1,64}$/);
  const uppercaseRegex = new RegExp('[A-Z]');
  const lowercaseRegex = new RegExp('[a-z]');
  const numberRegex = new RegExp('[0-9]');

  return streetRegex.test(street) ? (uppercaseRegex.test(street) || lowercaseRegex.test(street)) && numberRegex.test(street) : !1;
}
