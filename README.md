markdown
# Project Overview

This project aims to retrieve server-side information with caching capabilities utilizing the fetch mechanism. Below are the key components of the project's structure:

## Api Class

The `Api` class serves as the primary entity responsible for sending requests. It utilizes the `fetch` function for communication with the server.

## Caching Middleware

The `CachingMiddleware` class acts as middleware for caching data. It provides functionalities for caching, retrieving, updating, and deleting cached data.

## Fetch Hook

A custom hook named `useFetch` is implemented to facilitate service consumption and caching functionality. It enables efficient data fetching while utilizing the caching mechanism for improved performance.


markdown
## Example Usage Tips

- **Overriding Services:** To override services of a specific module, extend the `Api` class and define custom methods for fetching data. For example:

```typescript
import {Api} from "@/module/api-handler/config/fetcher";
import {FetchCreator} from "@module/api-handler/hooks/fetcher/creator";
import {ProductModel} from "@api/products/type/product-model";

class ProductsApi extends Api {

    // Custom method to fetch all products
    getProducts = <RESPONSE = Array<ProductModel>>() => new FetchCreator(
        this.get<RESPONSE>(this.baseUrl),
        this.baseUrl
    );

    // Custom method to fetch a product by ID
    getProduct = <RESPONSE = ProductModel>(productId: string) => new FetchCreator(
        this.get<RESPONSE>(this.baseUrl + productId),
        this.baseUrl + productId
    );

}

// Create an instance of ProductsApi with the appropriate base URL
export const apiProduct = new ProductsApi(process.env.NEXT_PUBLIC_API_DOMAIN + "/products/");
```

In the above example:

- We define custom methods `getProduct` and `getProducts` within the `ProductsApi` class to fetch a single product by ID and fetch all products, respectively.
- These methods utilize the `FetchCreator` class to create fetcher instances, specifying the fetcher function and a unique key for caching purposes.
- Finally, we create an instance of `ProductsApi` named `apiProduct`, passing the appropriate base URL derived from the environment variable.


This addition provides a practical example of how to define custom methods within the `ProductsApi` class and instantiate it for usage. Let me know if you need further clarification!

- **Using Custom Hooks:** Utilize custom hooks like `useFetch` to consume services in client-side components. For instance:

```typescript
import { useFetch } from "@module/api-handler/hooks/fetcher";
import { apiProduct } from "@/module/api-handler/products";

const ProductComponent = () => {
  const { data, loading, refetch } = useFetch(apiProduct.getProduct("1"));

  // Your component logic here
};
```

- **Handling Base URL and Headers:** The `apiProduct` constant is created as an instance of the `ProductsApi` class with a base URL derived from the environment variable. This approach centralizes the handling of base URLs and headers for every module, making it easier to use the fetcher with micro-services. It particularly facilitates integration with micro-services having multiple base URLs.
