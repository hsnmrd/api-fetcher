"use client";

import { ReactElement, useLayoutEffect } from "react";
import { cachingMiddleware } from "@module/api-handler/config/fetcher/middleware/caching";
import { FetcherState } from "@module/api-handler/type/fetch-state";

interface FetchProviderProps {
  children: ReactElement;
  hydrateData: Array<Pick<FetcherState<any>, "key" | "response"> | undefined>;
}

export const FetchProvider = (props: FetchProviderProps) => {

  const { hydrateData, children } = props;

  useLayoutEffect(() => {
    hydrateData?.forEach(hydrateDataItem => {
      if (!hydrateDataItem?.key) return;
      cachingMiddleware.setCache(hydrateDataItem.key, JSON.stringify(hydrateDataItem.response));
    });
  }, [hydrateData]);

  return <>{children}</>;
};
