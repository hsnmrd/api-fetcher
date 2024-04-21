import { ApiConfiguration } from "@module/api-handler/config/fetcher/config";
import { errorHandling } from "@module/api-handler/config/fetcher/middleware/error-handling";
import { FetcherState } from "@module/api-handler/hooks/fetcher";

export class Api extends ApiConfiguration {

  private request = async <RESPONSE_DATA, >(url: string, options?: RequestInit): Promise<FetcherState<RESPONSE_DATA> | undefined> => {
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      const res = await fetch(url, { ...options, headers: this.headers, signal: signal });
      if (!res.ok) throw Error(res.statusText);
      
      return {
        response: (await res.json()) as RESPONSE_DATA,
        controller: controller
      }

    } catch (error: any) {
      errorHandling(error);
    }
  };

  get = <RESPONSE_DATA>(url: string, options?: RequestInit) => () =>
    this.request<RESPONSE_DATA>(url, options);

  // todo: handler other request types

}