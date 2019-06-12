import { BearerTokenProvider } from './bearer-token-provider';
import { ODataDto } from './odata-dto';
import { ODataResponse } from './odata-response';

export type onProgressCallback = (event: ProgressEvent, request: XMLHttpRequest) => void;

export default class ApiService {
  constructor(tokenProvider: BearerTokenProvider) {
    this._tokenProvider = tokenProvider;
    this.addHeader('Content-Type', 'application/json');
    this.addHeader('X-LGAppName', 'General');
  }

  headers = {};
  baseUrl: string = 'https://api2.leavitt.com/';

  private _tokenProvider: BearerTokenProvider;

  addHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  deleteHeader(key: string) {
    delete this.headers[key];
  }

  async uploadFile<T>(urlPath: string, file: File, onprogress: onProgressCallback, appName: string | null = null): Promise<ODataResponse<T>> {
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
        headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;
        headers['X-LGAttachmentName'] = file.name;

        if (appName !== null) {
          //appName set as a parameter has more specificity and should win
          headers['X-LGAppName'] = appName;
        }

        for (const header in headers) {
          // A peciliarity of XMLHttpRequest is that one can’t undo setRequestHeader.
          // Once the header is set, it’s set. Additional calls add information to the header, don’t overwrite it.
          // Because of this, we aggregate headers into the headers object rather than calling setRequestHeader multiple times.
          xhr.setRequestHeader(header, headers[header]);
        }

        xhr.addEventListener(
          'loadend',
          () => {
            if (xhr.status === 204) {
              return resolve(new ODataResponse<T>(xhr.response, {}));
            }

            if (xhr.status === 404) {
              return reject('404: Endpoint not found.');
            }

            let json;
            try {
              json = JSON.parse(xhr.response);
            } catch (error) {
              return reject(`The server sent back invalid JSON. ${error}`);
            }

            if (json.error != null) {
              return reject(json.error.message);
            }

            if (xhr.status === 201 || xhr.status === 200) {
              return resolve(new ODataResponse<T>(xhr.response, json));
            } else {
              return reject('Request error, please try again later.');
            }
          },
          false
        );
        xhr.send(file);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async postAsync<T>(urlPath: string, body: unknown | ODataDto = {}, appName: string | null = null): Promise<ODataResponse<T>> {
    // Add in the odata model info if it not already on the object

    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };

    if (appName !== null) {
      headers['X-LGAppName'] = appName;
    }
    headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'POST', body: JSON.stringify(body), headers: headers });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 204) {
      return Promise.resolve(new ODataResponse<T>(response, {}));
    }

    let json;
    try {
      json = await response.json();
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }

    if (json.error != null) {
      return Promise.reject(json.error.message);
    }

    if (response.status === 201 || response.status === 200) {
      return Promise.resolve(new ODataResponse<T>(response, json));
    } else {
      return Promise.reject('Request error, please try again later.');
    }
  }

  async patchAsync(urlPath: string, body: unknown | ODataDto, appName: string | null = null): Promise<void> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    if (appName !== null) {
      headers['X-LGAppName'] = appName;
    }
    headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'PATCH', body: JSON.stringify(body), headers: headers });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 204) {
      return Promise.resolve();
    }

    let json;
    try {
      json = await response.json();

      if (json.error != null) {
        return Promise.reject(json.error.message);
      }

      return Promise.reject('Request error, please try again later.');
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }
  }

  async patchReturnDtoAsync<T>(urlPath: string, body: unknown | ODataDto, appName: string | null = null): Promise<ODataResponse<T>> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    const headers = { ...this.headers };
    if (appName !== null) {
      headers['X-LGAppName'] = appName;
    }
    headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: { ...this.headers, Prefer: 'return=representation' },
      });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    let json;
    try {
      json = await response.json();

      if (json.error != null) {
        return Promise.reject(json.error.message);
      }

      if (response.status === 200) {
        return Promise.resolve(new ODataResponse<T>(response, json));
      } else {
        return Promise.reject('Request error, please try again later.');
      }
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }
  }

  async deleteAsync<T>(urlPath: string, appName: string | null = null): Promise<ODataResponse<T>> {
    const headers = { ...this.headers };
    if (appName !== null) {
      headers['X-LGAppName'] = appName;
    }
    headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'DELETE', headers: headers });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 204) {
      return Promise.resolve(new ODataResponse<T>(response, {}));
    }

    if (response.status === 404) {
      return Promise.reject('404: Endpoint not found.');
    }

    let json;
    try {
      json = await response.json();
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }

    if (json.error != null) {
      return Promise.reject(json.error.message);
    }

    if (response.status === 201) {
      return Promise.resolve(new ODataResponse<T>(response, json));
    } else {
      return Promise.reject('Request error, please try again later.');
    }
  }

  async getAsync<T>(urlPath: string, appName: string | null = null): Promise<ODataResponse<T>> {
    const headers = { ...this.headers };
    if (appName !== null) {
      headers['X-LGAppName'] = appName;
    }
    headers['Authorization'] = `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`;

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'GET',
        headers: headers,
      });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 404) {
      return Promise.reject(`404: Endpoint not found.`);
    }

    const text = await response.text();
    let json;
    try {
      json = text.length ? JSON.parse(text) : {};
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }

    if (json.error) {
      return Promise.reject(json.error.message);
    }

    return Promise.resolve(new ODataResponse<T>(response, json));
  }
}
