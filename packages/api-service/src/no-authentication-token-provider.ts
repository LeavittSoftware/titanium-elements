import { BearerTokenProvider } from './bearer-token-provider';

export class NoAuthenticationTokenProvider implements BearerTokenProvider {
  async _getBearerTokenAsync() {
    return null;
  }
}
