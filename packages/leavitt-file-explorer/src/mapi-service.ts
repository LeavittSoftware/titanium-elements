import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';

const mapiService = new ApiService(new AuthenticatedTokenProvider());
mapiService.baseUrl = isDevelopment ? 'https://devmapi.leavitt.com/' : 'https://mapi.leavitt.com/';
mapiService.addHeader('X-LGAppName', 'FileExplorer');

Object.freeze(mapiService);
export default mapiService;
