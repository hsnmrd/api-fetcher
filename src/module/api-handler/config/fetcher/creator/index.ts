import { Fetcher } from "@module/api-handler/type/fetcher";
import { FetchCreatorModel } from "@module/api-handler/type/fetcher/creator";

export class FetchCreator<RESPONSE> implements FetchCreatorModel<RESPONSE> {
  fetcher: Fetcher<RESPONSE>;
  key: string;

  constructor(fetcher: (key: string) => Fetcher<RESPONSE>, key: string) {
    this.fetcher = fetcher(key);
    this.key = key;
  }
}
