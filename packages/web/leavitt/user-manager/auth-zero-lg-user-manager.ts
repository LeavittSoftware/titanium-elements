import { jwtDecode } from 'jwt-decode';
import { AuthZeroLgAccessToken } from './auth-zero-lg-access-token';
import { AuthZeroLgIdentityToken } from './auth-zero-lg-identity-token';
import { AuthZeroLgIdenitity } from './auth-zero-lg-identity';
import { BearerTokenProvider } from '../api-service/bearer-token-provider';
import { isDevelopment } from '@leavittsoftware/web/titanium/helpers/is-development';

export class AuthZeroLgUserManager implements BearerTokenProvider {
  public postLogoutRedirectUri: string = 'https://leavitt.com';

  authZeroDomainBaseURL: string = 'https://auth.leavitt.com';
  #clientId: string = 'VNreSE4Z8HsMaUfc1yRGgZQv9EN2quOS';
  #tokenUri: string = 'https://auth.leavitt.com/oauth/token';
  #issuerIdentifier: string = 'https://auth.leavitt.com/';
  #audience: string = `https://${isDevelopment ? 'dev' : ''}api3.leavitt.com`;
  #scopes: string[] = ['openid', 'profile', 'email', 'offline_access'];

  #unrecoverableError: boolean = false;
  #unrecoverableErrorDescription: string;

  public get identity() {
    return this.#decodeIdentity(this.#idToken);
  }

  public get refreshToken() {
    return this.#refreshToken;
  }

  public get accessToken() {
    return this.#accessToken;
  }

  public get idToken() {
    return this.#idToken;
  }

  get #refreshToken() {
    return localStorage.getItem('lg-auth0-rt') || null;
  }
  set #refreshToken(val: string | null) {
    localStorage.setItem('lg-auth0-rt', val || '');
  }

  get #accessToken() {
    return localStorage.getItem('lg-auth0-at') || null;
  }
  set #accessToken(val: string | null) {
    localStorage.setItem('lg-auth0-at', val || '');
  }

  get #idToken() {
    return localStorage.getItem('lg-auth0-id-token') || null;
  }
  set #idToken(val: string | null) {
    localStorage.setItem('lg-auth0-id-token', val || '');
    this.#notifyIdentityUpdated(this.identity);
  }

  get #codeVerifier() {
    return localStorage.getItem('lg-auth0-code-verifier') || null;
  }
  set #codeVerifier(val: string | null) {
    localStorage.setItem('lg-auth0-code-verifier', val || '');
  }

  constructor() {
    if (!authZeroUserManagerInstance) {
      /* eslint-disable  @typescript-eslint/no-this-alias */
      authZeroUserManagerInstance = this;
    } else {
      console.warn('Only one instance of UserManagerAuthZero is allowed.');
    }
    const urlParams = new URLSearchParams(window.location.search);

    const code = urlParams.get('code');
    const state = urlParams.get('state');
    if (code) {
      // If code is present in the url, exchange it for a token have all
      // subsequent calls to authenticate wait for the code to be exchanged
      // eslint-disable-next-line no-async-promise-executor
      new Promise<string | null>(async (resolve, reject) => {
        this.#authenticateResolvers.push({ resolver: resolve, reject: reject });

        if (state) {
          //Restore the state of the page after the code is exchanged and redirect is completed
          window.history.replaceState({}, '', state);
        }

        try {
          await this.#exchangeCodeForToken(code);
        } catch (error) {
          return this.#rejectAllAuthenticatePromises(error.message);
        }

        if (this.#validateToken(this.#accessToken)) {
          return this.#resolveAllAuthenticatePromises(this.#accessToken);
        }

        return this.#rejectAllAuthenticatePromises('Login failed, please try again.');
      });
    }

    const error = urlParams.get('error');
    const errorDescription = urlParams.get('error_description');

    if (error) {
      //remove the error and error_description from the url
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('error');
      newUrl.searchParams.delete('error_description');
      newUrl.searchParams.delete('state');
      window.history.replaceState({}, '', newUrl.toString());

      new Promise<string | null>((resolve, reject) => {
        this.#authenticateResolvers.push({ resolver: resolve, reject: reject });
        this.#unrecoverableError = true;
        this.#unrecoverableErrorDescription = errorDescription || 'Login failed, please try again.';
        return this.#rejectAllAuthenticatePromises(errorDescription || 'Login failed, please try again.');
      });
    }
  }

  #authenticateResolvers: Array<{ resolver: (accessToken: string | null) => void; reject: (error: string) => void }> = [];

  #resolveAllAuthenticatePromises(accessToken: string | null) {
    this.#authenticateResolvers.forEach(({ resolver }) => resolver(accessToken));
    this.#authenticateResolvers = [];
  }

  #rejectAllAuthenticatePromises(error: string) {
    this.#authenticateResolvers.forEach(({ reject }) => reject(error));
    this.#authenticateResolvers = [];
  }

  public async _getBearerTokenAsync() {
    return await this.authenticate();
  }

  public async authenticate() {
    if (this.#unrecoverableError) {
      throw new Error(this.#unrecoverableErrorDescription);
    }

    if (!this.#authenticateResolvers.length) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise<string | null>(async (resolve, reject) => {
        this.#authenticateResolvers.push({ resolver: resolve, reject: reject });

        if (this.#validateToken(this.#accessToken)) {
          //token valid, resolve the promise
          return this.#resolveAllAuthenticatePromises(this.#accessToken);
        }

        try {
          //try to get a new token
          await this.#refreshAccessToken(this.#refreshToken);
        } catch (error) {
          return this.#rejectAllAuthenticatePromises(error.message);
        }

        if (this.#validateToken(this.#accessToken)) {
          //token valid, resolve the promise
          return this.#resolveAllAuthenticatePromises(this.#accessToken);
        }

        //refresh token not valid, redirect to login
        this.#redirectToLogin();

        //do not resolve or reject the promises, just wait for the redirect to happen
        return;
      });
    } else {
      return new Promise<string | null>((resolve, reject) => {
        this.#authenticateResolvers.push({ resolver: resolve, reject: reject });
      });
    }
  }

  public logout() {
    this.#accessToken = null;
    this.#refreshToken = null;
    this.#idToken = null;
    this.#codeVerifier = null;
    const redirectUrl = `${this.authZeroDomainBaseURL}/oidc/logout?client_id=${this.#clientId}&post_logout_redirect_uri=${encodeURIComponent(this.postLogoutRedirectUri)}`;
    console.log('redirecting to logout page...');
    document.location.href = redirectUrl;
  }

  #identityUpdatedCallbacks: Array<(identity: AuthZeroLgIdenitity | null) => void> = [];
  //add public callback to nitify clients when identity is updated
  public onIdentityUpdated(callback: (identity: AuthZeroLgIdenitity | null) => void) {
    this.#identityUpdatedCallbacks.push(callback);
  }
  public removeOnIdentityUpdated(callback: (identity: AuthZeroLgIdenitity | null) => void) {
    this.#identityUpdatedCallbacks = this.#identityUpdatedCallbacks.filter((c) => c !== callback);
  }

  #notifyIdentityUpdated(identity: AuthZeroLgIdenitity | null) {
    this.#identityUpdatedCallbacks.forEach((callback) => callback(identity));
  }

  //It is crutial this is only called once as it generates a new code verifier and code challenge
  //If it is called multiple times, the code verifier and code challenge will be different
  //This will cause the authentication to fail
  async #redirectToLogin() {
    const currentUrl = new URL(document.location.href);
    const codeVerifier = this.#generateRandomString(128);
    const codeChallenge = await this.#generateCodeChallenge(codeVerifier);

    // Save verifier for the final step
    this.#codeVerifier = codeVerifier;

    const urlParts = {
      response_type: 'code',
      client_id: this.#clientId,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      redirect_uri: currentUrl.origin,
      audience: this.#audience,
      scope: this.#scopes.join(' '),
      state: currentUrl.pathname + currentUrl.search + currentUrl.hash,
    };

    const searchParams = Object.entries(urlParts)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const redirectUrl = `${this.authZeroDomainBaseURL}/authorize?${searchParams}`;
    console.log('redirecting to sign in page...');
    document.location.href = redirectUrl;
  }

  #decodeAccessToken(accessToken: string): AuthZeroLgAccessToken | null {
    if (!accessToken) {
      return null;
    }

    let token: AuthZeroLgAccessToken;
    try {
      token = jwtDecode<AuthZeroLgAccessToken>(accessToken);
    } catch (error) {
      console.error('Error decoding access token', error);
      return null;
    }

    if (token) {
      token.exp = new Date(0).setUTCSeconds(token.exp as number);
      token.iat = new Date(0).setUTCSeconds(token.iat as number);
    }
    return token;
  }

  #decodeIdentity(identityToken: string | null): AuthZeroLgIdenitity | null {
    if (!identityToken) {
      return null;
    }

    let token: AuthZeroLgIdentityToken;
    try {
      token = jwtDecode<AuthZeroLgIdentityToken>(identityToken);
    } catch (error) {
      console.error('Error decoding identity token', error);
      return null;
    }

    const exp = new Date(0);
    exp.setUTCSeconds(token.exp);

    const iat = new Date(0);
    iat.setUTCSeconds(token.iat);

    const identity: AuthZeroLgIdenitity = {
      coreid: Number(token['https://leavitt.com/coreid']),
      roles: token['https://leavitt.com/roles'] || [],
      activeEmployee: !!token['https://leavitt.com/activeEmployee'],
      pendingEmployee: !!token['https://leavitt.com/pendingEmployee'],
      activeClient: !!token['https://leavitt.com/activeClient'],
      companyName: token['https://leavitt.com/company'],
      profilePictureFileName: token['https://leavitt.com/picCdnFileName'],
      lastname: token['https://leavitt.com/lastname'],
      firstname: token['https://leavitt.com/firstname'],
      companyId: token['https://leavitt.com/companyId'] ?? 0,
      nickname: token.nickname,
      name: token.name,
      picture: token.picture,
      updatedAt: token.updated_at ? new Date(token.updated_at) : null,
      email: token.email,
      issuer: token.iss,
      audience: token.aud,
      uniqueIdentifier: token.sub,
      issuedDate: iat,
      expirationDate: exp,
      sid: token.sid,
    };
    return identity;
  }

  #validateToken(accessToken: string | null): boolean {
    if (!accessToken) {
      return false;
    }

    const decodedToken = this.#decodeAccessToken(accessToken);

    if (!decodedToken) {
      return false;
    }

    const currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + 30);

    if (!decodedToken.iss || decodedToken.iss !== this.#issuerIdentifier) {
      return false;
    }

    if (!decodedToken.exp || decodedToken.exp <= currentDate) {
      return false;
    }

    return true;
  }

  async #refreshAccessToken(refreshToken: string | null) {
    if (!refreshToken) {
      return;
    }

    try {
      const response = await fetch(this.#tokenUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          audience: this.#audience,
          client_id: this.#clientId,
          scope: this.#scopes.join(' '),
        }),
      });

      if (!response.ok) {
        console.error('Error refreshing access token', response.statusText);
        return null;
      }

      const data = await response.json();
      this.#accessToken = data.access_token;
      this.#refreshToken = data.refresh_token;
      this.#idToken = data.id_token;
      return data.access_token;
    } catch (error) {
      if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network.');
      }
      console.error('Error refreshing access token', error);
    }

    return null;
  }

  async #exchangeCodeForToken(code: string) {
    if (!code || !this.#codeVerifier) {
      return null;
    }

    try {
      const response = await fetch(this.#tokenUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          client_id: this.#clientId,
          code: code,
          redirect_uri: new URL(window.location.href).origin,
          code_verifier: this.#codeVerifier,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Error: ${response.status} - ${errorBody}`);
      }

      const data = await response.json();
      this.#accessToken = data.access_token;
      this.#refreshToken = data.refresh_token;
      this.#idToken = data.id_token;

      // Clean up
      this.#codeVerifier = null;

      return data.access_token;
    } catch (error) {
      if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network.');
      }
      console.error('Token exchange failed', error);
      throw new Error('Token exchange failed. Please try again.');
    }
  }

  #generateRandomString(length: number) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let result = '';
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      result += charset[randomValues[i] % charset.length];
    }
    return result;
  }

  // Hash the verifier to create the Challenge (SHA-256)
  async #generateCodeChallenge(verifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    // Convert digest to Base64URL format
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }
}

let authZeroUserManagerInstance: null | AuthZeroLgUserManager = null;

export const GetAuthZeroLgUserManager = () => {
  if (authZeroUserManagerInstance) {
    return authZeroUserManagerInstance;
  }

  console.warn('GetAuthZeroLgUserManager requested before an instance was created.');
  return null;
};
