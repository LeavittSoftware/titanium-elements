import { countries } from './country-abbr-to-titlecase';

export function getCountryName(countryAbbr: string | null | undefined, excludeCountryIfUSA: boolean = false): string {
  if (!countryAbbr) {
    return '';
  }

  if (excludeCountryIfUSA && countryAbbr.toLowerCase() === 'us') {
    return '';
  }

  const country = countries.find((c) => c.abbreviation.toLowerCase() === countryAbbr.toLowerCase());
  return country ? country.name : countryAbbr;
}
