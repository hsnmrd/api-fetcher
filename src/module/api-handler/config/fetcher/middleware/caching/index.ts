class CachingMiddleware {
  cache: Record<string, string>;

  private static instance: CachingMiddleware;

  public static getInstance(): CachingMiddleware {
    if (!CachingMiddleware.instance) {
      CachingMiddleware.instance = new CachingMiddleware({});
    }

    return CachingMiddleware.instance;
  }

  constructor(cache: Record<string, string>) {
    this.cache = cache;
  }

  getCache = (key: string): string | undefined => {
    return this.cache?.[key];
  };

  setCache = (key: string, value: string) => {
    if (this.cache?.[key] === undefined) {
      this.cache = { ...this.cache, [key]: value };
    } else {
      this.cache[key] = value;
    }
  };

  deleteCache = (key: string) => {
    if (this.cache?.[key] === undefined) return;
    delete this.cache[key];
  };
}

export const cachingMiddleware = CachingMiddleware.getInstance();
