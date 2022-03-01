import { isDevelopment } from '@leavittsoftware/titanium-helpers/lib/titanium-dev-detection';
import { LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import ApiService, { ApiServiceRequestOptions, onProgressCallback } from './api-service';
import { AuthenticatedTokenProvider } from './authenticated-token-provider';
import { ODataDto } from './odata-dto';
import { ODataResponse } from './odata-response';

export type UploadProgressEvent = { event: ProgressEvent; request: XMLHttpRequest };

/**
 * API service exposed in a custom element.
 *
 * @element api-service
 *
 */
@customElement('api-service')
export default class ApiServiceElement extends LitElement {
  private _apiService: ApiService = new ApiService(new AuthenticatedTokenProvider());

  @property({ type: String }) baseProductionUri: string = 'https://api2.leavitt.com/';

  @property({ type: String }) baseDevUri: string = 'https://devapi2.leavitt.com/';

  private _appName;

  constructor() {
    super();
    this.appName = 'General';
  }

  @property({ type: String, noAccessor: true })
  set appName(value: string) {
    const oldValue = this.appName;
    this._appName = value;
    this._setAppNameHeader(value);
    this.requestUpdate('appName', oldValue);
  }

  get appName() {
    return this._appName;
  }

  firstUpdated() {
    if (this._apiService) {
      this._apiService.baseUrl = isDevelopment ? this.baseDevUri : this.baseProductionUri;
    }
  }

  updated(changedProps) {
    if (changedProps.has('appName') && changedProps.get('appName') !== this.appName) {
      this._setAppNameHeader(this.appName);
    }
  }

  private _setAppNameHeader(value: string) {
    if (value === '' || typeof value === 'undefined' || value === null) {
      this._apiService.deleteHeader('X-LGAppName');
    } else {
      this._apiService.addHeader('X-LGAppName', value);
    }
  }

  addHeader(key: string, value: string) {
    this._apiService.addHeader(key, value);
  }

  deleteHeader(key: string) {
    this._apiService.deleteHeader(key);
  }

  async uploadFile<T>(urlPath: string, file: File, onprogress: onProgressCallback): Promise<ODataResponse<T>> {
    const onprogressHandler = (e: ProgressEvent, xhr: XMLHttpRequest) => {
      onprogress(e, xhr);
      this.dispatchEvent(new CustomEvent<UploadProgressEvent>('upload-file-progress', { detail: { event: e, request: xhr } }));
    };
    return this._apiService.uploadFile<T>(urlPath, file, onprogressHandler);
  }

  async postAsync<T>(urlPath: string, body: unknown | ODataDto = {}, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    return this._apiService.postAsync<T>(urlPath, body, options);
  }

  async getAsync<T>(urlPath: string, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    return this._apiService.getAsync<T>(urlPath, options);
  }

  async patchAsync<T>(urlPath: string, body: unknown | ODataDto, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    return this._apiService.patchAsync(urlPath, body, options);
  }

  async patchReturnDtoAsync<T>(urlPath: string, body: unknown | ODataDto, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    return this._apiService.patchReturnDtoAsync<T>(urlPath, body, options);
  }

  async deleteAsync<T>(urlPath: string, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    return this._apiService.deleteAsync(urlPath, options);
  }
}
