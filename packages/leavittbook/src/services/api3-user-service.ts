import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { NoAuthenticationTokenProvider } from '@leavittsoftware/web/leavitt/api-service/no-authentication-token-provider';

import { GetAuthZeroLgUserManager } from '@leavittsoftware/web/leavitt/user-manager/auth-zero-lg-user-manager';
import { isDevelopment } from '@leavittsoftware/web/titanium/helpers/helpers';

const tokenProvider = GetAuthZeroLgUserManager() || new NoAuthenticationTokenProvider();
const api3UserService = new ApiService(tokenProvider);
api3UserService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
api3UserService.addHeader('X-LGAppName', 'Testing');

Object.freeze(api3UserService);
export default api3UserService;
