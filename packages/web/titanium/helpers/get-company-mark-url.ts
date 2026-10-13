import { Company } from '@leavittsoftware/lg-core-typescript';

export function getCompanyMarkUrl(company: Partial<Company> | null, themePreference: 'light' | 'dark') {
  return themePreference == 'dark'
    ? company?.DarkMarkUrl || company?.MarkUrl || 'https://cdn01.leavitt.com/public/files/4/logos/lg-mark-dark.svg'
    : company?.MarkUrl || 'https://cdn01.leavitt.com/public/files/4/logos/lg-mark.svg';
}
