import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import ApiService from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new (...args: any[]): T };

const Api2ServiceMixin = <C extends Constructor<HTMLElement>>(base: C) =>
  class extends base {
    mapi: ApiService;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      this.mapi = new ApiService(new AuthenticatedTokenProvider());
      this.mapi.baseUrl = isDevelopment ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
    }
  };

export default Api2ServiceMixin;
