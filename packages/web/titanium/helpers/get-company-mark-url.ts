import { Company } from '@leavittsoftware/lg-core-typescript';

export function getCompanyMarkUrl(company: Partial<Company> | null, themePreference: 'light' | 'dark') {
  return themePreference == 'dark'
    ? company?.DarkMarkUrl || company?.MarkUrl || 'https://cdn.leavitt.com/lg-mark-dark.svg'
    : company?.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg';
}
