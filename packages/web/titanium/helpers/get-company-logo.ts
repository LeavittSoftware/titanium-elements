import { Company } from '@leavittsoftware/lg-core-typescript';

export function getCompanyLogo(company: Partial<Company> | null, themePreference: 'light' | 'dark') {
  return themePreference == 'dark'
    ? company?.DarkLogoUrl || company?.LogoUrl || 'https://cdn.leavitt.com/lg-logo-dark.svg'
    : company?.LogoUrl || 'https://cdn.leavitt.com/lg-logo.svg';
}
