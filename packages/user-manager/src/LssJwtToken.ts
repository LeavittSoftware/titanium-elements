export interface LssJwtToken {
  IsActiveEmployee: string;
  RefreshTokenId: string;
  aud: string;
  birthdate: string;
  exp: Date | number;
  family_name: string;
  gender: string;
  given_name: string;
  Company?: string;
  CompanyId?: string;
  iss: string;
  nameid: string;
  nbf: number;
  role: Array<string>;
  unique_name: string;
  email: string;
}
