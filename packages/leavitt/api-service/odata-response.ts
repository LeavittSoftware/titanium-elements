export class ODataResponse<T> {
  static #getMetadata(json): Map<string, unknown> {
    const metadata = new Map<string, unknown>();
    Object.keys(json)
      .filter(key => key.indexOf('@odata') === 0)
      .forEach(key => metadata.set(key.replace('@odata.', ''), json[key]));
    return metadata;
  }

  #getEntity<T>(json): T {
    if (json.value !== null && typeof json.value !== 'undefined' && !Array.isArray(json.value)) {
      return json.value as T;
    }

    return json as T;
  }

  static #getEntities<T>(json): T[] {
    if (Array.isArray(json.value)) {
      return json.value as T[];
    }
    return [];
  }

  public get odataCount(): number {
    if (this.metadata.has('count')) {
      return this.metadata.get('count') as number;
    }
    return 0;
  }

  count(): number {
    return this.entities.length;
  }

  firstOrDefault(): T | null {
    if (this.count() > 0) {
      return this.entities[0];
    }
    return null;
  }

  toList(): Array<T> {
    return this.entities;
  }

  public readonly status: number;
  public readonly headers: Headers;
  public readonly metadata: Map<string, unknown>;
  public readonly entity: T | null;
  public readonly entities: T[];

  constructor(response: Response, json) {
    this.status = response.status;
    this.headers = response.headers;
    this.metadata = ODataResponse.#getMetadata(json);
    this.entities = ODataResponse.#getEntities(json);
    this.entity = this.entities.length === 0 ? this.#getEntity(json) : null;
  }

  public get containsMultipleEntities(): boolean {
    return this.entities.length > 0;
  }
}
