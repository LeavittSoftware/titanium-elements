export interface AddressInputAddress {
  //Equality comparer field for an address
  Id: string;

  //Auto set from street, city state props
  primaryDisplayText?: string;

  secondaryText?: string;

  street?: string;
  street2?: string;
  fullStreet?: string;
  city?: string;
  state?: string;
  country?: string;
  county?: string;
  fullState?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
}
