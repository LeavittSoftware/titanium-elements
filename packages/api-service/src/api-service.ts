import { BearerTokenProvider } from './bearer-token-provider';
import { GetResult } from './get-result';
import { ODataDto } from './odata-dto';

export type onProgressCallback = (event: ProgressEvent, request: XMLHttpRequest) => void;

export default class ApiService {
  constructor(tokenProvider: BearerTokenProvider) {
    this._tokenProvider = tokenProvider;
    this.addHeader('Content-Type', 'application/json');
    this.addHeader('X-LGAppName', 'General');
  }

  private _tokenProvider: BearerTokenProvider;

  addHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  deleteHeader(key: string) {
    delete this.headers[key];
  }

  headers = {};
  baseUrl: string = 'https://api2.leavitt.com/';

  async uploadFile<T>(urlPath: string, file: File, onprogress: onProgressCallback, appName: string | null = null): Promise<T | void> {
    return new Promise(async (resolve, reject) => {
      if (!file || !file.name) {
        reject('ArgumentException: Invlaid file passed to uploadFile.');
      }

      try {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (e) => {
          onprogress(e, xhr);
        });
        xhr.open('POST', `${this.baseUrl}${urlPath}`, true);
        xhr.setRequestHeader('Authorization', `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`);
        xhr.setRequestHeader('X-LGAttachmentName', file.name);

        if (appName !== null) {
          xhr.setRequestHeader('X-LGAppName', appName);
        }

        xhr.addEventListener(
          'loadend',
          () => {
            if (xhr.status === 204) {
              return resolve();
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
              return resolve(json);
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

  async postAsync<T>(urlPath: string, body: unknown | ODataDto = {}, appName: string | null = null): Promise<T | null> {
    // Add in the odata model info if it not already on the object

    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }

    if (appName !== null) {
      this.addHeader('X-LGAppName', appName);
    }

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'POST', body: JSON.stringify(body), headers: this.headers });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 204) {
      return Promise.resolve(null);
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
      return Promise.resolve(json);
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
    if (appName !== null) {
      this.addHeader('X-LGAppName', appName);
    }

    this.addHeader('Authorization', `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`);

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'PATCH', body: JSON.stringify(body), headers: this.headers });
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

  async patchReturnDtoAsync<T>(urlPath: string, body: unknown | ODataDto, appName: string | null = null): Promise<T> {
    // Add in the odata model info if it not already on the object
    if (body instanceof ODataDto && body._odataInfo && !body['@odata.type']) {
      if (body._odataInfo.type) {
        body['@odata.type'] = body._odataInfo.type;
      }
      delete body._odataInfo;
    }
    if (appName !== null) {
      this.addHeader('X-LGAppName', appName);
    }

    this.addHeader('Authorization', `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`);

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
        return Promise.resolve(json);
      } else {
        return Promise.reject('Request error, please try again later.');
      }
    } catch (error) {
      return Promise.reject(`The server sent back invalid JSON. ${error}`);
    }
  }

  async deleteAsync(urlPath: string, appName: string | null = null): Promise<void> {
    if (appName !== null) {
      this.addHeader('X-LGAppName', appName);
    }

    this.addHeader('Authorization', `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`);

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, { method: 'DELETE', headers: this.headers });
    } catch (error) {
      if (error.message != null && error.message.indexOf('Failed to fetch') !== -1)
        return Promise.reject('Network error. Check your connection and try again.');

      return Promise.reject(error);
    }

    if (response.status === 204) {
      return Promise.resolve();
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
      return Promise.resolve(json);
    } else {
      return Promise.reject('Request error, please try again later.');
    }
  }

  async getAsync<T extends ODataDto>(urlPath: string, appName: string | null = null): Promise<GetResult<T>> {
    if (appName !== null) {
      this.addHeader('X-LGAppName', appName);
    }

    this.addHeader('Authorization', `Bearer ${await this._tokenProvider._getBearerTokenAsync()}`);

    let response;
    try {
      response = await fetch(`${this.baseUrl}${urlPath}`, {
        method: 'GET',
        headers: this.headers,
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

    return Promise.resolve(new GetResult<T>(json));
  }
}
