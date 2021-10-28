import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';

const api2Service = new ApiService(new AuthenticatedTokenProvider());
api2Service.baseUrl = isDevelopment ? 'https://devapi2.leavitt.com/' : 'https://api2.leavitt.com/';
api2Service.addHeader('X-LGAppName', 'FileExplorer');

Object.freeze(api2Service);
export default api2Service;
