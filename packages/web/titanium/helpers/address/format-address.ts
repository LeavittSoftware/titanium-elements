import { IAddress, Person } from '@leavittsoftware/lg-core-typescript';
import { html, TemplateResult } from 'lit';
import { join } from 'lit/directives/join.js';
import { getCountryName } from './get-country-name';

export function formatAddressParts(address: Partial<IAddress> | Partial<Person> | null | undefined, options: formatAddressOptions = {}) {
  if (!address) {
    return {};
  }

  const street1 = 'Street1' in address ? address.Street1?.trim() : 'CompanyAddressStreet1' in address ? address.CompanyAddressStreet1?.trim() : '';
  const street2 = 'Street2' in address ? address.Street2?.trim() : 'CompanyAddressStreet2' in address ? address.CompanyAddressStreet2?.trim() : '';
  const city = 'City' in address ? address.City?.trim() : 'CompanyAddressCity' in address ? address.CompanyAddressCity?.trim() : '';
  const state = 'State' in address ? address.State?.trim() : 'CompanyAddressState' in address ? address.CompanyAddressState?.trim() : '';
  const zip = 'Zip' in address ? address.Zip?.trim() : 'CompanyAddressZip' in address ? address.CompanyAddressZip?.trim() : '';
  const country = 'Country' in address ? address.Country?.trim() : 'CompanyAddressCountry' in address ? address.CompanyAddressCountry?.trim() : '';

  const line1 = street1;
  const line2 = street2;
  const line3 = `${[[city, state].join(' ').trim(), zip].filter((o) => o).join(', ')}`;
  const line4 = getCountryName(country, options?.excludeCountryIfUSA);

  return {
    line1: line1 && !options?.excludeLine1 ? line1 : undefined,
    line2: line2 && !options?.excludeLine2 ? line2 : undefined,
    line3: line3 && !options?.excludeLine3 ? line3 : undefined,
    line4: line4 && !options?.excludeLine4 ? line4 : undefined,
  };
}

export function formatAddress(
  address: Partial<IAddress> | Partial<Person> | null | undefined,
  options: formatAddressOptions = {},
  joiner: TemplateResult | string = html`<br />`
) {
  const parts = formatAddressParts(address, options);

  const partsArray = Object.values(parts).filter((part) => part !== undefined && part !== '');

  if (partsArray.length === 0) {
    return null;
  }
  return join(partsArray, joiner);
}

export type formatAddressOptions = {
  excludeCountryIfUSA?: boolean;
  excludeLine1?: boolean;
  excludeLine2?: boolean;
  excludeLine3?: boolean;
  excludeLine4?: boolean;
};
