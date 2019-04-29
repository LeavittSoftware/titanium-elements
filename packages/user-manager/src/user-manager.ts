import 'jwt-decode/build/jwt-decode';
declare var jwt_decode: (token: string) => {};

import { customElement, LitElement, property } from 'lit-element';
import { LssJwtToken } from './LssJwtToken';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import { UserManagerUpdatedEvent } from './user-manager-events';

let instance: null | UserManager = null;

export let GetUserManagerInstance = () => {
  if (instance) {
    return instance;
  }
  throw `GetUserManagerInstance requested before an instance was created. Did you forget to add the <user-manager> element to your project?`;
};

@customElement('user-manager')
export class UserManager extends LitElement {
  @property({ type: Array }) roles: Array<string> = [];

  @property({ type: String }) fullname: string;

  @property({ type: String }) firstName: string;

  @property({ type: String }) lastName: string;

  @property({ type: String }) email: string;

  @property({ type: Number }) personId: number = 0;

  @property({ type: String }) redirectUrl: string = 'https://signin.leavitt.com/';

  @property({ type: String }) redirectDevUrl: string = 'https://devsignin.leavitt.com/';

  @property({ type: String }) tokenUri: string = 'https://oauth2.leavitt.com/token';

  @property({ type: Boolean }) disableAutoload: boolean;

  private _isAuthenticating: boolean;

  constructor() {
    super();

    if (!instance) {
      instance = this;
    } else {
      console.warn('More than one <user-manager> element has been used in this web application, consider removing one.');
    }
  }

  async firstUpdated() {
    if (!this.disableAutoload || this._getTokenfromUrl('refreshToken')) {
      try {
        await this.authenticateAsync();
      } catch (error) {}
    }
    console.log('UserManager Ready.');
  }

  private _redirectToLogin(continueUrl: string) {
    const redirectUrl = `${isDevelopment ? this.redirectDevUrl : this.redirectUrl}?continue=${encodeURIComponent(continueUrl)}`;
    if (document.location) {
      document.location.href = redirectUrl;
    }
  }

  private _redirectToSignOut(continueUrl: string) {
    const redirectUrl = `${isDevelopment ? this.redirectDevUrl : this.redirectUrl}sign-out/?continue=${encodeURIComponent(continueUrl)}`;
    if (document.location) {
      document.location.href = redirectUrl;
    }
  }

  private _getHashParametersFromUrl(): Array<{ key: string; value: string }> {
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

  private _getClaimScopes(localStorageKey: string): Array<string> {
    try {
      return JSON.parse(window.localStorage.getItem(localStorageKey) || '[]');
    } catch (error) {
      console.warn(`Failed to parse scopes in local storage. ${error}`);
      return [];
    }
  }

  private _clearHashFromUrl() {
    if (document.location && document.location.hash && document.location.hash.indexOf('refreshToken') > -1) document.location.hash = '';
  }

  private _getTokenfromUrl(tokenName: string): string | null {
    const hashParameters = this._getHashParametersFromUrl();
    const accessTokenArray = hashParameters.filter((value) => value.key === tokenName);
    if (accessTokenArray.length === 0) {
      return null;
    } else {
      return accessTokenArray[0].value;
    }
  }

  private _decodeAccessToken(accessToken: string): LssJwtToken | null {
    if (!accessToken) {
      return null;
    }

    let token;
    try {
      token = jwt_decode(accessToken) as LssJwtToken;
    } catch (error) {
      // Invalid JWT token format
      return null;
    }

    if (token) {
      token.exp = new Date(0).setUTCSeconds(token.exp as number);
    }
    return token;
  }

  private _validateToken(accessToken: LssJwtToken): boolean {
    const currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + 30);

    if (accessToken.iss !== 'https://oauth2.leavitt.com/') {
      return false;
    }

    if (accessToken.exp <= currentDate) {
      return false;
    }

    return true;
  }

  private _getAccessTokenFromLocalStorage(): string {
    return window.localStorage.getItem('LG-AUTH-AT') || '';
  }

  private _saveAccessTokenToLocalStorage(accessToken: string): void {
    window.localStorage.setItem('LG-AUTH-AT', accessToken);
  }

  private _getRefreshTokenFromLocalStorage(): string {
    return window.localStorage.getItem('LG-AUTH-RT') || '';
  }

  private _saveRefreshTokenToLocalStorage(accessToken: string | null): void {
    window.localStorage.setItem('LG-AUTH-RT', accessToken || '');
  }

  private async _getAccessTokenFromApiAsync(refreshToken: string, uri: string): Promise<string> {
    if (!window.navigator.onLine) {
      return Promise.reject('Computer not connected. Make sure your computer is connected to the internet.');
    }

    const claimScopes = this._getClaimScopes('LgClaimScopes');
    const body = { grant_type: 'refresh_token', refresh_token: refreshToken } as { grant_type: string; refresh_token: string; claim_scopes: string[] };

    if (claimScopes.length > 0) {
      body.claim_scopes = claimScopes;
    }

    const response = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: [['Content-Type', 'application/json'], ['Accept', 'application/json']],
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

  private _setLocalProperties(_jwtToken: LssJwtToken) {
    this.personId = Number(_jwtToken.nameid);
    this.fullname = _jwtToken.unique_name;
    this.firstName = _jwtToken.given_name;
    this.lastName = _jwtToken.family_name;
    this.email = _jwtToken.email;
    this.roles = _jwtToken.role || [];
    this.dispatchEvent(new UserManagerUpdatedEvent());
  }

  private async _getTokenAsync(): Promise<LssJwtToken> {
    let accessToken = this._getAccessTokenFromLocalStorage();
    const refreshToken = this._getTokenfromUrl('refreshToken') || this._getRefreshTokenFromLocalStorage() || null;
    this._clearHashFromUrl();

    // validate uri access token
    const jwtToken = this._decodeAccessToken(accessToken);
    if (jwtToken && this._validateToken(jwtToken)) {
      this._saveAccessTokenToLocalStorage(accessToken);
      this._saveRefreshTokenToLocalStorage(refreshToken);
      this._setLocalProperties(jwtToken);
      return Promise.resolve(jwtToken);
    }

    if (refreshToken != null) {
      try {
        accessToken = await this._getAccessTokenFromApiAsync(refreshToken, this.tokenUri);
      } catch (error) {
        return Promise.reject(error);
      }

      const jwtToken = this._decodeAccessToken(accessToken);
      if (jwtToken && this._validateToken(jwtToken)) {
        this._saveAccessTokenToLocalStorage(accessToken);
        this._saveRefreshTokenToLocalStorage(refreshToken);
        this._setLocalProperties(jwtToken);
        return Promise.resolve(jwtToken);
      }
    }

    return Promise.reject('Not authenticated');
  }

  async getAccessTokenAsync() {
    await this.authenticateAsync();
    return this._getAccessTokenFromLocalStorage();
  }

  async authenticateAsync(): Promise<LssJwtToken> {
    const self = this;
    if (this._isAuthenticating) {
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
        this._isAuthenticating = true;
        jwtToken = await this._getTokenAsync();
      } catch (error) {
        if (error === 'Not authenticated') {
          if (document.location) {
            this._redirectToLogin(document.location.href);
          }
          this._isAuthenticating = false;
          this.dispatchEvent(new CustomEvent('token', { detail: { rejected: true, message: error } }));
          return; // Wait for the redirect to happen with a unreturned promise
        }
        this._isAuthenticating = false;
        reject(error);
      }
      this._isAuthenticating = false;
      self.dispatchEvent(new CustomEvent('token', { detail: jwtToken }));
      resolve(jwtToken);
    });
  }

  logout() {
    localStorage.removeItem('LG-AUTH-AT');
    localStorage.removeItem('LG-AUTH-RT');

    this.personId = 0;
    this.fullname = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.roles = [];
    this.dispatchEvent(new UserManagerUpdatedEvent());

    this.roles.forEach((o) => {
      window.dispatchEvent(new CustomEvent('um-role-removed', { detail: { role: o } }));
    });
    this.roles = [];
    if (document.location) {
      this._redirectToSignOut(document.location.href);
    }
    return;
  }
}
