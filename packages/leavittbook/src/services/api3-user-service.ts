import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/web/leavitt/api-service/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/web/titanium/helpers/helpers';

const api3UserService = new ApiService(new AuthenticatedTokenProvider());
api3UserService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
api3UserService.addHeader('X-LGAppName', 'Testing');

Object.freeze(api3UserService);
export default api3UserService;
