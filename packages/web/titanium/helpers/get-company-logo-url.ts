import { Company } from '@leavittsoftware/lg-core-typescript';

export function getCompanyLogoUrl(company: Partial<Company> | null, themePreference: 'light' | 'dark') {
  return themePreference == 'dark'
    ? company?.DarkLogoUrl || company?.LogoUrl || 'https://cdn01.leavitt.com/public/files/4/logos/lg-logo-dark.svg'
    : company?.LogoUrl || 'https://cdn01.leavitt.com/public/files/4/logos/lg-logo.svg';
}
