import { Company } from '@leavittsoftware/lg-core-typescript';

export function getCompanyMark(company: Partial<Company> | null, themePreference: 'light' | 'dark') {
  return themePreference == 'dark'
    ? company?.DarkMarkUrl || company?.MarkUrl || 'https://cdn.leavitt.com/lg-mark-dark.svg'
    : company?.MarkUrl || 'https://cdn.leavitt.com/lg-mark.svg';
}
