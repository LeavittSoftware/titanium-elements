export interface HttpError {
  type: 'HttpError';
  statusCode?: number;
  message: string;
  path: string;
  baseUrl: string;
  action: string;
  detail?: string;
  raw?: unknown;
}
