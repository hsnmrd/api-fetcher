export class ApiConfiguration {
  protected baseUrl: string;
  protected headers: HeadersInit | undefined;

  constructor(baseUrl: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
}