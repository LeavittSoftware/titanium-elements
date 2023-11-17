import { jwtDecode } from 'jwt-decode';

import { LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { LssJwtToken } from './LssJwtToken';
import { isDevelopment } from '../../titanium/helpers/helpers';
import { UserManagerUpdatedEvent } from './user-manager-events';

let instance: null | UserManager = null;

export const GetUserManagerInstance = () => {
  if (instance) {
    return instance;
  }

  throw 'GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?';
};

@customElement('user-manager')
export class UserManager extends LitElement {
  @property({ type: Array }) accessor roles: Array<string> = [];

  @property({ type: String }) accessor fullname: string;

  @property({ type: String }) accessor username: string;

  @property({ type: String }) accessor firstName: string;

  @property({ type: String }) accessor lastName: string;

  @property({ type: String }) accessor company: string;

  @property({ type: Number }) accessor companyId: number | null;

  @property({ type: String }) accessor profilePictureFileName: string | null;

  @property({ type: String }) accessor email: string;

  @property({ type: Number }) accessor personId: number = 0;

  @property({ type: Number }) accessor refreshTokenId: number = 0;

  @property({ type: String }) accessor redirectUrl: string = 'https://signin.leavitt.com/';

  @property({ type: String }) accessor redirectDevUrl: string = 'https://devsignin.leavitt.com/';

  @property({ type: String }) accessor tokenUri: string = isDevelopment ? 'https://devoauth2.leavitt.com/token' : 'https://oauth2.leavitt.com/token';

  @property({ type: String }) accessor issuerIdentifier: string = 'https://oauth2.leavitt.com/';

  @property({ type: Boolean }) accessor disableAutoload: boolean;

  @property({ type: Boolean }) accessor isActiveEmployee: boolean;

  #isAuthenticating: boolean;

  constructor() {
    super();
    if (!instance) {
      /* eslint-disable  @typescript-eslint/no-this-alias */
      instance = this;
    } else {
      console.warn('More than one <user-manager> element has been used in this web application, consider removing one.');
    }
  }

  async firstUpdated() {
    if (!this.disableAutoload || this.#getTokenfromUrl('refreshToken')) {
      try {
        await this.authenticateAsync();
      } catch (error) {}
    }
    console.log('UserManager Ready.');
  }

  async isRefreshTokenValid(refreshToken: string) {
    try {
      await this.#getAccessTokenFromApiAsync(refreshToken, this.tokenUri);
      return true;
    } catch (error) {}
    return false;
  }

  #redirectToLogin(continueUrl: string) {
    const redirectUrl = `${isDevelopment ? this.redirectDevUrl : this.redirectUrl}?continue=${encodeURIComponent(continueUrl)}`;
    if (document.location) {
      document.location.href = redirectUrl;
    }
  }

  #redirectToSignOut(continueUrl: string) {
    const redirectUrl = `${isDevelopment ? this.redirectDevUrl : this.redirectUrl}sign-out/?continue=${encodeURIComponent(continueUrl)}`;
    if (document.location) {
      document.location.href = redirectUrl;
    }
  }

  #getHashParametersFromUrl(): Array<{ key: string; value: string }> {
    const hashParams = [] as Array<{ key: string; value: string }>;
    if (window.location.hash) {
      let hash = window.location.hash.substring(1);
      hash = decodeURIComponent(hash);
      const hashArray = hash.split('&');

      for (const i in hashArray) {
        if (hashArray.hasOwnProperty(i)) {
          const keyValPair = hashArray[i].split('=');
          if (keyValPair.length > 1) {
            hashParams.push({ key: keyValPair[0], value: decodeURIComponent(keyValPair[1]) });
          }
        }
      }
    }
    return hashParams;
  }

  #getClaimScopes(localStorageKey: string): Array<string> {
    try {
      return JSON.parse(window.localStorage.getItem(localStorageKey) || '[]');
    } catch (error) {
      console.warn(`Failed to parse scopes in local storage. ${error}`);
      return [];
    }
  }

  #clearHashFromUrl() {
    if (document.location && document.location.hash && document.location.hash.indexOf('refreshToken') > -1) {
      document.location.hash = '';
    }
  }

  #getTokenfromUrl(tokenName: string): string | null {
    const hashParameters = this.#getHashParametersFromUrl();
    const accessTokenArray = hashParameters.filter((value) => value.key === tokenName);
    if (accessTokenArray.length === 0) {
      return null;
    } else {
      return accessTokenArray[0].value;
    }
  }

  #decodeAccessToken(accessToken: string): LssJwtToken | null {
    if (!accessToken) {
      return null;
    }

    let token: LssJwtToken;
    try {
      token = jwtDecode<LssJwtToken>(accessToken);
    } catch (error) {
      // Invalid JWT token format
      return null;
    }

    if (token) {
      token.exp = new Date(0).setUTCSeconds(token.exp as number);
    }
    return token;
  }

  #validateToken(accessToken: LssJwtToken): boolean {
    const currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + 30);

    if (accessToken.iss !== this.issuerIdentifier) {
      return false;
    }

    if (accessToken.exp <= currentDate) {
      return false;
    }

    return true;
  }

  #getAccessTokenFromLocalStorage(): string {
    return window.localStorage.getItem('LG-AUTH-AT') || '';
  }

  #saveAccessTokenToLocalStorage(accessToken: string): void {
    window.localStorage.setItem('LG-AUTH-AT', accessToken);
  }

  #getRefreshTokenFromLocalStorage(): string {
    return window.localStorage.getItem('LG-AUTH-RT') || '';
  }

  #saveRefreshTokenToLocalStorage(accessToken: string | null): void {
    window.localStorage.setItem('LG-AUTH-RT', accessToken || '');
  }

  async #getAccessTokenFromApiAsync(refreshToken: string, uri: string): Promise<string> {
    if (!window.navigator.onLine) {
      return Promise.reject('Computer not connected. Make sure your computer is connected to the internet.');
    }

    const claimScopes = this.#getClaimScopes('LgClaimScopes');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const body = { grant_type: 'refresh_token', refresh_token: refreshToken } as { grant_type: string; refresh_token: string; claim_scopes: string[] };

    if (claimScopes.length > 0) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      body.claim_scopes = claimScopes;
    }

    const response = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: [
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
      ],
    });

    let json;
    try {
      json = await response.json();
    } catch (error) {
      return Promise.reject('Get Auth Token: The server sent back invalid JSON.');
    }

    if (response.status === 200 && json.access_token) {
      return Promise.resolve(json.access_token);
    }

    if (json.error) {
      if (json.error === 'unauthorized_client') {
        return Promise.reject('Not authenticated');
      }

      return Promise.reject(json.error);
    }
    return Promise.reject('Not authenticated');
  }

  #setLocalProperties(_jwtToken: LssJwtToken) {
    this.personId = Number(_jwtToken.nameid);
    this.refreshTokenId = Number(_jwtToken.RefreshTokenId);
    this.fullname = _jwtToken.unique_name;
    this.username = _jwtToken.username;
    this.firstName = _jwtToken.given_name;
    this.lastName = _jwtToken.family_name;
    this.email = _jwtToken.email;
    this.isActiveEmployee = _jwtToken.IsActiveEmployee === 'True';
    this.roles = typeof _jwtToken.role === 'string' ? [_jwtToken.role] : _jwtToken.role ?? [];

    this.company = _jwtToken.Company ?? '';
    this.companyId = _jwtToken.CompanyId ? Number(_jwtToken.CompanyId) : 0;
    this.profilePictureFileName = _jwtToken.PicCdnFileName || null;

    this.dispatchEvent(new UserManagerUpdatedEvent());
  }

  async #getTokenAsync(): Promise<LssJwtToken> {
    const refreshTokenFromUrl = this.#getTokenfromUrl('refreshToken');

    //If a new refresh token is sent, clear the access token incase one is still valid from another user
    let accessToken = refreshTokenFromUrl ? '' : this.#getAccessTokenFromLocalStorage();
    const refreshToken = refreshTokenFromUrl || this.#getRefreshTokenFromLocalStorage() || null;
    this.#clearHashFromUrl();

    // validate uri access token
    const jwtToken = this.#decodeAccessToken(accessToken);
    if (jwtToken && this.#validateToken(jwtToken)) {
      this.#saveAccessTokenToLocalStorage(accessToken);
      this.#saveRefreshTokenToLocalStorage(refreshToken);
      this.#setLocalProperties(jwtToken);
      return Promise.resolve(jwtToken);
    }

    if (refreshToken != null) {
      try {
        accessToken = await this.#getAccessTokenFromApiAsync(refreshToken, this.tokenUri);
      } catch (error) {
        return Promise.reject(error);
      }

      const jwtToken = this.#decodeAccessToken(accessToken);
      if (jwtToken && this.#validateToken(jwtToken)) {
        this.#saveAccessTokenToLocalStorage(accessToken);
        this.#saveRefreshTokenToLocalStorage(refreshToken);
        this.#setLocalProperties(jwtToken);
        return Promise.resolve(jwtToken);
      }
    }

    return Promise.reject('Not authenticated');
  }

  async getAccessTokenAsync() {
    await this.authenticateAsync();
    return this.#getAccessTokenFromLocalStorage();
  }

  /**
   *  Returns true is the user is currently signed in.
   *  Will not redirect if user is not authenticated.
   *
   *  Avoid calling multiple times concurrently.
   */
  async isAuthenticatedAsync(): Promise<boolean> {
    try {
      await this.#getTokenAsync();
    } catch (error) {
      return false;
    }
    return true;
  }

  async authenticateAsync(): Promise<LssJwtToken> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (this.#isAuthenticating) {
      return new Promise<LssJwtToken>((resolve, reject) => {
        const listener = function listener(e) {
          self.removeEventListener('token', listener);
          if (e.detail.rejected) {
            reject(e.detail.message);
          }
          resolve(e.detail.accessToken);
        };
        this.addEventListener('token', listener);
      });
    }

    return new Promise<LssJwtToken>(async (resolve, reject) => {
      let jwtToken;
      try {
        this.#isAuthenticating = true;
        jwtToken = await this.#getTokenAsync();
      } catch (error) {
        if (error === 'Not authenticated') {
          if (document.location) {
            this.#redirectToLogin(document.location.href);
          }
          this.#isAuthenticating = false;
          this.dispatchEvent(new CustomEvent('token', { detail: { rejected: true, message: error } }));
          return; // Wait for the redirect to happen with a unreturned promise
        }
        this.#isAuthenticating = false;
        reject(error);
      }
      this.#isAuthenticating = false;
      self.dispatchEvent(new CustomEvent('token', { detail: jwtToken }));
      resolve(jwtToken);
    });
  }

  logout() {
    localStorage.removeItem('LG-AUTH-AT');
    localStorage.removeItem('LG-AUTH-RT');

    this.personId = 0;
    this.refreshTokenId = 0;
    this.username = '';
    this.fullname = '';
    this.company = '';
    this.companyId = null;
    this.profilePictureFileName = null;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.isActiveEmployee = false;
    this.roles = [];
    this.dispatchEvent(new UserManagerUpdatedEvent());

    this.roles.forEach((o) => {
      window.dispatchEvent(new CustomEvent('um-role-removed', { detail: { role: o } }));
    });
    this.roles = [];
    if (document.location) {
      this.#redirectToSignOut(document.location.href);
    }
    return;
  }
}
