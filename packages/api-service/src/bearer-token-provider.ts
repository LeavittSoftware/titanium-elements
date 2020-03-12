export interface BearerTokenProvider {
  _getBearerTokenAsync(): Promise<string | null>;
}
