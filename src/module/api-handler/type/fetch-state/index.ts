export type FetcherState<RESPONSE> = {
  response: RESPONSE;
  controller: AbortController;
  key: string | undefined;
};
