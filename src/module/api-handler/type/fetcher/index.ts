import { FetcherState } from "@module/api-handler/type/fetch-state";

export type Fetcher<RESPONSE> = (
  options?: RequestInit,
) => Promise<FetcherState<RESPONSE> | undefined>;
