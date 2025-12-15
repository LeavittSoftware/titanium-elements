export interface AuthZeroLgIdentityToken {
  'https://leavitt.com/coreid': number | null;
  'https://leavitt.com/roles': string[] | null;
  'https://leavitt.com/activeEmployee': boolean | null;
  'https://leavitt.com/pendingEmployee': boolean | null;
  'https://leavitt.com/activeClient': boolean | null;
  'https://leavitt.com/company': string | null;
  'https://leavitt.com/picCdnFileName': string | null;
  'https://leavitt.com/lastname': string | null;
  'https://leavitt.com/firstname': string | null;
  'https://leavitt.com/companyId': number | null;
  nickname: string | null;
  name: string | null;
  picture: string | null;
  updated_at: string | null;
  email: string | null;
  iss: string;
  aud: string | null;
  sub: string | null;
  iat: number;
  exp: number;
  sid: string | null;
}
