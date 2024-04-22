import { Api } from "@/module/api-handler/config/fetcher";
import { ProductModel } from "@api/products/type/product-model";
import { FetchCreator } from "@module/api-handler/hooks/fetcher/creator";

class ProductsApi extends Api {

  getById = <RESPONSE = ProductModel>(productId: string | undefined) => {
    return new FetchCreator(
      this.get<RESPONSE>(this.baseUrl + productId),
      this.baseUrl + productId
    );
  }

  getAll = <RESPONSE = Array<ProductModel>>() => new FetchCreator(
    this.get<RESPONSE>(this.baseUrl),
    this.baseUrl
  )

}

export const apiProduct = new ProductsApi(process.env.NEXT_PUBLIC_API_DOMAIN + "/products/");