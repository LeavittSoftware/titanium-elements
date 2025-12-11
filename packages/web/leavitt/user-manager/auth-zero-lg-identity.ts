export interface AuthZeroLgIdenitity {
  activeClient: boolean;
  activeEmployee: boolean;
  companyId: number;
  companyName: string | null;
  coreid: number;
  email: string | null;
  expirationDate: Date;
  firstname: string | null;
  issuedDate: Date;
  lastname: string | null;
  name: string | null;
  nickname: string | null;
  picture: string | null;
  pendingEmployee: boolean;
  profilePictureFileName: string | null;
  issuer: string;
  audience: string | null;
  uniqueIdentifier: string | null;
  roles: string[];
  sid: string | null;
  updatedAt: Date | null;
}
