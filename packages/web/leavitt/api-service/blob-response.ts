export class BlobResponse {
  public readonly status: number;
  public readonly headers: Headers;
  public readonly metadata: Map<string, unknown>;
  public readonly blob: Blob;

  constructor(response: Response, blob: Blob) {
    this.status = response.status;
    this.headers = response.headers;
    this.blob = blob;
  }
}
