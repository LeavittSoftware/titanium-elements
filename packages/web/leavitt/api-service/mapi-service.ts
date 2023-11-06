import { isDevelopment } from '../../titanium/helpers/is-development';
import ApiService from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';
import { NoAuthenticationTokenProvider } from './no-authentication-token-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new (...args: any[]): T };

const MapiServiceMixin = <C extends Constructor<HTMLElement>>(
  base: C,
  options?: { disableAuthentication?: boolean | undefined; defaultLGAppNameHeader?: string | undefined }
) =>
  class extends base {
    mapi: ApiService;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.mapi = new ApiService(options?.disableAuthentication ? new NoAuthenticationTokenProvider() : new AuthenticatedTokenProvider());
      this.mapi.baseUrl = isDevelopment ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
      if (options?.defaultLGAppNameHeader) {
        this.mapi.addHeader('X-LGAppName', options?.defaultLGAppNameHeader);
      }
    }
  };

export default MapiServiceMixin;
