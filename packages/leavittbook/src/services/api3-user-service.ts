import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';
import { isDevelopment } from '@leavittsoftware/web/titanium/helpers/helpers';
import UserManager from './user-manager-service';

const api3UserService = new ApiService(UserManager);
api3UserService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
api3UserService.addHeader('X-LGAppName', 'Testing');

Object.freeze(api3UserService);
export default api3UserService;
