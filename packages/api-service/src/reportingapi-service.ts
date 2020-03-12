import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import ApiService from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';
import { NoAuthenticationTokenProvider } from './no-authentication-token-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new (...args: any[]): T };

const ReportingServiceMixin = <C extends Constructor<HTMLElement>>(
  base: C,
  options?: { disableAuthentication?: boolean | undefined; defaultLGAppNameHeader?: string | undefined }
) =>
  class extends base {
    reportingApi: ApiService;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.reportingApi = new ApiService(options?.disableAuthentication ? new NoAuthenticationTokenProvider() : new AuthenticatedTokenProvider());
      this.reportingApi.baseUrl = isDevelopment ? 'https://devreportingapi.leavitt.com/' : 'https://reportingapi.leavitt.com/';
      if (options?.defaultLGAppNameHeader) {
        this.reportingApi.addHeader('X-LGAppName', options?.defaultLGAppNameHeader);
      }
    }
  };

export default ReportingServiceMixin;
