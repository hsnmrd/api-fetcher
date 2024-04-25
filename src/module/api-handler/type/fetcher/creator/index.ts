import { Fetcher } from "@module/api-handler/type/fetcher";

export interface FetchCreatorModel<RESPONSE> {
  fetcher: Fetcher<RESPONSE>;
  key: string;
}
