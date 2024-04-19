import { ApiConfiguration } from "@module/api-handler/config/fetcher/config";
import { errorHandling } from "@module/api-handler/config/fetcher/middleware/error-handling";

export class Api extends ApiConfiguration {

  private request = async <RESPONSE_DATA, >(url: string, options?: RequestInit) => {
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      // request to server
      const res = await fetch(url, { ...options, headers: this.headers, signal: signal });
      if (!res.ok) throw Error(res.statusText);

      return (await res.json()) as RESPONSE_DATA;

    } catch (error: any) {
      errorHandling(error);
    }
  };

  get = <RESPONSE_DATA>(url: string, options?: RequestInit) => () =>
    this.request<RESPONSE_DATA>(url, options);

  // todo: handler other request types

}