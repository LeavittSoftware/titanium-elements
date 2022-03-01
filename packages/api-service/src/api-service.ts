import { BearerTokenProvider } from './bearer-token-provider';
import { HttpError } from './HttpError';
import { ODataDto } from './odata-dto';
import { ODataResponse } from './odata-response';
import { HTTPStatusCodes } from './status-codes';

export type onProgressCallback = (event: ProgressEvent, request: XMLHttpRequest) => void;
export type ApiServiceOptions = { appNameHeaderKey: string };
export type ApiServiceRequestOptions = { abortController: AbortController };
export default class ApiService {
  constructor(tokenProvider: BearerTokenProvider, options?: ApiServiceOptions) {
    this._tokenProvider = tokenProvider;
    this.addHeader('Content-Type', 'application/json');

    this._appNameHeaderKey = options?.appNameHeaderKey ? options?.appNameHeaderKey : 'X-LGAppName';
    this.addHeader(this._appNameHeaderKey, 'General');
  }

  headers = {};
  baseUrl: string = 'https://api2.leavitt.com/';

  private _tokenProvider: BearerTokenProvider;
  private _appNameHeaderKey: string;

  addHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  deleteHeader(key: string) {
    delete this.headers[key];
  }

  async uploadFile<T>(urlPath: string, file: File, onprogress: onProgressCallback): Promise<ODataResponse<T>> {
    return new Promise(async (resolve, reject) => {
      if (!file || !file.name) {
        reject('ArgumentException: Invalid file passed to uploadFile.');
      }

      try {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', e => {
          onprogress(e, xhr);
        });
        xhr.open('POST', `${this.baseUrl}${urlPath}`, true);

        const headers = { ...this.headers };
        const token = await this._tokenProvider._getBearerTokenAsync();
        if (token !== null) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        headers['X-LGAttachmentName'] = file.name;

        for (const header in headers) {
          // A peculiarity of XMLHttpRequest is that one can’t undo setRequestHeader.
          // Once the header is set, it’s set. Additional calls add information to the header, don’t overwrite it.
          // Because of this, we aggregate headers into the headers object rather than calling setRequestHeader multiple times.
          xhr.setRequestHeader(header, headers[header]);
        }

        xhr.addEventListener(
          'loadend',
          () => {
            try {
              const response = { text: () => xhr.response, status: xhr.status } as Response;
              const result = this.parseResponse<T>(response, 'UPLOAD', urlPath);
              return resolve(result);
            } catch (error) {
              return reject(error);
            }
          },
          false
        );
        xhr.send(file);
      } catch (error) {
        return Promise.reject(this.rewriteFetchErrors(error, 'UPLOAD', urlPath));
      }
    });
  }

  async postAsync<T>(urlPath: string, body: unknown | ODataDto = {}, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    // Add in the odata model info if it not already on the object

    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };

    const token = await this._tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.rewriteFetchErrors(error, 'POST', urlPath));
    }

    return await this.parseResponse(response, 'POST', urlPath);
  }

  async patchAsync<T>(urlPath: string, body: unknown | ODataDto, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    const token = await this._tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.rewriteFetchErrors(error, 'PATCH', urlPath));
    }
    return await this.parseResponse(response, 'PATCH', urlPath);
  }

  async patchReturnDtoAsync<T>(urlPath: string, body: unknown | ODataDto, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    const token = await this._tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: { ...headers, Prefer: 'return=representation' },
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.rewriteFetchErrors(error, 'PATCH', urlPath));
    }
    return await this.parseResponse(response, 'PATCH', urlPath);
  }

  async deleteAsync<T>(urlPath: string, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    const headers = { ...this.headers };
    const token = await this._tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'DELETE', headers: headers, signal: options?.abortController?.signal });
    } catch (error) {
      return Promise.reject(this.rewriteFetchErrors(error, 'DELETE', urlPath));
    }

    return await this.parseResponse(response, 'DELETE', urlPath);
  }

  async getAsync<T>(urlPath: string, options: ApiServiceRequestOptions | null = null): Promise<ODataResponse<T>> {
    const headers = { ...this.headers };
    const token = await this._tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'GET',
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.rewriteFetchErrors(error, 'GET', urlPath));
    }

    return await this.parseResponse(response, 'GET', urlPath);
  }

  private distinct<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index;
  }

  public async aggregateResponses<T>(apiCalls: Promise<ODataResponse<T>>[]): Promise<void> {
    const errorMessageToCount: Map<string, number> = new Map();
    const httpErrors: HttpError[] = [];

    const requests = apiCalls.map(async call => {
      try {
        await call;
      } catch (httpError) {
        httpErrors.push(httpError);
        const errorMsg = httpError.message;
        errorMessageToCount.set(errorMsg, (errorMessageToCount.get(errorMsg) ?? 0) + 1);
      }
    });

    await Promise.allSettled(requests);

    if (errorMessageToCount.size > 0) {
      const newError: HttpError = {
        type: 'HttpError',
        action: httpErrors
          .map(o => o.action)
          .filter(this.distinct)
          .join(', '),
        message: `${httpErrors.length} of ${apiCalls.length} actions failed`,
        detail: Array.from(errorMessageToCount.keys())
          .map(o => `${errorMessageToCount.get(o)} error(s):  ${o}`)
          .join('\n'),
        baseUrl: httpErrors
          .map(o => o.baseUrl)
          .filter(this.distinct)
          .join(', '),
        path: httpErrors
          .map(o => o.path)
          .filter(this.distinct)
          .join(', '),
      };
      return Promise.reject(newError);
    }
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private rewriteFetchErrors(error: any, action: string, urlPath: string, statusCode: number | undefined = undefined) {
    const message = error?.message?.includes('Failed to fetch')
      ? 'Network error. Check your connection and try again.'
      : error?.name === 'AbortError'
      ? 'Abort error. Request has been aborted.'
      : error;

    const httpError: HttpError = {
      type: 'HttpError',
      statusCode: statusCode,
      baseUrl: this.baseUrl,
      message: message,
      action: action,
      path: urlPath,
    };

    return httpError;
  }

  private async parseResponse<T>(response: Response, action: string, urlPath: string) {
    const text = await response.text();
    let json;
    try {
      json = text.length ? JSON.parse(text) : {};

      if (response.status >= 400 && response.status <= 600) {
        const message = json?.error?.message || json?.value || HTTPStatusCodes.get(response.status) || 'unknown';

        if (json?.details) {
          console.warn(json.details);
        }

        const httpError: HttpError = {
          type: 'HttpError',
          statusCode: response.status,
          baseUrl: this.baseUrl,
          message: message,
          detail: json?.details,
          action: action,
          path: urlPath,
        };

        return Promise.reject(httpError);
      } else {
        return Promise.resolve(new ODataResponse<T>(response, json));
      }
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }
  }
}
