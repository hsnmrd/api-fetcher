import { FetchProps } from "@module/api-handler/hooks/fetcher";

export type FetcherModel<RESPONSE> = Pick<FetchProps<RESPONSE>, "fetcher" | "key">

export class FetchCreator<RESPONSE> implements FetcherModel<RESPONSE> {
  fetcher: () => Promise<RESPONSE>;
  key: string;

  constructor(fetcher: () => Promise<RESPONSE>, key: string) {
    this.fetcher = fetcher;
    this.key = key;
  }

}