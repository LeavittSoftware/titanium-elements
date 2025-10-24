import { isDevelopment } from '../../titanium/helpers/is-development';
import { BearerTokenProvider } from './bearer-token-provider';
import { BlobResponse } from './blob-response';
import { HttpError } from './HttpError';
import { ODataDto } from './odata-dto';
import { ODataResponse } from './odata-response';
import { HTTPStatusCodes } from './status-codes';

export type onProgressCallback = (event: ProgressEvent, request: XMLHttpRequest) => void;
export type ApiServiceOptions = { appNameHeaderKey: string };
export type ResponseTypeReturnMap<T> = {
  json: ODataResponse<T>;
  blob: BlobResponse;
};

export default class ApiService {
  constructor(tokenProvider: BearerTokenProvider, options?: ApiServiceOptions) {
    this.#tokenProvider = tokenProvider;
    this.addHeader('Content-Type', 'application/json');

    this.#appNameHeaderKey = options?.appNameHeaderKey ? options?.appNameHeaderKey : 'X-LGAppName';
    this.addHeader(this.#appNameHeaderKey, 'General');
  }

  headers = {};
  baseUrl: string = 'https://api2.leavitt.com/';

  #tokenProvider: BearerTokenProvider;
  #appNameHeaderKey: string;

  addHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  deleteHeader(key: string) {
    delete this.headers[key];
  }

  #getFullUri(urlPath: string) {
    if (this.baseUrl?.endsWith('/') && urlPath?.startsWith('/') && isDevelopment) {
      alert(`API Service Warning: Malformed url, double slashes present. \r\n\r\n${this.baseUrl}${urlPath}`);
    }

    return `${this.baseUrl}${urlPath}`;
  }

  async uploadFile<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    file: File,
    onprogress: onProgressCallback,
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    try {
      if (options?.abortController?.signal && options?.abortController.signal.aborted) {
        throw new AbortError();
      }
      const DONE_STATE = 4;

      if (!file || !file.name) {
        throw new Error('ArgumentException: Invalid file passed to uploadFile.');
      }

      const xhr = new XMLHttpRequest();

      xhr.onabort = function () {
        throw new AbortError();
      };

      if (options?.abortController?.signal) {
        options?.abortController.signal.addEventListener('abort', () => xhr.abort());

        xhr.onreadystatechange = function () {
          if (xhr.readyState === DONE_STATE) {
            options?.abortController?.signal.removeEventListener('abort', () => xhr.abort());
          }
        };
      }

      xhr.upload.addEventListener('progress', (e) => {
        onprogress(e, xhr);
      });
      xhr.open('POST', this.#getFullUri(urlPath), true);

      const headers = { ...this.headers };
      const token = await this.#tokenProvider._getBearerTokenAsync();
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
      return new Promise((resolve, reject) => {
        xhr.addEventListener(
          'loadend',
          () => {
            try {
              const response = { text: () => xhr.response, status: xhr.status } as Response;

              if (options?.responseType === 'blob') {
                const blobResponse = this.#parseBlob(response, 'UPLOAD', urlPath) as unknown as R extends 'blob' ? BlobResponse : ODataResponse<T>;
                return resolve(blobResponse);
              } else {
                const jsonResponse = this.#parseJson(response, 'UPLOAD', urlPath) as unknown as R extends 'blob' ? BlobResponse : ODataResponse<T>;
                return resolve(jsonResponse);
              }

              // const result = this.#parseJson<T>(response, 'UPLOAD', urlPath);
              //return resolve(result);
            } catch (error) {
              return reject(error);
            }
          },
          false
        );
        xhr.send(file);
      });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'UPLOAD', urlPath));
    }
  }

  async postAsync<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    body: unknown | ODataDto = {},
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    if (options?.sendAsFormData) {
      delete headers['Content-Type'];
    }

    const token = await this.#tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(this.#getFullUri(urlPath), {
        method: 'POST',
        body: options?.sendAsFormData ? this.#objectToFormData(body) : JSON.stringify(body),
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'POST', urlPath));
    }

    if (options?.responseType === 'blob') {
      return (await this.#parseBlob(response, 'POST', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    } else {
      return (await this.#parseJson<T>(response, 'POST', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    }
  }

  async patchAsync<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    body: unknown | ODataDto,
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    const token = await this.#tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(this.#getFullUri(urlPath), {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'PATCH', urlPath));
    }

    if (options?.responseType === 'blob') {
      return (await this.#parseBlob(response, 'PATCH', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    } else {
      return (await this.#parseJson<T>(response, 'PATCH', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    }
  }

  async patchReturnDtoAsync<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    body: unknown | ODataDto,
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    const token = await this.#tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(this.#getFullUri(urlPath), {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: { ...headers, Prefer: 'return=representation' },
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'PATCH', urlPath));
    }

    if (options?.responseType === 'blob') {
      return (await this.#parseBlob(response, 'PATCH', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    } else {
      return (await this.#parseJson<T>(response, 'PATCH', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    }
  }

  async deleteAsync<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    const headers = { ...this.headers };
    const token = await this.#tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(this.#getFullUri(urlPath), { method: 'DELETE', headers: headers, signal: options?.abortController?.signal });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'DELETE', urlPath));
    }

    if (options?.responseType === 'blob') {
      return (await this.#parseBlob(response, 'DELETE', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    } else {
      return (await this.#parseJson<T>(response, 'DELETE', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    }
  }

  async getAsync<T, R extends keyof ResponseTypeReturnMap<T> = 'json'>(
    urlPath: string,
    options?: { abortController?: AbortController; sendAsFormData?: boolean; responseType?: R }
  ): Promise<R extends 'blob' ? BlobResponse : ODataResponse<T>> {
    const headers = { ...this.headers };
    const token = await this.#tokenProvider._getBearerTokenAsync();
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response: Response;
    try {
      response = await fetch(this.#getFullUri(urlPath), {
        method: 'GET',
        headers: headers,
        signal: options?.abortController?.signal,
      });
    } catch (error) {
      return Promise.reject(this.#rewriteFetchErrors(error, 'GET', urlPath));
    }

    if (options?.responseType === 'blob') {
      return (await this.#parseBlob(response, 'GET', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    } else {
      return (await this.#parseJson<T>(response, 'GET', urlPath)) as R extends 'blob' ? BlobResponse : ODataResponse<T>;
    }
  }

  #distinct<T>(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index;
  }

  public async aggregateResponses<T>(apiCalls: Array<() => Promise<ODataResponse<T> | void>>): Promise<void> {
    const errorMessageToCount: Map<string, number> = new Map();
    const httpErrors: HttpError[] = [];

    const requests = apiCalls.map(async (call) => {
      try {
        await call();
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
          .map((o) => o.action)
          .filter(this.#distinct)
          .join(', '),
        message: `${httpErrors.length} of ${apiCalls.length} actions failed`,
        detail: Array.from(errorMessageToCount.keys())
          .map((o) => `${errorMessageToCount.get(o)} error(s):  ${o}`)
          .join('\n'),
        baseUrl: httpErrors
          .map((o) => o.baseUrl)
          .filter(this.#distinct)
          .join(', '),
        path: httpErrors
          .map((o) => o.path)
          .filter(this.#distinct)
          .join(', '),
      };
      return Promise.reject(newError);
    }
    return;
  }

  #rewriteFetchErrors(error: { name: string; message: string } | AbortError, action: string, urlPath: string, statusCode: number | undefined = undefined) {
    const message = error?.message?.includes('Failed to fetch')
      ? 'Network error. Check your connection and try again.'
      : error?.name === 'AbortError'
        ? 'Abort error. Request has been aborted.'
        : error?.message || error;

    const httpError: HttpError = {
      type: 'HttpError',
      statusCode: statusCode,
      baseUrl: this.baseUrl,
      message: message as string,
      action: action,
      path: urlPath,
    };

    return httpError;
  }

  async #parseBlob(response: Response, action: string, urlPath: string) {
    try {
      if (response.status === 0 || (response.status >= 400 && response.status <= 600)) {
        const text = await response.text();
        const json = text.length ? JSON.parse(text) : {};

        const message =
          json?.error?.message ||
          (json.error && typeof json.error === 'string' ? json.error : undefined) ||
          json?.value ||
          HTTPStatusCodes.get(response.status) ||
          'unknown';

        if (json?.details) {
          console.warn(json.details);
        }

        const httpError: HttpError = {
          type: 'HttpError',
          statusCode: response.status,
          baseUrl: this.baseUrl,
          message: message,
          detail: json?.details || json?.error_description,
          raw: json,
          action: action,
          path: urlPath,
        };

        return Promise.reject(httpError);
      } else {
        const blob = await response.blob();
        return Promise.resolve(new BlobResponse(response, blob));
      }
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }
  }

  async #parseJson<T>(response: Response, action: string, urlPath: string) {
    const text = await response.text();
    let json;
    try {
      json = text.length ? JSON.parse(text) : {};

      if (response.status === 0 || (response.status >= 400 && response.status <= 600)) {
        const message =
          json?.error?.message ||
          (json.error && typeof json.error === 'string' ? json.error : undefined) ||
          json?.value ||
          HTTPStatusCodes.get(response.status) ||
          'unknown';

        if (json?.details) {
          console.warn(json.details);
        }

        const httpError: HttpError = {
          type: 'HttpError',
          statusCode: response.status,
          baseUrl: this.baseUrl,
          message: message,
          detail: json?.details || json?.error_description,
          raw: json,
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

  #objectToFormData(obj, form, namespace) {
    const fd = form || new FormData();
    let formKey;
    for (const property in obj) {
        if (Object.hasOwn(obj, property)) {
            if (typeof obj[property] === 'undefined') {
                continue;
            }
            if (namespace) {
                if (obj instanceof Array && obj[property] instanceof File) {
                  // don't include array notation in FormData keys for Files in arrays
                    formKey = namespace;
                }
                else if (obj instanceof Array) {
                    formKey = namespace + '[' + property + ']';
                }
                else {
                    formKey = namespace + '.' + property;
                }
            }
            else {
                formKey = property;
            }
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                this.#objectToFormData(obj[property], fd, formKey);
            }
            else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
  }
}

class AbortError extends Error {
  name = 'AbortError';
  message = 'Aborted';
}
