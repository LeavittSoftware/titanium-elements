export interface AuthZeroLgAccessToken {
  aud: string[] | null;
  azp: string | null;
  exp: number | Date | null;
  'https://leavitt.com/companyId': number | null;
  'https://leavitt.com/coreid': number | null;
  'https://leavitt.com/email': string | null;
  'https://leavitt.com/name': string | null;
  'https://leavitt.com/roles': string[] | null;
  iat: number | Date | null;
  iss: string | null;
  scope: string | null;
  sub: string | null;
}
