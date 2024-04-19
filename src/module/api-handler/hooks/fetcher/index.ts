import { useEffect, useState } from "react";
import { cachingMiddleware } from "@module/api-handler/config/fetcher/middleware/caching";

export interface FetchProps<RESPONSE> {
  fetcher: () => Promise<RESPONSE>;
  key: string;
  enabled?: boolean;
  readFromCache?: boolean;
}

export const useFetch = <RESPONSE>(props: FetchProps<RESPONSE>) => {

  const { enabled, key, fetcher, readFromCache } = props;

  const [data, setData] = useState<RESPONSE | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(readFromCache ?? true);
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

    if ((readFromCache ?? true)) {
      console.log("cachingMiddleware.getCache(key)", cachingMiddleware.getCache(key));
      const cacheData = cachingMiddleware.getCache(key);
      if (cacheData !== undefined) {
        updateData(JSON.parse(cacheData));
        return
      }
    }

    const data = await fetcher();
    updateData(data, true);
  };

  return {
    data,
    loading,
    refetch: () => fetchData(false)
  };

};