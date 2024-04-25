import { useEffect, useRef, useState } from "react";
import { cachingMiddleware } from "@module/api-handler/config/fetcher/middleware/caching";
import { FetchCreatorModel } from "@module/api-handler/type/fetcher/creator";

export interface FetchProps<RESPONSE> extends FetchCreatorModel<RESPONSE> {
  enabled?: boolean;
  readFromCache?: boolean;
  options?: RequestInit;
}

export const useFetch = <RESPONSE>(props: FetchProps<RESPONSE>) => {
  const { enabled, key, fetcher, readFromCache, options } = props;

  const [data, setData] = useState<RESPONSE | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const abortController = useRef<AbortController | undefined>(undefined);

  useEffect(() => {
    fetchData(readFromCache ?? true);
    return () => {
      abortController?.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateData = (data: RESPONSE | undefined, updateCache?: boolean) => {
    if (updateCache ?? false) {
      cachingMiddleware.setCache(key, JSON.stringify(data));
    }
    setData(data);
    setLoading(false);
  };

  const fetchData = async (readFromCache: boolean) => {
    if (!(enabled ?? true)) return;
    setLoading(true);

    if (readFromCache ?? true) {
      const cacheData = cachingMiddleware.getCache(key);
      if (cacheData !== undefined) {
        updateData(JSON.parse(cacheData));
        return;
      }
    }

    const data = await fetcher(options);
    abortController.current = data?.controller;
    updateData(data?.response, true);
  };

  return {
    data,
    loading,
    refetch: () => fetchData(false),
  };
};
