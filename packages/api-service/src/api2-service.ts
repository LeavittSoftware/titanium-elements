import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import ApiService from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';
import { NoAuthenticationTokenProvider } from './no-authentication-token-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new (...args: any[]): T };

const Api2ServiceMixin = <C extends Constructor<HTMLElement>>(
  base: C,
  options?: { disableAuthentication?: boolean | undefined; defaultLGAppNameHeader?: string | undefined }
) =>
  class extends base {
    api2: ApiService;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.api2 = new ApiService(options?.disableAuthentication ? new NoAuthenticationTokenProvider() : new AuthenticatedTokenProvider());
      this.api2.baseUrl = isDevelopment ? 'https://devapi2.leavitt.com/' : 'https://api2.leavitt.com/';
      if (options?.defaultLGAppNameHeader) {
        this.api2.addHeader('X-LGAppName', options?.defaultLGAppNameHeader);
      }
    }
  };
export default Api2ServiceMixin;
