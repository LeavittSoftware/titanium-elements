import ApiService from '@leavittsoftware/api-service/lib/api-service';
import { AuthenticatedTokenProvider } from '@leavittsoftware/api-service/lib/authenticated-token-provider';
import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';

const fileExplorerApiService = new ApiService(new AuthenticatedTokenProvider());
fileExplorerApiService.baseUrl = isDevelopment ? 'https://devapi3.leavitt.com/' : 'https://api3.leavitt.com/';
fileExplorerApiService.addHeader('X-LGAppName', 'FileExplorer');

Object.freeze(fileExplorerApiService);
export default fileExplorerApiService;
