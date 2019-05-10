import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import { customElement, LitElement, property } from 'lit-element';

import ApiService, { onProgressCallback } from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';
import { GetResult } from './get-result';
import { ODataDto } from './odata-dto';

export type UploadProgressEvent = { event: ProgressEvent; request: XMLHttpRequest };

@customElement('api-service')
export default class ApiServiceElement extends LitElement {
  private _apiService: ApiService = new ApiService(new AuthenticatedTokenProvider());

  @property({ type: String }) baseProductionUri: string = 'https://api2.leavitt.com/';

  @property({ type: String }) baseDevUri: string = 'https://devapi2.leavitt.com/';

  @property({ type: String }) appName: string = 'General';

  firstUpdated() {
    if (this._apiService) {
      this._apiService.baseUrl = isDevelopment ? this.baseDevUri : this.baseProductionUri;
    }
  }

  updated(changedProps) {
    if (changedProps.has('appName') && changedProps.get('appName') !== this.appName) {
      if (this.appName === '' || typeof this.appName === 'undefined' || this.appName === null) {
        this._apiService.deleteHeader('X-LGAppName');
      } else {
        this._apiService.addHeader('X-LGAppName', this.appName);
      }
    }
  }

  addHeader(key: string, value: string) {
    this._apiService.addHeader(key, value);
  }

  deleteHeader(key: string) {
    this._apiService.deleteHeader(key);
  }

  async uploadFile<T>(urlPath: string, file: File, onprogress: onProgressCallback, appName: string | null = null): Promise<T | void> {
    const onprogressHandler = (e: ProgressEvent, xhr: XMLHttpRequest) => {
      onprogress(e, xhr);
      this.dispatchEvent(new CustomEvent<UploadProgressEvent>('upload-file-progress', { detail: { event: e, request: xhr } }));
    };
    return this._apiService.uploadFile<T>(urlPath, file, onprogressHandler, appName);
  }

  async postAsync<T>(urlPath: string, body: unknown | ODataDto = {}, appName: string | null = null): Promise<T | null> {
    return this._apiService.postAsync<T>(urlPath, body, appName);
  }

  async getAsync<T extends ODataDto>(urlPath: string, appName: string | null = null): Promise<GetResult<T>> {
    return this._apiService.getAsync<T>(urlPath, appName);
  }

  async patchAsync(urlPath: string, body: unknown | ODataDto, appName: string | null = null): Promise<void> {
    return this._apiService.patchAsync(urlPath, body, appName);
  }

  async patchReturnDtoAsync<T>(urlPath: string, body: unknown | ODataDto, appName: string | null = null): Promise<T> {
    return this._apiService.patchReturnDtoAsync<T>(urlPath, body, appName);
  }

  async deleteAsync(urlPath: string, appName: string | null = null): Promise<void> {
    return this._apiService.deleteAsync(urlPath, appName);
  }
}
