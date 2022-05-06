import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';

const api3UserService = new ApiService(new AuthenticatedTokenProvider());
api3UserService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
api3UserService.addHeader('X-LGAppName', 'Testing');

Object.freeze(api3UserService);
export default api3UserService;